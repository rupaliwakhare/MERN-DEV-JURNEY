document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const userMsg = document.getElementById("userMessage");
  const passMsg = document.getElementById("passMessage");

  const correctUsername = "admin";
  const correctPassword = "1234";

  if (username === correctUsername) {
    userMsg.style.color = "green";
    userMsg.textContent = "✅ Username is correct";
  } else {
    userMsg.style.color = "red";
    userMsg.textContent = "❌ Wrong Username";
  }

  if (password === correctPassword) {
    passMsg.style.color = "green";
    passMsg.textContent = "✅ Password is correct";
  } else {
    passMsg.style.color = "red";
    passMsg.textContent = "❌ Wrong Password";
  }
});
