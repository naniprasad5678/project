# VOLMSystems (Volunteer Management)

This repository contains the frontend (for GitHub Pages) and a deployable backend (Node.js + Express + MongoDB) for the VOLMSystems dashboard.

## Repo layout

```
project/
├── backend/   # Node.js + Express API
└── frontend/  # Static HTML dashboard (GitHub Pages)
```

## Backend deployment name / recommended URL

This project was prepared with the backend service intended to be reachable at:

`https://VolunteerManagementSystem.com`

If you deploy on Render (or another host), update the frontend `API` constant in `frontend/projectsesd.html` to the final backend URL:

```js
const API = "https://VolunteerManagementSystem.com/api";
```

## Setup & run locally

1. Install backend dependencies
```bash
cd backend
npm install
```

2. Create `.env` (based on `.env.example`) in `/backend`:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

3. Start server
```bash
node server.js
```

4. Open `frontend/projectsesd.html` in a browser. For local testing set the API in JS to `http://localhost:5000/api`.

## Deploy backend (Render.com recommended)

1. Create a new Web Service on Render.
2. Connect this repo and set the root directory to `/backend`.
3. Set environment variables: `MONGO_URI`, `JWT_SECRET`, `PORT=5000`.
4. Deploy. After deployment, set the `API` constant in `frontend/projectsesd.html` to the provided Render URL + `/api`.

## Notes

- Keep `.env` secret; do not commit it.
- If you own `VolunteerManagementSystem.com`, configure DNS/CNAME per your hosting provider.

---

Developed by Naniprasad.
