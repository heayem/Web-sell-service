const Signup = () => {
    return(
        // Sign Up component
    <div className='h-screen flex items-center w-[70%] mx-auto justify-between'> 
    <div>
      <form action="" className='border-[3px] border-blue-800 w-[550px] rounded-3xl  px-[40px] py-[40px] '>
          <h1 className='text-[35px] font-bold text-gray-900 '>
            Hello, dear!
          </h1>
          <div className='flex flex-col gap-y-2 mt-3 '>
            <label htmlFor="">Username</label>
            <input type="text" className='py-2 pl-3 outline-none bg-gray-100 rounded-lg ' placeholder='Enter your name'/>
          </div>
          <div className='flex flex-col gap-y-2 mt-3 '>
            <label htmlFor="">Email</label>
            <input type="text" className='py-2 pl-3 outline-none bg-gray-100 rounded-lg ' placeholder='example@gmail.com'/>
          </div>
          <div className='flex flex-col gap-y-2 mt-4 '>
            <label htmlFor="">Password</label>
            <input type="text" className='py-2 pl-3 outline-none bg-gray-100 rounded-lg ' placeholder='Enter your password'/>
          </div>
          <div className='flex flex-col gap-y-2 mt-4 '>
            <label htmlFor="">Confirm Password</label>
            <input type="text" className='py-2 pl-3 outline-none bg-gray-100 rounded-lg ' placeholder='Enter your confirm password'/>
          </div>
          <button className='mt-5 text-[18px] bg-blue-700 w-full text-white hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 '>
            Sign Up
          </button>
          <div class="relative mt-2">
            <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t-[2px] border-gray-500"></div>
            </div>
            <div class="relative flex justify-center text-sm">
                <span class=" bg-white px-5 text-gray-600 text-[20px] ">
                    or
                </span>
            </div>
          </div>
          <div className='mt-4 border border-gray-500 rounded-lg justify-center flex items-center gap-x-3 py-1'>
            <img className='w-[24px] h-[24px] ' src="images/google.png" alt="" />
            <span class=" bg-white text-gray-600 text-[18px] ">
              Continue with google
            </span>
          </div>
          <div className='mt-3'>
            Aleady have an account? <a className='text-blue-700 font-bold' href="/">Log in</a>
          </div>
      </form>
    </div>
    <div>
      <img src="images/sign_up.jpg" alt="sign_logo" className='w-[450px] ' />
    </div>
  </div>
    )
}

export default Signup