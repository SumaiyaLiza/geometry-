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
    triangleArea.innerText = area; 

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
    rectangleArea.innerText = area; 
  
}


