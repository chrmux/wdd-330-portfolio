function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.userid.value == "myuserid" && form.pswrd.value == "mypswrd")
  {
    window.open('form.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}

document.querySelector('button').addEventListener('click', toggle)

function toggle(event) {
  if (document.getElementById('spoiler').style.display == 'none') {
    event.target.innerText = 'Hide'
    document.getElementById('spoiler').style.display = ''
  } else {
    event.target.innerText = 'Show'
    document.getElementById('spoiler').style.display = 'none'
  }
}