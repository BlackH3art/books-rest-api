# books-rest-api

This is simple REST API, where you are able to send requests and:
- create book
- get all books
- delete book

Everything will be stored in local `sqlite` file data base.

Application is created with `Active Record` pattern and two different approaches:
- procedural - *(branch: main)*
- object oriented programming - *(branch: main-oop)*

---------

To test this application, first clone this repository:
```
gh repo clone BlackH3art/books-rest-api
```
Install all necessary dependencies:
```
npm install
```

Now you can start application and send your first requests:
```
npm start
```


## Endpoints:
### `/books`
#### method `GET` - to get all of the books stored in your local db.
Example response:
```json
[
    {
        "id": "aea417a0-e29b-440a-87e2-32bddb79eda3",
        "title": "Lord of the Ring - RIP krasnal",
        "author": "Maks Torpeda"
    },
    {
        "id": "ec848a5b-82a7-4198-a3c2-c7a30b4310aa",
        "title": "Kuternoga - hospital",
        "author": "Węgorz"
    },
    {
        "id": "5d40968c-85b0-4b83-9146-523b2a6417d0",
        "title": "Musztarda po obiedzie",
        "author": "Kucharz akrobata"
    }
]
```
#

### `/books/add`
#### method `POST` - to add book to your local db.
Required data:
```json
{
    "title": "title of the book you want to add",
    "author": "author"
}
```
Expected status code: `201`

Example response: 
```json
{
    "title": "Musztarda po obiedzie",
    "author": "Kucharz akrobata",
    "id": "cb20ff10-6c06-4dd7-a400-18eab6409414"
}
```
#

### `/books/delete/:id`
#### method `DELETE` - to delete book from db by given ID.
Required param:
`:id` - id of the book;

Expected status code: `204` - no content
