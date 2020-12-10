import React, { useState } from "react";


function CartItem(props) {

    const [state, setState] = useState({
        quantity: 1,
        productPrice: props.item.price,
        itemTotal: 0
    })

    const handleQuantity = (e) => {
        props.handleGrandTotal(state.quantity, parseInt(e.target.value), props.item.price)
        setState({ ...state, quantity: parseInt(e.target.value) })

    }

    return (
        <tr className="cart-item">
            <td className="product-remove">
                <button aria-label="Remove this item" onClick={(e) => { e.preventDefault(); props.handleRemove(props.item._id, props.item.customerId)}} className="remove"><i className="far fa-trash-alt "></i></button>

            </td>
            <td className="product-thumbnail">
                <a><img src={`../assets/Image/${props.item.img_url}`} alt="product" className="thumbnail-img"></img></a>
            </td>
            <td className="product-name" data-title="Product">{props.item.name}</td>
            <td className="product-price" data-title="Price">
                <span className="price-amount">${props.item.price}</span>
            </td>
            <td className="product-quantity" data-title="Quantity">

                <select id="quantity" onChange={(event) => handleQuantity(event, props.item)} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>

            </td>
            <td className="product-subtotal" data-title="Total">
                <span className="product-amount amount">${state.quantity * state.productPrice}</span>
            </td>
        </tr>
    );
}

export default CartItem;