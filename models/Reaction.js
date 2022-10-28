const {Schema, Types} = require("mongoose")
const dateFormat = require("../utils/dateFormat.js")
const reactionSchema = new Schema({
    reactionId:{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody:{
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: ts => dateFormat(ts)
    },
},
{
    toJSON:{
        getters: true,
    },
})

module.exports = reactionSchema