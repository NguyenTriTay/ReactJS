import React from 'react';
import { useFilter } from '../../Context/Filter/Filter-Context';
import { useProduct } from '../../Context/Product/Product-Context';

function Filter() {
  const { state, dispatch } = useFilter();// useState Trả về một giá trị trạng thái và một chức năng để cập nhật nó.

  return (
    <>
      <aside className='wt-20 h-vh-100 bg-black-2 text-color-9 position-fixed t-0'>
        <div className='flex flex-column items-start h-100 pd-8 '>
          <div className='flex justify-btw wt-100 m-y-2'>
            <div className='text-s text-bold'>
              <span>Lọc</span>
            </div>
            <div className='text-s text-bold '>
              <button
                className='cursor'
                onClick={() => dispatch({ type: 'CLEAR' })}
              >
                Clear
              </button>
            </div>
          </div>

          <div className='wt-100 m-y-2'>
            <div className='text-s text-bold'>
              <span>Giá</span>
            </div>
            <div className='text-s text-bold wt-100 flex justify-btw'>
              <span>{state.maxPrice}</span>
            </div>
            <div className='wt-100'>
              <input
                type='range'
                min={0}
                max={1000}
                checked={state.maxPrice}
                value={state.maxPrice}
                onChange={(event) =>
                  dispatch({ type: 'RANGE', payload: event.target.value })
                }
                name=''
                className='wt-100'
                id=''
              />
            </div>
          </div>

          <div className='m-y-2'>
            <div className='text-s text-bold'>
              <span>Danh mục sản phẩm</span>
            </div>
            <div>
              <div className=''>
                <label for=''>
                  <input
                    checked={state.showCategoryInventory.fruit}
                    onChange={() =>
                      dispatch({ type: 'FRUIT', payload: 'fruit' })
                    }
                    type='checkbox'
                    name='fruit'
                    id='fruitName'
                  />
                  Trái cây
                </label>
              </div>
              <div>
                <label for=''>
                  <input
                    checked={state.showCategoryInventory.grain}
                    onChange={() =>
                      dispatch({ type: 'GRAIN', payload: 'grain' })
                    }
                    type='checkbox'
                    name=''
                    id=''
                  />
                  Hạt
                </label>
              </div>
              <div>
                <label for=''>
                  <input
                    checked={state.showCategoryInventory.eggAndMeat}
                    onChange={() =>
                      dispatch({ type: 'EGGANDMEAT', payload: 'egg and meat' })
                    }
                    type='checkbox'
                    name=''
                    id=''
                  />
                  Trứng và thịt
                </label>
              </div>
              <div>
                <label for=''>
                  <input
                    checked={state.showCategoryInventory.vegetable}
                    onChange={() =>
                      dispatch({ type: 'VEGETABLE', payload: 'vegetable' })
                    }
                    type='checkbox'
                    name=''
                    id=''
                  />
                  Rau, củ, quả
                </label>
              </div>
            </div>
          </div>

          <div className='m-y-4'>
            <div className='text-s text-bold'>
              <span>Đánh giá</span>
            </div>
            <div>
              <div>
                <label for=''>
                  <input
                    type='radio'
                    onChange={() => dispatch({ type: 'FOUR_STAR', payload: 4 })}
                    name='rating'
                    id=''
                  />
                  4 sao trở lên
                </label>
              </div>
              <div>
                <label for=''>
                  <input
                    type='radio'
                    onChange={() =>
                      dispatch({ type: 'THREE_STAR', payload: 3 })
                    }
                    name='rating'
                    id=''
                  />
                  3 sao trở lên
                </label>
              </div>
              <div>
                <label for=''>
                  <input
                    onChange={() => dispatch({ type: 'TWO_STAR', payload: 2 })}
                    type='radio'
                    name='rating'
                    id=''
                  />
                  2 sao trở lên
                </label>
              </div>
              <div>
                <label for=''>
                  <input
                    onChange={() => dispatch({ type: 'ONE_STAR', payload: 1 })}
                    type='radio'
                    name='rating'
                    id=''
                  />
                  1 sao trở lên
                </label>
              </div>
              <div>
                <label for=''>
                  <input
                    type='radio'
                    onChange={() => dispatch({ type: 'ZERO_STAR', payload: 0 })}
                    name='rating'
                    id=''
                  />
                  0 sao trở lên
                </label>
              </div>
            </div>
          </div>

          <div className='m-y-4'>
            <div className='text-s text-bold'>
              <span>Sắp xếp theo</span>
            </div>
            <div>
              <div>
                <label for='LOW_TO_HIGH'>
                  <input
                    type='radio'
                    name='price'
                    checked={state.showSort === 'PRICE_LOW_TO_HIGH'}
                    onChange={() =>
                      dispatch({ type: 'SORT', payload: 'PRICE_LOW_TO_HIGH' })
                    }
                    id='LOW_TO_HIGH'
                  />
                  Giá - Thấp đến cao
                </label>
              </div>
              <div>
                <label for='High_TO_LOW'>
                  <input
                    type='radio'
                    checked={state.showSort === 'PRICE_HIGH_TO_LOW'}
                    onChange={() =>
                      dispatch({ type: 'SORT', payload: 'PRICE_HIGH_TO_LOW' })
                    }
                    name='price'
                    id='High_TO_LOW'
                  />
                  Giá - Cao đến thấp
                </label>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Filter;
