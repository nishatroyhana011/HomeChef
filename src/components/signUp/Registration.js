import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Registration = () => {
  const { createUser, userUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const notify = () => toast('User added successfully!');
  const [reg, setReg] = useState();

  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    setReg("reg")

    createUser(email, password)
      .then(result => {
        notify();
        <Toaster />
        const user = result.user;
        userUpdate(name, image)
        navigate('/login');
      })
      .catch(err => {
        console.log(err)
        setReg("")
      })
  }

  return (
    <div className='bg-gray-100 back'>
      <div>
        {reg === "reg" ?
          <>
            <div class="flex justify-center items-center">
              <div class="border-green-600 spinner-border animate-spin inline-block w-8 h-8 border-8 rounded-full" role="status">

              </div>
            </div>
          </>
          : ""
        }
      </div>

      <form onSubmit={handleSignUp} className='p-12 pt-20 mx-auto'>
        <p className='text-green-600 text-xl font-semibold my-5'>Registration form</p>
        <div className='grid grid-cols-4 gap-2'>
          <div class="form-group mb-6">
            <input name='name' type="text" class="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Full name" />
          </div>

          <div class="form-group mb-6">
            <input name='image' type="text" class="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Image url" />
          </div>

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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
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
      ease-in-out">Sign up</button>

        </div>
      </form>
      <p className='text-center'>Already have an account? Please <Link className='text-green-600 font-bold' to="/login">Sign In</Link> </p>
    </div>

  );
};

export default Registration;