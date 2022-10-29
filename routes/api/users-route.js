const router = require("express").Router();
const {
    getAllusers,
    getUsersbyId,
    createUsers,
    updateUsers,
    deleteUsers,
} = require("../../controllers/user-controllers")

router.route("/getAllusers").get(getAllusers)

router.route("/createUsers").post(createUsers)



// router.get("/"), (req, res) => {
//     res.send("hey its user route")
// }

// router.route('/').get(getCallbackFunction).post(postCallbackFunction);

// router.route('/').get(getAllusers).post(getUsersbyId);

module.exports = router 