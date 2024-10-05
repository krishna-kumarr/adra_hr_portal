import { createSlice } from "@reduxjs/toolkit"

const InterviewSlice = createSlice({
    name: "hr-interview-questions-slice",
    initialState: {
        requestLoading: true,
        requestQuestionsLoading: true,
        questionsData: {},
        questionTypes:[]
    },
    reducers: {
        gettingAllQuestionsRequest(state, action) {
            return {
                ...state,
                requestLoading: true,
                requestQuestionsLoading:true
            }
        },
        gettingAllQuestionsResponese(state, action) {
            return {
                ...state,
                requestLoading: false,
                requestQuestionsLoading:false,
                questionsData: action.payload
            }
        },
        gettingAllQuestionsFailed(state, action) {
            return {
                ...state,
                requestLoading: false,
                requestQuestionsLoading:false,
                error: action.payload
            }
        },


        deleteQuestionsRequest(state, action) {
            return {
                ...state, 
                deletionId: action.payload
            }
        },
        deleteQuestionsResponese(state, action) {
            return {
                ...state,  
                questionsData: action.payload,
                deletionId: null
            }
        },
        deleteQuestionsFailed(state, action) {
            return {
                ...state,
                deletionId: null, 
                error: action.payload
            }
        },

        // clear error 
        clearError(state, action) {
            return {
                ...state,
                error: null
            }
        },
        //
    }
})

const { actions, reducer } = InterviewSlice;

export const {
    gettingAllQuestionsRequest,
    gettingAllQuestionsResponese,
    gettingAllQuestionsFailed,

    deleteQuestionsRequest,
    deleteQuestionsResponese,
    deleteQuestionsFailed,

    clearError
} = actions;

export default reducer;