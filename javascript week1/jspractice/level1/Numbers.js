function explainParseInt(value) {
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
  }
  
  // Example Usage for parseInt //parseInt will convert "42","42px"into 42 string or 3.14  int and 3 int
  explainParseInt("42");
  explainParseInt("42px");
  explainParseInt("3.14");
  
  function explainParseFloat(value){
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
  }
  
  // Example Usage for parseFloat
  explainParseFloat("3.14");
  explainParseFloat("42");
  explainParseFloat("42px");