import mongoose from 'mongoose'


const personSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthDay: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    streetNumber: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
});


export default  mongoose.models.person || mongoose.model('person', personSchema)

