const Note = require("../models/note.model.js");
const TelegramBot = require("node-telegram-bot-api");
const Ru =require("../models/ru.model")
const Uz =require("../models/uz.model")
const token = "5777250834:AAGaNZDkl_Z8R-B6HonPYDV6_xJvqrM5ZSQ";

const bot = new TelegramBot(token, { polling: true });
// bot.setWebHook(`localhost:4000/bot${token}`);

// Create and Save a new Note
exports.create = async (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  bot.on("message", (msg) => {
    bot.sendMessage(msg.chat.id);
    console.log(msg);
  });
  bot.sendMessage(
    -1001658002544,
    ` #Contact 👋
  ${req.body.phone ? "📞Phone:" + req.body.phone : "📞Phone: ☘️☘️☘️"}
  ${
    req.body.username
      ? "🆔Telegram UserName:" + req.body.username
      : "🆔Telegram UserName: ☘️☘️☘️"
  }
  👨‍💼(💁‍♀️)Name :${req.body.name ? req.body.name : "###"}
  📖Team : ${req.body.decr ? req.body.decr : "###"}
  `
  );
  // Create a Note
  const note = await new Note({
    phone: req.body.phone,
    username: req.body.username,
    name: req.body.name,
    decr: req.body.decr,
  });

  // Save Note in the database
  await note
    .save()
    .then((data) => {
      res.send(data);
      console.log("post");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Note.",
      });
    });
};

// Retrieve and return all notes from the database.
exports.ru = (req, res) => {
  Ru.find()
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes.",
      });
    });
};
exports.uz = (req, res) => {
  Uz.find()
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes.",
      });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
  Note.findById(req.params.noteId)
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      res.send(note);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving note with id " + req.params.noteId,
      });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }

  // Find note and update it with the request body
  Note.findByIdAndUpdate(
    req.params.noteId,
    {
      title: req.body.title || "Untitled Note",
      content: req.body.content,
    },
    { new: true }
  )
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      res.send(note);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      return res.status(500).send({
        message: "Error updating note with id " + req.params.noteId,
      });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  Note.findByIdAndRemove(req.params.noteId)
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      res.send({ message: "Note deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      return res.status(500).send({
        message: "Could not delete note with id " + req.params.noteId,
      });
    });
};
