import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { changeQuestionsType, clearErrors, deleteQuestions, loadQuestions } from '../../Storage/Action/interviewQuestiosAction';
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

const InterviewProcess = () => {
    const interviewSlice = useSelector((state) => state.interviewState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadQuestions)
    }, [])

    useEffect(() => {
        if (interviewSlice.error) {
            toast(interviewSlice.error, {
                position: "top-right",
                type: 'error',
                onOpen: () => { dispatch(clearErrors) }
            })
            return
        }
    }, [interviewSlice.error]);

    const handleDeleteQuestion = (deletion_id, question_type) => {
        dispatch(deleteQuestions(deletion_id, question_type))
    }

    const changeQuestiontypeButton = (type) => {
        dispatch(changeQuestionsType(type, interviewSlice.questionsData.currentQuestionType))
    }

    return (
        <main classNameName="col-xl-12 py-4">
            <div classNameName="container-fluid">
                {/* <div className="container">
                    <div className="mb-5">
                        <label for="formFile" className="form-label">Upload csv file only</label>
                        <input className="form-control" type="file" id="formFile" accept='.csv' />
                    </div>
                </div> */}

                <section className='row py-4 interviewQuestion-height'>
                    <div className="col-4 px-3 h-100">
                        <div className="card h-100">
                            <div className="card-header">
                                <p>Question types</p>
                            </div>
                            <div className="card-body">
                                {
                                    interviewSlice.requestQuestionsLoading ?
                                        null
                                        :
                                        interviewSlice.questionsData.questionsTypes.map((v) => (
                                            <button type="button" className={`btn w-100 mb-2 ${interviewSlice.questionsData.currentQuestionType === v.question_type ? "btn-primary" : "border-secondary"}`} onClick={() => changeQuestiontypeButton(v.question_type)}>
                                                {v.question_type}
                                                <span class="badge text-bg-secondary ms-2">{v.count}</span>
                                            </button>
                                        ))
                                }
                            </div>
                        </div>

                    </div>

                    <div className="question col-8 h-100">
                        <div className="question-scroll">
                            {
                                interviewSlice.requestLoading ?
                                    null
                                    :
                                    interviewSlice.questionsData.questions.map((data, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <div className="question-and-options mt-3 pe-4">
                                                    <div className="card-title row align-items-start">
                                                        <div className="col">
                                                            <h5 className="brand-color ">
                                                                Question {index + 1}
                                                            </h5>
                                                        </div>
                                                        <div className="col-3 col-xl-2 text-end">
                                                            <button type="button" className='btn btn-outline-primary '><MdOutlineEdit className='fs-5' /></button>
                                                            {
                                                                interviewSlice.deletionId && interviewSlice.deletionId === data._id ?
                                                                    <button type="button" className='btn btn-outline-danger ms-2'>
                                                                        <div class="spinner-border" role="status">
                                                                            <span class="visually-hidden">Loading...</span>
                                                                        </div>
                                                                    </button>
                                                                    :
                                                                    <button type="button" className='btn btn-outline-danger ms-2' onClick={() => handleDeleteQuestion(data._id, data.question_type)}>
                                                                        <MdDeleteOutline className='fs-5' />
                                                                    </button>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-12 row align-items-start">
                                                        <div className="col-9 col-lg-10 col-xxl-11">
                                                            <p className="card-text question pt-2">{data.question}</p>
                                                        </div>
                                                    </div>

                                                    <div className="options">
                                                        <ol className="list-group list-of-options ">
                                                            {data.options.map((option) => {
                                                                return (
                                                                    <React.Fragment key={option.Question_no}>
                                                                        <label className='py-2 rounded'>
                                                                            <li className="list-group-item border option-div" >
                                                                                <div className="ps-2">
                                                                                    <label className="form-check-label option-div">
                                                                                        {option}
                                                                                    </label>
                                                                                </div>
                                                                            </li>
                                                                        </label>
                                                                    </React.Fragment>
                                                                );
                                                            })}
                                                        </ol>
                                                    </div>


                                                    <div className="card border-success">
                                                        <div className="card-body">
                                                            <p className="card-text italic ">
                                                                <i><u className='text-success'>Answer</u> : {data.answer}</i>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        );
                                    })
                            }
                        </div>
                    </div>
                </section>
            </div >
        </main >
    )
}

export default InterviewProcess