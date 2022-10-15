const model = require ("../models/sub_book_model");


function get_book(req,res)
{
res.json(model);
}

module.exports={
  
    post_book,  
    get_book,
    get_books,
}