import TableSearch from "../TableSearch";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBinoculars, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import List from "../List";
import {role, studentsData} from "../../data.ts";
import Pagination from "../Pagination";
import {Link} from "react-router-dom";

type StudentType = {
  id: number;
  studentId: string;
  name: string;
  photo: string;
  phone: string;
  parents: string[];
  class: string;
  address: string;
}

const columns = [
  {
    header: "Info",
    accessor: "info"
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell"
  },
  {
    header: "Parents",
    accessor: "parents",
    className: "hidden md:table-cell"
  },
  {
    header: "Parent Phone",
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
const StudentsPage = () => {

  const renderRow = (item: StudentType) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-100 text-sm hover:bg-preschoolPrimaryLight">
      <td className="flex items-center gap-4 p-4">
        <img src={item.photo} alt="teacher's photo"
             className="w-[40px] h-[40px] md:hidden xl:block rounded-full object-cover"/>
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.parents.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td className="">
        <div className="flex items-center gap-2">
          <Link to={`/dashboard/students/${item.id}`}>
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
        <h1 className=" hidden md:block text-lg font-semibold">All Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch/>
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-preschoolSecondary">
              <FontAwesomeIcon icon={faPlus} className="flex items-center justify-center"/>
            </button>
          </div>
        </div>
      </div>
      <List columns={columns} renderRow={renderRow} data={studentsData}/>
      <Pagination/>
    </div>
  )
};

export default StudentsPage;