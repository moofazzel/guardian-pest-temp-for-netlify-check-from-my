import HomePageModel from "@/models/HomePageModel";
import Services from "@/models/Services";

export async function getAllServices() {
  const services = await Services.find().lean();

  return services;
}

export async function getServicesById(id) {
  const service = await Services.findById({ _id: id }).lean();

  return service;
}



export async function getAllReviews() {

  //   let homePage = await HomePageModel.findOne();

  // try {
  //   // Find the review by ID and update its fields
  //   const review = homePage.googleReviews.id(result.reviewId);
  
  
  
  const reviews = await HomePageModel.find().lean();



  return reviews;
}
