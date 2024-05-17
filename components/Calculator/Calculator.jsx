// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";

// const serviceData = [
//   {
//     index: "1",
//     serviceName: "PESTGUARD365",
//     serviceType: "subscription",
//     oneTimePrice: "",
//     followUpPrice: "",
//     subscriptionPrice: "Based on Home size",
//     description:
//       "Residential year-round pest protection from common household insects, such as roaches, ants, fleas, pantry pests and flying stinging insects.",
//   },
//   {
//     index: "2",
//     serviceName: "TERMITEGUARD365",
//     serviceType: "subscription",
//     oneTimePrice: "",
//     followUpPrice: "",
//     subscriptionPrice:
//       "based on number of stations as determined by linear footage of home.",
//     description:
//       "The HexPro Termite Baiting and Monitoring System is designed to provide a an alert if termites become active nearby and to destroy the colony once baited. The system is the most eco-friendly termite protection available. While only monitoring there is no active chemicals present and once baited the chemical is used in the form of ounces rather than gallons like traditional termite treatments.",
//   },
//   {
//     index: "3",
//     serviceName: "German Roach Control",
//     serviceType: "follow up",
//     oneTimePrice: "$199.95",
//     followUpPrice: "$59.95",
//     subscriptionPrice: "",
//     description:
//       "German Roaches are one of the most difficult pests to control and are found exclusively co-habitating with humans. They do not live in the wild and are only introduced by humans into a home environment. They reproduce rapidly, are often resistant to pesticides and will eat nearly anything. They must be dealt with quickly and unrelentingly.",
//   },
//   {
//     index: "4",
//     serviceName: "Fire Ant Control",
//     serviceType: "follow up",
//     oneTimePrice: "$149.95",
//     followUpPrice: "",
//     subscriptionPrice: "",
//     description:
//       "Fire Ants that are nested close to a home are generally included in PestGuard365. However, sometimes they invade the rest of the yard and mounds can appear throughout. In these cases",
//   },
//   {
//     index: "5",
//     serviceName: "Pest Knockdown Service (Indoor Flea Treatment)",
//     serviceType: "one time",
//     oneTimePrice: "Based on Home size.",
//     followUpPrice: "",
//     subscriptionPrice: "",
//     description:
//       "This service is designed to be a one time comprehensive treatment to eliminate any current activity and provide for residual protection in some cases. For pests that require multiple visits, such as with ghost ants, carpenter ants, etc., it is recommended the customer subscribe to our PestGuard365 Plan. This service includes treatment for indoor fleas, if applicable.",
//   },
//   {
//     index: "6",
//     serviceName: "Wildlife Eviction and Exclusion",
//     serviceType: "",
//     oneTimePrice: "",
//     followUpPrice: "",
//     subscriptionPrice: "Based on Animal, repairs needed, time and complexity.",
//     description:
//       "The two main aspects of this service is to A) repair and seal access to structure, and, B) evict any wildlife that may have entered and now occupy the structure. The object is to evict the fauna without injury, trauma or death.",
//   },
//   {
//     index: "7",
//     serviceName: "Bat Removal",
//     serviceType: "",
//     oneTimePrice: "",
//     followUpPrice: "",
//     subscriptionPrice:
//       "Based on difficulty, extent of repairs and time for bats to relocate.",
//     description:
//       "bats are a protected animal and strict rules must be followed to remove them. The goal is to seal off access while leaving them a way to leave and relocate without harm. This is done through strategic repairs and portal placement.",
//   },
//   {
//     index: "8",
//     serviceName: "Rodent Management",
//     serviceType: "",
//     oneTimePrice: "",
//     followUpPrice: "",
//     subscriptionPrice:
//       "Based on repairs, labor, extent of rodent infestation and number of visits to remove remains and re-set and re-bait traps.",
//     description:
//       "The two main aspects of this service is to A) repair and seal access to structure, and, B) Trap and remove any rodents that may have entered and now occupy the structure.",
//   },
// ];

