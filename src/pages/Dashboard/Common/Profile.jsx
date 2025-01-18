import React, { useState } from 'react';

const Profile = () => {
  const [profilePic, setProfilePic] = useState(null);

  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleProfileUpdate = () => {
    alert('Profile updated successfully!');
    // Implement API call for updating the profile in the backend
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-gray-500">
                Upload Image
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            className="mt-2 text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            onChange={handleProfilePictureUpload}
          />
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            defaultValue="Ibrahim"
            readOnly
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            defaultValue="mdibrahimrj316@gmail.com"
            readOnly
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            defaultValue="01860373652"
          />
        </div>
        <button
          onClick={handleProfileUpdate}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
