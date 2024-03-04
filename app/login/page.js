import React from 'react'
import Form from '../Components/Login/Form'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const page = () => (
  <>
    <Form />
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </>
)

export default page