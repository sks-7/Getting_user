import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserCard from '../components/UserCard';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.5rem;
`;

const UserGrid = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const json = await response.json();
      setUsers(json.data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <Grid>
          {users.map((user) => (
            <UserCard
              key={user.id}
              avatar={user.avatar}
              first_name={user.first_name}
              last_name={user.last_name}
              email={user.email}
            />
          ))}
        </Grid>
      )}
    </>
  );
};

export default UserGrid;
