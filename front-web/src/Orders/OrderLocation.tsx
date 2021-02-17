import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AsyncSelect from 'react-select/async';
import { fetchLocalMapBox } from '../api';
import { OrderLocationData } from './types';

const initialPosition = {
  lat:49.2577143,
  lng:-123.1939434
}

type Place = {
  label?: string;
  value?: string;
  position: {
    lat:number;
    lng:number;
  }
}

type Props = {
  onChangeLocation: (location: OrderLocationData) => void;
}

function OrderLocation({ onChangeLocation }: Props){
  const [address, setAddress] =  useState<Place>({
    position: initialPosition
  });
    
const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
  const response = await fetchLocalMapBox(inputValue);

  const places = response.data.features.map((item: any) => {
    return ({
      label: item.place_name,
      value: item.place_name,
      position: {
        lat: item.center[1],
        lng: item.center[0]
      }
    });
  });

  callback(places);
};

const handleChangeSelect = (place: Place) => {
  setAddress(place);
   onChangeLocation({
    latitude: place.position.lat,
    longitude: place.position.lng,
    address: place.label! // the "!" at the end of the value in typescript means that I'm ensuring the value will be present when the function is called
  });
};

return(
    <div className="order-location-container">
      <div className="order-location-content">
        <h3 className="order-location-title">
          Select the location where the order should be delivered
        </h3>
        <div className="filter-container">
          <AsyncSelect
            placeholder="Type an address for delivery"
            className="filter"
            loadOptions={loadOptions}
            onChange={value => handleChangeSelect(value as Place)}
          />
        </div>
          <MapContainer
           center={address.position}
           zoom={13}
           key={address.position.lat} /*by putting a key we are forcing a renderization which will reload the map in the new address */
           scrollWheelZoom={true}
           >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={address.position}>
                <Popup>
                  {address.label}
                </Popup>
              </Marker>
          </MapContainer>
      </div>
    </div>

  )
}
export default OrderLocation;