// copied from git
const sculptureList = [
  {
  name: 'Homenaje a la Neurocirugía',
  artist: 'Marta Colvin Andrade',
  description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
  url: 'https://i.imgur.com/Mx7dA2Y.jpg',
  alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  
}
];

// Empty container for return values
const sculptureListLengths = {};

// Section to process each sculpture object in the container
for (const sculpture of sculptureList) {
  // Create the length of each object
  const lengthsObj = {};
  
  // Set the length to the object to equal the sculpture
  for (const key in sculpture) {
    lengthsObj[key] = sculpture[key].length;
  }
  
  // Will add the objects length to the results.
  Object.assign(sculptureListLengths, lengthsObj);
}

// Displays the results
console.log(sculptureListLengths);
