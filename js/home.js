var signupButton = document.getElementById('submit-button');
var feedbackData = [];


if (localStorage.getItem('feedbackData')){


  feedbackData.JSON.parse(localStorage.getItem('feedbackData'));

}

signupButton.addEventListener('submit', hitSignup);

function hitSignup(e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('e-mail').value;
  var textArea = document.getElementById('textarea').value;

  feedbackData.push(name);
  feedbackData.push(email);
  feedbackData.push(textArea);

  localStorage.setItem(JSON.stringify(feedbackData));
}


// function openPopup(){

// }

