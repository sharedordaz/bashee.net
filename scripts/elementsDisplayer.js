import { serviceTypes } from "./elements.js";
console.log(serviceTypes);
const container = document.getElementById("elementsContainer");
const type = container.dataset.type; // Get the type from data attribute

  container.classList.add("therapy-cards");

  serviceTypes.forEach(service => {
    if (service.type !== type) return; // Filter for the specified type
    const card = document.createElement("div");
    card.classList.add("card");

    //HERE ARE THE METHODS OF THE ARRAY
    card.innerHTML = `

      <h3>${service.name}</h3>  
      <p>${service.description}</p>
      <p>Cost: $${service.cost}</p>
    `;

    container.appendChild(card);
  });