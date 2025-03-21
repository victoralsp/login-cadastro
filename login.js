import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
 
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDcqw47MmWmF2B7NtsAJ5FFu4VS4B5tAS4",
    authDomain: "login-cadastro-72828.firebaseapp.com",
    projectId: "login-cadastro-72828",
    storageBucket: "login-cadastro-72828.firebasestorage.app",
    messagingSenderId: "364332563538",
    appId: "1:364332563538:web:fc78156ad3f08a001bb38b"
  };

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

const login = document.getElementById('login')

login.addEventListener('click', (event) => {
    event.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user     
        localStorage.setItem('user', JSON.stringify({ uid: user.uid, email: user.email }))
        window.location.href = 'profile.html'
    })
    .catch((error) => {
        const errorMessage = error.message
        alert(`Login falhou: ${errorMessage}`)
    })
})