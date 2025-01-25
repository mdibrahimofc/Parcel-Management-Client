import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MyReviews = () => {
  // Sample data for reviews
  const reviews = [
    {
      id: 1,
      reviewerName: "John Doe",
      profilePicture: "https://via.placeholder.com/150",
      rating: 5,
      feedback: "Great service! Delivery was on time and the package was handled with care. Highly recommend!",
      date: "2025-01-20",
    },
    {
      id: 2,
      reviewerName: "Jane Smith",
      profilePicture: "https://via.placeholder.com/150",
      rating: 4,
      feedback: "Good experience overall. Slight delay but understandable given the weather.",
      date: "2025-01-18",
    },
    // Add more reviews as needed
  ];

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center mb-8">My Reviews</h1>

      {/* Reviews Section */}
      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="shadow-lg border border-gray-200 rounded-lg">
              <CardContent className="p-4">
                {/* Reviewer Info */}
                <div className="flex items-center mb-4">
                  <img
                    src={review.profilePicture}
                    alt={review.reviewerName}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{review.reviewerName}</h2>
                    <p className="text-sm text-gray-500">Reviewed on: {review.date}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        index < review.rating ? "text-yellow-500" : "text-gray-300"
                      } text-xl`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-700 mb-4">
                  {review.feedback.length > 100
                    ? review.feedback.slice(0, 100) + "..."
                    : review.feedback}
                </p>
                {review.feedback.length > 100 && (
                  <Button className="text-blue-500 underline p-0" variant="link">
                    Read More
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center mt-16">
          <p className="text-gray-500">No reviews yet!</p>
        </div>
      )}

      {/* Stats Section */}
      <div className="mt-8">
        <div className="flex flex-col md:flex-row justify-around items-center gap-4">
          <div className="text-center">
            <h2 className="text-xl font-bold">Total Reviews</h2>
            <p className="text-2xl font-semibold">{reviews.length}</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold">Average Rating</h2>
            <p className="text-2xl font-semibold">
              {(
                reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
              ).toFixed(1)}
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold">5-Star Reviews</h2>
            <p className="text-2xl font-semibold">
              {reviews.filter((review) => review.rating === 5).length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
