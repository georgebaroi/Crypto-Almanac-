import React from 'react'
import Login from './Login'


function Nav(){
return (
<nav className='nav'>
<a href='/' className='site-title'>BlockChain Almanac</a>
<a href='/login' className='login'>
     <Login/>
    </a>
 
</nav>
)}



export default Nav