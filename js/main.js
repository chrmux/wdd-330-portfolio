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
    url: "/week1/notes/index.html"
  },
];

for (var i in links) {
  var text = document.createElement('text')
  var a = document.createElement('a'),
  text = document.createTextNode(links[i].label);
  a.href = links[i].url;
  a.appendChild(li);
  document.querySelector('.content').appendChild(a);
};

