const main_market = document.getElementById('main-market');
const table_products = document.getElementById('table-products');
const cart = [];


function createCard(card_param) {

    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', card_param.id);
    const header_card = document.createElement('div');
    header_card.classList.add('header_card');
    const title_card = document.createElement('div');
    title_card.classList.add('title_card');
    const p_title = document.createElement('p');
    p_title.textContent = card_param.name;
    p_title.setAttribute('id', 'p-title');
    const img_card = document.createElement('img');
    img_card.setAttribute('src', card_param.img);
    img_card.setAttribute('alt', card_param.name);
    img_card.setAttribute('id', 'img-card');
    const footer_card = document.createElement('div');
    footer_card.classList.add('footer-card');
    const p_price = document.createElement('p');
    p_price.textContent = card_param.price;
    p_price.setAttribute('id', 'p-price');
    const button_card = document.createElement('button');
    button_card.textContent = 'Add to cart';
    button_card.classList.add('btn-add');
    button_card.setAttribute('id', `btn-add-${card_param.id}`);
    button_card.addEventListener('click',SelectToCart);

 
    title_card.appendChild(p_title);
    footer_card.appendChild(p_price);
    footer_card.appendChild(button_card);

    card.appendChild(header_card);
    card.appendChild(title_card);
    card.appendChild(img_card);
    card.appendChild(footer_card);


    main_market.appendChild(card);    
    
}

renderCards();
function renderCards() {
    const card_renders = products.map(element =>{
        createCard(element);
    });
    return card_renders;
}

function SelectToCart(event) {
    const current_id = event.target.id.split('-')[2];               
    products.forEach(element => {        
            if (current_id == element.id) {
              cart.push(element)        
        }
    });
    AddToCart();       
}

function AddToCart() {
    table_products.innerHTML = '';
    return cart.map(element=> {        
        render_cart(element);
    });
}

function render_cart(cart) {        
    table_products.innerHTML = table_products.innerHTML + `<tr class="t-und">
    <td class="td-products t-und">${cart.name}</td>
    <td class="td-products t-und">${cart.price}</td>
    <td class="td-products t-und">${0}</td>
    <td class="td-products t-und"><button class="substract-cart">-</button></td>
    <td class="td-products t-und"><button class="add-cart">+</button></td>
    <td class="td-products t-und"><button class="clear-cart">Clear</button></td>
    <td class="td-products t-und">100</td>
   </tr>
  </table>`;
};