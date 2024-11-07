function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "Login successful") {
          document.getElementById("loginForm").style.display = "none";
          document.getElementById("welcomeMessage").style.display = "block";
          document.getElementById("user").innerText = data.username;
        } else {
          alert("Invalid username or password");
        }
      })
      .catch(error => console.error('Error:', error));
  }
  
  function logout() {
    fetch('http://127.0.0.1:5000/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "Logout successful") {
          document.getElementById("loginForm").style.display = "block";
          document.getElementById("welcomeMessage").style.display = "none";
        }
      })
      .catch(error => console.error('Error:', error));
  }
  