import Image from "next/image";
import DeleteReview from "./DeleteReview";
import EditReviewModal from "./EditReviewModal";

const SingleReview = ({ review }) => {



  return (
    <div className="p-5 space-y-6 border text-white group relative">
      <div className=" group-hover:flex items-center justify-end gap-3 mb-3f border absolute px-4 py-2 rounded-md right-2 top-6 hidden  z-[999] ">
        <EditReviewModal review={review} />

        <DeleteReview id={review._id} />
      </div>
      <Image
        className="rounded mx-auto"
        width={100}
        height={100}
        src={review.image}
        alt=""
      />
      <p>{review.name}</p>
      <p>{review.title}</p>
      <p>{review.rating}</p>
      <p>{review.review}</p>
    </div>
  );
};

export default SingleReview;
