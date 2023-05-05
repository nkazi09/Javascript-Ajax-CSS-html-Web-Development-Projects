# Javascript-Ajax-CSS-html-Web-Development-Projects






![image](https://user-images.githubusercontent.com/70826183/236499919-229aa3ee-c346-49db-a665-3c6c76ef3d15.png)


Background Information:
The Fifteen Puzzle (also called the Sliding Puzzle) is a simple classic game consisting of a 4x4 grid of numbered squares with one square missing. The object of the game is to arrange the tiles into numerical order by repeatedly sliding a square that neighbors the missing square into its empty space.


Behavior Details:
When the mouse button is pressed on a puzzle square, if that square is next to the blank square, it is moved into the blank space. If the square does not neighbor the blank square, no action occurs. Similarly, if the mouse is pressed on the empty square or elsewhere on the page, no action occurs.
When the mouse hovers over a square that can be moved (neighbors the blank spot), its border and text color should become red. Once the cursor is no longer hovering on the square, its appearance should revert to its original state. Hovering over a square that cannot be moved should have no effect. (Use the :hover CSS pseudo-class.)
When the Shuffle button is clicked, the tiles of the puzzle are randomized. The tiles must be rearranged into a solvable state. Note that some puzzle states are not solvable; for example, it has been proven that the puzzle cannot be solved if you switch only its 14 and 15 tiles. We suggest that you generate a random valid solvable puzzle state by repeatedly choosing a random neighbor of the missing tile and sliding it onto the missing tile's space. A few hundred such random movements should produce a shuffled board. Your algorithm should be relatively efficient; if it takes more than a second to run or performs a large number of unnecessary tests and calls, you may lose points. For full credit, your shuffle code should thoroughly rearrange the tiles as well as the position of the blank square.
The game is not required to take any particular action when the puzzle has been won. You can decide if you'd like to pop up an alert box congratulating the user or add any other optional behavior to handle this event.
