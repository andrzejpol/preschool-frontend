import {Link, NavLink} from "react-router-dom";
import Logo from "../../assets/logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChalkboardUser, faClipboardUser,
  faGear, faGraduationCap,
  faHouse, faMessage, faPeopleGroup,
  faPersonBreastfeeding,
  faRightFromBracket,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: faHouse,
        label: "Home",
        href: "/dashboard"
      },
      {
        icon: faChalkboardUser,
        label: "Teachers",
        href: "/dashboard/teachers"
      },
      {
        icon: faGraduationCap,
        label: "Students",
        href: "/dashboard/students"
      },
      {
        icon: faPersonBreastfeeding,
        label: "Parents",
        href: "/dashboard/parents"
      },
      {
        icon: faPeopleGroup,
        label: "Classes",
        href: "/dashboard/classes"
      },
      {
        icon: faClipboardUser,
        label: "Attendance",
        href: "/dashboard/attendance"
      },
      {
        icon: faCalendarDays,
        label: "Events",
        href: "/dashboard/events"
      },
      {
        icon: faMessage,
        label: "Messages",
        href: "/dashboard/messages"
      }
    ]
  },
  {
    title: "OTHER",
    items: [
      {
        icon: faUser,
        label: "Profile",
        href: "/profile"
      },
      {
        icon: faGear,
        label: "Settings",
        href: "/settings"
      },
      {
        icon: faRightFromBracket,
        label: "Logout",
        href: "/logout"
      }
    ]
  }
]
const Menu = () => {
  return (
    <>
      <Link to={"/dashboard"} className="flex justify-center hidden lg:block">
        <img src={Logo} alt="logo" width={120} height={120}/>
      </Link>
      <div className="mt-4 text-sm xs:h-full">
        {menuItems.map((menuItem) => (
          <div className="flex flex-col gap-2" key={menuItem.title}>
            <span className="hidden lg:block text-gray-400 font-light my-4">
              {menuItem.title}
            </span>
            {menuItem.items.map((item) => (
              <NavLink to={item.href} end key={item.label} className={({isActive}) =>
                isActive
                  ? "text-blue-500 flex items-center justify-center lg:justify-start gap-4 py-2"
                  : "text-gray-500 flex items-center justify-center lg:justify-start gap-4 py-2"
              }
              >
                <FontAwesomeIcon icon={item.icon} width={20} height={20}
                                 className="flex items-center justify-center"/>
                <span className="hidden lg:block">{item.label}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;