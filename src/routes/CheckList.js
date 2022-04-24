import styled from "styled-components";
import CheckBg from "../img/check_bg.png";
import Circle from "../img/icon_circle.png";
import IcCheck from "../img/ic_chk.png";
import IcCheckNo from "../img/ic_chk_no.png";

const CheckWrap = styled.div`
  margin: 50px 0 100px;
  h2 {
    & + div {
      padding-top: 28px;
      padding-left: 40px;
    }
  }
  > div {
    font-size: 24px;
    line-height: 32px;
    color: #333;
  }
  .checkinfo {
    display: flex;
    justify-content: space-between;
    > div {
      padding-right: 20px;
    }
  }
`;
const CheckZone = styled.div`
  padding: 0 0 40px;
  > .wrap {
    border: 1px solid #888888;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 85px 110px 70px;
  }
  h1 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    text-align: center;
  }
  .agreeWrap {
    margin-top: 16px;
    margin-bottom: 28px;
    padding: 38px 42px;
    border: 1px solid #999;
    font-size: 20px;
    line-height: 38px;
  }
  .result {
    padding: 22px 45px 37px 27px;
    background: #e5e5e5;
    border-radius: 12px;
    ul {
      padding: 46px 40px 0;
    }
    li {
      position: relative;
      font-size: 20px;
      line-height: 28px;
      padding-left: 15px;
      & + li {
        margin-top: 12px;
      }
      &:before {
        content: "";
        position: absolute;
        width: 3px;
        height: 3px;
        border-radius: 100%;
        background: #333;
        left: 0;
        top: 12px;
      }
    }
  }
`;
const Check = styled.div`
  padding: 142px 0 90px;
  > div {
    margin-top: 28px;
    padding: 0 30px;
    > div {
      & + div {
        margin-top: 4px;
      }
    }
  }
  input {
    display: none;
  }
  label {
    cursor: pointer;
    display: inline-block;
    padding-left: 32px;
    font-size: 18px;
    line-height: 26px;
    color: #333;
    background-image: url(${IcCheckNo});
    background-repeat: no-repeat;
    background-size: 24px auto;
    background-position: 3.5px 0;
  }
  input:checked + label {
    background-image: url(${IcCheck});
  }
`;
const Inner = styled.div`
  h2 {
    font-size: 26px;
    line-height: 32px;
    color: #333;
    padding-left: 40px;
    background-image: url(${Circle});
    background-size: 31px auto;
    background-repeat: no-repeat;
    background-position: left center;
  }
  width: 1250px;
  margin: 0 auto;
`;
export default function CheckList() {
  return (
    <Inner>
      <CheckWrap>
        <div className="checkinfo">
          <div>
            <h2>개인별 활동 위험도 자가 점검표</h2>
            <div>
              본 자가 진단은 보건복지부에서 제공하는 진단 테스트이며, COVID-19에
              감염이 되었거나 COVID-19 감염자와 밀접 접촉한 것으로 의심되는
              경우, 검사 또는 치료를 반아야 할지를 판단하는데 도움이 될 것
              입니다.{" "}
            </div>
          </div>
          <img src={CheckBg} alt="체크리스트이미지" />
        </div>
      </CheckWrap>
      <CheckZone>
        <div className="wrap">
          <h1>COVID-19 자가 진단 시 유의사항</h1>
          <div className="agreeWrap">
            본 코로나 자가 진단의 목적은 적절한 의료 서비스를 찾는 것에 대한
            결정을 내리는 데 도움을 주기 위한 것입니다. 이 시스템은 COVID-19를
            포함한 질병의 진단 또는 치료를 위한 것이 아닙니다.
          </div>
          {/* <div className="agree">
            <label for="agree">동의합니다.</label>
            <input id="agree" type="radio" name="agree" />
            <label for="disagree">동의하지 않습니다..</label>
            <input id="disagree" type="radio" name="agree" />
          </div> */}
          <Check>
            <h2>해당하는 항목 모두에 체크해주시길 바랍니다.</h2>
            <div>
              <div>
                <input id="chk1" type="checkbox" />
                <label htmlFor="chk1">
                  아래 요인 중 하나 이상 해당된다. <br />
                  (65세 이상, 심혈관계 질환 및 당뇨 등 만성질환자, 항암치료
                  암환자, 고도비만, 임산부, 투석환자, 흡연자)
                </label>
              </div>
              <div>
                <input id="chk2" type="checkbox" />
                <label htmlFor="chk2">
                  의료기관, 학교, 학원, 서비스업, 집단시설 등 코로나19 전파
                  가능성이 높은 곳에서 일한다.
                </label>
              </div>
              <div>
                <input id="chk3" type="checkbox" />
                <label htmlFor="chk3">
                  지하 등 환기가 어려운 밀폐공간에 종종 방문한다.
                </label>
              </div>
              <div>
                <input id="chk4" type="checkbox" />
                <label htmlFor="chk4">
                  다른 사람과 최소 1m 이상 거리두기가 어려운 곳에 종종 방문한다.
                </label>
              </div>
              <div>
                <input id="chk5" type="checkbox" />
                <label htmlFor="chk5">
                  100명 이상 밀집한 장소에 종종 간다.
                </label>
              </div>
              <div>
                <input id="chk6" type="checkbox" />
                <label htmlFor="chk6">
                  손 씻기, 소독 등 방역수칙을 준수하기 어려운 공간에 종종
                  방문한다.
                </label>
              </div>
              <div>
                <input id="chk7" type="checkbox" />
                <label htmlFor="chk7">
                  지속적인 대화, 소리 지르기, 노래 부르기 등 침방울이 많이
                  생기는 활동을 한다.
                </label>
              </div>
              <div>
                <input id="chk8" type="checkbox" />
                <label htmlFor="chk8">
                  활동하는 시간 동안 마스크를 착용하기 어렵다.
                </label>
              </div>
              <div>
                <input id="chk9" type="checkbox" />
                <label htmlFor="chk9">
                  다른 사람과 1시간 이상 함꼐하는 활동을 한다.
                </label>
              </div>
              <div>
                <input id="chk10" type="checkbox" />
                <label htmlFor="chk10">
                  여러 사람이 이용하는 물건을 공유하는 활동을 한다.
                </label>
              </div>
            </div>
          </Check>
          <div className="result">
            <h2>자가진단 결과</h2>
            <ul>
              <li>
                체크가 3개 이하 : 코로나 감염 위험이 낮습니다. 하지만 계속 방역
                수칙 준수에 힘써야 합니다.
              </li>
              <li>
                체크가 4~7개 이하 : 감염 위험도가 보통 수준입니다. 밀폐된
                공간에서 침방울이 발생하는 행위를 하지 않도록 하고 마스크를
                반드시 착용해야 합니다.
              </li>
              <li>
                체크가 8개 이상 : 감염 위험이 매우 높습니다. 당신은 감염에
                취약할 수 있으며, 다수의 사람을 만난다면 확산도가 타인에 비해
                높으니 특별히 주의해야 합니다. 밀폐된 공간에서 반드시 2m
                거리두기를 유지하고 마스크를 착용하며, 침방울이 발생하는 음식
                섭취, 대화, 노래 부르기는 삼가야 합니다.
              </li>
            </ul>
          </div>
        </div>
      </CheckZone>
    </Inner>
  );
}
