import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyApple, buyOrange } from '../redux/fruit/fruitAction';
import { buySandwich } from '../redux/food/foodAction';
const MyStore = () => {
    
    const { apple, orange } = useSelector((state)=>state.fruit);
    const { sandwich } = useSelector((state)=>state.food);
    const dispatch = useDispatch();

    const [countItems, setCountItems] = useState({
        apple: 1,
        orange: 1,
        sandwich: 1
    })
    return (
        <div>
           <h5 className='text-center mt-2'>تعداد سیب ها: {apple}</h5>
           <h5 className='text-center mt-2'>تعداد پرتقال ها: {orange}</h5>
           <h5 className='text-center mt-2'>تعداد ساندویچ ها: {sandwich}</h5>
           <div className='row justify-content-center'>
                <div className='col-12 col-md-4 col-lg-2'>
                    <div className='input-group mb-3 dir_ltr'>
                        <div className="input-group-prepend">
                            <button className='input-group-text btn btn-success' onClick={()=>dispatch(buyApple(countItems.apple))}>خرید سیب</button>
                        </div>
                        <input type='number' className='form-control rounded-0' value={countItems.apple}
                        onChange={(e)=>setCountItems({...countItems, apple: e.target.value})} />
                    </div>
                </div>
                <div className='col-12 col-md-4 col-lg-2'>
                    <div className='input-group mb-3'>
                        <div className="input-group-prepend">
                            <button className='btn btn-warning mx-3' onClick={()=>dispatch(buyOrange(countItems.orange))}>خرید پرتقال</button>
                        </div>
                        <input type='number' className='form-control rounded-0' value={countItems.orange}
                        onChange={(e)=>setCountItems({...countItems, orange: e.target.value})} />
                    </div>
                </div>
                <div className='col-12 col-md-4 col-lg-2'>
                    <div className='input-group mb-3 dir_ltr'>
                        <div className="input-group-prepend">
                            <button className='btn btn-danger mx-3' onClick={()=>dispatch(buySandwich(countItems.sandwich))}>خرید ساندویچ</button>
                        </div>
                        <input type='number' className='form-control rounded-0' value={countItems.sandwich}
                        onChange={(e)=>setCountItems({...countItems, sandwich: e.target.value})} />
                    </div>
                </div>
           </div>
        </div>
    );
}

// const stateToProps = (states) => {
//     return ( {
//         apple: states.fruit.apple,
//         orange: states.fruit.orange,
//         sandwich: states.food.sandwich
//     } )
// }

// const dispatchToProps = (dispatch) => {
//     return ({
//         buyApple: (value)=>dispatch(buyApple(value)),
//         buyOrange: (value)=>dispatch(buyOrange(value)),
//         buySandwich: (value)=>dispatch(buySandwich(value)),
//     })
// }


export default MyStore;
