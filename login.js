const loginForm=document.getElementById('loginForm');
loginForm.addEventListener('submit', e=>{
    e.preventDefault();
    const user=document.getElementById('username').value;
    const pass=document.getElementById('password').value;

    if(user==='admin' && pass==='1234'){
        window.location.href='home.html';
    } else{
        document.getElementById('errorMsg').textContent='Usuário ou senha incorretos!';
    }
});
