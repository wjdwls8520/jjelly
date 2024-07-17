'use client';

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export default function Map() {
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
    const mapRef = useRef(null);
    const [currCategory, setCurrCategory] = useState('');
    const [map, setMap] = useState(null);
    const [ps, setPs] = useState(null);
    const [placeOverlay, setPlaceOverlay] = useState(null);
    const [contentNode, setContentNode] = useState(null);
    const [markers, setMarkers] = useState([]); // 배열 상태로 변경

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        }

        function success(position) {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        }

        function error() {
            setLocation({
                latitude: 37.483034,
                longitude: 126.902435
            });
            console.log("위치 받기 실패");
        }
    }, []);

    const initMap = () => {
        if (location.latitude && location.longitude) {
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(location.latitude, location.longitude),
                level: 5
            };

            const newMap = new kakao.maps.Map(container, options);
            mapRef.current = newMap;
            setMap(newMap);

            const newPs = new kakao.maps.services.Places(newMap);
            setPs(newPs);

            kakao.maps.event.addListener(newMap, 'idle', searchPlaces);

            const newPlaceOverlay = new kakao.maps.CustomOverlay({ zIndex: 1 });
            const newContentNode = document.createElement('div');
            newContentNode.className = 'placeinfo_wrap';
            addEventHandle(newContentNode, 'mousedown', kakao.maps.event.preventMap);
            addEventHandle(newContentNode, 'touchstart', kakao.maps.event.preventMap);
            newPlaceOverlay.setContent(newContentNode);
            setPlaceOverlay(newPlaceOverlay);
            setContentNode(newContentNode);

            addCategoryClickEvent();

            const zoomControl = new kakao.maps.ZoomControl();
            newMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        }
    };

    function addEventHandle(target, type, callback) {
        if (target.addEventListener) {
            target.addEventListener(type, callback);
        } else {
            target.attachEvent('on' + type, callback);
        }
    }

    useEffect(() => {
        if (location.latitude && location.longitude) {
            kakao.maps.load(() => initMap());
        }
    }, [location]);

    useEffect(() => {
        if (currCategory && ps) {
            searchPlaces();
        } else {
            removeMarkers();
        }
    }, [currCategory, ps]);

    function searchPlaces() {
        if (!currCategory || !ps) return;

        placeOverlay && placeOverlay.setMap(null);
        removeMarkers();

        ps.categorySearch(currCategory, placesSearchCB, { useMapBounds: true });
    }

    function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
            displayPlaces(data);
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            alert("검색 결과가 없습니다.");
        } else if (status === kakao.maps.services.Status.ERROR) {
            alert("검색 중 오류가 발생했습니다.");
        }
    }

    function displayPlaces(places) {
        const order = document.getElementById(currCategory).getAttribute('data-order');
        const newMarkers = []; // 새로운 마커 배열

        for (let i = 0; i < places.length; i++) {
            const marker = addMarker(new kakao.maps.LatLng(places[i].y, places[i].x), order);
            newMarkers.push(marker);

            (function (marker, place) {
                kakao.maps.event.addListener(marker, 'click', function () {
                    displayPlaceInfo(place);
                });
            })(marker, places[i]);
        }

        setMarkers(newMarkers); // 새로운 마커 배열로 업데이트
    }

    function addMarker(position, order) {
        const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png',
            imageSize = new kakao.maps.Size(27, 28),
            imgOptions = {
                spriteSize: new kakao.maps.Size(72, 208),
                spriteOrigin: new kakao.maps.Point(46, order * 36),
                offset: new kakao.maps.Point(11, 28)
            },
            markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
            marker = new kakao.maps.Marker({
                position: position,
                image: markerImage
            });

        marker.setMap(map);

        return marker;
    }

    function removeMarkers() {
        markers.forEach(marker => {
            marker.setMap(null);
        });
        setMarkers([]);
    }

    function displayPlaceInfo(place) {
        let content = '<div class="placeinfo">' +
            '   <a class="title" href="' + place.place_url + '" target="_blank" title="' + place.place_name + '">' + place.place_name + '</a>';

        if (place.road_address_name) {
            content += '    <span title="' + place.road_address_name + '">' + place.road_address_name + '</span>' +
                '  <span class="jibun" title="' + place.address_name + '">(지번 : ' + place.address_name + ')</span>';
        } else {
            content += '    <span title="' + place.address_name + '">' + place.address_name + '</span>';
        }

        content += '    <span class="tel">' + place.phone + '</span>' +
            '</div>' +
            '<div class="after"></div>';

        contentNode.innerHTML = content;
        placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
        placeOverlay.setMap(map);
    }

    function addCategoryClickEvent() {
        const category = document.getElementById('category');
        const children = category.children;

        for (let i = 0; i < children.length; i++) {
            children[i].onclick = onClickCategory;
        }
    }

    function onClickCategory() {
        const id = this.id;
        const className = this.className;

        if (placeOverlay) {
            placeOverlay.setMap(null);
        }

        if (className === 'on') {
            setCurrCategory('');
            changeCategoryClass();
            removeMarkers();
        } else {
            setCurrCategory(id);
            changeCategoryClass(this);
        }
    }

    function changeCategoryClass(el) {
        const category = document.getElementById('category');
        const children = category.children;

        for (let i = 0; i < children.length; i++) {
            children[i].className = '';
        }

        if (el) {
            el.className = 'on';
        }
    }

    return (
        <div className="mapApp">
            <Script
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=9784fc8d43c2978a22923da1563dc53d&autoload=false&libraries=services,clusterer,drawing`}
                strategy="beforeInteractive"
            />
            <div id="map" style={{ width: "100%", height: "350px" }}></div>
            <div id="menu_wrap" className="bg_white">
                <ul id="category">
                    <li id="BK9" data-order="0">
                        <span className="category_bg bank"></span>
                        은행
                    </li>
                    <li id="MT1" data-order="1">
                        <span className="category_bg mart"></span>
                        마트
                    </li>
                    <li id="PM9" data-order="2">
                        <span className="category_bg pharmacy"></span>
                        약국
                    </li>
                    <li id="OL7" data-order="3">
                        <span className="category_bg oil"></span>
                        주유소
                    </li>
                    <li id="CE7" data-order="4">
                        <span className="category_bg cafe"></span>
                        카페
                    </li>
                    <li id="CS2" data-order="5">
                        <span className="category_bg store"></span>
                        편의점
                    </li>
                </ul>
            </div>
            <button
                onClick={() => {
                    if (mapRef.current) {
                        mapRef.current.setCenter(new kakao.maps.LatLng(location.latitude, location.longitude));
                    }
                }}
            >현재 위치</button>
        </div>
    );
}
