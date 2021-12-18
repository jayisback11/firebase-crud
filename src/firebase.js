import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBPJl-4OaZV_LYF8S-pt7ljyCOK2eei450",
  authDomain: "fb-crud-957dc.firebaseapp.com",
  projectId: "fb-crud-957dc",
  storageBucket: "fb-crud-957dc.appspot.com",
  messagingSenderId: "641135050863",
  appId: "1:641135050863:web:f8af296975112ff8bd4d9a",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
