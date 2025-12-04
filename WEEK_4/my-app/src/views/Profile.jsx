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

  if (!user) return <div>Loading profile…</div>;

  return (
    <div>
      <h2>Profile</h2>
      <div><strong>Username:</strong> {user.username}</div>
      <div><strong>Email:</strong> {user.email}</div>
      <div><strong>Level:</strong> {user.level_name}</div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;