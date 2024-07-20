'use client';

import Script from "next/script";
import React, { useState, useMemo, useEffect, useRef } from 'react';

export default function Map() {
  const [location, setLocation] = useState('');
  const mapRef = useRef(null);

  useMemo(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function error() {
      setLocation({
        latitude: 37.483034,
        longitude: 126.902435,
      });
      console.log('위치 받기 실패');
    }
  }, []);

  const initMap = () => {
    if (typeof location !== 'string') {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(location.latitude, location.longitude),
        level: 3,
      };

      var map = new kakao.maps.Map(container, options);
      mapRef.current = map;
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=9784fc8d43c2978a22923da1563dc53d&autoload=false&libraries=services,clusterer,drawing';
    script.async = true;
    script.onload = () => {
      kakao.maps.load(() => initMap());
    };
    document.head.appendChild(script);
  }, [location]);

    return (
        <div className="mapApp">   

            <div id="map" style={{ width: '100%', height: '400px' }} />
            <button
                onClick={() => { initMap()
                }}
            >현재 위치</button>
        </div>
    )
};

