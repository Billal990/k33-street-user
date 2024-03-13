import "./FinancialDetails.css";
import PropertyMetrics from "./PropertyMetrics";
import Returns from "./Returns";
import Dividends from "./Dividends";
import Appreciation from "./Appreciation";
import InvestmentStrategy from "./InvestmentStrategy";
import OfferingDetails from "./OfferingDetails";
import Documents from "./Documents";
import { useParams } from "react-router-dom";
import useFetchSingleProperty from "../../hooks/useFetchSingleProperty";
import Loader from "../Loader";
import Error from "../Error";

export default function FinancialDetails() {
  const { propertyId } = useParams();
  const { loading, error, data: property } = useFetchSingleProperty(propertyId);
  const { propertyDetails, markets, financialInfo, investDetails, rafDetails } = property || {};
  console.log('Financial Amount==>', propertyDetails)

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
      <div className="w-[80%] mx-auto">
      <PropertyMetrics propertyDetails={propertyDetails} investDetails = {investDetails}/>

      <Returns/>

      <Dividends financialInfo={financialInfo} investDetails={investDetails}/>

      <Appreciation/>
     </div>

      <InvestmentStrategy/>

      <OfferingDetails propertyDetails={propertyDetails} rafDetails={rafDetails}/>

       <Documents/>
      </section>
    );
  }

  return content;
}
