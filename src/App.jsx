import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import Login from './component/Auth/Login.jsx'
import EmployeDashboard from './component/Dashboard/EmployeDashboard.jsx'
import AdminDashboard from './component/Dashboard/AdminDashboard.jsx'
import { AuthContext } from './context/AuthProvider.jsx'

const App = () => {

  const[user, setUser] = useState(null)
 const [loggedInUserData, setLoggedInUserData ] = useState(null)
 const [userData, setUserData] = useContext(AuthContext)

 useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')

  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role) 
    setLoggedInUserData(userData.data)

  }
 },[])
 const handleLogin = (email,password)=>{
  if(email == 'admin@example.com' && password == '123'){
    setUser('admin')
    localStorage.setItem('loggedInUser',JSON.stringify({role: 'admin'}))
    
  }else if (userData ) {
    const employee = userData.find((e)=> email == e.email && e.password == password)
    if(employee){
      setUser('employee');
      setLoggedInUserData(employee);
      localStorage.setItem('loggedInUser',JSON.stringify({role: 'employee', data:employee }))
    }
  }
  else{
    alert('Invalid credentials')
  }
}

return (
  <>
    {!user ? (
      <Login handleLogin={handleLogin} />
    ) : user === 'admin' ? (
      <AdminDashboard changeUser = {setUser} />
    ) : (
       user == 'employee'?<EmployeDashboard changeUser = {setUser} data ={loggedInUserData}/>:null)
    }
  </>
);

}

export default App
