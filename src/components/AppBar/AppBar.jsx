import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/AuthOperations';
import { getUserName } from 'redux/selectors';
import { AppBarButton, AppBarContainer } from './AppBar.styled';

export const AppBar = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  return (
    <AppBarContainer>
      <p>Welcome, {userName}</p>
      <AppBarButton type="button" onClick={() => dispatch(logOutUser())}>
        Log out
      </AppBarButton>
    </AppBarContainer>
  );
};
