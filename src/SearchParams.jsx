import { useContext, useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import fetchSearch from "./fetchSearch";
import { useQuery } from "@tanstack/react-query";
import AdoptContext from "./AdoptedContext";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [animal, setAnimal] = useState("");

  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets || [];

  const [breeds] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptContext);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          let obj = {
            location: formData.get("location"),
            animal: formData.get("animal"),
            breed: formData.get("breed"),
          };
          setRequestParams(obj);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            name="animal"
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select id="breed" name="breed">
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>

      {/* for pets show */}
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
