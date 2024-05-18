import React from 'react';

const UserGallery = ({ users = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            {user.photo && (
              <img
                src={URL.createObjectURL(user.photo)}
                alt={`${user.name}'s photo`}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{user.name}</h2>
              <p className="text-gray-700">{user.email}</p>
              <p className="text-gray-700">
                {user.country}, {user.city}, {user.area}
              </p>
              <p className="text-gray-700">{user.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserGallery;