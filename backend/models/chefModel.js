const mongoose = require("mongoose");

const recipieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a title"],
    },
    description: {
      type: String,
      required: [true, "Please enter a description"],
    },
  },
  {
    timestamps: true,
  }
);

const chefSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
    },
    cousine: {
      type: String,
      required: [true, "Please enter a cousine"],
    },
    recipies: [recipieSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Chef", chefSchema);
