import React, { useState } from "react";

function Contact() {
  const [name , setName] =useState('')
  const [email ,setEmail] =useState('')
  const [phone , setPhone] =useState('');
  const subminData = async(e)=>{
    e.preventDefault();
    try{
      const user = {
        name : name,
        email: email,
        phone : phone,
      }
        const result = await fetch(`${process.env.REACT_APP_URL}/movies.json()`,{
          method : "POST",
          body: user,
          headers : {
            "Content-Type" : "application/json"
          }
        })
        const data = await result.json()
        console.log(result)
        console.log(data);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="my-5 vh-100 d-flex justify-content-center  p-2">
      <div className="w-50 p-4 ">
        <form className="d-flex flex-column w-75 mx-auto shadow p-3 m-5  rounded">
          <h2 className="text-center">Enter Your Details</h2>
          <label htmlFor="name" className="fw-bolder mt-3">Name</label>
          <input type="text" id="name" className='border border-secondary rounded p-2  '  value={name} onChange={(e)=>setName(e.target.value)}/>
          <label htmlFor="email" className="fw-bolder mt-3">Email</label> 
          <input type="email" id="email" className='border border-secondary rounded p-2  '  value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="phone" className="fw-bolder mt-3">Phone</label>
          <input type="number" id="phone" className='border border-secondary rounded p-2  '  value={phone} onChange={(e)=>setPhone(e.target.value)}/>
          <button type="submit" className="btn btn-primary m-4" onClick={subminData}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
