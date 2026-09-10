const admin = require('firebase-admin');

// Safely reading from environment variables
const privateKey = process.env.FIREBASE_PRIVATE_KEY 
  ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') 
  : undefined;

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "kewa-webs-fefe0",
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: privateKey
  })
});

module.exports = admin;
