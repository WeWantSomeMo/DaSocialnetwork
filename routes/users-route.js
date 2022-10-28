const router = require("express").Router();
// const {
//     getAllusers,
//     getUsersbyId,
//     createUsers,
//     updateUsers,
//     deleteUsers,
// } = require("../server")


router.get("/"), (req, res) => {
    res.send("hey its user route")
}
// router.route('/').get(getCallbackFunction).post(postCallbackFunction);

// router.route('/').get(getAllusers).post(getUsersbyId);

module.exports = router 