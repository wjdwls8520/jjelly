'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function Map() {
  const [location, setLocation] = useState(''); // 현재 위치 정보 상태
  const [currentAddress, setCurrentAddress] = useState(''); // 현재 주소 상태
  const [adminDistrict, setAdminDistrict] = useState(''); // 현재 행정구역명 상태
  const mapRef = useRef(null); // 지도 객체 ref
  const [keyword, setKeyword] = useState(''); // 검색 키워드 상태
  const [places, setPlaces] = useState([]); // 장소 목록 상태
  const [pagination, setPagination] = useState(null); // 페이지네이션 상태
  const infowindow = useRef(null); // 인포윈도우 객체 ref

  // 초기에 사용자의 현재 위치 정보를 가져오는 훅
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      getCurrentAddress(position.coords.latitude, position.coords.longitude); // 현재 위치의 주소 가져오기 호출
    }

    function error() {
      setLocation({
        latitude: 37.483034,
        longitude: 126.902435,
      });
      getCurrentAddress(37.483034, 126.902435); // 위치를 가져오지 못할 경우 기본 좌표로 주소 가져오기 호출
      console.log('위치 받기 실패');
    }
  }, []);

  // 현재 위치의 주소를 가져오는 함수
  const getCurrentAddress = (lat, lng) => {
    // 카카오 맵 API가 로드되었는지 확인
    if (!window.kakao || !window.kakao.maps) {
      console.error('Kakao Maps API가 로드되지 않았습니다.');
      setAdminDistrict('시안의 읍면동'); // 카카오 맵 API 로드 안될 때 기본 행정구역명 설정
      return;
    }

    const geocoder = new window.kakao.maps.services.Geocoder(); // 지오코더 객체 생성
    const coord = new window.kakao.maps.LatLng(lat, lng); // 좌표 객체 생성

    // 좌표를 주소로 변환
    geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const address = result[0].address.address_name;
        setCurrentAddress(address); // 현재 주소 상태 업데이트
        setAdminDistrict(result[0].address.region_2depth_name); // 현재 행정구역명 상태 업데이트
        console.log('현재 위치의 주소:', address); // 콘솔에 현재 주소 출력
      } else {
        console.error('주소 변환 실패:', status);
        setAdminDistrict('시안의 읍면동'); // 주소 변환 실패 시 기본 행정구역명 설정
      }
    });
  };

  // 지도 초기화 함수
  const initMap = () => {
    if (location.latitude && location.longitude) {
      const container = document.getElementById('map'); // 지도를 담을 영역 선택
      const options = {
        center: new window.kakao.maps.LatLng(location.latitude, location.longitude), // 지도 중심 좌표 설정
        level: 3, // 지도 확대 레벨 설정
      };

      // 지도 객체 생성
      const map = new window.kakao.maps.Map(container, options);
      mapRef.current = map; // 지도 객체 ref에 저장
      mapRef.current.markers = []; // 마커 배열 초기화
      infowindow.current = new window.kakao.maps.InfoWindow({ zIndex: 1 }); // 인포윈도우 객체 초기화
    }
  };

  // Kakao Maps API 스크립트 로드 및 초기화 훅
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=9784fc8d43c2978a22923da1563dc53d&autoload=false&libraries=services,clusterer,drawing';
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(() => {
        initMap(); // 지도 초기화 함수 호출
      });
    };
    document.head.appendChild(script); // 스크립트 요소를 head에 추가
  }, [location]); // location이 변경될 때마다 재로드

  // 특정 키워드로 장소 검색하는 함수
  const searchPlaces = () => {
    if (!mapRef.current) return; // 지도 객체가 없으면 종료

    const ps = new window.kakao.maps.services.Places(); // 장소 검색 서비스 객체 생성

    // 키워드로 장소 검색 요청
    ps.keywordSearch(keyword, (data, status, pagination) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setPlaces(data); // 장소 목록 상태 업데이트
        setPagination(pagination); // 페이지네이션 상태 업데이트
        displayPlaces(data); // 검색 결과 장소 표시
      } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
      } else if (status === window.kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
      }
    });
  };

  // 검색 결과 장소를 지도에 표시하는 함수
  const displayPlaces = (places) => {
    const map = mapRef.current; // 현재 지도 객체 가져오기
    const bounds = new window.kakao.maps.LatLngBounds(); // 지도 범위 객체 생성

    removeAllChildNodes(document.getElementById('placesList')); // 장소 목록 초기화
    removeMarker(); // 마커 초기화

    // 각 장소에 대해 처리
    places.forEach((place, index) => {
      const placePosition = new window.kakao.maps.LatLng(place.y, place.x); // 장소의 좌표
      const marker = addMarker(placePosition, index); // 마커 추가
      const itemEl = getListItem(index, place); // 장소 리스트 아이템 생성

      bounds.extend(placePosition); // 지도 범위 확장

      // 마커에 마우스오버 이벤트 등록
      window.kakao.maps.event.addListener(marker, 'mouseover', () => {
        displayInfowindow(marker, place.place_name);
      });

      // 마커에 마우스아웃 이벤트 등록
      window.kakao.maps.event.addListener(marker, 'mouseout', () => {
        infowindow.current.close();
      });

      // 리스트 아이템에 마우스오버 이벤트 등록
      itemEl.onmouseover = () => {
        displayInfowindow(marker, place.place_name);
      };

      // 리스트 아이템에 마우스아웃 이벤트 등록
      itemEl.onmouseout = () => {
        infowindow.current.close();
      };

      // 장소 리스트에 아이템 추가
      document.getElementById('placesList').appendChild(itemEl);
    });

    map.setBounds(bounds); // 지도의 범위 설정
  };

  // 마커를 추가하는 함수
  const addMarker = (position, idx) => {
    const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png'; // 마커 이미지 URL
    const imageSize = new window.kakao.maps.Size(36, 37); // 마커 이미지 크기
    const imgOptions = {
      spriteSize: new window.kakao.maps.Size(36, 691),
      spriteOrigin: new window.kakao.maps.Point(0, (idx * 46) + 10),
      offset: new window.kakao.maps.Point(13, 37),
    };
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions); // 마커 이미지 생성
    const marker = new window.kakao.maps.Marker({
      position, // 마커의 위치
      image: markerImage, // 마커 이미지 설정
    });

    marker.setMap(mapRef.current); // 지도에 마커 추가
    mapRef.current.markers.push(marker); // 마커 배열에 추가
    return marker; // 마커 객체 반환
  };

  // 마커를 제거하는 함수
  const removeMarker = () => {
    if (mapRef.current && mapRef.current.markers) {
      mapRef.current.markers.forEach(marker => marker.setMap(null)); // 모든 마커 지도에서 제거
      mapRef.current.markers = []; // 마커 배열 초기화
    }
  };

  // 인포윈도우를 표시하는 함수
  const displayInfowindow = (marker, title) => {
    const content = `<div style="padding:5px;z-index:1;">${title}</div>`; // 인포윈도우 내용 HTML
    infowindow.current.setContent(content); // 인포윈도우 컨텐츠 설정
    infowindow.current.open(mapRef.current, marker); // 인포윈도우 지도에 표시
  };

  // DOM 요소의 모든 자식 노드 제거 함수
  const removeAllChildNodes = (el) => {
    while (el.hasChildNodes()) {
      el.removeChild(el.lastChild);
    }
  };

  // 장소 리스트 아이템 생성 함수
  const getListItem = (index, place) => {
    const el = document.createElement('li'); // li 요소 생성
    let itemStr = `<span class="markerbg marker_${index + 1}"></span><div class="info"><h5>${place.place_name}</h5>`; // 장소 정보 HTML 문자열

    if (place.road_address_name) {
      itemStr += `<span>${place.road_address_name}</span><span class="jibun gray">${place.address_name}</span>`;
    } else {
      itemStr += `<span>${place.address_name}</span>`;
    }

    itemStr += `<span class="tel">${place.phone}</span></div>`;
    el.innerHTML = itemStr; // li 요소에 HTML 추가
    el.className = 'item'; // 클래스 설정
    return el; // li 요소 반환
  };

  // 특정 키워드로 장소 검색하는 함수
  const searchRest = (param) => {
    return () => {
      const ps = new window.kakao.maps.services.Places(); // 장소 검색 서비스 객체 생성

      // 키워드로 장소 검색 요청
      ps.keywordSearch(param, (data, status, pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setKeyword(param); // 키워드 설정
          setPlaces(data); // 장소 목록 설정
          setPagination(pagination); // 페이지네이션 설정
          displayPlaces(data); // 검색 결과 장소 표시
        } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
          alert('검색 결과가 존재하지 않습니다.');
        } else if (status === window.kakao.maps.services.Status.ERROR) {
          alert('검색 결과 중 오류가 발생했습니다.');
        }
      });
    };
  };

  // 검색 버튼 클릭 시 장소 검색 함수 호출
  const handleSearch = () => {
    searchPlaces();
  };

  // 검색어 입력 시 키워드 상태 업데이트
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  // 컴포넌트 렌더링
  return (
    <div className="mapApp">
      <div className="map_wrap">
        <div id="map" style={{ width: '100%', height: '400px' }} /> {/* 지도 영역 */}
        <div id="menu_wrap" className="bg_white">
          <div className="option">
            <div>
              <div id="container">
                <div id="navbar" className="">
                  {/* 검색 메뉴 */}
                  <a className="item" onClick={searchRest('동물 병원')}>동물 병원</a>
                  <a className="item" onClick={searchRest('애견 카페')}>애견 카페</a>
                  <a className="item" onClick={searchRest('애견 호텔')}>애견 호텔</a>
                  <a className="item" onClick={searchRest('고양이 카페')}>고양이 카페</a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <ul id="placesList"></ul> {/* 장소 목록 */}
          <div id="pagination"></div> {/* 페이지네이션 */}
        </div>
      </div>
      <button onClick={initMap}>현재 위치</button> {/* 현재 위치 버튼 */}
      <p>현재 위치 행정구역명: {adminDistrict}</p> {/* 현재 행정구역명 표시 */}
    </div>
  );
}
