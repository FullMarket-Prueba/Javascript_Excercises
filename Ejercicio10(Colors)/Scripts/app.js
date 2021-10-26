const main = document.querySelector('#principal-container');

const cart_colors = [];

create_Cards();
function create_Cards() {
  colors.forEach((color) => {
    const card = document.createElement('div');
    const title_card = document.createElement('h2');
    const button_card = document.createElement('button');
    const image_color = document.createElement('img');

    button_card.addEventListener('click', addCart);

    button_card.style.outline = '2px solid green';
    button_card.style.outlineOffset = '2px';
    button_card.setAttribute('id', color.name);
    button_card.textContent = 'Add';
    title_card.textContent = color.name.toUpperCase();
    image_color.src = color.img;    
    card.classList.add('card');
    card.style.backgroundColor = color.hex;

    if (color.hex === "#000000") {
      title_card.style.color = 'white';
    }

    card.appendChild(title_card);
    card.appendChild(image_color);
    card.appendChild(button_card);
    main.appendChild(card);    
  }); 
}

function addCart(e) {
  cart_colors.push(e.target.getAttribute('id'));
  console.log(cart_colors);
}





