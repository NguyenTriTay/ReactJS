import React from 'react';
import { useCart } from '../../Context/Cart/Cart-Context';
import { useFilter } from '../../Context/Filter/Filter-Context';
import { useProduct } from '../../Context/Product/Product-Context';
import { useWishlist } from '../../Context/Wishlist/Wishlist-Context';
import { useAuth } from '../../Context/Auth/Auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function Card() {
  const { sortPriceData } = useFilter();
  const { items, categories, setCatrgories } = useProduct();
  const { addItem, wishlist, removeItem } = useWishlist();
  const { removeCart, addCart, cart } = useCart();
  const { tokenValue } = useAuth();
  const navigate = useNavigate();
  const filteredCategories = (category) => {
    if (category) {
      return sortPriceData?.filter((item) => item.categoryName === category);
    }
    return sortPriceData;
  };

  const filterCategories = filteredCategories(categories);
  const handleAddToWishlist = (product) => {
    if (tokenValue) {
      addItem(product);
      toast.success('Đã thêm vào mục yêu thích');
    } else if (!tokenValue) {
      navigate('/login');
      toast.error('Bạn phải đăng nhập');
    }
  };
  const handleRemovedFromWishlist = (product) => {
    if (tokenValue) {
      removeItem(product);
      toast.success('Đã xóa khỏi mục yêu thích');
    } else if (!tokenValue) {
      navigate('/login');
      toast.error('Bạn phải đăng nhập');
    }
  };
  const handleAddCart = (product) => {
    if (tokenValue) {
      addCart(product);
      toast.success('Đã thêm vào giỏi hàng');
    } else if (!tokenValue) {
      navigate('/login');
      toast.error('Bạn phải đăng nhập');
    }
  };
  
  const handleAdRemovedFromCart = (product) => {
    if (tokenValue) {
      removeCart(product);
      toast.success('Đã xóa khỏi giỏ hàng');
    } else if (!tokenValue) {
      navigate('/login');
      toast.error('Bạn phải đăng nhập');
    }
  };
  return (
    <>
      <div className='wt-80 bg-black-2'>
        <div className='grid product-content pd-3'>
          {filterCategories &&
            filterCategories.map((product) => {
              const {
                _id,
                imageSrc,
                price,
                categoryName,
                title,
                quantity,
                rating,
                inStock,
              } = product;
              return (
                <div
                  key={_id}
                  className='flex flex-column  bg-black-0 wt-100 position-rel'
                >
                  {wishlist.some((prod) => prod._id === _id) ? (
                    <div className='position-ab t-2 r-5'>
                      <button
                        onClick={() => handleRemovedFromWishlist(product)}
                        className='pd-x-3 bg-black-2 border-none pd-y-2 rounded-full cursor'
                      >
                        <i className='fa-solid fa-heart color-red-7'></i>
                      </button>
                    </div>
                  ) : (
                    <div className='position-ab t-2 r-5'>
                      <button
                        onClick={() => handleAddToWishlist(product)}
                        className='pd-x-3 bg-black-2 border-none pd-y-2 rounded-full cursor'
                      >
                        <i className='fa-solid fa-heart color-black-7'></i>
                      </button>
                    </div>
                  )}

                  <div className='pd-4 bg-black-3 '>
                    <img
                      src={imageSrc}
                      className=' m-t-8 wt-100  rounded-m object-content'
                      alt='have  no imgae'
                    />
                  </div>
                  <div className=' m-y-9 '>
                    <div className=' flex flex-column items-start pd-4 '>
                      <span className='text-s text-light'>{title}</span>

                      {inStock ? (
                        <small className=' text-sm'>Còn hàng</small>
                      ) : (
                        <small className=' text-sm'>Không còn hàng</small>
                      )}

                      <small className=' text-s'>{price} VND</small>
                      <small className=' text-s'>{quantity}</small>

                      <small className=' text-sm'>{categoryName}</small>
                      <div class='bg-green-7 pd-2 m-y-5'>
                        <small className='text-color-0 text-sm'>
                          Đánh giá {rating}/5{' '}
                          <i className='fas fa-star text-color-0'></i>
                        </small>
                      </div>
                    </div>
                  </div>

                  {cart.some((prod) => prod._id === _id) ? (
                    <button
                      onClick={() => handleAdRemovedFromCart(product)}
                      className=' flex flex-wrap flex-column items-center wt-100 border-none cursor pd-y-3 text-color-0 bg-black-8
                      text-dec '
                    >
                      Xóa khỏi giỏ hàng
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddCart(product)}
                      className=' flex flex-wrap flex-column items-center wt-100 border-none cursor pd-y-3 text-color-0 bg-black-8
                      text-dec '
                    >
                      Thêm vào giỏ hàng
                    </button>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Card;
