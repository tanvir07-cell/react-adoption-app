import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import fetchPet from "./fetchPet";
import Carousal from "./Carousal";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import { useContext, useState } from "react";
import AdoptContext from "./AdoptedContext";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);
  const [showModal, setShowModal] = useState(false);
  const [, setAdoptedPet] = useContext(AdoptContext);
  const navigate = useNavigate();

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousal images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

function DetailsWithErrorBoundary() {
  let errorMsg = (
    <h2>
      There is an error occured. Please try again later or go to the{" "}
      <Link to="/">Home page</Link>
    </h2>
  );
  return (
    <ErrorBoundary errorMsg={errorMsg}>
      <Details />
    </ErrorBoundary>
  );
}

export default DetailsWithErrorBoundary;
