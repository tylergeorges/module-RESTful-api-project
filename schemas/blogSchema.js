const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    created_by: {type: String, required: true},
    created_at:{type: String, required: true},
    blog_title: {type: String, required: true},
    blog_content:{type: String, required: true},
    private:{type: Boolean, required: true},
    id: {type: mongoose.SchemaTypes.ObjectId}

})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog