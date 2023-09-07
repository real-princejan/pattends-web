import React from 'react'
import './Register.css';

// import Link
import { Link } from 'react-router-dom'

// import images
import patLogo from '../../assets/images/pattends.png'

const Register = () => {
  return (
    <body className='align'>

    <img src={patLogo} alt="" className='patlogo'/>
        

    <div class="grid">

            {/* Login */}
            <form action="https://httpbin.org/post" method="POST" class="form register">
            <div class="form__field">
                <label for="register__email"><i class="ri-user-line"></i><span class="hidden">Email</span></label>
                <input id="register__email" type="text" name="email" class="form__input" placeholder="Email" required />
            </div>
            
            {/* Password */}
            <div class="form__field">
                <label for="register__password"><i class="ri-lock-line"></i><span class="hidden">Password</span></label>
                <input id="register__password" type="password" name="password" class="form__input" placeholder="Password" required />
            </div>

            {/* Submit */}
            <div class="form__field">
                <input type="submit" value="Sign Up" />
            </div>

            </form>

            <p class="text--center">Already a member? <Link className='text-greenColor' to='/'>Sign in now</Link></p>

            </div>
    </body>
  )
}

export default Register