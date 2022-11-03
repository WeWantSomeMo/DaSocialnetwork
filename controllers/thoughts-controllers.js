const { User, Thought } = require("../models")

module.exports = {
    getAllthoughts(req,res) {
        Thought.find()
        .then((thoughtdata) => res.json(thoughtdata))
        .catch((err) => res.status(500).json(err));
    },

    getThoughtsbyId(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .then((thought) =>
            !Thought
              ? res.status(404).json({ message: 'No application with that ID' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },

    createThoughts(req, res) {
      Thought.create({ thoughtText: req.body.thoughtText, username: req.body.username })
          .then((thoughtsData) => {
            return User.findOneAndUpdate(
              { username: req.body.username },
              { $addToSet: { thoughts: thoughtsData._id } },
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

    updateThoughts(req, res) {
     Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No application with this id!' })
            : res.json(thought)
        )
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    },
  

    deleteThoughts(req, res) {
      Thought.findOneAndRemove({ _id: req.params.thoughtId })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No application with this id!' })
            : Thought.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId } },
                { new: true }
              )
        )
        .then((user) =>
          !user
            ? res.status(404).json({
                message: 'Application created but no user with this id!',
              })
            : res.json({ message: 'Application successfully deleted!' })
        )
        .catch((err) => res.status(500).json(err));
    },








// }


// getApplications(req, res) {
//     Application.find()
//       .then((applications) => res.json(applications))
//       .catch((err) => res.status(500).json(err));
}