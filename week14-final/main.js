function Getstats()
{
window.status=('Attempting to Login to user area.')

var AccId;
var iName;
AccId = document.iAccInput.iAccID.value
iName = document.iAccInput.iName.value

if (AccId == "" || iName == "")
{
alert('\nERROR\nYou must enter ALL Details,\nto View your statistics.\n');
window.status=('Missing data or Invalid. Check spelling and Ensure Names are in Correct Case.')
}
else
{

    var location = '';
    if (iName=='love' && AccId=='cat') {
        location=("/week14-final/page1.html");
    }
    else if (iName=='mom' && AccId=='love') {
        location=("/week14-final/page2.html");
    }
    else alert('Wrong pair');
    
    this.location.href = location;
}
}