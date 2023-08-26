import React , {useEffect} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const Toast = ({message,type,autoClose, postion ="top-right",theme='light'})=>{
  useEffect(()=>{
    toast(message,{type,autoClose,postion,theme})
  },[message,type,autoClose])

  return (
    <div>
      <ToastContainer />
    </div>
  );
}
export default Toast