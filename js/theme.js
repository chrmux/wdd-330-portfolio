let theme = document.getElementById('theme');

theme.onclick = () => {
  theme.classList.toggle('fa-sun');

  if (theme.classList.contains('fa-sun')) {
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }
};

function formatDate (date) {
      let options = {month: 'long', day: '2-digit', year: 'numeric'}
      return date.toLocaleDateString("en-US", options);
  }

  const dateModifiedEl = document.getElementById("dateModified");
  dateModifiedEl.innerText = `Last Updated: ${formatDate(new Date(document.lastModified))}`;