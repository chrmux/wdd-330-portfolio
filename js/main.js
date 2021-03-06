(function() {
  'use strict';

  function formatDate (date) {
      let options = {month: 'long', day: '2-digit', year: 'numeric'}
      return date.toLocaleDateString("en-US", options);
  }

  const directory = "https://chrmux.github.io/wdd-330-portfolio"
  const pages = [
      {
          description: "Week",
          weekNo: "01",
          url: "/week1/notes/index.html"
      },
      {
          description: "Week",
          weekNo: "02",
          url: "/week2/notes/index.html"
      },
      {
          description: "Week",
          weekNo: "03",
          url: "/week3/index.html"
      },
      {
          description: "Week",
          weekNo: "04",
          url: "/week4/index.html"
      },
      {
          description: "Week",
          weekNo: "05",
          url: "/week5/index.html"
      },
      {
          description: "Week",
          weekNo: "06",
          url: "/week6/index.html"
      },
      {
          description: "Week",
          weekNo: "07",
          url: "/week7/index.html"
      },
      {
          description: "Week",
          weekNo: "08",
          url: "/week8/index.html"
      },
      {
          description: "Week",
          weekNo: "09",
          url: "/week9/index.html"
      },
      {
          description: "Week",
          weekNo: "10",
          url: "/week10/index.html"
      },
      {
          description: "FINAL",
          weekNo: "",
          url: "/week14-final/team_activity/index.html"
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
          newlink.innerText = `${element.description} ${element.weekNo}`;
      }
      else { newlink.innerText = element.description; }
      newlink.setAttribute('href', `${directory}${element.url}`);
      newli.appendChild(newlink);
      links.appendChild(newli);
  });

  const dateModifiedEl = document.getElementById("dateModified");
  dateModifiedEl.innerText = `Last Updated: ${formatDate(new Date(document.lastModified))}`;
}());