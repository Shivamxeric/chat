# Web-Based Chat Application Requirements

This is  Web-Based Chat-Application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to register, log in, and chat with other users in real time.

## Features

- User authentication: Users can register and log in securely.
- Real-time messaging: Users can chat with each other in real-time.
- Responsive design: The app is responsive and works well on both desktop and mobile devices.

## Technologies Used

- MongoDB: NoSQL database for storing user data and chat messages.
- Express.js: Web application framework for Node.js used to build the backend server.
- React.js: JavaScript library for building user interfaces.
- Node.js: JavaScript runtime environment for running server-side code.
- Socket.io: Real-time engine for WebSockets to enable real-time communication between clients and server.
- Tailwind/CSS: Markup and styling for the frontend.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/arvindk2025/Chat-Application
   ```

2. Navigate to the project directory:

   ```bash
   cd Chat-Application
   ```

3. Install dependencies for both frontend and backend for this Go to the frontend Package.json file and for Backend Dependencies refer chat web app application package.json file  Which is available in Chat-Application folder directly:

   ```bash
   cd frontend && npm install
    npm install (dependencies name directly)
   ```

4. Set up environment variables:
   
   - Create a `.env` file in the `server` directory.
   - Define the following variables in the `.env` file:
     ```
     PORT=3001
     MONGODB_URI=<your_mongodb_uri>
     JWT_SECRET=<your_jwt_secret>
     ```

5. Run the development server:

   ```bash
   cd ../ && npm run server
   ```

6. Open your browser and navigate to `http://localhost:${PORT}` to view the app.

## Usage

1. Register for an account or log in if you already have one.
2. Once logged in, you'll be redirected to the chat interface.
3. Start messaging with other users who are online in real-time.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or new features you'd like to see added.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

 
