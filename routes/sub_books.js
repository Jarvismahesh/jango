const express = require ("express");

const books_ctrl = require("../controller/books_ctrl");

const sub_books_rot = express.Router();

sub_books_rot.get("/",sub_books.get_books);
sub_books_rot.get("/:id",books_ctrl.get_book);
sub_books_rot.post("/",books_ctrl.post_book);

module.exports = sub_books_rot;