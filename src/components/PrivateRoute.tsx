import { useContext } from 'react';
import { LoginScreen } from '../pages/LoginScreen';
import { Context } from '../context/Context';

type Props = {
    children: JSX.Element;
};

export const PrivateRoute = ({ children }: Props) => {
  const { state } = useContext(Context);
  const user = state.user.name;

    if (user === ''){
        alert('REALIZE SEU LOGIN')
        return <LoginScreen />
    };

    return children;
}; 