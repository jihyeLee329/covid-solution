import SearchForm from "../components/SearchForm";
import SearchList from "../components/SearchList";
import styled from "styled-components";
import Location from "../components/Location";
import hospital from "../hospital";
import React, { useState } from "react";

const MapContent = styled.div`
  max-width: 1250px;
  margin: 47px auto 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function SearchHospital() {
  const hospitalData = hospital.map((item) => item);

  const [Place, setPlace] = useState("");
  const [InputText, setInputText] = useState("");
  const [select, setSelect] = useState("all");
  const [hptName, setHptName] = useState("");

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText("");
  };
  return (
    <>
      <SearchForm
        onChange={onChange}
        handleSubmit={handleSubmit}
        InputText={InputText}
        handleChange={handleChange}
      />
      <MapContent>
        <SearchList Place={Place} select={select} setHptName={setHptName} />
        <Location hospitalData={hospitalData} hptName={hptName} />
      </MapContent>
    </>
  );
}
