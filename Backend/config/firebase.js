const admin = require('firebase-admin');

// Initialize Firebase Admin with direct project ID to bypass env issue
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "kewa-webs-fefe0",
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined
  })
});

module.exports = admin;
