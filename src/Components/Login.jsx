import React from 'react'
import "./Login.css"
function Login() {
  return (
    // <div className='logbox'>
    //   <div className='ship'>Shipmate</div>
    //   <div className='login'>Login</div>
    //   <div className='learn-more'>Learn more</div>
    // </div>

    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="logbox">
        <div class="navbar-brand" href="#"><h3>Shipmate</h3></div>
        <button className='login' >Login</button>
        <button className='learn-more'>Learn more</button>
      </div>
    </nav>
  )
}

export default Login
