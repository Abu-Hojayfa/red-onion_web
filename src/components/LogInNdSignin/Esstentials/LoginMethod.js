import { initializeApp } from "firebase/app";
import firebaseConfig from "../../../../firebase.config"; 

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Swal from "sweetalert2";

if (!initializeApp(firebaseConfig).length) {
  initializeApp(firebaseConfig);
}

const success = (e) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: `${e} successfully`,
  });
};

const wrong = (errorCode, errorMessage) => {
  Swal.fire({
    icon: "error",
    title: `${errorCode}`,
    text: `${errorMessage}`,
  });
};

export const createUserWithMail = (
  {   email, password },
  setIsLogIn,
  isLogIn
) => {
  if (email && password ) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        sessionStorage.setItem("email", user.email);
        success('Created User');
        setIsLogIn(!isLogIn);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        wrong(errorCode, errorMessage);
      });
  }
};

export const signInWithMail = ({ email, password }, history, from) => {
  if (email && password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        sessionStorage.setItem("email", user.email);
        history.replace(from);
        success('Signed in');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        wrong(errorCode, errorMessage);
      });
  }
};
