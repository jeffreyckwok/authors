const Author = require("../models/author.model");

module.exports.findAllAuthors = (req, res) => {
  Author.find({})
    .then(authors => res.json(authors))
    .catch(err => res.status(400).json(err));
};

module.exports.findOneAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err));
};

module.exports.createNewAuthor = (req, res) => {
  const { name } = req.body
  Author.create({
    name
  })
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err));
};

module.exports.updateAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, {runValidators: true})
    .then(updatedAuthor => res.json(updatedAuthor))
    .catch(err => res.status(400).json(err));
};

module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.status(400).json(err));
};
