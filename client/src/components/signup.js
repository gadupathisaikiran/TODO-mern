import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function Signup() {

    const navigate=useNavigate()

const [user,setuser]=useState({email:"",
password:""
})

const [confpass,setconfpass]=useState({
    password:""
})


async function signup(userdata)
{

   const res=await axios.post("http://localhost:5000/user/signup",userdata)

  
   if(!res.data.message){

    alert("registeration sucessful")
    navigate("/")
   }
   else{
    alert("user already exist")
   }
  


    console.log(res)


}












function submit(){

const emailreg=new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
if(user){



if(!user.email.match(emailreg)){
    alert("not a valid email")
}


else if(user.password!=confpass.password){
    alert("password is not matcihng")
}

else{
   

    signup(user)
}




}
}



  return (
    <div className='register'>


    <h1>SIGNUP</h1>

    <input type="email" placeholder='email' style={{width:"300px",height:"30px",fontSize:"22px",marginBottom:"20px"}} onChange={(e)=>{setuser({...user,email:e.target.value})}}></input><br/>

     <input type="text" placeholder='password' style={{width:"300px",height:"30px",fontSize:"22px",marginBottom:"20px"}} onChange={(e)=>{setuser({...user,password:e.target.value})}}></input><br/>



     <input type="password" placeholder='confirmpassword' style={{width:"300px",height:"30px",fontSize:"22px",marginBottom:"20px"}} onChange={(e)=>{setconfpass({...confpass,password:e.target.value})}}></input><br/>
      
    
    
      <button onClick={()=>{submit()}}>SIGNUP</button>
    
    
    </div>
  )
}
