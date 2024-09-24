import React, { useState } from 'react'

const InterviewProcess = () => {

    const [submitted, setSubmitted] = useState(false)

    const [selectedValues, setSelectedValues] = useState({});

    const handleChange = () => {
        console.log('Hii')
    }

    let getListOfQuestions = [
        {
            "Explanation": "The formula for magnetic flux density (B) is defined as the magnetic flux (Φ) passing through unit area (A), hence B = Φ/A.",
            "Question": "What is the formula for magnetic flux density (B)?",
            "Question_no": 1,
            "options": [
                {
                    "answer": true,
                    "id": 1,
                    "option": "B = Φ/A"
                },
                {
                    "answer": false,
                    "id": 2,
                    "option": "B = A/Φ"
                },
                {
                    "answer": false,
                    "id": 3,
                    "option": "B = Φ * A"
                },
                {
                    "answer": false,
                    "id": 4,
                    "option": "B = A + Φ"
                }
            ]
        },
        {
            "Explanation": "The unit of magnetic flux density is Tesla, which is equivalent to Weber/meter.",
            "Question": "What is the unit of magnetic flux density?",
            "Question_no": 2,
            "options": [
                {
                    "answer": false,
                    "id": 5,
                    "option": "Weber/meter"
                },
                {
                    "answer": true,
                    "id": 6,
                    "option": "Tesla"
                },
                {
                    "answer": false,
                    "id": 7,
                    "option": "Newton"
                },
                {
                    "answer": false,
                    "id": 8,
                    "option": "Ampere"
                }
            ]
        },
        {
            "Explanation": "When current flows through a straight wire, the compass needles deflect as tangents to a circle, indicating the circular magnetic field created by the current.",
            "Question": "What happens to the compass needles when current flows through a straight wire?",
            "Question_no": 3,
            "options": [
                {
                    "answer": false,
                    "id": 9,
                    "option": "They point towards the wire"
                },
                {
                    "answer": true,
                    "id": 10,
                    "option": "They deflect as tangents to a circle"
                },
                {
                    "answer": false,
                    "id": 11,
                    "option": "They remain unchanged"
                },
                {
                    "answer": false,
                    "id": 12,
                    "option": "They point away from the wire"
                }
            ]
        },
        {
            "Explanation": "The shape of the magnetic field lines around a straight wire carrying current is circular, as demonstrated by the behavior of compass needles.",
            "Question": "What is the shape of the magnetic field lines around a straight wire carrying current?",
            "Question_no": 4,
            "options": [
                {
                    "answer": false,
                    "id": 13,
                    "option": "Straight lines"
                },
                {
                    "answer": true,
                    "id": 14,
                    "option": "Circular lines"
                },
                {
                    "answer": false,
                    "id": 15,
                    "option": "Elliptical lines"
                },
                {
                    "answer": false,
                    "id": 16,
                    "option": "Random lines"
                }
            ]
        },
        {
            "Explanation": "The right hand thumb rule is used to determine the direction of magnetic field lines around a current-carrying wire, where the thumb points in the direction of current.",
            "Question": "What rule is used to determine the direction of magnetic field lines around a current-carrying wire?",
            "Question_no": 5,
            "options": [
                {
                    "answer": true,
                    "id": 17,
                    "option": "Right hand thumb rule"
                },
                {
                    "answer": false,
                    "id": 18,
                    "option": "Left hand rule"
                },
                {
                    "answer": false,
                    "id": 19,
                    "option": "Fleming's left hand rule"
                },
                {
                    "answer": false,
                    "id": 20,
                    "option": "Ampere's law"
                }
            ]
        },
        {
            "Explanation": "The direction of the magnetic field inside a solenoid is from north to south, similar to that of a bar magnet.",
            "Question": "What is the direction of the magnetic field inside a solenoid?",
            "Question_no": 6,
            "options": [
                {
                    "answer": true,
                    "id": 21,
                    "option": "From north to south"
                },
                {
                    "answer": false,
                    "id": 22,
                    "option": "From south to north"
                },
                {
                    "answer": false,
                    "id": 23,
                    "option": "Circular"
                },
                {
                    "answer": false,
                    "id": 24,
                    "option": "Random"
                }
            ]
        },
    ]



    return (
        <main classNameName="col-xl-12 py-4">
            <div classNameName="container-fluid">
                <div className="container">

                <div className="mb-3">
                    <label for="formFile" className="form-label">Upload csv file only</label>
                    <input className="form-control" type="file" id="formFile" accept='.csv'/>
                </div>
                </div>

                <section className='question container'>
                    {
                        getListOfQuestions.map((data, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className="question-and-options">
                                        <h5 className="card-title brand-color mt-3">
                                            Question {data.Question_no}
                                        </h5>
                                        <p className="card-text question">{data.Question}</p>
                                        <div className="options">
                                            <ol className="list-group list-of-options ">
                                                {data.options.map((option) => {
                                                    return (
                                                        <React.Fragment key={option.Question_no}>
                                                            <label className='py-2 rounded'>
                                                                <li
                                                                    className={
                                                                        submitted
                                                                            ? option.answer
                                                                                ? "list-group-item border bg-custom-success"
                                                                                : (selectedValues[data.Question_no] ===
                                                                                    option.id) !==
                                                                                    option.answer
                                                                                    ? "list-group-item border bg-custom-danger"
                                                                                    : "list-group-item border "
                                                                            : "list-group-item border option-div"
                                                                    }

                                                                >
                                                                    <div className="form-check option-div">
                                                                        {/* <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            name={data.Question_no}
                                                                            id={`option${option.id}`}
                                                                            value={`option${option.option}`}
                                                                            checked={
                                                                                selectedValues[data.Question_no] ===
                                                                                option.id
                                                                            }
                                                                            onChange={() =>
                                                                                handleChange(
                                                                                    data.Question_no,
                                                                                    option.id,
                                                                                    option.answer
                                                                                )
                                                                            }
                                                                            disabled={submitted ? "disabled" : ""}
                                                                        /> */}
                                                                        <label
                                                                            className="form-check-label px-3 option-div"
                                                                            htmlFor={`option${option.id}`}
                                                                        >
                                                                            {option.option}
                                                                        </label>
                                                                    </div>
                                                                </li>
                                                            </label>
                                                        </React.Fragment>
                                                    );
                                                })}
                                            </ol>
                                        </div>

                                        {/* Explanation */}
                                        {submitted ?
                                            <div className="card">
                                                <div className="card-body">
                                                    <p className="card-text italic ">
                                                        <i><u>Explanation</u> : {data.Explanation !== "" ? data.Explanation : "With supporting text below as a natural lead-in to additional content."}</i>
                                                    </p>
                                                </div>
                                            </div> : ""}
                                    </div>
                                </React.Fragment>
                            );
                        })
                    }
                </section>
            </div>
        </main>
    )
}

export default InterviewProcess