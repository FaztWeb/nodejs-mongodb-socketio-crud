import { appendNote, renderNotes, fillForm, onHandleSubmit } from "./ui.js";
import { loadNotes, onNewNote, onSelected } from "./sockets.js";

// Load initial Notes
window.addEventListener("DOMContentLoaded", () => {
  loadNotes(renderNotes);
  onNewNote(appendNote);
  onSelected(fillForm);
});

// Save a new Note
const noteForm = document.querySelector("#noteForm");
noteForm.addEventListener("submit", onHandleSubmit);
