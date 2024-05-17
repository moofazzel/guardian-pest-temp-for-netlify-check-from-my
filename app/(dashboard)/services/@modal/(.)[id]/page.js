import { getServicesById } from "@/database/queries";
import ServiceDetailsModal from "../../ServiceDetailsModal";

const serviceDetailsPageModal = async ({ params: { id } }) => {
  const service = await getServicesById(id);

  const serviceData = JSON.stringify(service);

  return (
    <div>
      <ServiceDetailsModal serviceData={serviceData} />
    </div>
  );
};

export default serviceDetailsPageModal;
