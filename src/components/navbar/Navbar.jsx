import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        {!user ? (
          <>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        ) : (
          <>
            <li>hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
