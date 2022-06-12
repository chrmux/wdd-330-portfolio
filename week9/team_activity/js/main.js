import Hikes from './hikes.js';
import Comment from './comments.js'
const myHikes = new Hikes('hikes');
const comments = new Comment('comments');
console.log(comments);
window.addEventListener('load', () => {
  myHikes.showHikeList();
});

