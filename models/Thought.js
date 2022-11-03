const {Schema, model} = require("mongoose")
const { format_date } = require("../utils/dateFormat.js")
const reactionSchema = require("./Reaction.js")
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: ts => format_date(ts)
    },
    reactions: [
        reactionSchema
    ],
    username: {
        type: String,
        required: true,

    }
},

{
    toJSON:{
        getters: true,
    }
})

thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length
})
const Thought = model("Thought", thoughtSchema)

module.exports = Thought