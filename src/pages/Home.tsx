import {FunctionComponent} from "react";
import { getAuth, signOut } from "firebase/auth";
export   interface ILoginPageProps {}

const HomePage: FunctionComponent<ILoginPageProps> = (props) => {
    const auth = getAuth();

    return (
        <div>
            <p>Home Page (skyddad av Firebase)</p>
            <button onClick={() => {signOut(auth)}}>Sign out of FireBase</button>
        </div>
    )
}

export default HomePage;