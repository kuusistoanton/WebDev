import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useUser} from '../hooks/apiHooks';

const Profile = () => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    const fetchUser = async () => {
      try {
        const response = await getUserByToken(token);
        setUser(response.user);
      } catch (err) {
        console.log('Failed to fetch user by token', err);
      }
    };
    fetchUser();
  }, [getUserByToken]);

  if (!user) return <div className="flex items-center justify-center min-h-screen text-lg text-gray-600 dark:text-gray-400">Loading profile…</div>;

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg p-6 shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Profile</h2>
        <div className="space-y-4">
          <div className="border-b border-gray-200 dark:border-neutral-700 pb-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wide">Username</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white mt-1">{user.username}</p>
          </div>
          <div className="border-b border-gray-200 dark:border-neutral-700 pb-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wide">Email</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white mt-1">{user.email}</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wide">Level</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white mt-1">{user.level_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;