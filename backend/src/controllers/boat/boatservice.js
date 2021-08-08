const Boat = require('../../models/boat.model');

exports.create = boatData => {
    const boat = new Boat(boatData);
    return boat.save();
};

exports.findAll = () => Boat.find().populate();

exports.findOne = id => Boat.findById(id).populate();

exports.update = (id, updateData) => Boat.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Boat.findByIdAndRemove(id);
