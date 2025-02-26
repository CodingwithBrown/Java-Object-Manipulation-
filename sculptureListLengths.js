// For loop, to loop the data.js values
for (let i = 0; i < sculptureListLengths.length; i++) {
    const sculptureListLengths = artworks[i];
    listLengths[sculptureListLengths.name] = {
      nameLength: sculptureListLengths.name.length,
      descriptionLength: sculptureListLengths.description.length
    };
  }
  
  console.log(sculptureListLengths); // "Go Live Server" keeps opening my directory not my root file FIX!!!