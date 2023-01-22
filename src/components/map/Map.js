import "leaflet/dist/leaflet.css"
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet"

function LocationMarker({ location, setLocation }) {
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setLocation(e.latlng)
      map.flyTo(e.latlng, 17)
    },
  })

  return location === null ? null : (
    <Marker draggable position={location}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

const Map = (props) => {
  return (
    <MapContainer
      className='w-full h-full'
      width='400px'
      height='400px'
      center={[28, 84]}
      zoom={10}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <LocationMarker
        location={props.location}
        setLocation={props.setLocation}
      />
    </MapContainer>
  )
}

export default Map
