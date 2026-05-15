class PetCard extends HTMLElement {
  render() {
    const name = this.getAttribute("name") || "Имя не указано";
    const type = this.getAttribute("type") || "type не указано";
    const description =
      this.getAttribute("description") || "description не указано";
    const imgUrl = this.getAttribute("img-url") || "";
    const id = crypto.randomUUID();

    this.innerHTML = `
        <div class="card">
            <figure class="card-img">
                <img src="${imgUrl}" alt="Pet photo"/>
            </figure>
            <p class="card-name">${name}</p>
            <button 
              class="button button-secondary button-large"
              onclick="document.getElementById('${id}').showModal()"
            >
              Learn more
            </button>
        </div>
        <dialog id="${id}" class="card-modal-window">
          <div class="card-modal-window-content">
            <figure class="card-modal-img" >
              <img src="${imgUrl}" alt="Pet photo"/>
            </figure>
            <div class="card-modal-text">
              <div class="card-modal-text-title">
                <h3 class="h3-static">${name}</h3>
                <h4 class="h4">${type}</h4>
              </div>
              <h5 class="h5 card-modal-description">${description}</h5>
              <ul class="h5 card-modal-list">
                <li><strong>Age:</strong> 2 months</li>
                <li><strong>Inoculations:</strong> none</li>
                <li><strong>Diseases:</strong> none</li>
                <li><strong>Parasites:</strong> none</li>
              </ul>
            </div>
            <button 
              class="button button-secondary button-short card-modal-close-button"
              onclick="document.getElementById('${id}').close()"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/>
              </svg>
            </button>
          </div>
        </dialog>
    `;
  }

  static get observedAttributes() {
    return ["name", "type", "description", "img-url"];
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
}

async function getData() {
  try {
    const response = await fetch("src/data/description.json");
    const data = await response.json();

    if (Array.isArray(data)) {
      data.forEach((elem, index) => {
        const petCard = document.getElementById(`pet-${index}`);
        if (petCard) {
          petCard.setAttribute("name", elem.name);
          petCard.setAttribute("type", elem.type);
          petCard.setAttribute("description", elem.description);
          petCard.setAttribute("img-url", elem.url);
        }
      });
    }
  } catch (e) {
    console.error(e);
  }
}

customElements.define("pet-card", PetCard);
getData();
