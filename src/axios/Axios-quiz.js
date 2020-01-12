import axios from 'axios'


export default axios.create({
  baseURL: "https://react-quiz-dec3a.firebaseio.com/"
});