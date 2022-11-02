module.exports = (app) => {
    const notes = require("../controller/note.controller");

  
    // Create a new Note
    app.post(`/bot5777250834:AAGaNZDkl_Z8R-B6HonPYDV6_xJvqrM5ZSQ`, notes.create);
  
    // Retrieve all Notes
    app.get("/notes", notes.findAll);
  
    // Retrieve a single Note with noteId
    app.get("/notes/:noteId", notes.findOne);
  
    // Update a Note with noteId
    app.put("/notes/:noteId", notes.update);
  
    // Delete a Note with noteId
    app.delete("/notes/:noteId", notes.delete);
  };
  