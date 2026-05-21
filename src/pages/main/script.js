import { PetCard } from "../../components/pet-card/script.js";
import { getData } from "../../utils/fetch.js";

customElements.define("pet-card", PetCard);
getData();
