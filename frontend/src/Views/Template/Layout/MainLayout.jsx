import React, { useState, useEffect, useRef } from 'react';

const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "What is the square root of 16?",
    options: ["2", "4", "6", "8"],
    answer: "4",
  },
];

const MainLayout = () => {
  const containerRef = useRef(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3660); // 5 minutes
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if(isFullScreen){
    const timer = setInterval(() => {
    if (document.fullscreenElement) {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }
    else{
      clearInterval(timer);
    }
    }, 1000);
    return () => clearInterval(timer);
  }
  }, [document.fullscreenElement]);

  const handleKeyDown = (event) => {
    switch(event.key){
      case "Escape":
        setToastMessage('Dont press escape key');
        setTimeout(() => setToastMessage(''), 4000); 
        break;

        case "F5":
        setToastMessage('Dont press F5 key to refresh');
        setTimeout(() => setToastMessage(''), 4000); 
        break;

        case "F11":
        setToastMessage('Dont press F11 key to close');
        setTimeout(() => setToastMessage(''), 4000); 
        break;

      default:
        break;
    }
};

  const enterFullScreen = async() => {
    if (containerRef.current) {
      const requestFullScreen = containerRef.current.requestFullscreen ||
                                 containerRef.current.mozRequestFullScreen || // Firefox
                                 containerRef.current.webkitRequestFullscreen || // Chrome, Safari and Opera
                                 containerRef.current.msRequestFullscreen; // IE/Edge
      if (requestFullScreen) {
        requestFullScreen.call(containerRef.current);
        setIsFullScreen(true);
        await navigator.keyboard.lock().then(() => {
                  console.log("Keyboard locked");
                  window.addEventListener('keydown', handleKeyDown);
              });;

              setToastMessage('Entered full-screen mode!');
              setTimeout(() => setToastMessage(''), 4000); 
      }
    
      return () => {
          navigator.keyboard.unlock();
          window.removeEventListener('keydown', handleKeyDown);
      };
  }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handlePrev = () =>{
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setCurrentQuestionIndex((prev) => Math.min(prev - 1, questions.length - 1));
  }

  const handleSubmit = () => {
    alert(`Test completed! Your score is ${score} out of ${questions.length}`);
    // Reset state or redirect as needed
  };

  return (
    <div ref={containerRef} style={{ padding: '20px', backgroundColor: '#282c34', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Aptitude Test</h1>
      <p>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</p>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>{questions[currentQuestionIndex].question}</h2>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name="options"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionSelect(option)}
            />
            {option}
          </div>
        ))}
      </div>
      
      <div>
          <button onClick={handlePrev} className='btn btn-light me-2' disabled={currentQuestionIndex<1}>Previous</button>
          <button onClick={handleNext} className='btn btn-light me-2' disabled={currentQuestionIndex+1 >= questions.length}>Next</button>
          <button onClick={handleSubmit} className='btn btn-light me-2' >Submit</button>

      </div>

      <button onClick={enterFullScreen} style={{ marginTop: '20px' }}>
        Go Fullscreen
      </button>


      <div style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: 'white',
            borderBottom:"yellow",
            color: 'black',
            padding: '10px 20px',
            borderRadius: '5px',
            transition: 'opacity 0.5s',
            opacity: toastMessage ? 1 : 0,
            pointerEvents: toastMessage ? 'auto' : 'none',
        }}>
            {toastMessage}
            <button onClick={()=>setToastMessage('')} style={{ marginLeft: '10px', color: 'black', background: 'none', border: 'none' }}>x</button>
      </div>
    </div>
  );
};

export default MainLayout;























// const MainLayout = () => {

//   // const [enteringFullScreen, setEnteringFullScreen] = useState(false)

//   // useEffect(() => {
//   //   function onKeyup(e) {
//   //     console.log(e.key)
//   //     if (e.key === "Escape" || e.key === "F5" || e.key === "F11") {
//   //       e.preventDefault();
//   //       alert("escape key pressed")
//   //     }
//   //   }
//   //   window.addEventListener('keyup', onKeyup);
//   //   return () => window.removeEventListener('keyup', onKeyup);
//   // }, []);

//   const handle = useFullScreenHandle();
 

//   return (
//     <div className="d-flex flex-wrap w-100 vh-100" id="keyup">
//       <div className="sidebar">
//         <Sidebar />
//       </div>

//       <div className="col">
//         <div>
//           {/* <button onClick={() => {
//             handle.enter();
//             setEnteringFullScreen(true)
//           }}>
//             Enter fullscreen
//           </button> */}


//           {/* <FullScreen handle={handle} >
//             {
//               enteringFullScreen ?
//                 ' Areny fullscreen content he'
//                 :
//                 null
//             }
//           </FullScreen> */}
//         </div>

//       </div>
//     </div>
//   )
// }

// export default MainLayout