import React from 'react';
import { useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { useAuth } from '../../Context/Auth/Auth';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const { signupHandler, loader, setLoader } = useAuth();

  const [newClient, setNewClient] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  return (
    <>
      <div className='h-100'>
        <Navbar></Navbar>
        <main>
          <form
            onSubmit={function (e) {
              e.preventDefault();
              signupHandler(newClient);
              navigate('/login');
            }}
            className=' box-shadow-1 m-auto m-y-11 wt-30 flex
                flex-column items-center pd-8 '
          >
            <div className='text-xm text-semi'>
              <span>Đăng Ký</span>
            </div>
            <div className=' bg-black-0 flex flex-column  m-t-8 wt-100 '>
              <label for='firstName' className='bg-white-0 '>
                Họ
                <input
                  onChange={(e) =>
                    setNewClient({ ...newClient, firstName: e.target.value })
                  }
                  type='text'
                  required
                  id='firstName'
                  value={newClient.firstName}
                  placeholder='abc'
                  className=' rounded-xs pd-3 wt-100 '
                />
              </label>
            </div>
            <div className=' bg-black-0 flex flex-column  m-t-8 wt-100 '>
              <label for='lastName' className='bg-white-0 '>
                Tên
                <input
                  onChange={(e) =>
                    setNewClient({ ...newClient, lastName:  e.target.value })
                  }
                  type='text'
                  required
                  id='lastName'
                  value={newClient.lastName}
                  placeholder='nguyen'
                  className=' rounded-xs pd-3 wt-100 '
                />
              </label>
            </div>
            <div className=' bg-black-0 flex flex-column  m-t-8 wt-100 '>
              <label for='email' className='bg-white-0 '>
                  Địa chỉ Email
                <input
                  onChange={(e) =>
                    setNewClient({
                      ...newClient,
                      email:  e.target.value,
                    })
                  }
                  type='email'
                  required
                  id='email'
                  value={newClient.email}
                  placeholder='abc123@gmail.com'
                  className=' rounded-xs pd-3 wt-100 '
                />
              </label>
            </div>
            <div className='bg-black-0 flex  flex-column  m-y-4 wt-100'>
              <label for='password' className='bg-white-0'>
                Mật Khẩu
                <input
                  onChange={(e) =>
                    setNewClient({ ...newClient, password:  e.target.value })
                  }
                  type='password'
                  required
                  id='password'
                  value={newClient.password}
                  placeholder='123243543'
                  className='rounded-xs pd-3 wt-100'
                />
              </label>
            </div>
            <div className='flex  text-s m-y-4 justify-btw wt-100 flex-wrap'>
              <div className='flex items-center   '>
                <input
                  type='checkbox'
                  className='m-x-2'
                  name='checkbox'
                  id='checkbox'
                />
                <label for='checkbox'>Tôi chấp nhận tất cả các Điều khoản & Điều kiện.</label>
              </div>
            </div>
            <div className='wt-100'>
              <button
                type='submit'
                className='cursor bg-red-7 text-color-0 text-xm outline-none border-none pd-x-11 pd-y-3 rounded-xs wt-100'
              >
                Đăng Ký
              </button>
            </div>
            <div className='m-y-3'>
              <Link to='/login' className='text-dec text-color-9'>
                Đã có tài khoản?
              </Link>
            </div>
            {loader && <h4>Loading You data .....</h4>}
          </form>
        </main>
      </div>
    </>
  );
}

export default Signup;
