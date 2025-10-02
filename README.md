# SECUREBOX

A lightweight file storage app with user authentication, file encryption, and automated deployment.  
Built with **Node.js**, **Firebase**, **HTML/CSS**, and **Bash scripts**.

---

## Features
- **User Authentication** (Firebase Auth – email & password)
- **Secure File Uploads** (files encrypted before storage)
- **Encrypted Storage** (AES-256 via Node.js `crypto` module)
- **File Retrieval & Decryption** (download your files safely)
- **Automated Deployment** (Bash scripts for setup & deploy)
- **Simple UI** (minimal HTML/CSS frontend)

---

## 🛠 Tech Stack
- **Backend:** Node.js (Express)
- **Authentication & Storage:** Firebase
- **Frontend:** HTML, CSS
- **Encryption:** Node.js `crypto`
- **Deployment Automation:** Bash scripts

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/securebox.git
   cd securebox

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Firebase**

   * Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   * Enable **Email/Password Authentication**.
   * Enable **Firebase Storage**.
   * Download and place your `firebaseConfig` in `config/firebase.js`.

4. **Configure Environment Variables**
   Create a `.env` file:

   ```env
   FIREBASE_API_KEY=your_api_key
   FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   FIREBASE_PROJECT_ID=your_project_id
   FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   FIREBASE_APP_ID=your_app_id
   ENCRYPTION_SECRET=your_secret_key
   ```

5. **Run the app**

   ```bash
   npm start
   ```

6. **Visit in browser**

   ```
   http://localhost:3000
   ```

---

## Deployment

A simple Bash script is included for automated deployment.
Run:

```bash
./deploy.sh
```

This script will:

* Install dependencies
* Run build (if any)
* Deploy to Firebase Hosting / Heroku / your target environment

---

## Usage

1. Register/Login with your email and password.
2. Upload a file – it will be **encrypted** before storage.
3. Download your file – it will be **decrypted** when retrieved.

---

## Future Improvements

* File sharing between users
* Drag & drop UI for uploads
* Folder support
* Advanced encryption keys per user

---
