import AddReviewForm from "@/components/Dashboard/AddReviewForm";
import SingleReview from "@/components/Dashboard/SingleReview";
import { getAllReviews } from "@/database/queries";

const DashboardHomePage = async () => {
  const reviews = await getAllReviews();
  const allReviews = reviews[0]?.googleReviews;

  return (
    <section className="text-white text-2xl text-center ">
      <AddReviewForm />

      <div>
        <h1 className="font-bold mb-20">
          {allReviews.length > 0
            ? "All Google Reviews"
            : "No Google Reviews Please Add "}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allReviews.map((review) => {
            const reviewStr = JSON.stringify(review);
            return <SingleReview key={review._id} reviewStr={reviewStr} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default DashboardHomePage;
