# UrRoomsy

**UrRoomsy** is a full-stack video conferencing web application designed to provide seamless, real-time communication. It features secure user authentication, meeting history tracking, and a robust video-calling interface powered by WebRTC and Socket.io.

##  Features

* **Real-time Video & Audio**: High-quality video conferencing using WebRTC.
* **Secure Authentication**: User registration and login managed via JWT.
* **Meeting History**: Keep track of your past meetings and join codes.
* **Instant Joining**: Join meetings quickly using unique room IDs.
* **Responsive Design**: A modern UI built with React that works on various screen sizes.

## 🛠️ Tech Stack

* **Frontend**: React.js, Material UI, CSS Modules.
* **Backend**: Node.js, Express.js.
* **Database**: MongoDB (via Mongoose).
* **Real-time Communication**: Socket.io.

##  Prerequisites

Before you begin, ensure you have the following installed:

* [Node.js](https://nodejs.org/) (v14 or higher)
* [MongoDB](https://www.mongodb.com/) (Local or Atlas)
* npm or yarn

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/UrRoomsy.git
cd UrRoomsy

```

### 2. Backend Setup

1. Navigate to the backend directory:
```bash
cd backend

```


2. Install dependencies:
```bash
npm install

```


3. Create a `.env` file in the `backend` folder and add your credentials:
```env
MONGO_URL=your_mongodb_connection_string
PORT=8000

```


4. Start the backend server:
```bash
npm start

```



### 3. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
```bash
cd frontend

```


2. Install dependencies:
```bash
npm install

```


3. Start the React development server:
```bash
npm start

```


The app should now be running at `http://localhost:3000`.

##  Available Scripts

### Frontend

* `npm start`: Runs the app in development mode.
* `npm run build`: Builds the app for production to the `build` folder.
* `npm test`: Launches the test runner.

### Backend

* `npm start`: Starts the Express server using `nodemon` or `node`.
