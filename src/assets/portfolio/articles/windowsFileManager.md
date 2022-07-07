<!--- ----------------- -->
# Windows File Manager 
<br>

##### C# • Windows Forms
<hr>
<br>
<div class="article">
<!--- ----------------- -->

## **About**

<div class="pb-3"></div>

This is my attempt to replicate the Windows File Manager app. You can view all of your files on your computer, and navigate to them, as you normally would on the original windows file explorer. The design was modified intentionally to make the tagging functionality easier to use. 

<!-- ----------- Image ----------- --> 
<div class="image-container">
	<img src="./assets/portfolio/images/windowsFileManager/1.PNG" loading="lazy" alt="image" class="image-75">
</div>
<!-- ----------------------------- -->

Functionalities include:
* Viewing/opening files and directories
* Searching for files in the current folder
* Adding tags to files or directories
* Filtering files/folders by tags

Functionalities pending:
* Copying and pasting items
* Ability to work with non-windows (eg, Mac) directories

<div class="pb-3"></div>

### **Adding tags**
You can add tags using the edit button on the right side of a folder or file. Tags will then show on the left column of the file explorer. You can then click on them to filter folders and files by tag.

<!-- ----------- Image ----------- --> 
<div class="image-container">
	<img src="./assets/portfolio/images/windowsFileManager/2.PNG" loading="lazy" alt="image" class="image-75">
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>
<div class="pb-3"></div>

* <a class="cyanLink" href="https://github.com/vondreii/file-manager">View GitHub Repository</a>
  
<div class="pb-3"></div>

## **Background**

<div class="pb-3"></div>

While sorting files, I found that categorizing files can sometimes be difficult - since some files can be stored in more than one place (eg, do blue mountains coffee photos go in "Travel" or "Family/Social"?). There are some existing apps that help make this easier by introducing tagging (which does exist on Windows File Explorer, but it doesn't seem as obvious to use). 

I decided to try implementing my own solution to this problem to see how it would work, while also trying to copy the standard file management functionality. 

<div class="pb-3"></div>

## **Tech Stack**

<div class="pb-3"></div>

* C#
* Windows Forms

<div class="pb-3"></div>

## **What I Learnt or Improved**

<div class="pb-3"></div>

* How to manage files in a Windows Form application
* Utilising dictionaries and lists to make filtering tags faster
* Adding buttons and other UI controls dynamically through the code based on lists/items that constantly change on the screen.

<div class="pb-3"></div>

<!--- ----------------- -->
</div>