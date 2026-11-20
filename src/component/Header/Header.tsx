import style from "./Header.module.scss"
import { FaUserLarge } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { SiTask } from "react-icons/si";


const Header = () => {
  return (
    <header className={style.header}>
        <div className={style.icons}>
            <div className={style.userIcon} > <FaUserLarge /></div>
            <div className={style.notificationIcon}> <IoNotifications /></div>
        </div>
        <div className={style.searchBar}> <input type="text" name="searchBar" id="inpt searchBar" placeholder="Search tasks..." /></div>
        <div className={style.siteIcon}> <h3>Task Manager</h3> <SiTask /> </div>
    </header>
  )
}

export default Header