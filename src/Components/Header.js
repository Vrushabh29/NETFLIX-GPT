import React, { useEffect } from 'react'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../Utils/userSlice';
import { LANGUAGECONSTANT, LOGOURL } from '../Utils/constant';
import { toggoleGPTSearchView } from '../Utils/gptSlice';
import { changeLanguage } from '../Utils/configSlice';
const Header = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
 const showGPtView=useSelector((store)=> store.gpt.showGptSearch)
 
  useEffect(()=>{
  const unsubscribe=  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/");
      }
    });

    //unsubscribe called when componet unmount
    return ()=>unsubscribe();
  },[])

const user=useSelector(store=> store.user)
  const handleSignout= ()=>{
    signOut(auth).then(() => {
      dispatch(removeUser())
    //  navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleLaungeChange=(e)=>{
   console.log(e.target.value);

   dispatch(changeLanguage(e.target.value))


  }
  const handleGPTSearchClick =()=>{
    dispatch(toggoleGPTSearchView())
  }
  return (
    <div className=' absolute w-screen px-8 py-2 bg bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between '>
      <img className=' w-40 md:mx-0 mx-auto' src={LOGOURL} alt="LOGO" />
      {user && <div className='p-2  justify-between flex'>
       { showGPtView && <select className='p-2 m-2 bg-gray-500 text-white' onChange={handleLaungeChange}>
          {LANGUAGECONSTANT.map((lang)=> <option key={lang.Identifire} value ={lang.Identifire}>{lang.value}</option>)}
        </select>}
        <button className='py-2 px-4 mx-4 my-2 bg-purple-800 rounded-lg text-white'
        onClick={handleGPTSearchClick}>{showGPtView?"Homepage":"GPT Search"}</button>
      <img  className='w-12 h-12 hidden md:block' src={user?.photoURL} alt="userIcon" />
      <button onClick={handleSignout} className='font-bold text-white'>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
