Unsplash photo search app by Liviu Ganea

I've created a simplistic WebSite/Application with a single function: to search photos on www.unsplash.com
based on a keyword.

Modules used:
1) Redux for keyword saving functions
2) Axios for performing the get request as a promise.
3) AntD for a few components reponsible for user interaction and information (loading, keyword saving etc.)
4) styled-components for ... styling the components via CSS-in-JS
5) Font Awesome for a few icons

Functionality:
1) Searching for photos based on Unsplash (Unsplash Api) via keywords that can be entered in a searchbox.
2) Displaying those photos below the Search section in a grid.
2) Saving those keywords in a Redux store and rendering them below the serchbox after being prompted.
3) Clicks on a keyword get the user asked if they want to delete or the keyword (Redux) or search photos with it (no user input required if  
   they choose to search, other than clicking 'Search', of course).

Known bugs/errors:
1) Currently each cell in the grid will not adjust to compensate for photos with a smaller height, generating empty space, since the cell in 
the next row doesn't immediately follow (keepingi in mind the grid-row-gap). It's possible to fix this by setting 3 divs in the Grid container 
that will act as columns and in turn act as a Grid in turn and the cells of each child Grid as columns (the parent Grid sets the number of 
columns and their spacing while the child Grids set the number of rows in each Grid independently with their spacing). Check Unsplash main page 
photo grid in Inspector. Unfortunately, due to me using Array.prototype.map to sort every photo's data from the API's response, I'm not sure 
how to go about using this solution. StackOverflow certainly didn't help.
