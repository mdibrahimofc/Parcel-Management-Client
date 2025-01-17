import React from "react";
import HeadingText from "../Utils/HeadingText";

const TopDeliveryMen = () => {
  const topDeliveryMen = [
    {
      name: "John Doe",
      profilePicture: "https://via.placeholder.com/150",
      deliveries: 300,
      rating: 4.9,
      accuracy: "98%",
      achievements: ["Fastest delivery: 12 minutes", "50+ deliveries in a day"],
      rewards: "Star Performer Badge 🏅",
    },
    {
      name: "Jane Smith",
      profilePicture: "https://via.placeholder.com/150",
      deliveries: 275,
      rating: 4.8,
      accuracy: "96%",
      achievements: [
        "Most deliveries in a week: 320",
        "Top customer satisfaction score",
      ],
      rewards: "Best Accuracy Trophy 🏆",
    },
    {
      name: "Ali Ahmed",
      profilePicture: "https://via.placeholder.com/150",
      deliveries: 260,
      rating: 4.7,
      accuracy: "94%",
      achievements: [
        "Longest streak of on-time deliveries",
        "Handled 15+ peak-hour requests daily",
      ],
      rewards: "Customer Favorite Award 🥇",
    },
  ];

  return (
    <div className="my-6">
      <HeadingText title={"Top Delivery Men of the Month 🚚"} subTitle={"Recognizing the exceptional efforts of our delivery team, showcasing the top performers who ensure fast, reliable, and safe parcel deliveries every day."} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {topDeliveryMen.map((man, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-60 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
          >
            {/* Profile Picture */}
            <div className="flex justify-center">
              <img
                src={man.profilePicture}
                alt={man.name}
                className="w-24 h-24 rounded-full border-4 border-blue-400"
              />
            </div>
            {/* Name and Rewards */}
            <h3 className="text-xl font-semibold text-gray-700 text-center mt-4">
              {man.name}
            </h3>
            <p className="text-sm text-blue-500 text-center">{man.rewards}</p>
            {/* Stats */}
            <div className="mt-4">
              <p className="flex items-center justify-between text-gray-600">
                <span>🚚 Deliveries:</span> <span>{man.deliveries}</span>
              </p>
              <p className="flex items-center justify-between text-gray-600">
                <span>⭐ Rating:</span> <span>{man.rating}</span>
              </p>
              <p className="flex items-center justify-between text-gray-600">
                <span>⏱️ Accuracy:</span> <span>{man.accuracy}</span>
              </p>
            </div>
            {/* Achievements */}
            <div className="mt-4">
              <h4 className="text-sm font-bold text-gray-700 mb-2">
                Achievements:
              </h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {man.achievements.map((achieve, i) => (
                  <li key={i}>{achieve}</li>
                ))}
              </ul>
            </div>
            {/* Call to Action */}
            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-full w-full text-center hover:bg-blue-600">
              View More Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeliveryMen;
