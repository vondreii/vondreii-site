<div class="article">
<!--- ----------------- -->

##### 01 Apr 2021
# Blah
<hr>


A description here about how it's awesome to automate everything
Why should you automate things?


1. Create a .py file (this will be the automation script). For example, automationScript.py
2. Create an excel file. This is where we will store some data.
3. Open the .py file. We will start writing code here to ...


At the top of the file, you need two imports:

import openpyxl
import os

You need the openpyxl, a module that lets you read and write from excel files. If you do not have it you will need to install it. Put links/guides on where to install it.

If you have not done Python before, the structure of the code is based on the indentation.

First code:

<!-- ----------- Code ----------- -->
```C#
if __name__ == "__main__":
  while True:
    # User input
    print('\n============================================')
    print('\nPlease enter the path to your excel file')
    filePath = input('\nEnter full file path / folder name: ')
    
    wb = openpyxl.load_workbook(filePath)
    sheet = wb.active
    max_rows = sheet.max_row
    print('Rows: '+ str(max_rows))

```
<!-- ----------------------------- -->










---
<div class="pb-3"></div>

<a class="cyanLink" href="https://formspree.io/">Formspree</a> is a fast way to integrate forms into your website. It's extremely easy to use and handles all the logic for you. All you have to do is link the target email address you want the form's inputs to be sent to, and Formspree will do the rest.

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="./assets/blog/images/addingAContactFormUsingFormspree/1.jpg" loading="lazy" alt="image" class="image-75"/>
	<div class="image-description"><p>Formspree home page</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

## **Register your email with Formspree**

<div class="pb-3"></div>

All you need to do is sign up (or sign in) and verify your email in order to link it to your formspree account. If you want to add more emails later on, you can verify those too.

<div class="pb-3"></div>

## **Create your form**

<div class="pb-3"></div>

Once your email is registered, you should be able to see a dashboard with the options to add a project.

<div class="pb-3"></div>

Create a **new project**. The project can be the same name or a similar name to your website. In this case, we selected a **Dashboard project**:

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="./assets/blog/images/addingAContactFormUsingFormspree/2.jpg" loading="lazy" alt="image" class="image-75"/>
	<div class="image-description"><p>Adding a Project</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

After that, click on **Create Form**. Here, enter the name of the form and the email address you want the submitted forms to be sent to:

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="./assets/blog/images/addingAContactFormUsingFormspree/3.jpg" loading="lazy" alt="image" class="image-75"/>
	<div class="image-description"><p>Adding a Form</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

Once you've added this, Formspree will generate some code for you to copy and paste into the HTML of your website. There is also a link that is generated, which should go into your form's action attribute:

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```HTML
<form action="Your link here" method="POST" >

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

However, this is all done for you automatically in the generated code block.

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="./assets/blog/images/addingAContactFormUsingFormspree/4.jpg" loading="lazy" alt="image" class="image-75"/>
	<div class="image-description"><p>Copy the generated HTML</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

If you also want to use bootstrap for your form, here is a code snippet that also includes bootstrap (make sure you remember to change the link in the form's action attribute as shown above!)

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```HTML
<!-- Use formspree -->
<form action="Your link here" method="POST" >
  <div class="form-group">
    <label for="replyTo">Your Email address</label>
    <input type="email" class="form-control" id="replyTo" name="_replyto" ngModel="reply" aria-describedby="emailHelp" placeholder="test@outlook.com">
    <small id="emailHelp" class="form-text text-muted">Your email will not be shared with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="message">Your message</label>
    <textarea name="message" style="height:200px" class="form-control" id="message" placeholder="Hey there! I'm contacting you because..."></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

Your form should now look similar to this:

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="./assets/blog/images/addingAContactFormUsingFormspree/5.jpg" loading="lazy" alt="image" class="image-75"/>
	<div class="image-description"><p>Example Contact Form</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

You can modify the form as you wish. Test it by sending a message through the form... which should now show in your email's inbox! You should also test replying back to the sender of the message by replying back to the email. 

<div class="pb-3"></div>

<!--- ----------------- -->
</div>