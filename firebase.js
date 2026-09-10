const admin = require('firebase-admin');
const { firebase } = require('./env');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: firebase.projectId,
      clientEmail: firebase.clientEmail,
      privateKey: firebase.privateKey ? firebase.privateKey.replace(/\\n/g, '\n') : undefined,
    }),
  });
}

module.exports = admin;
