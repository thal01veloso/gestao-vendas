// Configuração do Firebase - substitua com os dados do seu projeto
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
if (!firebase.apps.length) {
    debugger;
const firebaseConfig = {
    apiKey: "AIzaSyDowfgt8jFwD--O2l40pAtYzbpsYFyqFZc",
    authDomain: "loja-lanchonete-9fbef.firebaseapp.com",
    projectId: "loja-lanchonete-9fbef",
    storageBucket: "loja-lanchonete-9fbef.firebasestorage.app",
    messagingSenderId: "1093418351919",
    appId: "1:1093418351919:web:dca580d76421583a20b5da",
    measurementId: "G-P8SLNHXYHB"
  };

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
}
// Referência para o serviço de autenticação
const auth = firebase.auth();