import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../useTitle/UseTitle';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const { loginUser, providerGoogleLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [loggedIn, setLoggedIn] = useState();
  useTitle('Login')
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const generateJWT = (User) => {
    fetch('https://homechef-server-nishatroyhana011.vercel.app/jwt', {
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
    setLoggedIn("loggingIn")

    loginUser(email, password)
      .then(res => {
        const user = res.user;

        const currentUser = {
          email: user.email
        }
        generateJWT(currentUser);
        toast('You can login now')
        navigate(from, { replace: true })

      })
      .catch(err => {
        console.log(err)
        setLoggedIn("")
      })

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
        navigate(from, { replace: true })
      })
      .catch(error => console.error(error))
  }

  return (
    <div>
      <div className='my-10'>
        <div>
          {loggedIn === "loggingIn" ?
            <>
              <div class="flex justify-center items-center">
                <div class="border-green-600 spinner-border animate-spin inline-block w-8 h-8 border-8 rounded-full" role="status">

                </div>
              </div>
            </>
            : ""
          }
        </div>
        <form onSubmit={handleLogin} className='p-12 pt-16 mx-auto'>
          <p className='text-green-600 text-xl font-semibold my-5'>Login form</p>
          <div className='grid grid-cols-2 gap-2'>
            <div className="form-group mb-6">
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
               hover:bg-green-800 hover:shadow-lg
               focus:bg-green-800 focus:shadow-lg focus:outline-none focus:ring-0
               active:bg-green-800 active:shadow-lg
               transition
               duration-150
               ease-in-out">Sign In</button>
          </div>
        </form>
        <p className='text-center'>Don't have an account? Please <Link className='text-green-600 font-bold' to="/register">Sign Up</Link> </p>
        <button onClick={handleGoogleLogin} className='btn bg-green-600 border-green-600 my-2' variant="outline-primary"> Login with Google</button>
        <Toaster />
      </div>
    </div>
  );
};

export default Login;