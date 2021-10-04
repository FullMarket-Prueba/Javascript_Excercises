const some_characters = document.querySelector('#characters');
const titleCharacter = document.querySelector('#nameCharacter');
const img_character = document.querySelector('#img-character');

const chooseCharacter = () => {

  let  keyNames = Object.keys(characters);
  console.log(keyNames);
  console.log(some_characters.value);
  
  for (let index = 0; index < keyNames.length; index++) {
    if (some_characters.value === keyNames[index]) {
      // console.log('funciona');
      // console.log(some_characters.value);
      // console.log(characters[some_characters.value].nameCharacter);
      // console.log(characters[some_characters.value].photo);
      titleCharacter.textContent = `Hola, soy ${characters[some_characters.value].nameCharacter}`;
      img_character.removeAttribute('src');
      img_character.setAttribute('src',characters[some_characters.value].photo);
    }      
  }

  
  // const people = Object.entries(characters);
  // console.log(people);
  // // console.log(some_characters.value);
  // // console.log(characters[some_characters.value]);
}

some_characters.addEventListener('change', chooseCharacter);