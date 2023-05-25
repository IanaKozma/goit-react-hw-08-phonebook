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
  color: rgb(255, 255, 255);
  background: rgba(255, 255, 255, 0.12);
  font-family: inherit;
  font-weight: bold;
  text-align: center;

  min-width: 80px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  opacity: 0.8;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
    color: red;
    opacity: 1.2;
  }
  &.active {
    color: red;
    background: #00ffd5;
  }

  :before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  :after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;
