# Java-Object-Manipulation-
// Readme file will provide the sculptureScript.js for loop and importation of the data.js. data.js may be required to be copied and pasted in the "data.js list of objects" comment
// Create a looping object called sculptureListLengths

<script type="data.js" src="data.js"> </script> // imports the data.js file


// data.js list of objects
const sculptureListLengths = [
  // Paste data.js here  

module.exports = sculptureList // exports the file data.js

// For loop to loop the data.js values
for (let i = 0; i < sculptureListLengths.length; i++) {
    const sculptureListLengths = artworks[i];
    listLengths[sculptureListLengths.name] = {
        nameLength: sculptureListLengths.name.length,
        descriptionLength: sculptureListLengths.description.length
    };
}

console.log(sculptureListLengths);
