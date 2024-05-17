import Link from "next/link";
import DeleteService from "./DeleteService";
import EditServiceModal from "./EditServiceModal";

const SingleService = ({ service }) => {
  const id = service._id.toString();
  const serviceData = JSON.stringify(service);
  return (
    <>
      <div className="relative group">
        <div className=" group-hover:flex items-center justify-end gap-3 mb-3f border absolute px-4 py-2 rounded-md right-2 top-6 hidden  z-[999] ">
          <EditServiceModal serviceData={serviceData} />
          <DeleteService id={id} />
        </div>

        <Link
          href={`/services/${service._id}`}
          // onClick={handleServiceDetails}
          className="relative cursor-pointer "
        >
          <fieldset className="h-auto p-5 border border-white rounded-md group-hover:bg-[#262626] transition-colors z-[999] ">
            <legend className="font-semibold text-white text-xl">
              {service.type}
            </legend>

            <article className="space-y-3 text-white">
              <h3 className="font-semibold">{service.name}</h3>

              {service.type === "One Time" ? (
                <OneTime service={service} />
              ) : service.type === "Subscription" ? (
                <Subscription service={service} />
              ) : (
                <Unknown service={service} />
              )}
              <h3>Description: {service.description.slice(0, 15)}...</h3>
              <p>SQFT : {service.sqftCheckbox ? "yes" : "No"}</p>
            </article>
          </fieldset>
        </Link>
      </div>
    </>
  );
};

export default SingleService;

const OneTime = ({ service }) => {
  return (
    <div className="space-y-3 ">
      <h3>Price: {service?.oneTimeService?.price}</h3>
      {/* 
      {service?.oneTimeService?.followUpCheckbox && (
        <h3 className=" font-semibold text-white  ">
          Follow Up : {service?.oneTimeService?.followUpCheckbox ? "Yes" : "No"}
        </h3>
      )} */}

      {/* <p cla>Follow up Price: {service?.oneTimeService?.followUpPrice}</p> */}
    </div>
  );
};

const Subscription = ({ service }) => {
  return (
    <div className="space-y-3">
      <h3>Price: {service?.subscriptionService?.subscriptionPrice}</h3>

      {/* {service?.subscriptionService?.followUpCheckbox && (
        <h3 className=" font-semibold text-white  ">
          Follow Up :{" "}
          {service?.subscriptionService?.initialPrice ? "Yes" : "No"}
        </h3>
      )} */}

      {/* <h3>Initial Price: {service?.subscriptionService?.initialPrice}</h3> */}
    </div>
  );
};

const Unknown = ({ service }) => {
  return (
    <div className="space-y-3">
      <div className="mt-4">
        <p>Description price box: {service?.otherService?.descriptionPrice}</p>
      </div>
    </div>
  );
};
