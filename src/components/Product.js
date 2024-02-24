import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { API_URL } from '../utils/constants'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../utils/cartSlice';



const Product = () => {
    const dispatch = useDispatch()
    const items = useSelector((store) => store.allCart.items)
    console.log(items);






    const cards = items.map((item) => (
        <div className='col-md-3' key={item.id} style={{ marginBottom: "20px" }}>
            <Card style={{ width: '18rem' }} className='h-100'>
                <div className='text-center'>
                    <Card.Img variant="top" src={item.image} style={{ width: "150px", height: "150px" }} />

                </div>
                <Card.Body>
                    <Card.Title>${item.title}</Card.Title>
                    <Card.Text>
                        {item.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{ backgroundColor: "white" }}>
                    <Button variant="primary" onClick={() => dispatch(addToCart(item))}>Add To Cart</Button>

                </Card.Footer>
            </Card>
        </div>
    ))
    return (
        <>
            <h1>Product Dashboard</h1>
            <div className='row'>
                {
                    cards
                }
            </div>
        </>
    )
}

export default Product