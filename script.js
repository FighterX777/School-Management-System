function validateLogin(event) 
{
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') 
    {
        window.location.href = 'home.html';
    } 
    else 
    {
        alert('Invalid username or password.');
    }
}