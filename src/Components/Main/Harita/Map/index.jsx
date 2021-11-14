import React from 'react';
import { YMaps, Map, Circle, Placemark, SearchControl, FullscreenControl, RouteButton, ZoomControl,  TrafficControl } from 'react-yandex-maps'

const MapGeolakatsiya = () => {
    return (

        <YMaps >
        <Map className="yandex_map"  defaultState={{ center: [41.554152480032464, 60.997089791206044], zoom: 15 }}>
          <Circle
            geometry={[[41.554152480032464, 60.997089791206044], 500]}
            options={{
              draggable: true,
              fillColor: '#DB709377',
              strokeColor: '#990066',
              strokeOpacity: 0.8,
              strokeWidth: 5,
            }}
          />
          <Placemark geometry={[41.553788851223885, 60.998557347620164]} />
          <SearchControl options={{ float: 'right' }} />
          <FullscreenControl options={{float: 'left'}} />
          <RouteButton options={{ float: 'right' }} />
          <ZoomControl options={{ float: 'right' }} />
          <TrafficControl options={{ float: 'right' }} />
        </Map>
      </YMaps>

    )
}

export default MapGeolakatsiya;