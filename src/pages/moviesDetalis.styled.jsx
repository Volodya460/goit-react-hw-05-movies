import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  padding: 5px 10px;
`;

const NavLInkInf = styled(NavLink)`
  font-weight: 300;
  color: black;
  &.active {
    color: blue;
  }
  &.hover {
    color: blue;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 5px 10px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: white;
  background-color: blue;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  &:hover {
    color: black;
    box-shadow: 0 5px #666;
    background-color: red;
  }
`;

export default NavLInkInf;
