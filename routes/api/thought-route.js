const router = require("express").Router();
const {
    getAllthoughts,
    getThoughtsbyId,
    createThoughts,
    deleteThoughts,
} = require("../../controllers/thought-controllers");
const { route } = require("./thought-controllers");

router.route("/getAllthoughts").get(getAllthoughts)

router.route("/createThoughts").post(createThoughts)

router.route("/getThoughtsbyId").get(getThoughtsbyId)

router.route("/deleteThoughts").delete(deleteThoughts)





module.exports = router 