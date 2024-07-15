'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function KakaoMap() {
    const [address, setAddress] = useState(null); // 현재 좌표의 주소를 저장할 상태
    const [level, setLevel] = useState(3);
    const [currentPosition, setCurrentPosition] = useState({ lat: 37.5665, lng: 126.9780 }); // 기본 위치는 서울 시청으로 설정
    const [places, setPlaces] = useState([]); // 검색된 장소를 저장할 상태
    const mapRef = useRef();

    useEffect(() => {
        // 사용자의 현재 위치를 가져오는 함수
        const getCurrentPosition = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const { latitude, longitude } = position.coords;
                        setCurrentPosition({ lat: latitude, lng: longitude });
                    },
                    error => {
                        console.error("Error getting current position: ", error);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0
                    }
                );
            }
        };

        getCurrentPosition();
    }, []);

    const getAddress = () => {
        const { kakao } = window;
        const map = mapRef.current;
        if (!map) return;

        const geocoder = new kakao.maps.services.Geocoder(); // 좌표 -> 주소로 변환해주는 객체
        const coord = map.getCenter(); // 현재 지도 중심의 좌표를 가져옴
        const callback = function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                setAddress(result[0].address);
            }
        };
        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    };

    const searchPlaces = (keyword) => {
        const { kakao } = window;
        const map = mapRef.current;
        if (!map) return;

        const places = new kakao.maps.services.Places();
        const callback = function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                setPlaces(result);
            }
        };
        places.keywordSearch(keyword, callback, {
            location: new kakao.maps.LatLng(currentPosition.lat, currentPosition.lng),
            radius: 5000 // 5km 반경 내에서 검색
        });
    };

    return (
        <>
            <Map 
                center={currentPosition} 
                style={{ width: '100%', height: '400px' }} 
                level={level}
                onCreate={map => { mapRef.current = map; }} // 지도가 생성될 때 mapRef에 저장
                onZoomChanged={(map) => setLevel(map.getLevel())} // 지도의 줌 레벨 변경 시 상태 업데이트
            >
                <MapMarker position={currentPosition} />
                {places.map((place, index) => (
                    <MapMarker 
                        key={index} 
                        position={{ lat: place.y, lng: place.x }} 
                        title={place.place_name}
                    />
                ))}
            </Map>
            <button onClick={() => setLevel(level - 1)}>-</button>
            <button onClick={() => setLevel(level + 1)}>+</button>
            <button onClick={getAddress}>현재 좌표의 주소 얻기</button>
            <button className='locationSearch' onClick={() => searchPlaces('병원')}>병원 검색</button>
            <button className='locationSearch' onClick={() => searchPlaces('공원')}>공원 검색</button>

            {address && (
                <div>
                    현재 좌표의 주소는..
                    <p>address_name: {address.address_name}</p>
                    <p>region_1depth_name: {address.region_1depth_name}</p>
                    <p>region_2depth_name: {address.region_2depth_name}</p>
                    <p>region_3depth_name: {address.region_3depth_name}</p>
                </div>
            )}
        </>
    );
}
