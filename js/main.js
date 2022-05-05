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
    label: "Week1",
    url: "https://chrmux.github.io/wdd-330-portfolio/week1/notes/index.html"
  },
];

for (var i = 0; i < links.length; i++){
  var li = document.createElement('li')
  var a = document.createElement('a'),
  li = document.createTextNode(links[i].label);
  a.href = links[i].url;
  a.appendChild(li);
  document.querySelector('.content').appendChild(a);
};