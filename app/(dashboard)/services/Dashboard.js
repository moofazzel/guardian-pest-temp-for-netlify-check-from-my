import { getAllServices } from "@/database/queries";
import AddServiceModal from "./AddServiceModal";
import SingleService from "./SingleService";

const Dashboard = async () => {
  const allServices = await getAllServices();

  return (
    <>
      <div className=" ">
        <div className="py-2  text-gray-900 min-h-screen">
          <div className="pt-10">
            <AddServiceModal />
            <div className="container grid grid-cols-1 gap-5 p-10 mt-10 border  border-white rounded-md md:grid-cols-2 lg:grid-cols-3">
              <>
                {allServices?.length === 0 && (
                  <p className="text-white">No services found</p>
                )}

                {allServices.map((service) => (
                  <SingleService key={service._id} service={service} />
                ))}
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
