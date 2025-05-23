document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Dummy credentials
  if (username === "admin" && password === "admin123") {
    // Store session in localStorage
    localStorage.setItem("isAdmin", "true");
    window.location.href = "admin.html";
  } else {
    document.getElementById("login-error").style.display = "block";
  }
});
