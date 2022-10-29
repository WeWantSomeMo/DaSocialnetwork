const { User, Thought } = require("../models")


const userController = {
    getAllusers(request,response) {
        User.find().then((res)=> {
            console.log(res, "This is the response. UCln7")
            response.json(res)
        }).catch((err)=> {
            console.log(err,"This went WROng. UCln11")
            response.status(500).json(err)
        })
    },

    createUsers(request,response) {
        console.log(request, "This is the Request CUln16")
        User.create(request.body).then((res)=> {
            response.json(res)
        }).catch((err)=> {
            console.log(err, "this is the error on CUln20")
            response.status(500).json(err)
        })
    }
}

module.exports = userController