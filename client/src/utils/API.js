import axios from 'axios';

export default {
    // Gets all boxes
    getBoxes: function () {
        return axios.get("/api/boxes");
    },
    // Gets the box with the given id
    getBox: function (id) {
        return axios.get("/api/boxes/" + id);
    },
    
    // Deletes the box with the given id
    deleteBox: function (id, customerId) {
        return axios.put("/api/deleteFromCart/" + customerId, {boxId: id});
    },
    // Saves a box to the database
    saveBox: function (boxData) {
        return axios.post("/api/boxes", boxData);
    },
    // Saves contents to Cart in database
    addToCart: function (data) {
        return axios({
                    method:"post",
                    url: '/api/addToCart',
                    data: data
    });
    },
    // Gets contents from Cart in databse based on customerId
    getCartItems: function (id) {
        return axios.get("/api/findCart/" + id);
    },
    updateProductQuantity: function (customerId, boxId, quantity,) {
        return axios.put("/api/updateCart/" + customerId, {quantity: parseInt(quantity), boxId: boxId}
    )}
};

