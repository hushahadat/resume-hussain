import CryptoJS from "crypto-js"
let encryptToken = 'B374A26A71490437AA024E4FADD5B497FDFF1DJUUA6FF12F6FB65AF2720B59CCF'
export const encryptPayload = (option = {body:{}},encrypt) =>{
    if(encrypt){
        let encryptedData = CryptoJS.AES.encrypt(JSON.stringify(option.body),encryptToken).toString()
        let encryptedToken = btoa(encryptToken)
        let encryptBodyParams = {...option , body : JSON.stringify({api_body : encryptedData, Token: encryptedToken}), dycrpt: true }
        // console.log("+++++",encryptBodyParams);
        return encryptBodyParams
    }else{
        return {...option?.body,  dycrpt: false}
    }

}