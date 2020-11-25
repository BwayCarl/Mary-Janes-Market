import axios from 'axios';

export default {
    // Gets all posts
    getBoxes: function () {
        return axios.get("/api/boxes");
    },
    // Gets the post with the given id
    getBox: function (id) {
        return axios.get("/api/boxes/" + id);
    },
    // Deletes the post with the given id
    deleteBox: function (id) {
        return axios.delete("/api/boxes/" + id);
    },
    // Saves a post to the database
    saveBox: function (boxData) {
        return axios.post("/api/boxes", boxData);
    }
};

