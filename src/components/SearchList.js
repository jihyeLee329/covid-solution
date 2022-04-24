import React from "react";
import styled from "styled-components";
import hospitals from "../hospital";
import IconMap from "../img/icon_map.svg";
import IconPhone from "../img/icon_phone.svg";
import { Scrollbars } from "react-custom-scrollbars";

const SearchListWrap = styled.div`
  max-width: 370px;
  max-height: 630px;
  min-height: 630px;
  margin-right: 30px;
  margin-bottom: 6px;
  .keywordResult {
    * {
      display: inline-block;
      vertical-align: top;
    }
    padding: 20px 12px;
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    color: #333;
    > span {
      margin: 0 8px;
      color: #333;
    }
  }
  ul {
    li {
      transition: 0.3s;
      &:hover {
        background-color: rgba(29, 60, 160, 0.1);
      }
      background: #fff;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      padding: 20px 16px 20px 12px;
      font-size: 16px;
      line-height: 25px;
      align-items: center;
      color: #000;
      font-weight: 700;
      .name {
        white-space: nowrap;
        width: 66%;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .phone {
        > img {
          display: inline-block;
          vertical-align: top;
        }
        font-size: 12px;
        line-height: 20px;
      }
    }
    li + li {
      border-top: 1px solid #999;
    }
  }
`;

const SearchList = ({ Place, select, setHptName }) => {
  function saveName(obj) {
    // let name = e.target.innerText;
    setHptName(obj);
  }

  const filterHos = hospitals.filter((hospital) => {
    return hospital.yadmnm.toLowerCase().includes(Place.toLowerCase());
  });
  const filterPCR = hospitals.filter((hospital) => {
    return (
      hospital.yadmnm.toLowerCase().includes(Place.toLowerCase()) &&
      hospital.pcrpsblyn === "Y"
    );
  });
  const filterRAT = hospitals.filter((hospital) => {
    return (
      hospital.yadmnm.toLowerCase().includes(Place.toLowerCase()) &&
      hospital.ratpsblyn === "Y"
    );
  });

  return (
    <SearchListWrap>
      {Place !== "" && (
        <div className="keywordResult">
          <img src={IconMap} alt="지도 아이콘" />
          <span className="keyword">"{Place}"</span>
          검색 결과
        </div>
      )}
      {Place !== "" ? (
        <Scrollbars
          style={{
            width: 370,
            height: 553,
            border: "1px solid #999",
            background: "#fff"
          }}
        >
          <ul>
            {select === "all" &&
              filterHos.map((item) => (
                <li key={item.yadmnm}>
                  <span className="name" onClick={() => saveName(item)}>
                    {item.yadmnm}
                  </span>
                  <a className="phone" href="tel:{item.telno}">
                    <img src={IconPhone} alt="전화아이콘" />
                    {item.telno}
                  </a>
                </li>
              ))}

            {select === "pcr" &&
              filterPCR.map((item) => (
                <li key={item.yadmnm}>
                  <span className="name" onClick={() => saveName(item)}>
                    {item.yadmnm}
                  </span>
                  <a className="phone" href="tel:{item.telno}">
                    <img src={IconPhone} alt="전화아이콘" />
                    {item.telno}
                  </a>
                </li>
              ))}
            {select === "rat" &&
              filterRAT.map((item) => (
                <li key={item.yadmnm}>
                  <span className="name" onClick={() => saveName(item)}>
                    {item.yadmnm}
                  </span>
                  <a className="phone" href="tel:{item.telno}">
                    <img src={IconPhone} alt="전화아이콘" />
                    {item.telno}
                  </a>
                </li>
              ))}
          </ul>
        </Scrollbars>
      ) : (
        <Scrollbars
          style={{
            width: 370,
            height: 630,
            border: "1px solid #999",
            background: "#fff"
          }}
        >
          <ul>
            {select === "all" &&
              filterHos.map((item) => (
                <li key={item.yadmnm}>
                  <span className="name" onClick={() => saveName(item)}>
                    {item.yadmnm}
                  </span>
                  <a className="phone" href="tel:{item.telno}">
                    <img src={IconPhone} alt="전화아이콘" />
                    {item.telno}
                  </a>
                </li>
              ))}

            {select === "pcr" &&
              filterPCR.map((item) => (
                <li key={item.yadmnm}>
                  <span className="name" onClick={() => saveName(item)}>
                    {item.yadmnm}
                  </span>
                  <a className="phone" href="tel:{item.telno}">
                    <img src={IconPhone} alt="전화아이콘" />
                    {item.telno}
                  </a>
                </li>
              ))}
            {select === "rat" &&
              filterRAT.map((item) => (
                <li key={item.yadmnm}>
                  <span className="name" onClick={() => saveName(item)}>
                    {item.yadmnm}
                  </span>
                  <a className="phone" href="tel:{item.telno}">
                    <img src={IconPhone} alt="전화아이콘" />
                    {item.telno}
                  </a>
                </li>
              ))}
          </ul>
        </Scrollbars>
      )}
    </SearchListWrap>
  );
};

export default SearchList;
