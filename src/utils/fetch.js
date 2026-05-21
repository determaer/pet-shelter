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
          petCard.setAttribute("breed", elem.breed);
          petCard.setAttribute("age", elem.age);
          petCard.setAttribute(
            "inoculations",
            JSON.stringify(elem.inoculations),
          );
          petCard.setAttribute("diseases", JSON.stringify(elem.diseases));
          petCard.setAttribute("parasites", JSON.stringify(elem.parasites));
        }
      });
    }
  } catch (e) {
    console.error(e);
  }
}
