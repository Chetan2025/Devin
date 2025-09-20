const forms = {
  college: document.getElementById('college'),
  alumni: document.getElementById('alumni'),
  student: document.getElementById('student')
};
const tabs = document.querySelectorAll('.tab');

function switchTab(type) {
  // Highlight active tab
  tabs.forEach(t => t.classList.remove('active'));
  document.querySelector(`.tab[onclick="switchTab('${type}')"]`).classList.add('active');

  // Show corresponding form with animation
  Object.keys(forms).forEach(key => {
    if (key === type) {
      forms[key].classList.add('active');
    } else {
      forms[key].classList.remove('active');
    }
  });
}

// redirect to dashboards
function redirectTo(type) {
  window.location.href = `dashboard/${type}.html`;
}
