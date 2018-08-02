var signupForm = document.getElementById('newsletter-form');

//create constructor for newletter item
function NewsletterItem(name, email, textArea) {
  this.name = name;
  this.email = email;
  this.textArea = textArea;

  localStorage.setItem(this.email, JSON.stringify(this));


}

signupForm.addEventListener('submit', hitSignup);

function hitSignup(e) {
  e.preventDefault();


  var name = document.getElementById('name').value;

  var email = document.getElementById('e-mail').value;
  var textArea = document.getElementById('textarea').value;

  new NewsletterItem(name, email, textArea);

}


if (localStorage.getItem(this.email)) {


  JSON.parse(localStorage.getItem(this.email));

}

var submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', openPopup);

var popupElement = document.getElementById('popup');
// var popupElement = document.createElement('div');

function openPopup() {


  var name = document.getElementById('name').value;
  //popup message
  var msg = '<div class="header"><a id = "close" href="#">X</a></div>';
  msg += '<div><h3>Thank you!</h3></div>';
  msg += '<div><img src="images/groupimg.jpg" width ="306px" height ="auto"></div>';
  msg += '<p>We appreciate your support ' + name + '.<br>' + 'Welcome to the Backnote community!<br>';
  msg += 'You have been locally stored :-)<p>';

  popupElement.innerHTML = msg;
  var closeElement = document.getElementById('close');
  closeElement.addEventListener('click', closePopup);

}


function closePopup(e) {
  e.preventDefault();
  popupElement.remove();
}