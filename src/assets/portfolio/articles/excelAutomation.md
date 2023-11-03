<!--- ----------------- -->
# Excel Automation 
<br>

##### Python • Excel
<hr>
<div class="article">
<!--- ----------------- -->

This is a collection of Python automation scripts to help me with the data analysis for my research project on 
<a class="cyanLink" href="/portfolio/streetRacingGame">Cognitive Load</a>.

<!-- ----------- Image ----------- --> 
<div class="image-container">
	<img src="./assets/portfolio/images/excelAutomation/header.png" loading="lazy" alt="image" class="image-50">
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

* <a class="cyanLink" href="https://github.com/vondreii/excel-python-automation">View GitHub Repository</a>
* <a class="cyanLink" href="./assets/portfolio/downloads/python-automation.zip">Download Automation Scripts</a>
  
<div class="pb-3"></div>

##### Background

Each participant was required to play two versions of a game. For each version, they needed to play the game three times. In total, one participant had 6 excel files. In total there were 40 participants. 40*6 = 240 excel files. This is a very time consuming process so <a class="cyanLink" href="https://www.sorakhan.com/">my partner</a> suggested to automate this process.

**Data Analysis Script**

This script does simple analysis and maths calculations on the data. <a class="cyanLink" href="https://www.sorakhan.com/">My partner</a> initially created the script which is stored in <a class="cyanLink" href="https://github.com/sorakhan/data-analysis-script"> this Github repository</a>. Since then, this script has been modified to include new summary tables and maths calculations. It calculates things such as:

* Finding the average reaction times at specific times in the game
* Calculating the total crashes within a specific timeframe during the gameplay (eg, between 10-20 seconds)
* Calculating the Standard Deviation and Averages of the player's response times, and DRT misses

**Clean Data**

I created this to delete some columns in the excel files that were unecessary. 

**The Template**

The template was created so it was easier to create more automated scripts in the future. The template asks the user for a folder that stores excel files, and loops through each excel file in the folder, and prints any details. 

<!-- ----------- Image ----------- --> 
<div class="image-container">
	<img src="./assets/portfolio/images/excelAutomation/2.PNG" loading="lazy" alt="image" class="image-75">
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

##### Tech Stack

<div class="pb-3"></div>

* Python Script

<!--- ----------------- -->
</div>