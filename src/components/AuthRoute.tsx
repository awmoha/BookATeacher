import {FunctionComponent, useEffect, useState, ReactNode} from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
export interface IAuthRouteProps {children:ReactNode};

const AuthRoute: FunctionComponent<IAuthRouteProps> = props => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoading(false);
        } else {
            console.log('unauthorized');
            navigate('/login');
        }
    });

    return () => {
        unsubscribe(); // No need to call AuthCheck()
    };
}, [auth,navigate]);


    if (loading) return <p>
        loading...
    </p>


    return (
        <div>
            {children}
        </div>
    )
}

export default AuthRoute;