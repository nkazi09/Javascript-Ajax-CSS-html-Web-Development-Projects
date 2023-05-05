/*
Nadia Kazi, CSE 190M
May 16, 2012, Section MJ
The purpose of this file is to produce a game called Fifteen puzzle. When a user 
touch a tile it produces a certain behavior. For instance, the tile might move,
the tile might not move, shuffle all the tiles randomly and so on.
The fifteen puzzle is a 4x4 grid of numbered square with one square missing. 
The purpose of this game is to arrange the tiles into numerical order by repeatedly
sibling a square that neighbor the missing square into its empty space. 
*/

"use strict";
var row = 3;		// row/column of the empty square's
var column = 3;

window.onload = function() {
	arrangeTiles();
	setsId();
	$("shufflebutton").observe("click", shuffleTiles); 
};

// It sets the different parts of the background image to each square pieces on a 4x4 grid 
function arrangeTiles() {
	var tile = $$("#puzzlearea div");
	
	for (var i = 0; i < tile.length; i++) {
		var x = i % 4 * 100;		
		var	y = parseInt(i / 4) * 100;
		tile[i].style.left = x + "px";
		tile[i].style.top = y + "px";
		tile[i].style.backgroundPosition = (-x) + "px" + " " + (-y) + "px";	
	}	
}

// it sets id for each squares using the row and column of the square 
function setsId() {
	var squarearea = $$("#puzzlearea div");
	for(var i = 0; i < squarearea.length; i++) {
		
		var x  = (i % 4 + 1);
		var y = parseInt(i / 4) + 1;	
		
		checkTiles();	// updates the movable square
		squarearea[i].id = "square_" + x + "_" + y;	 //sets id's for the x and y values	
		squarearea[i].observe("click", tileMouseClick);	   
		squarearea[i].observe("mouseover", 	checkTiles);
	}	
}

// it checks if the square can be move and if so then it 
// hovers over the square 
function checkTiles() {
	var squarearea = $$("#puzzlearea div");
	
	for(var i = 0; i < squarearea.length; i++) {
		if(canMove(squarearea[i])) {		
			squarearea[i].addClassName("hover");
		} else {
			squarearea[i].removeClassName("hover");	
		}
	}
}

// it takes event as a parameter and call the moveOneTile
// the function tileMouseClick is only runs whenever a
// user click is observed.  
function tileMouseClick() {
	moveOneTile(this);
}

// checks if a tile can move then it moves the square to the 
// empty spaces  
function moveOneTile(tile) {
	var tileLeft = tile.getStyle("left");
	var tileTop = tile.getStyle("top");
	if(canMove(tile)) {
		
		tile.style.left = parseInt(row * 100) + "px";
		tile.style.top = parseInt(column * 100) + "px";
		
		row = tileLeft;
		column = tileTop;
		row = parseInt(row) / 100;
		column = parseInt(column) / 100;
		checkTiles(); // updates the movable square
	}
}

// it checks if the given square is a neighboring square with the 
// empty square. if so the it return true otherwise false.  
function canMove(tile) {
	var tileLeft = tile.getStyle("left");
	var tileTop = tile.getStyle("top");
	// dx and dy are difference between the current square and the the empty
    // square's row and column
	var dx = Math.abs(parseInt(tileLeft) - row * 100);		 
	var dy = Math.abs(parseInt(tileTop) - column * 100);
	
	// checks if the difference in row is 100 and difference in column is 0 or not
	if((dx == 100) && (dy == 0) ) {	
		return true;
	} else if((dx == 0) && (dy == 100)){
		return true;
	} else {
		return false;
	}
}


// it puts the squares into an array and randomly chooses one square
function randomlyChosenElement() {
	var tile = $$(".hover");	// stores the array of squares that can move
	moveOneTile(tile[parseInt(tile.length * Math.random())]);	// randomizes the value
}	

// shuffles all the tiles in the grid by 200 times, initally.
 function shuffleTiles() {		
	for(var i = 0; i < 200; i++) {
		randomlyChosenElement();		
	}
 }
