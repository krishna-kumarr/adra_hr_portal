import axiosInstance from '../../Services/axiosInstance';
import {
    gettingAllQuestionsRequest,
    gettingAllQuestionsResponese,
    gettingAllQuestionsFailed,

    deleteQuestionsRequest,
    deleteQuestionsResponese,
    deleteQuestionsFailed,

    clearError
} from '../Slices/HrSlices/InterviewSlice';


export const loadQuestions = async (dispatch) => {
    try {
        dispatch(gettingAllQuestionsRequest())
        const { data } = await axiosInstance.get("/get_all_questions")
        dispatch(gettingAllQuestionsResponese(data.data))
    } catch (error) {
        dispatch(gettingAllQuestionsFailed(error.response.data.message))
    }
}

export const changeQuestionsType = (quesType) => async (dispatch) => {
    try {
        dispatch(gettingAllQuestionsRequest())
        const { data } = await axiosInstance.post("/get_all_questions", { quesType })
        dispatch(gettingAllQuestionsResponese(data.data))
    } catch (error) {
        dispatch(gettingAllQuestionsFailed(error.response.data.message))
    }
}


export const deleteQuestions = (question_id, quesType) => async (dispatch) => {
    try {
        dispatch(deleteQuestionsRequest(question_id))
        const {data} = await axiosInstance.delete(`/delete_question/${question_id}`, {
            data: { question_type: quesType }
        })
        dispatch(deleteQuestionsResponese(data.data))
    } catch (error) {
        dispatch(deleteQuestionsFailed(error.response.data.message))
    }
}



export const clearErrors = dispatch => {
    dispatch(clearError())
}