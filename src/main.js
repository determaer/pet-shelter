class PetCard extends HTMLElement {
  static get observedAttributes() {
    return ["name", "type", "description", "img-url"];
  }

  connectedCallback() {
    const name = this.getAttribute("name") || "Имя не указано";
    const type = this.getAttribute("type") || "type не указано";
    const description =
      this.getAttribute("description") || "description не указано";
    const imgUrl = this.getAttribute("img-url") || "";

    this.innerHTML = `
        <style>
            .card {
                display: flex;
                flex-direction: column;
                width: 270px;
                height: 435px;
                background: var(--color-light-s);
                border-radius: 9px;
                align-items: center;
                gap: 30px
            }

            .card-name {
                color: var(--color-dark-l);
                font-family: "Georgia";
                font-weight: normal;
                font-size: 20px;
                line-height: normal;
                letter-spacing: 6%;
            }

            .card-img {

            }
        </style>
        <div class="card">
            <figure class="card-img">
                <img src="${imgUrl}" alt="Pet photo"/>
            </figure>
            <p class="card-name">${name}</p>
            <button class="button button-secondary button-large">Learn more</button>
        </div>
    `;
  }
}

customElements.define("pet-card", PetCard);
