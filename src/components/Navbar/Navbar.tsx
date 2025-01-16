import {faMagnifyingGlass, faMessage, faUserNinja} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";

const Navbar = () => {

  const {userFirstName, userRole} = useSelector(state => state.userData);


  return (
    <div className="flex items-center justify-between p-4">
      <div
        className="hidden md:flex flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="flex items-center justify-center"/>
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
      </div>
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-between cursor-pointer relative">
          <FontAwesomeIcon icon={faMessage} className="flex items-center justify-center"/>
          <div
            className="absolute -top-2 -right-1 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm leading-3 font-medium">Witaj, {userFirstName}</span>
          <span className="text-[10px] text-gray-500 text-right">{userRole}</span>
        </div>
        <FontAwesomeIcon icon={faUserNinja} className="flex items-center justify-center w-[30px] h-[30px]"/>
      </div>
    </div>
  )
};

export default Navbar;