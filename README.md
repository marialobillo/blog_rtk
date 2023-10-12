## Blog API - Nodejs/Expressjs + MongoDB

### Installation

```
npm install
```

### Run

```
npm start
```


### API Endpoints

## Authentication

```
Register : POST https://stark-woodland-39967-6ce08a14883b.herokuapp.com/api/v1/auth/register
Payload : 
{
	"fullName": "Jhon Doe",
	"email": "jhon@mail.com",
	"password": "123456"
}

```

```
Login : POST https://stark-woodland-39967-6ce08a14883b.herokuapp.com/api/v1/auth/login
Payload : 
{
	"email": "jhon@mail.com",
	"password": "123456"
}

```

## Blog

```
Create Blog : POST https://stark-woodland-39967-6ce08a14883b.herokuapp.com/api/v1/blogs
Payload : 
{
	"title": "This is a title",
	"content": "This a content",
	"authorId": "6527df778315bb48cc357a4a"
}

Bearer token needed
```

```
Get all blogs : GET https://stark-woodland-39967-6ce08a14883b.herokuapp.com/api/v1/blogs 

Bearer token needed
```

```
Get blogs by authorId : GET https://stark-woodland-39967-6ce08a14883b.herokuapp.com/api/v1/blogs/6527df778315bb48cc357a4a

Bearer token needed
```

```
Update Blog : PUT https://stark-woodland-39967-6ce08a14883b.herokuapp.com/api/v1/blogs/5f1b4b4b6b4b5b0017b4b5b4
Payload : 
{
	"title": "This is a title edited",
	"content": "This a content edited",
	"authorId": "6527df778315bb48cc357a4a"
}

Bearer token needed
```

```
Delete Blog : DELETE https://stark-woodland-39967-6ce08a14883b.herokuapp.com/api/v1/blogs/5f1b4b4b6b4b5b0017b4b5b4

Bearer token needed
```

## Comments

```
Create Comment : POST https://stark-woodland-39967-6ce08a14883b.herokuapp.com/api/v1/comments
Payload : 
{
	"message": "This is a comment",
	"blogId": "Blog Id should be here",
	"authorId": "6527df778315bb48cc357a4a"
}

Bearer token needed
```

```
Get comments by blogId : GET https://stark-woodland-39967-6ce08a14883b.herokuapp.com/api/v1/comments/6527df778315bb48cc357a4a

Bearer token needed
```

```
Update Comment : PUT https://stark-woodland-39967-6ce08a14883b.herokuapp.com/api/v1/comment/65257a57995a4385b5e738b4
Payload : 
{
	"message": "This is a message",
	"authorId": "65255db2345e3eb27ce0c958",
	"blogId": "65257a57995a4385b5e738b4"
}

Bearer token needed
```

```
Delete Comment : DELETE https://stark-woodland-39967-6ce08a14883b.herokuapp.com/api/v1/comments/65257a57995a4385b5e738b4

Bearer token needed
```






