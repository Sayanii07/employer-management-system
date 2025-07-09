import React, {useState} from 'react'

const Login =({handleLogin})=> {
    

 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    

    const submitHandler =(e)=>{
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className = 'flex h-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 rounded-xl p-20'>
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }}
             className='flex flex-col items-center justify-center '>
                <input 
                value ={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className='border-2 border-emerald-600 text-xl py-2 px-5 rounded-full bg-transparent bg' type="email" placeholder='Enter your email'></input>
                <input 
                value = {password}
                onChange = {(e)=>{
                    setPassword(e.target.value)
                }}
                required
                 className='border-2 border-emerald-600 mt-4 text-xl py-2 px-5 rounded-full bg-transparent'type="password" placeholder='Enter password'></input>
                <button className='border-2 border-green-600 mt-6 text-xl py-2 px-28 rounded-full bg-emerald-600'>Log In</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
