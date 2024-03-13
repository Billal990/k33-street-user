import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useFetchSingleProperty from "../../hooks/useFetchSingleProperty";
import { useParams } from "react-router-dom";
import FAQ from "../FinancialDetails/FAQ";
import Documents from "./Documents";
import TenantProcess from "./TenantProcess";
import Amenities from "./Amenities";
import Descriptions from "./Descriptions/Descriptions";
import Markets from "./Markets/Markets";
import Loader from "../Loader";
import Error from "../Error";

const position = [51.505, -0.09];

export default function BasicDetails() {
  const { propertyId } = useParams();
  const { loading, error, data: property } = useFetchSingleProperty(propertyId);
  const { propertyDetails, markets } = property || {};

  // decide what to render
  let content = null;
  if (loading) {
    content = <Loader />;
  }

  if (error) {
    content = <Error />;
  }

  if (!error && !loading && property._id) {
    content = (
      <section>
        <Amenities propertyDetails={propertyDetails} />

        <Descriptions propertyDetails={propertyDetails} />

        <MapContainer
          style={{ width: "100%", height: "100%" }}
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>

        <TenantProcess propertyDetails={propertyDetails} />

        <Markets markets={markets} />

        <Documents />

        <FAQ />
      </section>
    );
  }

  return content;
}
