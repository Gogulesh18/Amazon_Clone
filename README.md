## 🔧 Environment Variable Setup

Before running the application, you need to create `.env` files in both the `backend` and `amazon-frontend` folders.

---

### 🖥️ Backend (`/backend/.env`)

Create a `.env` file inside the `backend` folder with the following environment variables:

```env
PORT=your_backend_port
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=your_token_expiration_duration
CONNECTION_STRING=your_mongodb_connection_uri

🌐 Frontend (/amazon-frontend/.env)

Create a .env file inside the amazon-frontend folder with the following environment variable:

REACT_APP_API_URL=your_backend_api_url

📦 Seeding the Database
To insert product data into the database from the MOCK_DATA.json file, run the seed.js file located in the backend folder.

Navigate to the backend folder:
cd backend
Run the seed script:
node seed.js
This will populate your database with initial product data.