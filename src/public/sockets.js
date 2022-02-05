const socket = io.connect();

/**
 * create a new note
 * @param {string} title a title for a new note
 * @param {string} description a description for a new note
 */
export const saveNote = (title, description) => {
  socket.emit("client:newnote", {
    title,
    description,
  });
};

/**
 * delete a note based on an Id
 * @param {string} id a note ID
 */
export const deleteNote = (id) => {
  socket.emit("client:deletenote", id);
};

/**
 *
 * @param {string} id note ID
 * @param {string} title note title
 * @param {string} description note description
 */
export const updateNote = (_id, title, description) => {
  socket.emit("client:updatenote", {
    _id,
    title,
    description,
  });
};

/**
 * Load an Array of Notes
 * @param {function} callback A function to render Notes
 */
export const loadNotes = (callback) => {
  socket.on("server:loadnotes", callback);
};

export const onNewNote = (callback) => {
  socket.on("server:newnote", callback);
};

export const onSelected = (callback) => {
  socket.on("server:selectednote", callback);
};

export const getNoteById = (noteId) => {
  socket.emit("client:getnote", noteId);
};
