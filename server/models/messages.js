let db = require('./../config/connexion.js').messages;


exports.getById = (req, res) => {

    let id = req.params.id;

    db.select('#'+id).one()
        .then( (data) => {
            res.status(200).send(data);
        });
};

exports.get = (req, res) => {

    db.select().from('messages').all()
        .then( (data) => {
            res.status(200).send(data);
        });

};

exports.post = (req, res, callback) => {

    db.insert().into('messages').set(req.body).one()
        .then( (msg) => {
            res.status(201).send('Inserted record: ', msg);
        });
};

exports.put = (req, res, callback) => {

    let id = req.params.id;

    db.update('#'+id)
        .set(req.body)
        .scalar()
        .then( (total) => {
            res.status(201).send(total);
        });

};

exports.delete = (req, res, callback) => {

    let id = req.params.id;

    db.record.delete('#'+id)
        .then((total) => {
            res.status(201).send(total);
        });
}