const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    email: {
        type: String,
        unique: [true, "EMAIL ID ALREADY EXIST"],
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Mail");
            }
        }
    },
    phone: {
        type: Number,
        minlength: 10,
        maxlength: 10
    },
    address: {
        type: String,
        required: true

    }
});

const student = new mongoose.model('student',studentSchema);

module.exports = student;