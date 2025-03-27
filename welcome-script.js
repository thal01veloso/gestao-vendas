document.addEventListener('DOMContentLoaded', function() {
    const userEmail = 'thales.veloso@gmail.com'; // Substitua pelo email real do usuário
    const userName = userEmail.split('@')[0]; // Extrai o nome antes do @
    
    // Swal.fire({
    //     title: `Bem-vindo, ${userName}!`,
    //     text: 'Você está logado no sistema',
    //     icon: 'success',
    //     timer: 1500, // 4 segundos
    //     timerProgressBar: true,
    //     showConfirmButton: false,
    //     background: '#ffffff',
    //     color: '#2a3547',
    //     backdrop: `
    //         rgba(0,0,0,0.5)
    //         url("/images/nyan-cat.gif")
    //         left top
    //         no-repeat
    //     `,
    //     customClass: {
    //         popup: 'welcome-swal',
    //         title: 'swal-title',
    //         timerProgressBar: 'swal-progress-bar'
    //     },
    //     willOpen: () => {
    //         // Efeito sonoro opcional (descomente se quiser)
    //         // const audio = new Audio('/sounds/welcome.mp3');
    //         // audio.play();
    //     }
    // });
    
    Swal.fire({
        title: `Olá, ${userName}!`,
        position: 'top-end',
        width: 350,  // Largura reduzida
        padding: '0.8rem',
        backdrop: false,
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
        toast: true,  // Estilo toast (mensagem flutuante)
        background: '#4e73df',
        color: '#f8f9fa',
        customClass: {
            popup: 'compact-swal',
            title: 'compact-swal-title',
            timerProgressBar: 'compact-progress-bar'
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
        // Obter nome do usuário (substitua pelo valor real)
        const userEmail = 'thales.veloso@gmail.com';
        const userName = userEmail.split('@')[0];
    
        // Mensagem compacta
    
        // Restante do seu código...
    });
    // Restante do seu código (menu, logout, etc.)
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    
    // Verifica se o usuário está logado
    auth.onAuthStateChanged((user) => {
        if (user) {
            // Mostra o email do usuário
            userEmail.textContent = user.email;
        } else {
            // Se não estiver logado, redireciona para index.html
            window.location.href = 'index.html';
        }
    });
    const logoutBtn = document.getElementById("logout-btn");
    
    // Logout
    logoutBtn.addEventListener('click', function() {
        auth.signOut().then(() => {
            window.location.href = 'index.html';
        });
    });
});