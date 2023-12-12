import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidDataSignIn, checkValidDataSignUp}from "../utils/validate"

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
   const [errorMessage,setErrorMessage] = useState(null);
   const name = useRef(null)
   const email = useRef(null);
   const password = useRef(null);

  const handleButtonClick =()=>{
    //Validate the form data
     if(isSignInForm){
      const message = checkValidDataSignIn(email.current.value,password.current.value)
      
     setErrorMessage(message)
     
     console.log(email.current.value)
    console.log(password.current.value)
    console.log(message)
     }
     else{
      const message = checkValidDataSignUp(name.current.value,email.current.value,password.current.value)
      
      setErrorMessage(message)
        
          console.log(name.current.value)
          console.log(email.current.value)
         console.log(password.current.value)
         console.log(message)
     }
   
    
    
   

  }
  const toggleSignInForm = ()=>{
             setIsSignInForm(!isSignInForm);
  }
  return (
    <div >
      <Header/>
      <div className="absolute " >
      <img 
      className="bg-repeat"
      src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
      alt="bg"
   
      />
      </div>
      <form onSubmit = {(e)=> e.preventDefault()}className="w-6/12 absolute p-12 bg-black my-36px mx-auto right-0 left-0 text-white bg-opacity-80 " action="">
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In":"Sign Up"}</h1>
        {!isSignInForm &&  <input
        ref={name}
         type="text" 
         placeholder="Full Name"
         className="p-4 my-4 w-full bg-[#333333]"
         /> }
        <input
        ref={email}
         type="text" 
         placeholder="Email Address"
         className="p-4 my-4 w-full bg-[#333333]"
         />
        <input 
        ref={password}
        type="password"
        placeholder="Password" 
        className="p-4 my-4 w-full bg-[#333333]"
          />

          <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm? "Sign In":"Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now": "Already registered Sign In!"}</p>
      </form>
    </div>
  )
}

export default Login

