export const checkValidDataSignIn = (email,password)=>{


const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)    
const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


if(!isEmailValid) return "Email ID is not  valid"
if(!isPasswordValid) return "Password is not valid"

return null;

}
export const checkValidDataSignUp = (name,email,password)=>{

    const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name)
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)    
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!isNameValid)  return "Not a valid Name"
    if(!isEmailValid) return "Email ID is not  valid"
    if(!isPasswordValid) return "Password is not valid"
    
    return null;
    
    }