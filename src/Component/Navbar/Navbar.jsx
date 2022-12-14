import { Link } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../../Context/Auth/Auth';
import { useCart } from '../../Context/Cart/Cart-Context';
import { useWishlist } from '../../Context/Wishlist/Wishlist-Context';
import toast from 'react-hot-toast';
function Navbar() {
  const { authToken, tokenValue, logoutHandler } = useAuth();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <div>
      <nav className=' bg-green-7 text-color-0 pd-5 position-fixed t-0'>
        <div className='wt-80  m-auto  flex items-center'>
          <div className='text-xm'>
            <Link className='text-dec text-color-0 text-m cursor' to='/'>
              CỬA HÀNG RAU SẠCH
            </Link>
          </div>
          <div className='m-lf'>
            <ul className='style-none flex items-center'>
              <li className='pd-x-4'>
                {tokenValue ? (
                  <Link
                    onClick={() => {
                      logoutHandler();
                      toast.success('Logged Out  successfully');
                    }}
                    to='/login'
                    className='text-dec text-color-0 pd-x-5 pd-y-3 bg-red-7'
                  >
                    Đăng Xuất
                  </Link>
                ) : (
                  <Link
                    to='/login'
                    className='text-dec text-color-0 pd-x-5 pd-y-3 bg-red-7'
                  >
                    Đăng Nhập
                  </Link>
                )}
              </li>

              <li className='pd-x-4 flex  items-center position-rel justify-center'>
                <Link to='/wishlist' className='text-dec text-color-0 cursor'>
                  <i className='fa-solid  fa-heart text-color-0'></i>
                </Link>
                {wishlist.length >= 0 && (
                  <span className=' text-s position-ab p-t-n-2 flex items-center justify-center bg-red-7 wt-fixed-5 h-fixed-5 rounded-full p-r-0'>
                    {wishlist.length}
                  </span>
                )}
              </li>

              <li className=' pd-x-4 flex  items-center position-rel justify-center'>
                <Link to='/cart' className='text-dec text-color-0 cursor'>
                  <i className='fa-solid fa-cart-shopping'></i>
                </Link>
                {cart.length >= 0 && (
                  <span className=' text-s position-ab p-t-n-2 flex items-center justify-center bg-red-7 wt-fixed-5 h-fixed-5 rounded-full p-r-0'>
                    {cart.length}
                  </span>
                )}
              </li>
              <li className='pd-x-4'>
                <small>Giỏ hàng</small>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
