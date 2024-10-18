const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('your mongoose url');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
// type: mongoose.Schema.Types.ObjectId: This specifies that each element in the purchasedCourses array should be an ObjectId. 
//ObjectId is a unique identifier automatically generated by MongoDB for each document.
// ref: 'Course': This indicates that the ObjectId references another collection named ‘Course’. 
//In other words, it establishes a relationship between the user and the courses they have purchased.