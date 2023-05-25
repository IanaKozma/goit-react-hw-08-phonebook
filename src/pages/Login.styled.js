import styled from '@emotion/styled';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 500;
  font-weight: bold;
  gap: 15px;
`;

export const Title = styled.h2`
  padding-top: 40px;
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 900;
  color: var(--main-text-color);
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitleInput = styled.span`
  font-weight: 600;
  color: var(--main-text-color);
  margin-bottom: 5px;
  margin-right: 10px;
`;

export const Input = styled.input`
  height: 40px;
  padding: 0 10px 0 10px;
  border: 1px solid var(--second-bg-color);
  outline: none;
  color: var(--main-text-color);
  font-size: 14px;

  :focus {
    border-color: var(--accent-bg-color);
  }
  ::placeholder {
    font-size: 12px;
    color: var(--main-text-color);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background-color: var(--accent-bg-color);
  color: var(--second-text-color);
  font-family: inherit;
  border: none;
  cursor: pointer;
  transition: background-color var(--main-hover-animation);

  :hover,
  :focus {
    background-color: var(--second-bg-color);
  }
`;
