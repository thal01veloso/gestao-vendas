// Configuração do Firebase - substitua com os dados do seu projeto
const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxx",
    measurementId: "xxxxxxxxxxxxxxxxxxx"
  };

const app = firebase.initializeApp(firebaseConfig);

// Exporta o auth para ser usado em outros arquivos
const auth = firebase.auth();