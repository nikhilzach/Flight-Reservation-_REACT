import React,{useState} from 'react'
import videobg from "../assets/video.mp4"
import "../styles/Login.css";

function Login() {
  const [usernamestate,setUsername]=useState('')
  const [passwordstate,setPassword]=useState('')
  const [loginstate,setLogin]=useState(0)
  function check()
  {
    if(usernamestate==='Admin' && passwordstate==="password")
    {setLogin(1)}
  }
  return (
    <div>
      <div className='overlay'></div>

      <video src={videobg} autoPlay loop muted />
      <div>
       
      </div>
    <div className="content">
      <div className='heading'><h1 >Login</h1></div>
    
    <h4>Username</h4>
    <div className='logindiv'>
      <input type="text" id onChange={
        (event)=>setUsername(event.target.value)}></input>
        <br></br>
        
        <h4>Password</h4>
      <input type="password" onChange={
        (event)=>setPassword(event.target.value)}>

        </input> 
    </div>

      <button onClick={check}>Log in</button>
    
{loginstate===1 ?window.open("http://localhost:3000/Admin","_self"):<div><br></br>Status: Not Logged In</div>

}

    </div>
    </div>
  )
}

export default Login