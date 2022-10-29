const { Thought } = require("../models")

module.exports = {
    getThoughts(re,res) {
        Thought.find()
        .then((thoughtdata) => res.json(thoughtdata))
        .catch((err) => res.status(500).json(err));
    },
    getThoughts(req, res) {
        Thought.findOne({ _id: req.params.ThoughtId })
          .then((Thought) =>
            !Thought
              ? res.status(404).json({ message: 'No application with that ID' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
    createThoughts(req, res) {
        Thought.create(req.body)
          .then((Thoughts) => {
            return User.findOneAndUpdate(
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

    updateApplication(req, res) {
        Application.findOneAndUpdate(
          { _id: req.params.applicationId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((application) =>
            !application
              ? res.status(404).json({ message: 'No application with this id!' })
              : res.json(application)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },








// }


// getApplications(req, res) {
//     Application.find()
//       .then((applications) => res.json(applications))
//       .catch((err) => res.status(500).json(err));
}