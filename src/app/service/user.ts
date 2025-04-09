import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
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
    enum: ['admin'],
    default: 'admin'
  }
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model('User', UserSchema);

const exampleUser = {
  username: "exampleUser",
  password: "randomPassword456!",
  role: "admin"
};