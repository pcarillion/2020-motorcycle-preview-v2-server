const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    mail: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 2},
    role: {type: String, enum: ['user', 'admin'], default: 'user'},
    favorites:[{type: Schema.Types.ObjectId, ref: "Bike"}]
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
