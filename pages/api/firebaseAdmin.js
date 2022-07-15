import * as firebaseAdmin from "firebase-admin";

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.FIRE_BASE_ADMIN_PRIVATE_KEY,
      clientEmail: process.env.FIRE_BASE_ADMIN_CLIENT_EMAIL,
      projectId: process.env.FIRE_BASE_ADMIN_PROJECT_ID,
    }),
    databaseURL: `https://${process.env.FIRE_BASE_ADMIN_PROJECT_ID}.firebaseio.com`,
  });
}

// Set up endpoint to read in user data before page load(SSR)
// We don't need to save any data to the server. We just need to read it in getServerSideProps/getStaticProps
const db = firebaseAdmin.database();

export { firebaseAdmin };
