const { User, Thought  } = require('../models');

module.exports = {
  async getUsers(req, res){
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res){
    try {
      const user = await User.findOne({ _id: req.params.userId}).select('-__v');
      if (!user) {
        return res.status(404).json({message: 'No user with this ID'});
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createUser (req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  async deleteUser(req, res){
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId});

      if(!user) {
        return res.status(404).json({ message: 'No user with that ID'});
      }
      await Thought.deleteMany({ _id: { $in: user.thought}});
      res.json({ message: 'User Deleted!'})
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res){
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId},
        { $set: req.body},
      );
      if (!user) {
        return res.status(404).json({ message: 'no user with this is!'});
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId},
        { $addToSet: {friends: req.params.friendId}},
      )
      const friend = await User.findOneAndUpdate(
        { _id: req.params.friendId},
        { $addToSet: {user: req.params.userId}},
      )
      if( !user || !friend ){
        return res.status(404).json({ message:'no user or friend with this ID!'});
    }
    res.json(user);
  } 
    catch (err) {
      res.status(500).json(err);
    }
  }
}