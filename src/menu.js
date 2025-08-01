import burrataBruschetta from './images/burrata-bruschetta-8.jpg';
import mainBakedCalamari from './images/main-baked-calamari.jpeg';
import antipasto from './images/antipasto.jpg';
import caprese from './images/caprese.jpg';

import carbonara from './images/carbonara.jpg';
import marinara from './images/marinara.jpg';
import tortellini from './images/tortellini.jpg';
import spaghettiMusselsClams from './images/Spaghetti-with-Mussels-and-Clams.jpeg';

import tiramisu from './images/tiramisu.jpg';
import canneloni from './images/canneloni.jpg';
import affogato from './images/affogato1-1663610950.jpg';
import zeppole from './images/zeppole1-1663612195.jpg';

import negroni from './images/negroni-recipe.jpg';
import wine from './images/wine.jpg';
import amaretto from './images/amaretto.jpg';
import champagneCocktail from './images/champagne-cocktail.jpg';

export function displayMenu(){
  const pageContent = document.querySelector('#content'); 
  pageContent.className = 'menu';
  pageContent.appendChild(buildMenuPage());
}
function buildMenuPage(){
  const menuHTML = `
  <!-- Appetizers -->
  <div class="menu-section" id="appetizers">
    <h2 class="menu-section-name">Appetizers</h2>
    <div class="menu-items">
      <div class="menu-item">
        <h3 class="item-name">Brushetta</h3>
        <div class="item-image">
          <img src="${burrataBruschetta}" alt="Description 1" width="300" height="200">
        </div>
        <p class="item-description">This describes brushetta Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p class="item-price">12</p>
      </div>

      <div class="menu-item">
        <h3 class="item-name">Calamari</h3>
        <div class="item-image">
          <img src="${mainBakedCalamari}" alt="Description 1" width="300" height="200">
        </div>
        <p class="item-description">This describes calamari Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p class="item-price">18</p>
      </div>

      <div class="menu-item">
        <h3 class="item-name">Antipasto</h3>
        <div class="item-image">
          <img src="${antipasto}" alt="Description 1" width="300" height="200">
        </div>
        <p class="item-description">This describes antipasto Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p class="item-price">20</p>
      </div>

      <div class="menu-item">
        <h3 class="item-name">Caprese Salad</h3>
        <div class="item-image">
          <img src="${caprese}" alt="Description 1" width="300" height="200">
        </div>
        <p class="item-description">This describes caprese salad Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p class="item-price">14</p>
      </div>
    </div>
  </div>

  <!-- Pasta -->
  <div class="menu-section" id="pasta">
    <h2 class="menu-section-name">Pasta</h2>
    <div class="menu-items">
      <div class="menu-item">
        <h3 class="item-name">Carbonara</h3>
        <div class="item-image">
          <img src="${carbonara}" alt="Description 1" width="300" height="200">
        </div>
        <p class="item-description">This describes carbonara Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p class="item-price">25</p>
      </div>

      <div class="menu-item">
        <h3 class="item-name">Marinara</h3>
        <div class="item-image">
          <img src="${marinara}" alt="Description 1" width="300" height="200">
        </div>
        <p class="item-description">This describes marinara Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p class="item-price">18</p>
      </div>

      <div class="menu-item">
        <h3 class="item-name">Tortellini Ragu</h3>
        <div class="item-image">
          <img src="${tortellini}" alt="Description 1" width="300" height="200">
        </div>
        <p class="item-description">This describes tortellini ragu Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p class="item-price">20</p>
      </div>

      <div class="menu-item">
        <h3 class="item-name">Spagetti with Mussels & Clams</h3>
        <div class="item-image">
          <img src="${spaghettiMusselsClams}" alt="Description 1" width="300" height="200">
        </div>
        <p class="item-description">This describes mussels and clams Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p class="item-price">30</p>
      </div>
    </div>
  </div>

  <!-- Desserts -->
  <div class="menu-section" id="desserts">
    <h2 class="menu-section-name">Desserts</h2>
    <div class="menu-items">
      <div class="menu-item">
        <h3 class="item-name">Tiramisu</h3>
        <div class="item-image">
          <img src="${tiramisu}" alt="Description 1" width="300" height="200">
        </div>
        <p class="item-description">This describes tiramisu Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p class="item-price">25</p>
      </div>

      <div class="menu-item">
        <h3 class="item-name">Canneloni</h3>
        <div class="item-image">
          <img src="${canneloni}" alt="Description 1" width="300" height="200">
        </div>
        <p class="item-description">This describes canneloni Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p class="item-price">18</p>
      </div>

      <div class="menu-item">
        <h3 class="item-name">Affogato</h3>
        <div class="item-image">
          <img src="${affogato}" alt="Description 1" width="300" height="200">
        </div>
        <p class="item-description">This describes Affogato Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p class="item-price">20</p>
      </div>

      <div class="menu-item">
        <h3 class="item-name">Zeppole</h3>
        <div class="item-image">
          <img src="${zeppole}" alt="Description 1" width="300" height="200">
        </div>
        <p class="item-description">This describes Zeppole Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p class="item-price">30</p>
      </div>
    </div>
  </div>

  <!-- Drinks -->
  <div class="menu-section" id="drinks">
    <h2 class="menu-section-name">Drinks</h2>
    <div class="menu-items">
      <div class="menu-item">
        <h3 class="item-name">Negroni</h3>
        <div class="item-image">
          <img src="${negroni}" alt="Description 1" width="300" height="200">
        </div>
        <p class="item-description">This describes carbonara Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p class="item-price">25</p>
      </div>

      <div class="menu-item">
        <h3 class="item-name">Wine</h3>
        <div class="item-image">
          <img src="${wine}" alt="Description 1" width="300" height="200">
        </div>
        <p class="item-description">This describes wine Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p class="item-price">see Wine List</p>
      </div>

      <div class="menu-item">
        <h3 class="item-name">Amaretto</h3>
        <div class="item-image">
          <img src="${amaretto}" alt="Description 1" width="300" height="200">
        </div>
        <p class="item-description">This describes amaretto Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p class="item-price">20</p>
      </div>

      <div class="menu-item">
        <h3 class="item-name">Champagne Cocktail Special</h3>
        <div class="item-image">
          <img src="${champagneCocktail}" alt="Description 1" width="300" height="200">
        </div>
        <p class="item-description">This describes the cocktail adipisicing elit.</p>
        <p class="item-price">20</p>
      </div>
    </div>
  </div>
`;
  const fragment = document.createDocumentFragment(); // Use a fragment to append multiple top-level elements efficiently
  //Create the Hero section
  const menuHeroDiv = document.createElement("div");
  menuHeroDiv.className = "menu-hero-section";
  const h1Element = document.createElement('h1');
  h1Element.textContent = 'Menu';
  menuHeroDiv.appendChild(h1Element);
  fragment.appendChild(menuHeroDiv); // Add hero section to fragment
  //add the mini menu
  const miniMenu = document.createElement('div');
  miniMenu.className = "menu-btn-container";
  const menuSections = document.createElement('span');
  menuSections.id = 'menu-sections';
  miniMenu.appendChild(menuSections);
  let anchor = document.createElement('a');
  anchor.href = '#appetizers';
  let button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Appetizers';
  anchor.appendChild(button);
  menuSections.appendChild(anchor);
  anchor = document.createElement('a');
  anchor.href = '#pasta';
  button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Pasta';
  anchor.appendChild(button);
  menuSections.appendChild(anchor);
  anchor = document.createElement('a');
  anchor.href = '#desserts';
  button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Desserts';
  anchor.appendChild(button);
  menuSections.appendChild(anchor);
  anchor = document.createElement('a');
  anchor.href = '#drinks';
  button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Drinks';
  anchor.appendChild(button);
  menuSections.appendChild(anchor);
  fragment.appendChild(miniMenu);

  const menu = document.createElement('div');
  menu.className = 'menu';
  menu.innerHTML = menuHTML;
  fragment.appendChild(menu);

  return fragment; // Return the fragment containing both sections
}