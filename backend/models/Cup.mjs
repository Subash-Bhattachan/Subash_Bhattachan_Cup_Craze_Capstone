//models/Book.js: Define the data model for the library's books.
import mongoose from "mongoose";

const cupSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true, index: true },
  name: { type: String, required: true },
  company: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  featured: { type: Boolean, default: false }
});


let Cup = mongoose.model('Cup', cupSchema);


//module.exports = Cup;
export default Cup;