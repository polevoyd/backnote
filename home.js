
var signupForm = document.getElementById('newsletter-form');
// var feedbackData = [];

function NewsletterItem(name, email, textArea){
    this.name = name;
    this.email = email;
    this.textArea = textArea;

    // feedbackData.push(this);
    localStorage.setItem(this.email, JSON.stringify(this));

    
}

signupForm.addEventListener('submit', hitSignup);

function hitSignup(e) {
    e.preventDefault();

    
    var name = document.getElementById('name').value;
    console.log(name, ' works');
    
    var email = document.getElementById('e-mail').value;
    var textArea = document.getElementById('textarea').value;

    // feedbackData.push(name);
    // feedbackData.push(email);
    // feedbackData.push(textArea);

    new NewsletterItem(name, email, textArea);

}


if (localStorage.getItem(this.email)) {


    JSON.parse(localStorage.getItem(this.email));

}

var submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', openPopup);

function openPopup(){
    //popup message
    var msg = '<div class=\"header\"><a id = \"close\" href="#">X</a></div>';
    msg += '<div><h3>Thank you!</h3></div>';
    msg += '<div><img src=\"images/groupimg.jpg\" width =\ "306px\" height =\ "auto\"></div>';
    msg += '<p>We appreciate your support ' + name + '<br>' + 'Welcome to the Backnote community!<br>';
    msg += 'You have been locally stored :-)<p>';

    var popupElement = document.createElement('div');
    popupElement.setAttribute('id', 'popup');
    popupElement.innerHTML = msg;
    document.body.appendChild(popupElement);
}


function closePopup(){
    document.body.removeChild(popupElement);
}

var closeElement = document.getElementById('close');
closeElement.addEventListener('click',closePopup);

// openPopup();

// closePopup();

    
    
    


