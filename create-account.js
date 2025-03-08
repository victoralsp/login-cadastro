 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js"
 
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"
 
 import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js"

 const firebaseConfig = {
  apiKey: "AIzaSyDcqw47MmWmF2B7NtsAJ5FFu4VS4B5tAS4",
  authDomain: "login-cadastro-72828.firebaseapp.com",
  projectId: "login-cadastro-72828",
  storageBucket: "login-cadastro-72828.firebasestorage.app",
  messagingSenderId: "364332563538",
  appId: "1:364332563538:web:fc78156ad3f08a001bb38b"
}

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db = getFirestore(app)


 const submit = document.getElementById('submit')

 submit.addEventListener('click', (e)=> {
    e.preventDefault()

    const username = document.getElementById('username').value.trim()
    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value.trim()

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user
    setDoc(doc(db, "users", user.uid), {
        email: user.email,
        displayName: username
    }).then(() => {
      console.log("Redirecionando para a página profile.html");
        window.location.href = "profile.html"
    })
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
  })
 })
