import Footer from "./Footer";
import Navbar2 from "./Navbar2";

const UserWrapper = ({ children }) => {
    return (
        <div className="user-wrapper">
            <Navbar2 /> {children} <Footer />
        </div>
    );
};

export default UserWrapper;
