
import mongoose, { Schema } from 'mongoose';


const applicationSchema = new mongoose.Schema({
    job: {
        type: Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },

    applicant: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    status: {
        type: String,
        enum: ['applied', 'interviewed', 'hired', 'rejected'],
        default: 'applied'
    },

    appliedAt: {
        type: Date,
        default: Date.now
    }
});

const Application = mongoose.model('Application', applicationSchema);

export default Application;
