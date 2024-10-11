import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserRoleSelection() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    // Redirect to the appropriate login page based on the selected role
    if (role === 'employee') {
      navigate('/login/employee');
    } else {
      navigate('/login/employer');
    }
  };

  return (
    <div className='overflow-hidden bg-[#111827] h-screen flex items-center justify-center px-6 py-12'>
      <div className='bg-white rounded-lg shadow-lg p-8'>
        <h1 className='font-black text-4xl text-center text-[#1F2937]'>LaborConnect</h1>
        <h2 className='text-[#1F2937] font-sans font-bold text-2xl text-center mt-10'>
          Select Your Role
        </h2>
        <div className='mt-10 flex justify-center space-x-4'>
          <button
            onClick={() => handleRoleSelection('employee')}
            className='bg-[#3B82F6] text-white px-6 py-2 rounded-lg hover:bg-[#2563EB]'
          >
            Employee
          </button>
          <button
            onClick={() => handleRoleSelection('employer')}
            className='bg-[#3B82F6] text-white px-6 py-2 rounded-lg hover:bg-[#2563EB]'
          >
            Employer
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserRoleSelection;