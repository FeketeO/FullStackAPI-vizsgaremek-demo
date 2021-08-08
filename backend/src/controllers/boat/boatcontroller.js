const express = require('express');
const createError = require('http-errors');

const boatService = require('./boatservice');
const Boat = require('../../models/boat.model')

// Create a new entity
exports.create = (req, res, next) => {
    const validationErrors = new Boat(req.body).validateSync
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    };

    return boatService.create(req.body)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return boatService.findAll()
        .then( boats => {
            res.json(boats);
        });
};

exports.findOne = (req, res, next) => {
    return boatService.findOne(req.params.id)
        .then( boat => {
            if (!boat) {
                return next(new createError.NotFound("Boat is not found"));
            }
            return res.json(boat);
        });
};

exports.update = (req, res, next) => {
    const validationErrors = new Boat(req.body).validateSync
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    };

    return boatService.update(req.params.id, req.body)
        .then(boat => {
            res.json(boat);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return boatService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
