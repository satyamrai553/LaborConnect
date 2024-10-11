import React from 'react'
import { Link } from 'react-router-dom';

function EmployeeLogin() {
  return (
    <div className='overflow-hidden bg-[#F3F4F6] h-screen flex items-center justify-center px-6 py-12'>
        <div>
          <div>
            <h1 className='font-black text-4xl text-center text-[#1F2937]'>
              LaborConnect
            </h1>
            <h2 className='text-[#1F2937] font-sans font-bold text-2xl text-center mt-10'>Employee Login</h2>
            <h3 className='text-[#1F2937] font-sans font-bold text-2xl text-center mt-10'>
              Sign in to your account
            </h3>
          </div>
          <div className='mt-10'>
            <form action="">
              <div>
                <label htmlFor="email" className='text-[#1F2937] font-serif'>Email address</label>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className='px-3 py-[6px] w-[360px] h-[36px] bg-[#E5E7EB] rounded-lg mt-2 text-[#1F2937] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  />
                </div>
              </div>

              <div>
                <div className='flex mt-6 justify-between'>
                  <label htmlFor="password" className='text-[#1F2937] font-serif'>Password</label>
                  <div>
                    <Link to="/signup/reset" className='text-[#3B82F6] hover:text-[#2563EB]'>Forgot password?</Link>
                  </div>
                </div>
                <div>
                  <input
                    type="password"
                    id="password"
                    name='password'
                    required
                    className='px-3 py-[6px] w-[360px] h-[36px] bg-[#E5E7EB] rounded-lg mt-2 text-[#1F2937] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  />
                </div>
              </div>

              <div className='mt-6'>
                <button type='submit' className='bg-[#3B82F6] w-[360px] h-[36px] rounded-lg text-white hover:bg-[#2563EB]'>
                  Sign in
                </button>
              </div>
            </form>

            <div>
              <p className='text-[#1F2937] mt-10 text-center'>
                Not a member? <Link to="/signup" className='text-[#3B82F6] hover:text-[#2563EB]'>Start a 14-day free trial</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default EmployeeLogin