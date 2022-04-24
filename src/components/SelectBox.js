import React, { useState } from "react";
import styled from "styled-components";
import IconArrow from "../img/icon_arrow.svg";

const SelectBoxWrap = styled.div`
  position: relative;
  > select {
    border: none;
    outline: none;
    min-width: 224px;
    padding: 13px 16px;
    background: #ffffff;
    box-shadow: inset 0px 2.44231px 1.22116px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-right: 8px;
    font-size: 16px;
    line-height: 18px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
  }
  img {
    position: absolute;
    right: 24px;
    top: 9px;
    transform: rotate(180deg);
    z-index: 2;
    cursor: pointer;
    transition: 0.3s;
    &.click {
      top: 9px;
      transform: rotate(0deg);
    }
  }
  select::-ms-expand {
    display: none;
  }
`;
const SelectBox = ({ handleChange }) => {
  const [selectClick, setSelectClick] = useState(false);

  function boxClick(e) {
    setSelectClick(!selectClick);
  }

  return (
    <SelectBoxWrap>
      <select onChange={handleChange} onClick={boxClick}>
        <option key="all" value="all">
          ALL
        </option>
        <option key="pcr" value="pcr">
          PCR
        </option>
        <option key="rat" value="rat">
          RAT
        </option>
      </select>
      {selectClick ? (
        <img src={IconArrow} alt="arrow" />
      ) : (
        <img className="click" src={IconArrow} alt="arrow" />
      )}
    </SelectBoxWrap>
  );
};
export default SelectBox;
