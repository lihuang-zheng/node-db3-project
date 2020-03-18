const db = require('../data/db.config');

function find() {
    return db('schemes')
};

function findById(id) {
    return db('schemes').where({id})
};

function findSteps(id) {
    return db('steps')
        .join('schemes', 'schemes.id', 'steps.scheme_id')
        .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .where({scheme_id : id})
};

function findAllSteps() {
    return db('steps')
};

function add(scheme) {
    return db('schemes').insert(scheme);
};

function update(changes, id) {
    return db('schemes').where({id}).update(changes);
};

function remove(id) {
    return db('schemes').where({id}).delete()
}

module.exports = {
    find,
    findById,
    findSteps,
    findAllSteps,
    add,
    update,
    remove
} 