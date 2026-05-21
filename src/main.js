import { PetCard } from "./components/pet-card/script";
import { getData } from "./utils/fetch";

customElements.define("pet-card", PetCard);
getData();
