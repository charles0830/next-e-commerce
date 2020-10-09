import { auth, db } from "../config/firebase";

function emailRegister({ email, password }) {
  return auth.createUserWithEmailAndPassword(email, password);
}

function registerDatabase({ id, email, name, surname }) {
  return db.collection("Users").doc(id).set({
    name,
    surname,
    email,
  });
}

export { emailRegister, registerDatabase };
