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
<<<<<<< HEAD
    <div className="search-params">
      <form
=======
    <div className="my-0 mx-auto w-11/12">
      <form
        className="mb-10 flex flex-col items-center justify-center rounded-lg bg-gray-200 p-10 shadow-lg"
>>>>>>> 63ff20b (chore:for the tailwind)
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
<<<<<<< HEAD
          <input id="location" name="location" placeholder="Location" />
=======
          <input
            id="location"
            name="location "
            type="text"
            className="mb-5 block w-60"
            placeholder="Location"
          />
>>>>>>> 63ff20b (chore:for the tailwind)
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            name="animal"
            onChange={(e) => setAnimal(e.target.value)}
<<<<<<< HEAD
=======
            className="mb-5 block w-60"
>>>>>>> 63ff20b (chore:for the tailwind)
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
<<<<<<< HEAD
          <select id="breed" name="breed">
=======
          <select
            id="breed"
            name="breed"
            className="mb-5 block w-60 disabled:opacity-50"
          >
>>>>>>> 63ff20b (chore:for the tailwind)
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

<<<<<<< HEAD
        <button>Submit</button>
=======
        <button className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50">
          Submit
        </button>
>>>>>>> 63ff20b (chore:for the tailwind)
      </form>

      {/* for pets show */}
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
