import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const ContactsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Contact = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
`;

export const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-bg-color);
  color: var(--second-text-color);
  margin-right: 30px;
  padding: 8px;
  width: 15px;
  height: 15px;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  width: 30px;
  height: 30px;
  padding: 10px;
  border: none;
  background-color: #2b2b2b;
  color: var(--second-text-color);
  cursor: pointer;
  transition: background-color var(--main-hover-animation);

  &:hover,
  &:focus {
    background-color: var(--accent-bg-color);
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 13px;
  padding-top: 16px;
  border: none;
  outline: none;
  color: var(--main-text-color);
  font-weight: bold;
  text-align: center;
  min-width: 80px;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: var(--accent-text-color);
  }
  &.active {
    color: var(--accent-text-color);
  }
`;
