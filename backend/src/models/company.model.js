import mongoose, { Schema } from 'mongoose';

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    industry: {
        type: String,
        required: true
    },

    website: {
        type: String,
        required: true
    },

    jobs: [{
        type: Schema.Types.ObjectId, 
        ref: 'Job'
    }]

}, {
    timestamps: true  
});

const Company = mongoose.model('Company', companySchema);

export default Company;
