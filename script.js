// triangle calculation 
// For base
function calculateTriangle (){
    const Base = document.getElementById('base'); 
    const BaseInput = Base.value; 
    const convertBase = parseFloat(BaseInput); 
      console.log(convertBase);

    const Height = document.getElementById('height'); 
    const HeightInput = Height.value;
    const convertHeight = parseFloat(HeightInput); 
    console.log(convertHeight);

    const area = 0.5*convertBase*convertHeight; 
    // console.log('Area is',area);

    const triangleArea = document.getElementById('triangle-area'); 
    triangleArea.innerText = area.toFixed(2); 

}

function calculateRectangle () {

    const WidthInput = document.getElementById('width'); 
    const WidthInputField = WidthInput.value; 
    const Width = parseFloat(WidthInputField); 
      console.log(Width);

    const LengthInput = document.getElementById('length'); 
    const LengthInputField = LengthInput.value;
    const Length = parseFloat(LengthInputField); 
    console.log(Length);

    const area = Width*Length; 
   
    const rectangleArea = document.getElementById('rectangle-area'); 
    rectangleArea.innerText = area.toFixed(2); 
  
}
function calculateParallelogram() {
  // Retrieve the width input element by its ID
  const widthInput = document.getElementById('parallelogram-width');
  // Retrieve the value entered in the width input field
  const widthInputValue = widthInput.value;
  // Parse the width value to a float
  const width = parseFloat(widthInputValue);

  // Retrieve the height input element by its ID
  const heightInput = document.getElementById('parallelogram-height');
  // Retrieve the value entered in the height input field
  const heightInputValue = heightInput.value;
  // Parse the height value to a float
  const height = parseFloat(heightInputValue);

  // Calculate the area of the parallelogram
  const area = width * height;

  // Retrieve the element where the area will be displayed
  const parallelogramArea = document.getElementById('parallelogram-area');
  // Set the text content of the element to display the calculated area
  parallelogramArea.textContent = area.toFixed(2); // Round the area to 2 decimal places
}
function calculateRhombusArea() {
  // Retrieve the first diagonal input element by its ID
  const diagonal1Input = document.getElementById('rhombus-diagonal1');
  // Retrieve the value entered in the first diagonal input field
  const diagonal1InputValue = diagonal1Input.value;
  // Parse the first diagonal value to a float
  const diagonal1 = parseFloat(diagonal1InputValue);

  // Retrieve the second diagonal input element by its ID
  const diagonal2Input = document.getElementById('rhombus-diagonal2');
  // Retrieve the value entered in the second diagonal input field
  const diagonal2InputValue = diagonal2Input.value;
  // Parse the second diagonal value to a float
  const diagonal2 = parseFloat(diagonal2InputValue);

  // Calculate the area of the rhombus
  const area = 0.5 * diagonal1 * diagonal2;

  // Retrieve the element where the area will be displayed
  const rhombusArea = document.getElementById('rhombus-area');
  // Set the text content of the element to display the calculated area
  rhombusArea.textContent = area.toFixed(2); // Round the area to 2 decimal places
}


function pentagonArea() {
  // Retrieve the side length input element by its ID
  const sideLengthInput = document.getElementById('pentagon-side-length');
  // Retrieve the value entered in the input field
  const sideLengthInputValue = sideLengthInput.value;
  // Parse the value to a float
  const sideLength = parseFloat(sideLengthInputValue);

  // Calculate the area of the pentagon
  const area = (5 / 4) * sideLength * sideLength * (1 / Math.tan(Math.PI / 5));

  // Retrieve the element where the area will be displayed
  const pentagonAreaElement = document.getElementById('pentagon-area');
  // Set the text content of the element to display the calculated area
  pentagonAreaElement.textContent = area.toFixed(2); // Round the area to 2 decimal places
}


function calculateEllipseArea() {
  // Retrieve the semi-major axis input element by its ID
  const semiMajorAxisInput = document.getElementById('semi-major-axis');
  // Retrieve the value entered in the input field
  const semiMajorAxisInputValue = semiMajorAxisInput.value;
  // Parse the value to a float
  const semiMajorAxis = parseFloat(semiMajorAxisInputValue);

  // Retrieve the semi-minor axis input element by its ID
  const semiMinorAxisInput = document.getElementById('semi-minor-axis');
  // Retrieve the value entered in the input field
  const semiMinorAxisInputValue = semiMinorAxisInput.value;
  // Parse the value to a float
  const semiMinorAxis = parseFloat(semiMinorAxisInputValue);

  // Calculate the area of the ellipse
  const area = Math.PI * semiMajorAxis * semiMinorAxis;

  // Retrieve the element where the area will be displayed
  const ellipseAreaElement = document.getElementById('ellipse-area');
  // Set the text content of the element to display the calculated area
  ellipseAreaElement.textContent = area.toFixed(2); // Round the area to 2 decimal places
}



