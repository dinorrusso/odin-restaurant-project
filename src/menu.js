export function displayMenu(){
  const pageContent = document.querySelector('#content'); 
  pageContent.className = 'menu';
  pageContent.appendChild(buildMenuPage());
}
function buildMenuPage(){
  const fragment = document.createDocumentFragment(); // Use a fragment to append multiple top-level elements efficiently

  // 1. Create the Hero Section
  const heroSection = document.createElement("div");
  heroSection.className = "menu-hero-section"; // Renamed class to avoid conflict and be more specific
  // The 'home-hero' styling (background, min-height) will be applied to this section in CSS
  // The centering of children (h1, logo, h2) will also be handled by this section's CSS

  // let element = document.createElement("h1");
  // element.textContent = "Guido's Taste of Italy";
  // heroSection.appendChild(element);

  // element = document.createElement("div");
  // element.className = "home-logo";
  // heroSection.appendChild(element);

  // element = document.createElement("h2");
  // element.className = "Italian";
  // element.textContent = "Il gusto dell'Italia di Guido";
  // heroSection.appendChild(element);

  fragment.appendChild(heroSection); // Add hero section to fragment

  // 2. Create the Home Content Section (this will naturally appear below the heroSection)
  const homeContentDiv = document.createElement("div");
  homeContentDiv.className = "menu-content"; // This will apply the white background, padding, etc.
  homeContentDiv.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt reprehenderit dolore iure voluptatum eos eveniet porro impedit in, nihil tempora totam consectetur numquam fugit ipsam sed eum voluptas obcaecati?';
  
  fragment.appendChild(homeContentDiv); // Add home content section to fragment

  return fragment; // Return the fragment containing both sections
}