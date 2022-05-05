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


var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var li = document.createElement('li')
    var a = document.createElement('a')
    var book = "'" + library[i].title + "'"; 
    var autor = 'by' + library[i].author + ".";
    {
      book.innerHTML += book;
      document.getElementById("result")
      document.getElementById("result").innerHTML += autor;
    } 
   }

   var obj = {  
    "myMenu":[  
       {  
          "id":"1",
          "name":"name 01",
          "image":"img_url",
          "other":[  
             {  
                "image":"img_url",
                "name":"name_01"
             },
             {  
                "image":"img_url",
                "name":"name_02"
             },
             {  
                "image":"img_url",
                "name":"name_03"
             },
             {  
                "image":"img_url",
                "name":"name_04"
             },
             {  
                "image":"img_url",
                "name":"name_05"
             }
          ]
       },
       {  
          "id":"2",
          "name":"name 02",
          "image":"img_url",
          "other":[  
             {  
                "image":"img_url",
                "name":"name_01"
             },
             {  
                "image":"img_url",
                "name":"name_02"
             },
             {  
                "image":"img_url",
                "name":"name_03"
             },
             {  
                "image":"img_url",
                "name":"name_04"
             },
             {  
                "image":"img_url",
                "name":"name_05"
             }
          ]
       },
       {  
          "id":"3",
          "name":"name 03",
          "image":"img_url",
          "other":[  
             {  
                "image":"img_url",
                "name":"name_01"
             },
             {  
                "image":"img_url",
                "name":"name_02"
             },
             {  
                "image":"img_url",
                "name":"name_03"
             },
             {  
                "image":"img_url",
                "name":"name_04"
             },
             {  
                "image":"img_url",
                "name":"name_05"
             }
          ]
       }
    ]
 };
 
 obj.myMenu.forEach(function(item) {
   var element = $('<div class="headings"><img src="' + item.image + '">' + item.name + '</div>');
   item.other.forEach(function(otherItem) {
     var otherElement = $('<div class="heading"><img src="' + otherItem.image + '">' + otherItem.name + '</div>');
     element.append(otherElement);
   });
   $("body").append(element);
 });
