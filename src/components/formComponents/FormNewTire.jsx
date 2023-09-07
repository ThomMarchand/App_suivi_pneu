import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import SetSelectInput from "./SetSelectInput";

/**
 * form for creating a new article
 * @returns {input} type select
 * @returns {input} type texte
 * @returns {button} type submit
 */

const FormNewTire = () => {
  const [tireBrand, setTireBrand] = useState([]);
  const [tireLife, setTireLife] = useState([]);
  const [tireProfile, setTireProfile] = useState([]);
  const [tireSize, setTireSize] = useState([]);

  const refIdSelect = useRef(null);
  const refDepthSelect = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:3004/toCreateNewTire")
      .then(
        (res) => (
          setTireBrand(res.data[0].tireBrand),
          setTireLife(res.data[0].tireLife),
          setTireProfile(res.data[0].tireProfile),
          setTireSize(res.data[0].tireSize)
        )
      );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3004/stockTire", {
        id: e.target[4].value,
        life: e.target[1].value,
        brand: e.target[0].value,
        size: e.target[2].value,
        profile: e.target[3].value,
        depth: e.target[5].value,
        createAt: Date.now(),
      })
      .then(
        () => alert(`Le pneu à bien été créé`),
        (refIdSelect.current.value = ""),
        (refDepthSelect.current.value = "")
      )
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <div className="form-container">
        <label htmlFor="brand">Choisir la marque du pneu</label>
        <SetSelectInput
          optionArray={tireBrand}
          name={"brand"}
          id={"brandSelect"}
        />
      </div>
      <br />
      <div className="form-container">
        <label htmlFor="life">Choisir la vie du pneu</label>
        <SetSelectInput
          optionArray={tireLife}
          name={"life"}
          id={"lifeSelect"}
        />
      </div>
      <br />
      <div className="form-container">
        <label htmlFor="size">Choisir la taille du pneu</label>
        <SetSelectInput
          optionArray={tireSize}
          name={"size"}
          id={"sizeSelect"}
        />
      </div>
      <br />
      <div className="form-container">
        <label htmlFor="profile">Choisir le profil du pneu</label>
        <SetSelectInput
          optionArray={tireProfile}
          name={"profile"}
          id={"profileSelect"}
        />
      </div>
      <br />
      <div className="form-container">
        <label htmlFor="id">Ecrire le matricule du pneu</label>
        <input type="text" ref={refIdSelect} name="id" id="idSelect"></input>
      </div>
      <br />
      <div className="form-container">
        <label htmlFor="depth">Ecrire la profondeur du pneu</label>
        <input
          type="text"
          ref={refDepthSelect}
          name="depth"
          id="depthSelect"
        ></input>
      </div>
      <br />
      <button>Créer nouveau pneu</button>
    </form>
  );
};

export default FormNewTire;
