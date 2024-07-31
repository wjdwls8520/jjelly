'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Suspense } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function MapContents() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [currentAddress, setCurrentAddress] = useState('');
  const [adminDistrict, setAdminDistrict] = useState('');
  const mapRef = useRef(null);
  const [keyword, setKeyword] = useState('');
  const [places, setPlaces] = useState([]);
  const [pagination, setPagination] = useState(null);
  const infowindow = useRef(null);

  // 위치 정보를 가져오는 useEffect
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      // 기본 위치 사용
      setLocation({ latitude: 37.566826, longitude: 126.9786567 });
      getCurrentAddress(37.566826, 126.9786567);
    }

    function success(position) {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
      getCurrentAddress(latitude, longitude);
    }

    function error() {
      setLocation({ latitude: 37.566826, longitude: 126.9786567 });
      getCurrentAddress(37.566826, 126.9786567);
      console.log('위치 받기 실패');
    }
  }, []);

  // 현재 위치 주소를 가져오는 함수
  const getCurrentAddress = (lat, lng) => {
    if (!window.kakao || !window.kakao.maps) {
      console.error('Kakao Maps API가 로드되지 않았습니다.');
      setAdminDistrict('시안의 읍면동');
      return;
    }

    const geocoder = new window.kakao.maps.services.Geocoder();
    const coord = new window.kakao.maps.LatLng(lat, lng);

    geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const address = result[0].address.address_name;
        setCurrentAddress(address);
        setAdminDistrict(result[0].address.region_2depth_name);
      } else {
        console.error('주소 변환 실패:', status);
        setAdminDistrict('시안의 읍면동');
      }
    });
  };

  // 지도를 초기화하는 함수
  const initMap = () => {
    if (location.latitude && location.longitude) {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(location.latitude, location.longitude),
        level: 3,
      };

      const map = new window.kakao.maps.Map(container, options);
      mapRef.current = map;
      mapRef.current.markers = [];
      infowindow.current = new window.kakao.maps.InfoWindow({ zIndex: 1 });
    }
  };

  // Kakao 지도 API를 로드하는 useEffect
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=9784fc8d43c2978a22923da1563dc53d&autoload=false&libraries=services,clusterer,drawing';
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(() => {
        initMap();
      });
    };
    document.head.appendChild(script);
  }, [location]);

  // 장소를 검색하는 함수
  const searchPlaces = () => {
    if (!mapRef.current) return;

    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(keyword, (data, status, pagination) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setPlaces(data);
        setPagination(pagination);
        displayPlaces(data);

        // 검색 결과가 있을 때 클래스 추가
        document.querySelector('#menu_wrap').classList.add('on');
        document.querySelector('.updownBtn').classList.add('on');
        document.querySelector('#placesList').classList.add('on');
        document.querySelector('#pagination').classList.add('on');
      } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
      } else if (status === window.kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
      }
    });
  };

  // 장소를 표시하는 함수
  const displayPlaces = (places) => {
    const map = mapRef.current;
    const bounds = new window.kakao.maps.LatLngBounds();

    removeAllChildNodes(document.getElementById('placesList'));
    removeMarker();

    places.forEach((place, index) => {
      const placePosition = new window.kakao.maps.LatLng(place.y, place.x);
      const marker = addMarker(placePosition, index);
      const itemEl = getListItem(index, place);

      bounds.extend(placePosition);

      window.kakao.maps.event.addListener(marker, 'mouseover', () => {
        displayInfowindow(marker, place.place_name);
      });

      window.kakao.maps.event.addListener(marker, 'mouseout', () => {
        infowindow.current.close();
      });

      itemEl.onmouseover = () => {
        displayInfowindow(marker, place.place_name);
      };

      itemEl.onmouseout = () => {
        infowindow.current.close();
      };

      document.getElementById('placesList').appendChild(itemEl);
    });

    map.setBounds(bounds);
  };

  // 마커를 추가하는 함수
  const addMarker = (position, idx) => {
    const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
    const imageSize = new window.kakao.maps.Size(36, 37);
    const imgOptions = {
      spriteSize: new window.kakao.maps.Size(36, 691),
      spriteOrigin: new window.kakao.maps.Point(0, (idx * 46) + 10),
      offset: new window.kakao.maps.Point(13, 37),
    };
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);
    const marker = new window.kakao.maps.Marker({
      position,
      image: markerImage,
    });

    marker.setMap(mapRef.current);
    mapRef.current.markers.push(marker);
    return marker;
  };

  // 모든 마커를 제거하는 함수
  const removeMarker = () => {
    if (mapRef.current && mapRef.current.markers) {
      mapRef.current.markers.forEach(marker => marker.setMap(null));
      mapRef.current.markers = [];
    }
  };

  // 인포윈도우를 표시하는 함수
  const displayInfowindow = (marker, title) => {
    const content = `<div style="padding:5px;z-index:1;">${title}</div>`;
    infowindow.current.setContent(content);
    infowindow.current.open(mapRef.current, marker);
  };

  // 모든 자식 노드를 제거하는 함수
  const removeAllChildNodes = (el) => {
    while (el.hasChildNodes()) {
      el.removeChild(el.lastChild);
    }
  };

  // 리스트 아이템을 생성하는 함수
  const getListItem = (index, place) => {
    const el = document.createElement('li');
    let itemStr = `<span class="markerbg marker_${index + 1}"></span><div class="info"><h5>${place.place_name}</h5>`;

    if (place.road_address_name) {
      itemStr += `<span>${place.road_address_name}</span><span class="jibun gray">${place.address_name}</span>`;
    } else {
      itemStr += `<span>${place.address_name}</span>`;
    }

    itemStr += `<span class="tel">${place.phone}</span></div>`;
    el.innerHTML = itemStr;
    el.className = 'item';
    return el;
  };

  // 특정 키워드로 검색하는 함수
  const searchRest = (param) => () => {
    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(param, (data, status, pagination) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setKeyword(param);
        setPlaces(data);
        setPagination(pagination);
        displayPlaces(data);

        // 검색 결과가 있을 때 클래스 추가
        document.querySelector('#menu_wrap').classList.add('on');
        document.querySelector('.updownBtn').classList.add('on');
        document.querySelector('#placesList').classList.add('on');
        document.querySelector('#pagination').classList.add('on');
      } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
      } else if (status === window.kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
      }
    });
  };

  // 검색 핸들러
  const handleSearch = (e) => {
    e.preventDefault();
    searchPlaces();
  };

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  // 검색 결과 닫기 핸들러
  const handleClose = () => {
    setPlaces([]);
    removeAllChildNodes(document.getElementById('placesList'));
    removeMarker();

    // 클래스 제거
    document.querySelector('#menu_wrap').classList.remove('on');
    document.querySelector('.updownBtn').classList.remove('on');
    document.querySelector('#placesList').classList.remove('on');
    document.querySelector('#pagination').classList.remove('on');
  };

  return (
    <div className="mapApp">
      <div className="map_wrap">
        <div id="map" style={{ width: '100%', height: '500px' }}>
          <div id="menu_wrap" className="bg_white">
            <div className="option">
              <div className='keywordSearch'>
                <form onSubmit={handleSearch}>
                  <input type="text" value={keyword} onChange={handleChange} id="keyword" />
                  {/* <button type="submit">검색</button> */}
                  <button type="button" onClick={handleClose}>
                    <img className='searchClose' src="/close.png" alt="닫기" />
                  </button>
                </form>
              </div>
            </div>
            {/* <hr /> */}
            <div className='updownBtn'>
              <img src="/down.png" alt="서치 리스트 업다운 버튼" />
            </div>
            <ul id="placesList" className=''></ul>
            <div id="pagination" className=''></div>
          </div>
          <div className='keywordBtn'>
            <Swiper 
                slidesPerView={3.7}
                spaceBetween={6}
                className="mySwiper mapSwiper"
            >
              <SwiperSlide><a className="item division active" onClick={searchRest(`${adminDistrict} 동물 병원`)}>동물 병원</a></SwiperSlide>
              <SwiperSlide><a className="item division" onClick={searchRest(`${adminDistrict} 애견 카페`)}>애견 카페</a></SwiperSlide>
              <SwiperSlide><a className="item division" onClick={searchRest(`${adminDistrict} 고양이 카페`)}>고양이 카페</a></SwiperSlide>
              <SwiperSlide><a className="item division" onClick={searchRest(`${adminDistrict} 펫 호텔`)}>펫 호텔</a></SwiperSlide>
            </Swiper>
          </div>
          <button onClick={initMap} className='currPo'>
            <img src="/current_position.png" alt="현재 위치" />
          </button>
        </div>
      </div>
      {/* <p>현재 위치 행정구역명: {adminDistrict}</p> */}
    </div>
  );
}

// Suspense를 사용해 비동기 로딩 상태를 처리하는 컴포넌트
export default function Map() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MapContents />
        </Suspense>
    );
}
