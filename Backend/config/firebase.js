const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "kewa-webs-fefe0",
    clientEmail: "firebase-adminsdk-fbsvc@kewa-webs-fefe0.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nyahan_apni_private_key_daal_bina_quotes_ke\n-----END PRIVATE KEY-----".replace(/\\n/g, '\n')
  })
});

module.exports = admin;
