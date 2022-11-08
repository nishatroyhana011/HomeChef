import React, { useContext } from 'react';
import {AuthContext} from '../../Context/AuthProvider';

const Registration = () => {
  const {createUser} = useContext(AuthContext);


  const handleSignUp = event =>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(err => console.error(err));
}

    return (
        <div className='bg-gray-100 back'>
           
  <form onSubmit={handleSignUp} className='p-12 py-20 mx-auto'>
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
        placeholder="Full name"/>
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
        placeholder="Image url"/>
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
        placeholder="Email address"/>
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
        placeholder="Password"/>
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
      ease-in-out">Sign up</button>
   </div>
  </form>
</div>
        
    );
};

export default Registration;