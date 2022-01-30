const TA = document.querySelector("textarea");

const btnMinusc = document.querySelector(".Minusc");
const btnCapitalize = document.querySelector(".Capitalize");
const btnClear = document.querySelector(".Clear");
const btnMayusc = document.querySelector(".Mayusc");

const ConvertToMinusc = () => {
 const text = TA.value.toLowerCase();
 TA.value = text;
 console.log(TA.value);
};

const ConvertToMayusc = () => {
 const text = TA.value.toUpperCase();
 TA.value = text;
 console.log(TA.value);
};

const ResetText = () => {
 TA.value = "";
 console.log(TA.value);
};

const CapitalizeText = () => {
 const paragraph = TA.value.split(" ");
 const newParagraph = paragraph.map((word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
 });
 // Pendiente definir como dejar las comas propias del párrafo
 TA.value = newParagraph.toString().replace(/,/g, " ");
};

events();
function events() {
 btnMinusc.addEventListener("click", ConvertToMinusc);
 btnMayusc.addEventListener("click", ConvertToMayusc);
 btnClear.addEventListener("click", ResetText);
 btnCapitalize.addEventListener("click", CapitalizeText);
}

