# 3D Street Racing Game
#### 3D • Game • Research • Racing

<hr>

### About the Game

This is a modified version of the street racing game sourced from [this Microsoft's Github repository](https://github.com/Microsoft/Imagine_street-racing).
The original game is a 3D street racing game where the player must avoid the obstacles on the road. The player scores points when avoiding these obstacles. 
The original game involved racing for as long as you possible without hitting any obstacles, as the speed increased. If you hit any obstacles during the game, the game would end.

The modified version includes several changes in the game mechanics. Instead of the speed increasing, the speed was set at a static 60km/h. 
Extra obstacles were added such as roadblocks. 

<!-- ----------- Image ----------- -->   
<div class="image-container">
  <img src="./assets/portfolio/images/racingGame/header.jpg" loading="lazy" alt="image" class="image-75"/> 
</div>
<!-- ----------------------------- -->

You also could not die when hitting obstacles. The new game could also record all game statistics. This included things like:

* The current coordinates of the player for every frame
* The number of points added when passing cars
* The number of times hit
* The coordinates of new cars as they are being spawned
* The player's movement patterns (the exact times they hit the left/right keys)
* Total statistics, including accumulative car crashes and points totals

<!-- ----------- Image ----------- -->   
<div class="image-container">
  <img src="./assets/portfolio/images/racingGame/1.PNG" loading="lazy" alt="image" class="image-75"/> 
</div>
<!-- ----------------------------- -->

Data was collected as part of a University research project, therefore the game was also changed to automatically end after 5 minutes, and automatically repeat for 3 times.

### Running the Game
To run the game using unity, please ensure you have installed Unity on your PC (2017
versions or higher).\
\
System Requirements for Unity:\
OS : Windows 7 SP1+, 8, 10, 64-bit versions only; Mac OS X 10.11+.\
GPU: Graphics card with DX10 (shader model 4.0) capabilities.

1. Run Unity
2. Select ‘Open’
3. Navigate to the Unity Folder. Select the play button at the top of the window.

### Controls

Action  	  	| Controls
--------------- | -------------
Move Left 	  	| Left Keyboard arrow or 'A'
Move Right	  	| Right keyboard arrow or 'D'


<div class="p-5 center">
    <div class="download">
        <a href="https://github.com/vondreii/Modified-Street-Racing-Game" class="button">↓ View GitHub Repository ↓</a>
    </div>
</div>