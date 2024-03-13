import { Icon } from "@iconify/react";
import { useContext, useEffect, useState } from "react";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import PropertyCard from "./PropertyCard";
import { loaderContext } from "../../provider/LoaderProvider";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import useFetchProperties from "../../hooks/useFetchProperties";

export default function PropertiesList() {
  const {loading, error, data:properties} = useFetchProperties();

  // decide what to render
  let content = null;
  if (loading) {
    content = <Loader />;
  }

  if (error) {
    content = <Error/>;
  }

  if (!error && !loading && properties.length > 0) {
    content = (
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-[2rem]">
        {properties?.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    );
  }

  return (
    <section className="lg:px-[5.5rem] px-[1rem] mb-[7.5rem]">
      <div className="my-[3rem]">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <h3 className="text-[2rem] font-semibold leading-[2.37rem]">
            All Properties
          </h3>
          <button className="bg-[#24B24B] px-[3rem] py-[1rem] font-semibold flex items-center gap-3">
            <span>Filters</span>
            <Icon className="text-2xl" icon="mdi:filter" />
          </button>
        </div>
      </div>
      {/* Property list container  */}
      {content}
    </section>
  );
}
