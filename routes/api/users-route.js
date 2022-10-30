const router = require("express").Router();
const {
    getAllusers,
    getUsersbyId,
    createUsers,
    updateUsers,
    deleteUsers,
} = require("../../controllers/user-controllers")

router.route("/getAllusers").get(getAllusers)

router.route("/getUsersbyId").get(getUsersbyId)

router.route("/createUsers").post(createUsers)

router.route("/updateUsers").patch(updateUsers)

router.route("/deleteUsers").delete(deleteUsers)




// router.get("/"), (req, res) => {
//     res.send("hey its user route")
// }

// router.route('/').get(getCallbackFunction).post(postCallbackFunction);

// router.route('/').get(getAllusers).post(getUsersbyId);

module.exports = router 