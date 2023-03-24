import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 1rem;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
`;

const Name = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Email = styled.p`
  font-size: 0.8rem;
`;

const UserCard = ({ avatar, first_name, last_name, email }) => {
  return (
    <Card>
      <Avatar src={avatar} alt={`${first_name} ${last_name}`} />
      <Name>{`${first_name} ${last_name}`}</Name>
      <Email>{email}</Email>
    </Card>
  );
};

export default UserCard;
