import React, {useSatte} from 'react';
import { setLocalStorage } from '../../utils/localStorage';

const Header = (props) => {
  /*const[username , setUsername] = useState('')

  if(!data){
    setUsername('Admin')
  }else{
    setUsername(data.firstName)
  }*/
 const logOutUser =()=>{
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
  //window.location.reload()

 }

  return (
    <div className='flex items-end justify-between '>
    <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{props.data?.firstName}👋</span></h1>
      <buttton onClick={logOutUser} className='bg-red-500 hover:bg-red-700 font-medium text-white px-5 py-2 rounded full'>Log out</buttton>
    </div>
  )
}

export default Header
