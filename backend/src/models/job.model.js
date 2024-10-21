import mongoose, { Schema } from 'mongoose';

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    salaryRange: {
        type: String,
        required: true
    },

    requiredSkills: {
        type: [String],
        required: true
    },

    status: {
        type: String,
        enum: ['open', 'closed'],
        default: 'open',
        required: true
    },

    company: {
        type: Schema.Types.ObjectId,  
        ref: 'User',
        required: true
    },

    postedAt: {
        type: Date,
        default: Date.now  
    },

    applications: [{
        type: Schema.Types.ObjectId,  
        ref: 'Application'
    }]
}, {
    timestamps: true  
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
