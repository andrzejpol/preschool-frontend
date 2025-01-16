import {Link, NavLink} from "react-router-dom";
import Logo from "../../assets/logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChalkboardUser, faChild, faClipboardUser,
  faGear, faGraduationCap,
  faHouse, faMessage, faPeopleGroup,
  faPersonBreastfeeding,
  faRightFromBracket,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import {role} from "../../data.ts";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: faHouse,
        label: "Home",
        href: "/dashboard",
        visible: ["admin"],
      },
      {
        icon: faChalkboardUser,
        label: "Teachers",
        href: "/dashboard/teachers",
        visible: ["admin"],
      },
      {
        icon: faChild,
        label: "My kids",
        href: "/my-kids",
        visible: ["parent"],
      },
      {
        icon: faGraduationCap,
        label: "Students",
        href: "/dashboard/students",
        visible: ["admin"],
      },
      {
        icon: faPersonBreastfeeding,
        label: "Parents",
        href: "/dashboard/parents",
        visible: ["admin"],
      },
      {
        icon: faPeopleGroup,
        label: "Groups",
        href: "/dashboard/groups",
        visible: ["admin"],
      },
      {
        icon: faClipboardUser,
        label: "Attendance",
        href: "/dashboard/attendance",
        visible: ["admin"],
      },
      {
        icon: faCalendarDays,
        label: "Events",
        href: "/dashboard/events",
        visible: ["admin"],
      },
      {
        icon: faMessage,
        label: "Messages",
        href: "/dashboard/messages",
        visible: ["admin"],
      },
      {
        icon: faMessage,
        label: "My Messages",
        href: "/messages",
        visible: ["parent", "teacher"],
      }
    ]
  },
  {
    title: "OTHER",
    items: [
      {
        icon: faUser,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "parent"],
      },
      {
        icon: faGear,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "parent"],
      },
      {
        icon: faRightFromBracket,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "parent"],
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
            {menuItem.items.map((item) => {
              if (item.visible.includes(role)) {
                return (
                  <NavLink to={item.href} end key={item.label} className={({isActive}) =>
                    isActive
                      ? "text-preschoolPrimary flex items-center justify-center lg:justify-start gap-4 py-2 hover:bg-preschoolSecondaryLight"
                      : "text-gray-500 flex items-center justify-center lg:justify-start gap-4 py-2 hover:bg-preschoolSecondaryLight"
                  }
                  >
                    <FontAwesomeIcon icon={item.icon} width={20} height={20}
                                     className="flex items-center justify-center"/>
                    <span className="hidden lg:block">{item.label}</span>
                  </NavLink>
                )
              }
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;