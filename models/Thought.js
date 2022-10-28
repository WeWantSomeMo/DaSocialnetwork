const {Schema, model} = require("mongoose")
const dateFormat = require("../utils/dateFormat.js")
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
        get: ts => dateFormat(ts)
    },
    reactions: [
        reactionSchema
    ]
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