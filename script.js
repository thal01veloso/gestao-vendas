document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    const welcomeContainer = document.getElementById('welcome-container');
    const welcomeUser = document.getElementById('welcome-user');
    //const logoutBtn = document.getElementById('logout-btn');
    const loginError = document.getElementById('login-error');
    const signupError = document.getElementById('signup-error');
    const signupLink = document.getElementById('signup-link');
    const loginLink = document.getElementById('login-link');

    // Alternar entre login e cadastro
    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    });

    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        signupContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    // Evento de submit do formulário de login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redireciona para welcome.html após login bem-sucedido
            window.location.href = 'welcome.html';
        })
        .catch((error) => {
            loginError.textContent = getErrorMessage(error.code);
        });
    });
    
    // Evento de submit do formulário de cadastro
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        // Validar senhas
        if (password !== confirmPassword) {
            signupError.textContent = 'As senhas não coincidem';
            return;
        }
        
        // Criar conta com Firebase
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Cadastro bem-sucedido, mostrar tela de login
                signupContainer.style.display = 'none';
                loginContainer.style.display = 'block';
                signupForm.reset();
                signupError.textContent = '';
            })
            .catch((error) => {
                // Tratar erros
                signupError.textContent = getErrorMessage(error.code);
            });
    });
    
    // // Evento de logout
    // logoutBtn.addEventListener('click', function() {
    //     auth.signOut().then(() => {
    //         checkAuth();
    //         loginForm.reset();
    //         loginError.textContent = '';
    //     });
    // });
    
    // Observar mudanças no estado de autenticação
    auth.onAuthStateChanged((user) => {
        checkAuth();
    });
    
    // Função para verificar autenticação e atualizar a UI
    function checkAuth() {
        const user = auth.currentUser;
        
        if (user) {
            // Usuário autenticado - mostrar tela de boas-vindas
            loginContainer.style.display = 'none';
            signupContainer.style.display = 'none';
            welcomeContainer.style.display = 'block';
            welcomeUser.textContent = user.email;
        } else {
            // Usuário não autenticado - mostrar tela de login
            loginContainer.style.display = 'block';
            signupContainer.style.display = 'none';
            welcomeContainer.style.display = 'none';
        }
    }
    
    // Função para traduzir códigos de erro do Firebase
    function getErrorMessage(errorCode) {
        switch(errorCode) {
            case 'auth/invalid-email':
                return 'E-mail inválido';
            case 'auth/user-disabled':
                return 'Usuário desativado';
            case 'auth/user-not-found':
                return 'Usuário não encontrado';
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/email-already-in-use':
                return 'E-mail já está em uso';
            case 'auth/operation-not-allowed':
                return 'Operação não permitida';
            case 'auth/weak-password':
                return 'Senha muito fraca (mínimo 6 caracteres)';
            default:
                return 'Erro ao autenticar';
        }
    }
});