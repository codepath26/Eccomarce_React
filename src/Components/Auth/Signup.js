import React from 'react'
import { createPortal } from 'react-dom'
import SignUpModal from '../Overlays/SignUpModal';

function Signup(props) {

  const portalElement = document.getElementById('overlays');
  return (
    <>

     {
      createPortal(<SignUpModal onclose={props.onClose}/>,portalElement)
     } 
    </>
  )
}

export default Signup;
