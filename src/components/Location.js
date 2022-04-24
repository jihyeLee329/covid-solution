/*global kakao */
import React, { useEffect, useState } from "react";
import { markerdata } from "../HosData";
import HospitalInfo from "./HospitalInfo";

export default function Location({ hptName }) {
  const [hosinfo, setHosinfo] = useState([]);

  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.56666, 126.97843),
      level: 8
    };

    //map
    const map = new kakao.maps.Map(container, options);
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          message =
            '<div style="color:#333; text-align:center; padding:10px; font-size:14px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

      var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
        message = "geolocation을 사용할수 없어요..";

      displayMarker(locPosition, message);
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition
      });

      var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable
      });

      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker);

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);
    }
    let positions = markerdata;
    for (let i = 0; i < positions.length; i++) {
      // 마커를 생성합니다
      let imageSrc = "https://cdn-icons-png.flaticon.com/512/1856/1856063.png"; // 마커이미지의 주소입니다
      let imageSize = new kakao.maps.Size(44, 49); // 마커이미지의 크기입니다
      let imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      let markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      ); //마커 이미지 변경

      // console.log(data2);
      let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng( //마커 위치
          positions[i].yposwgs84,
          positions[i].xposwgs84
        ),
        clickable: true,
        image: markerImage
      });
      //병원이름
      let markerContent = `<div style='color:#333; text-align:center; padding:10px 17px; font-size:14px;max-width:150px;'>${positions[i].yadmnm}</div>`;

      // 마커에 표시할 인포윈도우를 생성합니다
      let infowindow = new kakao.maps.InfoWindow({
        content: markerContent,
        removable: true
        // 인포윈도우에 표시할 내용
      });

      marker.setMap(map);
      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커 위에 인포윈도우를 표시합니다
        infowindow.open(map, marker);

        setHosinfo(positions[i]);
      });
    }
  };

  return (
    <>
      <div id="map" style={{ width: "calc(100% - 400px)", height: "auto" }} />
      <HospitalInfo hosinfo={hosinfo} hptName={hptName} />
    </>
  );
}
