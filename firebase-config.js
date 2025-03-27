// Configuração do Firebase - substitua com os dados do seu projeto
const firebaseConfig = {
    apiKey: "AIzaSyDowfgt8jFwD--O2l40pAtYzbpsYFyqFZc",
    authDomain: "loja-lanchonete-9fbef.firebaseapp.com",
    projectId: "loja-lanchonete-9fbef",
    storageBucket: "loja-lanchonete-9fbef.firebasestorage.app",
    messagingSenderId: "1093418351919",
    appId: "1:1093418351919:web:dca580d76421583a20b5da",
    measurementId: "G-P8SLNHXYHB"
  };

const app = firebase.initializeApp(firebaseConfig);

// Exporta o auth para ser usado em outros arquivos
const auth = firebase.auth();