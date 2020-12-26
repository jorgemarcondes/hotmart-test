const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpeakersSchema = new Schema({
  title: String,
  jobTitle: String,
  highlighted: Boolean,
  avatar: String
});

const Speakers = mongoose.model("speakers", SpeakersSchema);
module.exports = Speakers;
