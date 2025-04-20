import React, { useRef, useState } from 'react'
import Header from './Header'
import { CheckValidData } from '../Utils/Validate'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../Utils/userSlice';
import { useDispatch } from 'react-redux';
import { BACKGROUND_URL, USER_AVTAR } from '../Utils/constant';


const Login = () => {

  const [isSignInForm ,setIsSignInForm]=useState(true)
  const [errormessgae, SetErrormessgae]=useState()
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const navigate= useNavigate()
  const dispatch=useDispatch()

  const handleButtonClick=()=>{
    //validate form data
   // CheckValidData()
   console.log(email.current.value)
   console.log(password.current.value)
 const message=  CheckValidData(email.current.value,password.current.value);
 console.log(message)
 SetErrormessgae(message);

 if(message) return;

 if(!isSignInForm){
  //Sign Up 

  createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    updateProfile(auth.currentUser, {
      displayName: name.current.value, photoURL:USER_AVTAR
    }).then(() => {
     const {uid,email,displayName,photoURL} = auth.currentUser;
               dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
    //  navigate("/browse");
    }).catch((error) => {
      SetErrormessgae(error)
    });
    console.log(user)
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    SetErrormessgae(errorCode+"_"+errorMessage);
    // ..
  });

 }else {
  //Sign In

  signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
   // navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    SetErrormessgae(errorCode+"_"+errorMessage);
  });

 }
  }

  const toggleSignIn=()=>{
    console.log("clicked")
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='fixed'>
      <img className='h-screen object-cover w-screen' src={BACKGROUND_URL} alt="" />
    </div>
    <form  onSubmit={(e)=>e.preventDefault()} className="md:w-3/12 w-full absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-85 text-white">
    <h1 className="font-bold text-3xl py-4">{ isSignInForm?"Sign In":"Sign Up"}</h1>
   {!isSignInForm && <input ref={name} type="text" placeholder="Name of User" className="p-4 my-4 w-full bg-gray-700" />}
        <input  ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" />
        <input ref={password} type="password" placeholder="password" className="p-4 my-4 w-full bg-gray-700" />
        <button onClick={handleButtonClick} className='p-2 my-6 w-full bg-red-700 rounded-lg'>{ isSignInForm?"Sign In":"Sign Up"}</button>
        <p className=' text-red-600'> {errormessgae}</p>
        <p className='text-white py-4 cursor-pointer' onClick={toggleSignIn}> { isSignInForm?"New User ? Sign Up Now":"Already register Sign In Now"} </p>
    </form>
    </div>
  )
}

export default Login
