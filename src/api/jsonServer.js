import axios from "axios";

export default axios.create({
 baseURL: 'https://www.instarem.com/api/v1/public/'
});