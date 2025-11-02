import { getReviewsForAHotel } from "@/database/queries";

const HotelAllReviews = async ({ params: { id } }) => {
  const reviews = await getReviewsForAHotel(id);
  console.log("reviews", reviews);

  return (
    <div className="container">
      {reviews.map((r) => (
        <h2 className="mt-40 border p-4" key={r.id}>{r.review}</h2>
      ))}
    </div>
  );
};

export default HotelAllReviews;
