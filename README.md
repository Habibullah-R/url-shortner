# URL Shortener

This is a complete project made in MERN that shortens your lengthy urls.

## Features

- **URL Shortening**: Convert long URLs into short, easy-to-share links.
- **Custom Short URLs**: Option to create custom short URLs.
- **URL Redirection**: Redirect users to the original URL when they visit the short URL.
- **URL Management**: View, update, and delete shortened URLs.
- **Analytics**: Track the number of clicks on each short URL.
- **User Authentication**: Secure user login and registration.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener/api
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the `api` directory and add your MongoDB URI and server port:
   ```env
   MONGO_URI=<your-mongodb-uri>
   PORT=<server-port>
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

## API Endpoints

### URL Management
- **POST** `/url/shorten`: Shorten a long URL.
- **DELETE** `/url/delete/:id`: Delete a shortened URL by ID.
- **PUT** `/url/update/:id`: Update a shortened URL by ID.
- **GET** `/url/:code`: Access the original URL using the short URL code.
- **GET** `/url/allUrls`: Get all shortened URLs.

## Project Structure

```
url-shortener/
├── api/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── src/
│   │   ├── controllers/
│   │   │   └── url.controller.js
│   │   ├── db/
│   │   │   └── db.js
│   │   ├── index.js
│   │   ├── models/
│   │   │   └── url.model.js
│   │   └── routes/
│   │       └── url.routes.js
├── client/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── public/
│   ├── README.md
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── ConfirmationPopup.jsx
│   │   │   └── Modal.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── vite.config.js
```

## Technologies Used

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)


## Description

Here is description of project [Description](https://roadmap.sh/projects/url-shortening-service)

## License

This project is licensed under the ISC License.

