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
        return axios.delete("/api/deleteFromCart/" + id, {customerId});
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
};