// const zipCodes = [
//   {
//     city: "Cape Canaveral",
//     zip_code: 32920,
//   },
//   {
//     city: "Cocoa",
//     zip_code: 32922,
//   },
//   {
//     city: "Cocoa Beach",
//     zip_code: 32931,
//   },
//   {
//     city: "Grant",
//     zip_code: 32949,
//   },
//   {
//     city: "Barefoot Bay",
//     zip_code: 32976,
//   },
//   {
//     city: "Port Malabar",
//     zip_code: 32905,
//   },
//   {
//     city: "Micco",
//     zip_code: 32976,
//   },
//   {
//     city: "Indialantic",
//     zip_code: 32903,
//   },
//   {
//     city: "Malabar",
//     zip_code: 32950,
//   },
//   {
//     city: "Melbourne",
//     zip_code: 32901,
//   },
//   {
//     city: "Melbourne Beach",
//     zip_code: 32951,
//   },
//   {
//     city: "Merritt Island",
//     zip_code: 32953,
//   },
//   {
//     city: "Mims",
//     zip_code: 32754,
//   },
//   {
//     city: "Palm Bay",
//     zip_code: 32905,
//   },
//   {
//     city: "Rockledge",
//     zip_code: 32955,
//   },
//   {
//     city: "Satellite Beach",
//     zip_code: 32937,
//   },
//   {
//     city: "Scottsmoor",
//     zip_code: 32775,
//   },
//   {
//     city: "Sebastian",
//     zip_code: 32976,
//   },
//   {
//     city: "Sharpes",
//     zip_code: 32959,
//   },
//   {
//     city: "Titusville",
//     zip_code: 32780,
//   },
// ];

// const sizeData = [
//   {
//     id: 1,
//     size: "Apartment",
//   },
//   {
//     id: 2,
//     size: "Townhouse/Condo limited exterior",
//   },
//   {
//     id: 3,
//     size: "Duplex",
//   },
//   {
//     id: 4,
//     size: "< 800",
//   },
//   {
//     id: 5,
//     size: "801-1600",
//   },
//   {
//     id: 6,
//     size: "1601-2000",
//   },
//   {
//     id: 7,
//     size: "2001-3000",
//   },
//   {
//     id: 8,
//     size: "3001-4,000",
//   },
//   {
//     id: 9,
//     size: "4001-5000",
//   },
//   {
//     id: 10,
//     size: "5001-6000",
//   },
// ];

// const Calculator = () => {
//   const [output, setOutput] = useState("");
//   const [selectedServiceType, setServiceType] = useState("");
//   const [selectedService, setSelectedService] = useState(null);

//   const { data } = useQuery({
//     queryKey: ["allServices"],
//     queryFn: async () => {
//       return fetch(`/api/getServices`).then((res) => res.json());
//     },
//   });

//   const allServices = data?.services || [];

//   const handleServiceTypeChange = (event) => {
//     const selectedServiceType = event.target.value;
//     setServiceType(selectedServiceType);

//     // Find the selected service
//     const service = allServices.find(
//       (service) => service.name === selectedServiceType
//     );
//     setSelectedService(service);
//   };

//   const toCalculate = () => {
//     setOutput(
//       "Congratulations, the price for your service would be (one time__) or (recurring__) or (first visit __) and follow up__)Info: (Service Description) We can start your service any time."
//     );
//   };

//   return (
//     <div className="container mt-52">
//       <div className="relative">
//         <select
//           className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-800 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//           onChange={handleServiceTypeChange}
//           value={selectedServiceType}
//         >
//           <option value="" disabled selected>
//             Choose a Service From the Dropdown:
//           </option>
//           {allServices.map((service) => (
//             <option key={service._id} value={service.name}>
//               {service.name} ({service.type})
//             </option>
//           ))}
//         </select>
//         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//           <svg
//             className="fill-current h-4 w-4"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//           >
//             <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
//           </svg>
//         </div>
//       </div>
//       <input
//         type="text"
//         className="block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:bg-white focus:border-gray-500 mt-5 text-gray-800"
//         placeholder="Enter Zip Code.."
//       />
//       <div className="relative mt-5">
//         <select
//           className={`block appearance-none w-full bg-gray-100 border ${
//             selectedService && !selectedService.sqftCheckbox
//               ? "border-gray-400"
//               : "border-gray-300"
//           } text-gray-800 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
//           disabled={selectedService && !selectedService.sqftCheckbox}
//         >
//           <option value="" disabled selected>
//             Choose Type:
//           </option>
//           {sizeData?.map((size) => (
//             <option key={size.id} value={size.size}>
//               {size.size}
//             </option>
//           ))}
//         </select>
//         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//           <svg
//             className={`fill-current h-4 w-4 ${
//               selectedService && !selectedService.sqftCheckbox
//                 ? "text-gray-400"
//                 : ""
//             }`}
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//           >
//             <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
//           </svg>
//         </div>
//       </div>

//       <button
//         onClick={() => toCalculate()}
//         className="px-4 py-2 mt-5 text-white bg-blue-500 rounded-md focus:outline-none focus:bg-blue-600 hover:bg-blue-600"
//       >
//         Calculate
//       </button>

//       <p className="text-xl font-medium ">{output}</p>
//     </div>
//   );
// };

// export default Calculator;

const Calculator = () => {
  return <div>Enter</div>;
};

export default Calculator;
