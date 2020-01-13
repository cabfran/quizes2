import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
  FETCH_QUIZ_SUCCES
} from "../Actions/actionTypes";

const initialState = {
  quizes: [],
  loading: false,
  error: null,
  results: {}, //{[id]: 'success'}
  isFinished: false,
  activeQuestion: 0,
  answerState: null, //{[id]:'success' 'error'}
  quiz: null,
  lading: true
};

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUIZES_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_QUIZES_SUCCESS:
      return {
        ...state,
        loading: false,
        quizes: action.quizes
      };
    case FETCH_QUIZES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case FETCH_QUIZ_SUCCES:
      return {
        ...state,
        loading: false,
        quiz: action.quiz
      };
    default:
      return state;
  }
}
