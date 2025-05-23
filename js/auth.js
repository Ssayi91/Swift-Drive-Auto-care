// Access control check
if (window.location.pathname.includes('admin.html') && localStorage.getItem('isLoggedIn') !== 'true') {
  window.location.href = 'login.html';
}

// Logout function
function logout() {
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'login.html';
}
