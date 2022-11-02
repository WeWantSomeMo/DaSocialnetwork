const router = require("express").Router();
const {
    getAllthoughts,
    getThoughtsbyId,
    createThoughts,
    updateThoughts,
    deleteThoughts,
} = require("../../controllers/thoughts-controllers");

router.route("/getAllthoughts").get(getAllthoughts)

router.route("/createThoughts").post(createThoughts)

router.route("/updateThoughts").post(updateThought)

// router.route("/getThoughtsbyId").get(getThoughtsbyId)

router.route("/deleteThoughts").delete(deleteThoughts)





module.exports = router 