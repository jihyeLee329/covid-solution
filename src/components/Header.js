import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../img/logo.svg";
const HeaderWrap = styled.div`
  .logo {
    width: 1250px;
    margin: 0 auto;
    padding: 15px 30px 10px;
  }
  > h1 {
    font-size: 30px;
    line-height: 36px;
    color: #666;
    font-weight: 500;
    max-width: 1250px;
    margin: 0 auto;
  }
`;
const Inner = styled.div`
  width: 1250px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  align-items: center;

  height: 100px;
  justify-content: space-between;
`;

const Nav = styled.div`
  background: #26439e;
  a {
    display: inline-block;
    padding: 32px 17px;
    font-size: 20px;
    line-height: 32px;
    color: #fff;
    font-weight: 700;
    margin-right: 20px;
    &.active {
      background: #172b69;
      box-shadow: inset 0px 2.17241px 1.08621px rgba(0, 0, 0, 0.25);
      border-radius: 13.0345px;
      padding: 16px 17px;
    }
  }
  .time {
    p {
      color: #fff;
      font-size: 16px;
      line-height: 25px;
    }
    h3 {
      font-size: 26px;
      line-height: 32px;
      color: #fff;
    }
  }
`;
export default function Header() {
  let today = new Date();
  // 년도 getFullYear()
  let year = today.getFullYear();
  // 월 getMonth() (0~11로 1월이 0으로 표현되기 때문에 + 1을 해주어야 원하는 월을 구할 수 있다.)
  let month = today.getMonth() + 1;
  // 일 getDate()
  let date = today.getDate(); // 일

  // 시 getHours()
  let hours = today.getHours();
  let day = "";
  if (hours >= 12) {
    day = "오후";
  } else {
    day = "오전";
  }
  // 분 getMinutes()
  let minutes = today.getMinutes();
  /// 초 getSeconds()
  let seconds = today.getSeconds();

  return (
    <HeaderWrap>
      <NavLink to="/" activeclassname="active">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </NavLink>
      <Nav>
        <Inner>
          <div className="">
            <NavLink to="/CheckList" activeclassname="active">
              자가진단체크
            </NavLink>
            <NavLink to="/" activeclassname="active">
              병원검색
            </NavLink>
          </div>
          <div className="time">
            <p>{year + "년 " + month + "월 " + date + "일"}</p>
            <h3>
              {day} {hours + ":" + minutes + ":" + seconds}
            </h3>
          </div>
        </Inner>
      </Nav>
    </HeaderWrap>
  );
}
