let theme = document.getElementById('theme');

theme.onclick = () => {
  theme.classList.toggle('fa-sun');

  if (theme.classList.contains('fa-sun')) {
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }
};

var links = [
  {
    label: "Week1 notes",
    url: "/wdd-330-portfolio/notes/index.html"
  },

];

for (var i in links) {
  var li = document.createElement('li')
  var a = document.createElement('a'),
  li = document.createTextNode(links[i].label);
  a.href = links[i].url;
  a.appendChild(li);
  document.querySelector('.content').appendChild(a);
};
