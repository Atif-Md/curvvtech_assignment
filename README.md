
# Atif Backend Project

This is a Node.js application for managing users and devices, with JWT-based authentication.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [Users](#users)
  - [Devices](#devices)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd atif_backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

## Running the Application

- **Development mode (with auto-reloading):**
  ```bash
  npm run dev
  ```

- **Production mode:**
  ```bash
  npm start
  ```

## API Endpoints

All API endpoints are protected with JWT authentication unless otherwise specified.

### Users

- **Register a new user (Public)**
  - **POST** `/api/users/register`
  - **Body:**
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "yourpassword",
      "role": "user"
    }
    ```

- **Login a user (Public)**
  - **POST** `/api/users/login`
  - **Body:**
    ```json
    {
      "email": "john.doe@example.com",
      "password": "yourpassword"
    }
    ```

### Devices

- **Register a new device**
  - **POST** `/api/devices/register`
  - **Headers:** `Authorization: Bearer <token>`
  - **Body:**
    ```json
    {
      "name": "My Device",
      "type": "sensor",
      "status": "active"
    }
    ```

- **List all devices**
  - **GET** `/api/devices`
  - **Headers:** `Authorization: Bearer <token>`
  - **Query Parameters (optional):**
    - `type`: Filter by device type
    - `status`: Filter by device status

- **Update a device**
  - **PUT** `/api/devices/:id`
  - **Headers:** `Authorization: Bearer <token>`
  - **Body:**
    ```json
    {
      "name": "Updated Device Name",
      "status": "inactive"
    }
    ```

- **Delete a device**
  - **DELETE** `/api/devices/:id`
  - **Headers:** `Authorization: Bearer <token>`

- **Device Heartbeat**
  - **POST** `/api/devices/:id/heartbeat`
  - **Headers:** `Authorization: Bearer <token>`
