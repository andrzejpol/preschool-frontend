import TableSearch from "../TableSearch";
import {faBinoculars, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Pagination from "../Pagination";
import List from "../List";
import {Link} from "react-router-dom";
import {role, teachersData} from "../../data.ts";

type TeacherType = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
}

const columns = [
  {
    header: "Info",
    accessor: "info"
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell"
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell"
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell"
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell"
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell"
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const TeachersPage = () => {

  const renderRow = (item: TeacherType) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-100 text-sm hover:bg-preschoolPrimaryLight">
      <td className="flex items-center gap-4 p-4">
        <img src={item.photo} alt="teacher's photo"
             className="w-[40px] h-[40px] md:hidden xl:block rounded-full object-cover"/>
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td className="">
        <div className="flex items-center gap-2">
          <Link to={`/dashboard/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-preschoolPrimary">
              <FontAwesomeIcon icon={faBinoculars} className="flex items-center justify-center"/>
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-preschoolPrimary">
              <FontAwesomeIcon icon={faTrash} className="flex items-center justify-center"/>
            </button>
          )}

        </div>
      </td>
    </tr>
  )

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className=" hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch/>
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-preschoolSecondary">
              <FontAwesomeIcon icon={faPlus} className="flex items-center justify-center"/>
            </button>
          </div>
        </div>
      </div>
      <List columns={columns} renderRow={renderRow} data={teachersData}/>
      <Pagination/>
    </div>
  )
}

export default TeachersPage;