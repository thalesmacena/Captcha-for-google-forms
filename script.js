/**
 * Updates the form field and its validation, placing a new CAPTCHA.
 */
function updateCaptcha() {
  var formulario = FormApp.getActiveForm(); // Get the current form

  var captcha = makeCaptcha(length); // Replace length with the number of characters you want in the stringCalls

  var recaptcha = form.getItemById(id) // Replace id with the id of the form field that represents the Recapcha question

  var textValidation = FormApp.createTextValidation() // Creates a validation object
    .setHelpText('Invalid Code') // Configures the error text
    .requireTextMatchesPattern(captcha) // Set a validation equivalent to Regular Expression with capcha text
    .build(); // Build the Validation


  recaptcha.asTextItem().setTitle('Please type: ' + captcha); // Changes the title of the field taking into account the Captcha
  recaptcha.asTextItem().setValidation(textValidation); // Changes field validation
}

/**
 * Generates a new random string according to the variation of characters.
 * @param {Number} length The desired length of the String
 * @return {String} captcha A random string
 */
function makeCaptcha(length) {
  var captcha = ''; // Variable that will receive the string for captcha
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // String array with the different characters used
  var charactersLength = characters.length; // length of characters Array

  for (var i = 0; i < length; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return captcha;
}
/**
 * Put in the records the name of all fields on the form followed by their IDs in the line below
 */
function showIDs() {
  var form = FormApp.getActiveForm();
  var itemsArray = form.getItems();
  for (var i in itemsArray) {
    Logger.log(itemsArray[i].getTitle());
    Logger.log(itemsArray[i].getId());
  }
}