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
        "/blogs/:username":{
            "post":
            {
            "summary": "Creates post for certain users",
            "description": "Optional extended description in CommonMark or HTML",
            }
        },
        "/blogs/:username":{
            "get":
            {
            "summary": "Returns all posts made that arent private.",
            "description": "Optional extended description in CommonMark or HTML"
            }
        },
        "/blogs/:id":{
            "put":
            {
            "summary": "Updates a SPECFIC post using its id.",
            "description": "Optional extended description in CommonMark or HTML"
            }
        },
        "/blogs/:id":{
            "delete":
            {
            "summary": "Deletes a SPECFIC post using its id.",
            "description": "Optional extended description in CommonMark or HTML"
            }
        },
        "/auth/register":{
            "post":
            {
            "summary": "Registers a user using username, password, email, birthday, and/or age.",
            "description": "Optional extended description in CommonMark or HTML"
            }
        },
        "/auth/login":{
            "post":
            {
            "summary": "Checks to see if user is created and logs user in.",
            "description": "Optional extended description in CommonMark or HTML"
            }
        },
    }
}