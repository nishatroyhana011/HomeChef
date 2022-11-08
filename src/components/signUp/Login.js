import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
  const { loginUser, providerGoogleLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const generateJWT = (User) => {
    fetch('http://localhost:5000/jwt', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(User)
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('hc-token', data.token)
      })
  }

  //email pass login
  const handleLogin = event => {

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(res => {
        const user = res.user;

        const currentUser = {
          email: user.email
        }
        generateJWT(currentUser)

      })
      .catch(err => console.log(err))

  }

  //google login
  const handleGoogleLogin = () => {
    providerGoogleLogin(googleProvider)
      .then(result => {
        const user = result.user;
        const currentUser = {
          email: user.email
        }
        generateJWT(currentUser)
      })
      .catch(error => console.error(error))
  }

  return (
    <div>
      <div className='bg-gray-100 back'>

        <form onSubmit={handleLogin} className='p-12 pt-20 mx-auto'>
          <p className='text-green-600 text-xl font-semibold my-5'>Login form</p>
          <div className='grid grid-cols-2 gap-2'>
            <div class="form-group mb-6">
              <input name='email' type="email" class="form-control block
                 w-full
                 px-3
                 py-4
                 text-base
                 font-normal
                 text-gray-700
                 bg-white bg-clip-padding
                 border border-solid border-gray-300
                 rounded
                 transition
                 ease-in-out
                 m-0
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                placeholder="Email address" />
            </div>
            <div class="form-group mb-6">
              <input name='password' type="password" class="form-control block
                 w-full
                 px-3
                 py-4
                 text-base
                 font-normal
                 text-gray-700
                 bg-white bg-clip-padding
                 border border-solid border-gray-300
                 rounded
                 transition
                 ease-in-out
                 m-0
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                placeholder="Password" />
            </div>
          </div>

          <div class="form-group mb-6">
            <button type="submit" class="
               w-full
               px-3
               py-3
               bg-green-600
               text-white
               font-medium
               text-xs
               leading-tight
               uppercase
               rounded
               shadow-md
               hover:bg-green-900 hover:shadow-lg
               focus:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0
               active:bg-green-900 active:shadow-lg
               transition
               duration-150
               ease-in-out">Sign In</button>
          </div>
        </form>
        <p className='text-center'>Don't have an account? Please <Link className='text-green-600 font-bold' to="/register">Sign Up</Link> </p>
        <button onClick={handleGoogleLogin} className='btn bg-green-600 border-green-600 mb-2' variant="outline-primary"> Login with Google</button>
      </div>
    </div>
  );
};

export default Login;