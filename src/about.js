import montemesola from './images/Montemesola.png';
export function displayAbout(){
   const pageContent = document.querySelector('#content'); 
  pageContent.className = 'about';
  pageContent.innerHTML= buildAboutPage();
}


function buildAboutPage() {
  const aboutHTML = `
    <div class="container">
  <div class="area1"> My late father came to the US from <a class="whitelink"href="https://pugliapassion.com/towns-and-cities/montemesola/" target="_blank" rel="noopener noreferrer">Montemesola</a>, which is a small town located to the north east of Taranto, half way between Grottaglie and Crispiano. <a class="whitelink"href="https://en.wikipedia.org/wiki/Apulia" target="_blank" rel="noopener noreferrer">Puglia </a>(in red on the map), also known as Apulia, is a region in Southern Italy famous for its unique and flavorful cuisine. Key culinary highlights include orecchiette pasta with broccoli rabe (cime di rapa), Focaccia Barese, and fresh seafood, reflecting the region's agricultural bounty and coastal location. </div>
  <div class="area2">Growing up, my father was too young to serve in WWII so he stayed at home with his mother and sisters. That is where he learned to cook. As a adult, he jpoined the Italian Navy and ended up visisting Norfolk, VA where he met my mother who taught dancing at the USO.  A whirlwind romance, they married, and after a while, he was able to come back to the US and he became a citizen.</div>
  <div class="area3">So who is this Guido character?  Guido is just a nickname for me, his son, Dino.  I was the oldest son of four and I was lucky enough to learn his love of food and cooking - sharing good food is a great joy!</div>
</div>
  `;
  
  return aboutHTML;


}