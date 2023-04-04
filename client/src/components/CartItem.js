import React, { useState, useEffect} from "react";

    function CartItem(props) {
        const [states, setState] = useState({
            product: [],
            quantity: 1,
            productPrice: props.item.Price,
            itemTotal: 0,
            customerId: ""
        })

    // if (!localStorage.getItem("cartID")) {
    //     //if cartID is not set in localstorage, then set it
    //     dispatch({
    //         id: cartID,
    //         type: SET_CART_ID
    //     })
    //     localStorage.setItem("cartID", cartID)

    // } else {
    //     //otherwise set global state with the existing cartID
    //     dispatch({
    //         id: localStorage.getItem("cartID"),
    //         type: SET_CART_ID
    //     })
    // }
    
        useEffect(()=>{
            var cartID = localStorage.getItem("cartID");
            setState({...states, customerId: cartID});
        }, [states.quantity])
        //console.log("product:", states.product)
        //console.log("product quantity:", state.quantity)


        const handleQuantity = (e) => {

            props.handleGrandTotal(states.quantity, parseInt(e.target.value), props.item.Price)
            setState({ ...states, quantity: parseInt(e.target.value) })
        }
        return (
            <tr className="cart-item">
                <td className="product-remove">
                    <button aria-label="Remove this item" onClick={(e) => { e.preventDefault(); props.handleRemove(props.item._id, states.customerId)}} className="remove"><i className="far fa-trash-alt "></i></button>

                </td>
                <td className="product-thumbnail">
                    <a><img src={`../assets/Image/${props.item.Img_url}`} alt="product" className="thumbnail-img"></img></a>
                </td>
                <td className="product-name" data-title="Product">{props.item.Name}</td>
                <td className="product-price" data-title="Price">
                    <span className="price-amount">${props.item.Price}/lb</span>
                </td>
                <td className="product-quantity" data-title="Quantity">

                    <select id="quantity" onChange={(event) => {event.preventDefault(); props.handleQuantity(props.item._id, states.customerId, parseInt(event.target.value)); handleQuantity(event, props.item)}} >
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
                    <span className="product-amount amount">${states.quantity * states.productPrice}</span>
                </td>
            </tr>
        );
    }

    export default CartItem;