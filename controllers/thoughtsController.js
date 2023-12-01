const { User, Thought  } = require('../models');


module.exports = {
  async getThoughts(req, res){
    try{
      const thoughts = await Thought.find();
      res.json(thoughts);
      // console.log(Thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res){
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId }).select('-__v');
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
      const thought = await Thought.findoneAndDelete({ _id: req.params.thoughtId});
      if (!thought) {
        return res.status(404).json({ message: 'No thought with this ID'});
      }
      await Thought.deleteMany({ _id: { $in: thought.user }});
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
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
};


