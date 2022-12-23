import { useContext } from 'react';
import{ Route, useNavigate } from 'react-router-dom';
import { Context } from '../context/Context';

type Props = {
    children: JSX.Element;
};

export const PrivateRoute = ({ children, ...rest }: Props) => {

    const { state, dispatch } = useContext(Context);
    const token = state.user.token;

    const navigate = useNavigate();
    if (!token || token === ''){
        navigate('/login');
        return null;
    }
    return <Route {...rest }>{children}</Route>
}; 