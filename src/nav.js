export function buildNav(){
  const fragment = document.createDocumentFragment();
  const navSection = document.querySelector('nav');
  navSection.classList = "menu-nav";
  navSection.innerHTML = "";//clear it

  //three divs 
  //title section
  const menuNavTitle = document.createElement("div");
  menuNavTitle.className = "menu-nav-title";
  menuNavTitle.textContent = "Guido's Taste of Italy";
  navSection.appendChild(menuNavTitle);

  //buttons section
  const navButtonsContainer = document.createElement("div");
  navButtonsContainer.className = "nav-buttons-container";
  //add the buttons
      const buttonHome = document.createElement("button");
      buttonHome.className = "nav-btn";
      buttonHome.id = "home";
      buttonHome.textContent = "Home";
      navButtonsContainer.appendChild(buttonHome);
      const buttonMenu = document.createElement("button");
      buttonMenu.className = "nav-btn";
      buttonMenu.id = "menu";
      buttonMenu.textContent = "Menu";
      navButtonsContainer.appendChild(buttonMenu);
      const buttonAbout = document.createElement("button");
      buttonAbout.className = "nav-btn";
      buttonAbout.id = "about";
      buttonAbout.textContent = "About";
      navButtonsContainer.appendChild(buttonAbout);
  navSection.appendChild(navButtonsContainer);

  //address section
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
  navSection.appendChild(navAddressDiv);

  const buttons = document.querySelectorAll('button');
  buttons.forEach((btn) => {
    btn.addEventListener('click', function() {
      clearContent();
      console.log(` ${btn.id} clicked`);
      switch (btn.id) {
    case "home":
      clearContent();
      displayHome();
      break;
    case "menu":
      clearContent();
      displayMenu();
      break;
    case "about":
      clearContent();
      displayAbout();
      break;
    default:
      console.warning(`invalid btn.id ${btn.id}`);
  }
      // alert(`Button clicked! ${btn.id}`);
    });
  });
}
function clearContent(){
  document.getElementById('content').innerHTML = '';
}