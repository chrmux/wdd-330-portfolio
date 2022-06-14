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

(function() {
  'use strict';

  function formatDate (date) {
      let options = {month: 'long', day: '2-digit', year: 'numeric'}
      return date.toLocaleDateString("en-US", options);
  }

  const directory = "https://chrmux.github.io/wdd-330-portfolio"
  const pages = [
      {
          descriptor: "Week",
          weekNo: "01",
          url: "/week1/notes/index.html"
      },
      {
          descriptor: "Week",
          weekNo: "02",
          url: "/week2/notes/index.html"
      },
      {
          descriptor: "Week",
          weekNo: "03",
          url: "/week3/index.html"
      },
      {
          descriptor: "Week",
          weekNo: "04",
          url: "/week4/index.html"
      },
      {
          descriptor: "Week",
          weekNo: "05",
          url: "/week5/index.html"
      },
      {
          descriptor: "Week",
          weekNo: "06",
          url: "/week6/index.html"
      },
      {
          descriptor: "Week",
          weekNo: "07",
          url: "/week7/index.html"
      },
      {
          descriptor: "Week",
          weekNo: "08",
          url: "/week8/index.html"
      },
      {
          descriptor: "Week",
          weekNo: "09",
          url: "/week9/index.html"
      },
      {
          descriptor: "Week",
          weekNo: "10",
          url: "/week10/index.html"
      },
      {
          descriptor: "FINAL",
          weekNo: "",
          url: "/week14/index.html"
      }
  ];
  let links = document.getElementById("links");
  pages.forEach(element => {
      let newlink = document.createElement('a');
      let newli = document.createElement('li');
      let urlpath = element.url.split('/');
      urlpath.pop();
      urlpath.unshift(directory)
      let currentpath = window.location.pathname.split('/');
      currentpath.pop();
      if (urlpath[2] == currentpath[2]) {
          newli.classList.add('active');
      }
      if (element.hasOwnProperty('weekNo')) {
          newlink.innerText = `${element.descriptor} ${element.weekNo}`;
      }
      else { newlink.innerText = element.descriptor; }
      newlink.setAttribute('href', `${directory}${element.url}`);
      newli.appendChild(newlink);
      links.appendChild(newli);
  });

  const dateModifiedEl = document.getElementById("dateModified");
  dateModifiedEl.innerText = `Last Updated: ${formatDate(new Date(document.lastModified))}`;
}());