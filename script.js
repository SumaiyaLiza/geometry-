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
  const widthInput = document.getElementById('parallelogram-width');
  const widthInputValue = widthInput.value;
  const width = parseFloat(widthInputValue);

  const heightInput = document.getElementById('parallelogram-height');
  const heightInputValue = heightInput.value;
  const height = parseFloat(heightInputValue);

  const area = width * height;
  const parallelogramArea = document.getElementById('parallelogram-area');
  parallelogramArea.textContent = area.toFixed(2); 
}
function calculateRhombusArea() {
  const diagonal1Input = document.getElementById('rhombus-diagonal1');
  const diagonal1InputValue = diagonal1Input.value;
  const diagonal1 = parseFloat(diagonal1InputValue);
  const diagonal2Input = document.getElementById('rhombus-diagonal2');
  const diagonal2InputValue = diagonal2Input.value;
  const diagonal2 = parseFloat(diagonal2InputValue);
  const area = 0.5 * diagonal1 * diagonal2;
  const rhombusArea = document.getElementById('rhombus-area');
  rhombusArea.textContent = area.toFixed(2);
}


function pentagonArea() {
  const sideLengthInput = document.getElementById('pentagon-side-length');
  const sideLengthInputValue = sideLengthInput.value;
  const sideLength = parseFloat(sideLengthInputValue);
  const area = (5 / 4) * sideLength * sideLength * (1 / Math.tan(Math.PI / 5));
  const pentagonAreaElement = document.getElementById('pentagon-area');
  pentagonAreaElement.textContent = area.toFixed(2);
}


function calculateEllipseArea() {
  const semiMajorAxisInput = document.getElementById('semi-major-axis');
  const semiMajorAxisInputValue = semiMajorAxisInput.value;
  const semiMajorAxis = parseFloat(semiMajorAxisInputValue);

  const semiMinorAxisInput = document.getElementById('semi-minor-axis');
  const semiMinorAxisInputValue = semiMinorAxisInput.value;
  const semiMinorAxis = parseFloat(semiMinorAxisInputValue);
  const area = Math.PI * semiMajorAxis * semiMinorAxis;
  const ellipseAreaElement = document.getElementById('ellipse-area');
  ellipseAreaElement.textContent = area.toFixed(2);
}


//  function for Area calculation

function appendAreaResult(shape,area) {
  const areaCalculationDisplay = document.getElementById('area-calculation');
  const resultElement = document.createElement('p');
  resultElement.innerText = `The ${shape} Area is ${area.toFixed(2)} cm²`;
  resultElement.classList.add('result-text')
  areaCalculationDisplay.appendChild(resultElement);
}

function AreaCalculationTriangle() {
  calculateTriangle();
  const areaDisplay = document.getElementById('triangle-area');
  const area = parseFloat(areaDisplay.innerText);
  appendAreaResult('Triangle', area);
}

function AreaCalculationRectangle() {
  calculateRectangle();
  const areaDisplay = document.getElementById('rectangle-area');
  const area = parseFloat(areaDisplay.innerText);
  appendAreaResult('Rectangle', area);
}

function AreaCalculationEllipse (){

  calculateEllipseArea (); 
  const areaDisplay = document.getElementById('ellipse-area');
  const area = parseFloat(areaDisplay.innerText);
  appendAreaResult('Ellipse', area);
}

function AreaCalculationParallelogram () {

  calculateParallelogram(); 

  const areaDisplay = document.getElementById('parallelogram-area'); 
  const area = parseFloat (areaDisplay.innerText); 
  appendAreaResult ('Parallelogram', area); 

}



function  AreaCalculationRhombus () {

  calculateRhombusArea() ;
  const areaDisplay = document.getElementById('rhombus-area'); 
  const area = parseFloat (areaDisplay.innerText); 
  appendAreaResult ('Rhombus', area); 
}

function AreaCalculationPentagon () {

  pentagonArea();
  const areaDisplay = document.getElementById('pentagon-area'); 
  const area = parseFloat (areaDisplay.innerText); 
  appendAreaResult ('Pentagon', area);

}
function AreaCalculationEllipse (){
  calculateEllipseArea();
  const areaDisplay = document.getElementById('ellipse-area'); 
  const area = parseFloat (areaDisplay.innerText); 
  appendAreaResult ('Ellipse', area);
}