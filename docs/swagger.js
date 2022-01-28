const Blog = require('../schemas/blogSchema')
const User = require('../schemas/userSchema')
module.exports = {
    "openapi": "3.0.0",
    "info":
   { 
    "title": "Sample API",
    "description": "Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.",
    "version": "0.1.9"
    },
    "paths": {
        "/blogs":{
            "get":
            {
            "summary": "Returns a list of users.",
            "description": "Optional extended description in CommonMark or HTML"
            }
        },
        "/blogs/{username}":{
            "post":
            {
            "summary": "Creates post for certain users",
            "description": "Optional extended description in CommonMark or HTML",
            },
            "parameters":[
                {
                "name": "created_by",
                "in": "path",
                "schema":{
                    "$ref": Blog
                },
                "required": "true",
                "description": "user thats making the blog post"
                },
                {
                    "name": "created_at",
                    "in": "path",
                    "schema":{
                        "$ref": Blog
                    },
                    "required": "true",
                    "description": "where the blog post was created at "
                    },
                    {
                        "name": "blog_title",
                        "in": "path",
                        "schema":{
                            "$ref": Blog
                        },
                        "required": "true",
                        "description": "title of the blog. "
                        },
                        {
                            "name": "blog_content",
                            "in": "path",
                            "schema":{
                                "$ref": Blog
                            },
                            "required": "true",
                            "description": "what the blog says "
                            },
                            {
                                "name": "private",
                                "in": "path",
                                "schema":{
                                    "$ref": Blog
                                },
                                "required": "true",
                                "description": "if the post is private or not "
                                },
            ],
            "responses": {
                "200": {
                    "description": "blog was posted",
                    "content":{
                        "application/json":{
                            "schema": {
                                "$ref": Blog
                            }
                        }
                    }
                },
                "404": {
                    "description": "blog couldnt be made.",
                    "content":{
                        "application/json":{
                            "schema": {
                                "$ref": "error"
                            }
                        }
                    }
                },
            }
        },
        "/blogs/:username":{
            "get":
            {
            "summary": "Returns all posts made that arent private.",
            "description": "Optional extended description in CommonMark or HTML"
            },
            "parameters":[
                {
                "name": "username",
                "in": "path",
                "schema":{
                    "$ref": Blog
                },
                "required": "true",
                "description": "the user whos posts youre trying to get"
                },
            ],
            "responses": {
                "200": {
                    "description": "got users posts successfully",
                },
                "404": {
                    "description": "couldnt get users post.",
                },
            }
            

        },
        "/blogs/{id}":{
            "put":
            {
            "summary": "Updates a SPECFIC post using its id.",
            "description": "Optional extended description in CommonMark or HTML",
            "operationId": "updateBlog",
            },
            "parameters":[
                {
                "name": "id",
                "in": "path",
                "schema":{
                    "$ref": Blog
                },
                "required": "true",
                "description": "id of blog posts thats going to be updated."
                },
            ],
            "responses": {
                "200": {
                    "description": "got users posts successfully",
                },
                "404": {
                    "description": "couldnt get users post.",
                },
            }
        },
        "/blogs/:id":{
            "delete":
            {
            "summary": "Deletes a SPECFIC post using its id.",
            "description": "Optional extended description in CommonMark or HTML",
            "operationId": "deleteBlog",
            },
            "parameters":[
                {
                "name": "id",
                "in": "path",
                "schema":{
                    "$ref": Blog
                },
                "required": "true",
                "description": "id of blog posts thats going to be deleted."
                },
            ],
            "responses": {
                "200": {
                    "description": "deleted users posts successfully",
                },
                "404": {
                    "description": "couldnt delete users post.",
                },
            }
        },
        "/auth/register":{
            "post":
            {
            "summary": "Registers a user using username, password, email, birthday, and/or age.",
            "description": "Optional extended description in CommonMark or HTML"
            },
            "parameters":[
                {
                "name": "username",
                "in": "path",
                "schema":{
                    "$ref": User
                },
                "required": "true",
                "description": "username for making account"
                },
                {
                    "name": "password",
                    "in": "path",
                    "schema":{
                        "$ref": User
                    },
                    "required": "true",
                    "description": "password for making account"
                    },
                    {
                        "name": "email",
                        "in": "path",
                        "schema":{
                            "$ref": User
                        },
                        "required": "true",
                        "description": "email used for making account"
                        },
                        {
                            "name": "birthday",
                            "in": "path",
                            "schema":{
                                "$ref": User
                            },
                            "required": "true",
                            "description": "day the user was born"
                            },
                            {
                                "name": "age",
                                "in": "path",
                                "schema":{
                                    "$ref": User
                                },
                                "required": "false",
                                "description": "how old the user is"
                                },
            ],
            "responses": {
                "200": {
                    "description": "username and password obtained.",
                    "content":{
                        "application/json":{
                            "schema": {
                                "$ref": User
                            }
                        }
                    }
                },
                "404": {
                    "description": "username and password couldnt be obtained.",
                    "content":{
                        "application/json":{
                            "schema": {
                                "$ref": "error"
                            }
                        }
                    }
                },
            }
        },
        "/auth/login":{
            "post":
            {
            "summary": "Checks to see if user is created and logs user in.",
            "description": "Optional extended description in CommonMark or HTML"
            },
            "parameters":[
                {
                "name": "username",
                "in": "path",
                "schema":{
                    "$ref": User
                },
                "required": "true",
                "description": "username for logging into account"
                },
                {
                    "name": "password",
                    "in": "path",
                    "schema":{
                        "$ref": User
                    },
                    "required": "true",
                    "description": "password for logging into account"
                    },
            ],
            "responses": {
                "200": {
                    "description": "username and password obtained.",
                    "content":{
                        "application/json":{
                            "schema": {
                                "$ref": User
                            }
                        }
                    }
                },
                "404": {
                    "description": "username and password couldnt be obtained.",
                    "content":{
                        "application/json":{
                            "schema": {
                                "$ref": "error"
                            }
                        }
                    }
                },
            }
        },
    },
    "components":{
        "schemas":{
            "auth":{
            "type": "object",
            "properties":{
            "username":{
                "type": "string",
                "description": "username thats going to be used to make an account",
                "example": "tyler1234"
            },
            "password":{
                "type": "string",
                "description": "password thats going to be used to make an account",
                "example": "tylerpass123"
            },
            "email":{
                "type": "string",
                "description": "email thats going to be used to make an account",
                "example": "tyler@email.com"
            },
            "birthday":{
                "type": "string",
                "description": "birthday of user",
                "example": "jan 3, 2000"
            },
            "age":{
                "type": "number",
                "description": "how old the user is ",
                "example": "22"
                }
                }
            },
            "blogs":{
                "type": "object",
                "properties":{
                "created_by":{
                    "type": "string",
                    "description": "the name of the user that made the blog post.",
                    "example": "tyler1234"
                },
                "created_at":{
                    "type": "string",
                    "description": "where the blog post was made from.",
                    "example": "my house"
                },
                "blog_title":{
                    "type": "string",
                    "description": "title of the blog.",
                    "example": "what im doing today"
                },
                "blog_content":{
                    "type": "string",
                    "description": "what the blog post is going to say.",
                    "example": "today i am going to go to the store."
                },
                "private":{
                    "type": "boolean",
                    "description": "if the post is private or not, if true then only user can see the post.",
                    "example": "true"
                    }
                    }
                }
        }
    }
}