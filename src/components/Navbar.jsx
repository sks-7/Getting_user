import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f2f2f2;
`;

const Img = styled.img`
  height: 50px;
  margin-right: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const NavBar = ({ onClick }) => {
  return (
    <Nav>
      <Img
        src="https://jetpunk.b-cdn.net/img/user-photo-library/78/788d2ed13a-235.png"
        alt=""
      />

      <Button onClick={onClick}>Get Users</Button>
    </Nav>
  );
};

export default NavBar;
