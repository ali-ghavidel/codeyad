import axios from "axios";

const JPService =  axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 45000,
    timeoutErrorMessage: "زمان دریافت پاسخ از سرور بیش از 45 ثانیه طول کشیده"
})
export default JPService;