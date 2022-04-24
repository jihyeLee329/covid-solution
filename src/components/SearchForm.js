import { useState } from "react";
import styled from "styled-components";
import IconSearch from "../img/icon_search.svg";
import SelectBox from "./SelectBox";
const SearchBox = styled.div`
  .inputForm {
    padding: 42px 0 48px;
    background-color: #333;
    > div {
      position: relative;
      text-align: center;
      p {
        display: inline-block;
        vertical-align: top;
        color: #fff;
        font-size: 25px;
        line-height: 48px;
        margin-right: 48px;
      }
      .inputBox {
        background: #fff;
        box-shadow: inset 0px 2.44231px 1.22116px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        padding: 8px 15px;
        min-width: 520px;
        font-size: 16px;
        line-height: 28px;
        font-weight: 500;
        border: none;
        outline: none;
      }
      > div {
        position: relative;
        display: inline-block;
        vertical-align: top;
      }
      button {
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translate(0, -50%);
        background-color: transparent;
        z-index: 10;
        background-image: url(${IconSearch});
        background-size: 30px auto;
        width: 30px;
        height: 30px;
        outline: none;
        border: none;
        display: inline-block;
        vertical-align: top;
        font-size: 0;
        cursor: pointer;
      }
    }
  }
`;

export default function SearchForm({
  handleChange,
  handleSubmit,
  onChange,
  InputText
}) {
  return (
    <SearchBox>
      <form className="inputForm" onSubmit={handleSubmit}>
        <div>
          <p>병원 검색</p>
          <SelectBox handleChange={handleChange} />
          <div>
            <input
              className="inputBox"
              placeholder="검색어를 입력하세요"
              onChange={onChange}
              value={InputText}
            />
            <button type="submit">검색</button>
          </div>
        </div>
      </form>
    </SearchBox>
  );
}
