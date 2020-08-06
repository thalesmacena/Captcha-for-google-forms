# Captcha-for-google-forms
Create a Captcha for Google Forms.

**Under construction**

## Steps
### Copy Script
First copy the three functions from the scripts.js file to your script of the chosen form.

### Creat a Question
You must first create a text question on your form with a title easily identifiable as "captcha". After that you should copy the ShowIDs function from the script.js file to your form script.

### Get question ID
Run the function showIDs. You can see the records with all the IDs of the fields on your form. Take the ID below the name chosen for the form. This ID is the ID of the field that you need to change in updateCaptcha.

### Choose the string size
Choose the length of the string you want the user to enter. This value must be replaced in the updateCaptcha function.

### Create a trigger
Create a trigger for the makeCaptcha function to run according to the time you choose. Now when the chosen time passes the script, update the Captcha automatically.