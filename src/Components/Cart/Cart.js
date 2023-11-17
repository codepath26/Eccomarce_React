import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal';
function BackDrop  (props){
 return <div onClick={props.onClose} className='position-fixed top-0 left-0 w-100 min-vh-100 bg-dark p-2 text-dark bg-opacity-75 z-2'></div>
}


function Cart(props){
  const portalElement = document.getElementById('overlays');
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/> , portalElement )}
      {ReactDOM.createPortal(<Modal onClose={props.onClose}/> , portalElement)}
    </>
  )
}



export default Cart
