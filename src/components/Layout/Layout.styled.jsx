import styled from '@emotion/styled';

export const NavContainer = styled.nav`
  background-color: var(--main-bg-color);
  display: flex;
  gap: 30px;
  padding: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid grey;
`;

export const HomeText = styled.p`
  padding-top: 50px;
  font-size: 42px;
  font-weight: bold;
  text-align: center;
  color: var(--main-text-color);
`;

export const Title = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 2px;
  color: var(--main-text-color);
  text-align: center;
`;

export const TitleСolor = styled.span`
  color: var(--accent-text-color);
`;
