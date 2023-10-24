import { apiRequest } from ".";
import { encryptPayload } from "./encrypt";

// const BASE_URL = "http://localhost:3022/api"
const BASE_URL = "https://in.hussain.co.in/api"
// const BASE_URL = "https://live-backend-4cfp.onrender.com/api"



export const EmailCall = async (payload) => {
  let url = `${BASE_URL}/email/sendEmail`;
  try{
    let params = {
      body : {...payload}
    }
    let EncryptedData = encryptPayload(params,true)
    let options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(EncryptedData)
    };
    const response = await apiRequest(url,options);
    return response
    
  }catch(err){
    console.log("err",err)
  }
 
};
