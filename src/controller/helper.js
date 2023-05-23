import convertToBase64 from "../convert";
import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8085/';
export async function verifyFile(values){
    let val = convertToBase64(values);
    // console.log(val);
    const  data  = await axios.post('http://127.0.0.1:8085/detect')
}

export async function upload(credentials){
    try {
        const response = await axios.post("upload",credentials, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            responseType: 'blob'
          });
          console.log(response);
          return Promise.resolve(response);
    } catch (error) {
        return Promise.reject({error : "Failed"});
    }
}