function updateCaptcha() {
  var idForm = 'id'; // Replace id with the target form id
  var form = FormApp.openById(idForm); 
  
  var captcha = makeCaptcha(length); // Replace length with the number of characters you want in the stringCalls
 
  var recaptcha = form.getItemById(id) // Replace id with the id of the form field that represents the Recapcha question
  
  var textValidation = FormApp.createTextValidation() // Creates a validation object
  .setHelpText('Invalid Code') // Configures the error text
  .requireTextMatchesPattern(captcha) // Set a validation equivalent to Regular Expression with capcha text
  .build(); // Build the Validation
  
  
  recaptcha.asTextItem().setTitle('Please type: '+captcha); // Changes the title of the field taking into account the Captcha
  recaptcha.asTextItem().setValidation(textValidation); // Changes field validation
}


function makeCaptcha(length) {
  var captcha           = ''; // Variable that will receive the string for captcha
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // String array with the different characters used
  var charactersLength = characters.length; // length of characters Array
   
  for ( var i = 0; i < length; i++ ) {
      captcha += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return captcha;
}

function showIDs(){
  var form = FormApp.getActiveForm();
  var itemsArray = form.getItems();
  for (var i in itemsArray) { 
    Logger.log(itemsArray[i].getTitle());
    Logger.log(itemsArray[i].getId());
  }
}