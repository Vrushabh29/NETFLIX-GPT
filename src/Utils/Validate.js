 export const CheckValidData= (email, password)=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const EmailValid= emailRegex.test(email);
  const PassValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

  if(!EmailValid)
  {
    return ("Email is not valid")
  }

  if(!PassValid)
    {
      return ("Password is not valid")
    }
 return null;

}