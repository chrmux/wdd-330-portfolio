import Hikes from './hikes.js';
import Comment from './comments.js'
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
const comments = new Comment('comments');
console.log(comments);
window.addEventListener('load', () => {
  myHikes.showHikeList();
});

