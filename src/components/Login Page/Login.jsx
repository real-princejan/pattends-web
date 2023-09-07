import React from 'react';
import './Login.css';

// import Link
import { Link } from 'react-router-dom'

// import images
import patLogo from '../../assets/images/pattends.png'

const Login = () => {
  return (
    <>
    <body className='align'>

    <img src={patLogo} alt="" className='patlogo'/>
        

    <div class="grid">

            <form action="https://httpbin.org/post" method="POST" class="form login">
            <div class="form__field">
                <label for="login__username"><i class="ri-user-line"></i><span class="hidden">Email</span></label>
                <input id="login__username" type="text" name="username" class="form__input" placeholder="Email" required />
            </div>

            <div class="form__field">
                <label for="login__password"><i class="ri-lock-line"></i><span class="hidden">Password</span></label>
                <input id="login__password" type="password" name="password" class="form__input" placeholder="Password" required />
            </div>

            <div class="form__field">
                <input type="submit" value="Sign In" />
            </div>

            </form>

            <p class="text--center">Not a member? <Link className='text-greenColor' to='/Register'>Sign up now</Link></p>

            </div>
    </body>
    </>
  )
}

export default Login