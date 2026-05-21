export async function getData() {
  try {
    const response = await fetch("../../data/description.json");
    const data = await response.json();

    if (Array.isArray(data)) {
      data.forEach((elem, index) => {
        const petCard = document.getElementById(`pet-${index}`);
        if (petCard) {
          petCard.setAttribute("name", elem.name);
          petCard.setAttribute("type", elem.type);
          petCard.setAttribute("description", elem.description);
          petCard.setAttribute("img-url", elem.img);
        }
      });
    }
  } catch (e) {
    console.error(e);
  }
}
