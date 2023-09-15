// JS for login
async function loginFormHandler(event) {
    event.preventDefault();
  
    // Listening for email login
    const email = document.querySelector('#email-login').value.trim();
    // Listing for password login 
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function signupFormHandler(event) {
    event.preventDefault();
  
    // Listing for user signup
    const username = document.querySelector('#username-signup').value.trim();
    // Listening for email signup
    const email = document.querySelector('#email-signup').value.trim();
    // Listening for password submit
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  

      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  


  // Listening for login submit btn
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  // Listening for signup submit btn
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);