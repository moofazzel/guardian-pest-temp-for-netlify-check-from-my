import { getAllServices } from "@/database/queries";
import Dashboard from "./Dashboard";
import SingleService from "./SingleService";

const DashboardPage = async () => {
  return <Dashboard />;
};

export default DashboardPage;
