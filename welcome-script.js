// document.addEventListener('DOMContentLoaded', function() {
//     const userEmail = document.getElementById('user-email');
//     const logoutBtn = document.getElementById('logout-btn');
    
//     // Verifica se o usuário está logado
//     auth.onAuthStateChanged((user) => {
//         if (user) {
//             // Mostra o email do usuário
//             userEmail.textContent = user.email;
//         } else {
//             // Se não estiver logado, redireciona para index.html
//             window.location.href = 'index.html';
//         }
//     });
    
//     // Logout
//     logoutBtn.addEventListener('click', function() {
//         auth.signOut().then(() => {
//             window.location.href = 'index.html';
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    const logoutBtn = document.getElementById('logout-btn');
    
    // Toggle do menu lateral
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        
        // Atualiza o ícone do botão
        const icon = this.querySelector('i');
        if (sidebar.classList.contains('collapsed')) {
            icon.classList.remove('fa-chevron-left');
            icon.classList.add('fa-chevron-right');
        } else {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-left');
        }
    });
    
    // Logout
    logoutBtn.addEventListener('click', function() {
        // Aqui você deve adicionar a lógica de logout do Firebase
        // Exemplo:
        auth.signOut().then(() => {
            window.location.href = 'index.html';
        });
        
        //window.location.href = 'index.html';
    });
    
    // Responsividade - menu mobile
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.top-bar').prepend(mobileMenuBtn);
    
    mobileMenuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Fechar menu ao clicar no conteúdo (mobile)
    document.querySelector('.main-content').addEventListener('click', function() {
        if (window.innerWidth <= 992 && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
});