const { User, Thought  } = require('../models');


module.exports = {
  async getThoughts(req, res){
    try{
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ id: req.params.thoughtId });
      if (!thought) {
        return res.status(404).json({ message: 'No thought with this ID'});
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err)
      return res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete( { id: req.params.thoughtId} )
      if (!thought) {
        return res.status(404).json({ message: 'No thought with this ID'});
      }
      // await Thought.deleteMany({ id: { $in: thought.user }});
      res.json(thought)
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { id: req.params.thoughtId },
        { $set: req.body },
      );
      if (!thought) {
        return res.status(404).json({ message: ' No thought with this ID!'});
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async     createReaction({ params, body }, res) {
   await Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: { reactions: body } },
    )
    .then(thought => {
        if(!thought) {
            res.status(404).json({ message: 'No user found with this id.' });
            return;
        }
        res.json(thought)
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},
async   deleteReaction({ params }, res) {
   await Thought.findOneAndDelete(
      { id: params.thoughtId},
  )
  .then(thought => res.json(thought))
  .catch(err => {
      console.log(err);
      res.status(400).json(err);
  });
}
}


