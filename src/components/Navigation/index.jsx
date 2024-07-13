import { NavLink, Outlet } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
    return (
        <>
            <div className={styles["nav-container"]}>
                <NavLink
                    className={({ isActive }) => isActive ? `${styles["nav-link"]} ${styles["active"]}` : styles["nav-link"]}
                    to="/"
                >
                    Generate QR Code
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? `${styles["nav-link"]} ${styles["active"]}` : styles["nav-link"]}
                    to="/qr-scanner"
                >
                    Scan QR Code
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? `${styles["nav-link"]} ${styles["active"]}` : styles["nav-link"]}
                    to="/qr-history"
                >
                    View History
                </NavLink>
            </div>
            {<Outlet />}
        </>
    );
};

export default Navigation;
