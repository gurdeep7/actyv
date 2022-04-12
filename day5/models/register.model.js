const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
      first_name: { type: String, required: true},
      last_name: { type: String, required: true },
      address:{type:String, required: true},
      phone: { type: String, required: true },
      dob:{type:Date, required:true}
    },
    {
      versionKey: false,
      timestamps: true,
      
    }
  );
  module.exports = model("user", userSchema); 