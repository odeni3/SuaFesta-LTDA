import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB5...GdJNE8Y7K8IHyd6ZM4",
  authDomain: "suafesta.firebaseapp.com",
  projectId: "suafesta",
  storageBucket: "suafesta.appspot.com",
  messagingSenderId: "442549319538",
  appId: "1:442549319538:web:25d3e2b23f45befdbed713",
  measurementId: "G-426BXWNP6K"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
