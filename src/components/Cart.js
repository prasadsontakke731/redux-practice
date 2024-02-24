import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { decreaseItemQuantity, getCartTotal, increaseItemQuantity } from '../utils/cartSlice'
const Cart = () => {
    const dispatch = useDispatch()
    const { cart, totalQuantity, totalPrice } = useSelector((store) => store.allCart)

    useEffect(() => {
        dispatch(getCartTotal())

    }, [cart])
    return (
        <div className="container mt-5">
            <h2>Shopping Cart</h2>
            <div className="row">
                <div className="col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((data) => {
                                    return (
                                        <tr>
                                            <td><img src={data.image} alt="ProductImage" className="product-img" style={{ width: "100px", height: "100px" }} /></td>
                                            <td>{data.title}</td>
                                            <td>{data.price}</td>
                                            {/* <td><input type="number" className="form-control" /></td> */}
                                            <td>
                                                <div>
                                                    <button style={{ fontSize: "20px", backgroundColor: "red", color: "white" }} onClick={() => dispatch(decreaseItemQuantity(data.id))}>-</button>
                                                    <input type="text" value={data.quantity} style={{ width: "20%", textAlign: "center", fontSize: "20px" }} />
                                                    <button style={{ fontSize: "20px", backgroundColor: "green", color: "white" }} onClick={() => dispatch(increaseItemQuantity(data.id))}>+</button>

                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            {/* <!-- Add more rows for additional products --> */}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Cart Summary</h5>
                            <p className="card-text text-primary fw-bold">Total: ${totalPrice}</p>
                            <a href="#" className="btn btn-primary">Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart