import { Button } from 'components/Contacts/Contacts.styled';
import styled from '@emotion/styled';

export const AppBarContainer = styled.div`
  display: flex;
  margin-left: auto;
  p {
    font-family: inherit;
    font-weight: bold;
    margin-right: 10px;
    color: rgb(146, 171, 207);
  }
`;
export const AppBarButton = styled(Button)`
font-size: 14px;
font-weight: bold;
padding: 0 14px;
`
