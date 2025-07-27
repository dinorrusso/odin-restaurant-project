export function displayAbout(){
  console.log('In displayAbout()')
  const pageContent = document.querySelector('#content'); 
  pageContent.className = 'about';
  let testElement = document.createElement("h1");
  testElement.textContent = 'About Page';
  pageContent.appendChild(testElement);
}