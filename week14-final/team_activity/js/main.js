var count = 0;
var pixel = 10;

function playSound(e) {
  console.log(e);
  var key = e.keyCode;
  var divs = Array.from(document.getElementsByClassName('key'))
  divs.forEach(div => {
    if (key == div.getAttribute('data-key')) {
      div.style.transform = `translateY(${pixel}px)`;
      count++;
      pixel += 10;
      if (count == 10) {
        div.style.transform = `translateY(${pixel}px)`;
        pixel = 10;
        count = 0;
      }
    }
  })
  var audios = Array.from(document.getElementsByTagName('audio'));
  audios.forEach(audio => {
    console.log(audio.getAttribute('data-key'))
    console.log(key);
    if (key == audio.getAttribute('data-key')) {
      audio.play();
    }
  });
  const audio = document.querySelector('data-key');
  console.log(audio);
}

document.addEventListener('keydown', playSound);