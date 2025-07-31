
export function displayHome(){
  const pageContent = document.querySelector('#content');
  pageContent.className = 'home'; // Applies .home to #content
  // Clear existing content before appending new sections
  pageContent.innerHTML = ''; 
  pageContent.appendChild(buildHomePage());
}

function buildHomePage(){
  
  const fragment = document.createDocumentFragment(); // Use a fragment to append multiple top-level elements efficiently
//set the body header and nav classes  
  const bodySection = document.querySelector('body');
  bodySection.classList ="home-body"; //different due to background image

  //The header section contains the nav bar and is static across the pages
  //only build it once
  const headerSection = document.querySelector('header');
  //see if the header is already in place by testing classList otherwise do nothing there
  if(! headerSection.classList.contains('header-nav')){
    headerSection.classList ="header-nav";
    const headerNavTitle = document.createElement("div");
    headerNavTitle.className = "header-nav-title";
    headerNavTitle.textContent = "Guido's Taste of Italy";
    headerSection.prepend(headerNavTitle);
    //setup nav within header
    const navSection = document.querySelector('nav');
    navSection.classList = "nav-buttons-container";
    //add address 
    const navAddressDiv = document.createElement("div");
    navAddressDiv.className = "nav-address";
    let addrp = document.createElement("p");
    addrp.textContent = "123 Main Street";
    navAddressDiv.appendChild(addrp);
    addrp = document.createElement("p");
    addrp.textContent = "Myrtle Beach, SC 29579";
    navAddressDiv.appendChild(addrp);
    addrp = document.createElement("p");
    addrp.textContent = "843-555-1234";
    navAddressDiv.appendChild(addrp);
    headerSection.appendChild(navAddressDiv);
  }
  
  // Create the Hero Section
  const heroSection = document.createElement("div");
  heroSection.className = "home-hero-section";

  let element = document.createElement("h1");
  element.textContent = "Guido's Taste of Italy";
  heroSection.appendChild(element);

  element = document.createElement("div");
  element.className = "home-logo";
  heroSection.appendChild(element);

  element = document.createElement("h2");
  element.className = "Italian";
  element.textContent = "Il gusto dell'Italia di Guido";
  heroSection.appendChild(element);
  fragment.appendChild(heroSection); // Add hero section to fragment
  
  //Create the Home Content Section 
  const homeContentDiv = document.createElement("div");
  homeContentDiv.className = "home-content"; // This will apply the white background, padding, etc.
  element = document.createElement("h2");
  element.textContent = "Welcome to Guido's Taste of Italy";
  homeContentDiv.appendChild(element);
  element = document.createElement("p");
  element.textContent = "At Guido's Taste of Italy, we bring the heart and soul of Italy’s home-style cooking straight to your plate. Our kitchen is filled with the rich aromas of family recipes passed down through generations — each bite bursting with authentic flavors made from the freshest, highest-quality ingredients.";
  homeContentDiv.appendChild(element);
  element = document.createElement("p");
  element.textContent = "Every day, our chef lovingly prepares a unique pasta special, crafted to showcase the best of Italian tradition with a personal touch. Whether it’s a creamy carbonara, a hearty ragù, or delicate handmade ravioli, you’ll taste the care and comfort in every forkful.";
  homeContentDiv.appendChild(element);
  element = document.createElement("p");
  element.textContent = "Sit back, relax, and savor the simple pleasures of good company, warm hospitality, and food that tastes like a hug from Nonna herself.";
  homeContentDiv.appendChild(element);
  element = document.createElement("p");
  element.textContent = "Come as a guest, leave as family.";
  element.id = "hook";
  homeContentDiv.appendChild(element);
  fragment.appendChild(homeContentDiv); // Add home content section to fragment

  return fragment; // Return the fragment containing both sections
}