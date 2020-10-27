# Captcha-for-google-forms kkkZk

This script changes a question on you google form, making a capcha validation question that requires the user to enter an random string (of size and characters chosen by you), which is changed according to a time trigger you choose. Helping to protect your google form from attacks.
**Under construction**

## Steps

### Copy Script

First copy the three functions from the script.js file to your google script of the chosen form.

### Creat a Question

You must first create a text question on your form with a title easily identifiable as "captcha".

### Get question ID

Run the function showIDs. You can see the records with all the IDs of the fields on your form. Take the ID below the name chosen for the form. This ID is the ID of the field that you need to change in updateCaptcha. The script will recognize the field by its ID, make sure to copy the right ID.

### Choose the string size

Choose the length of the string you want the user to enter. This value must be replaced in the updateCaptcha function.

### Choose the character variation

You can change the possible characters in the validation string, just change the array in makeCaptcha function.

### Create a trigger

Create a trigger for the updateCaptcha function to run according to the time you choose. Now when the chosen time passes, the script update the Captcha automatically.

## Quota

Google has a very specific quota for your scripts. The quota related to trigger executions is related to the time the script takes to execute. Currently the Quota is 90m / day (This value is not fixed and can be changed without notice). So if the script takes around 2sec to run and runs every 1 min, in an hour you have 2 minutes of execution. Giving a daily total of 48 min, just over half of the daily quota. Keep an eye on the number of forms you will insert this script trigger.

You can check more about google script quotas [here](https://developers.google.com/apps-script/guides/services/quotas)
