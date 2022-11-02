const { User, Thought } = require("../models")

module.exports = {
    getAllthoughts(re,res) {
        Thought.find()
        .then((thoughtdata) => res.json(thoughtdata))
        .catch((err) => res.status(500).json(err));
    },

    getThoughtsbyId(req, res) {
        Thought.findOne({ _id: req.params.ThoughtId })
          .then((Thought) =>
            !Thought
              ? res.status(404).json({ message: 'No application with that ID' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },

    createThoughts(req, res) {
      Thought.create({ thoughtText: req.body.thoughtText })
          .then((Thoughts) => {
            return Thought.findOneAndUpdate(
              { _id: req.body.userId },
              { $addToSet: { applications: Thoughts._id } },
              { new: true }
            );
          })
          .then((user) =>
            !user
              ? res.status(404).json({
                  message: 'Application created, but found no user with that ID',
                })
              : res.json('Created the application 🎉')
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },

    updateThought(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.ThoughtId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((Thought =>
            !Thought
              ? res.status(404).json({ message: 'No application with this id!' })
              : res.json(Thought)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          }));
    },








// }


// getApplications(req, res) {
//     Application.find()
//       .then((applications) => res.json(applications))
//       .catch((err) => res.status(500).json(err));
}