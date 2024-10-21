import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['job_seeker', 'employer'],
        required: true
    },

    profile: {
        location: {
            type: String,
            required: true
        },
        contact: {
            type: String,
            required: true
        },
        experience: {
            type: String,
            required: function() {
                return this.role === 'job_seeker';
            }
        },
        skills: {
            type: [String],
            required: function() {
                return this.role === 'job_seeker';
            }
        },
        company: {
            type: String,
            required: function() {
                return this.role === 'employer';
            }
        }
    }

}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
