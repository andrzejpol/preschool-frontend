import TableSearch from "../TableSearch";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBinoculars, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import List from "../List";
import {classesData, role} from "../../data.ts";
import Pagination from "../Pagination";
import {Link} from "react-router-dom";

type ClassType = {
  id: number;
  name: string;
  capacity: number;
  actualAmountOfChildren: number;
  grade: number;
  supervisor: string;
}

const columns = [
  {
    header: "Class Name",
    accessor: "name"
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell"
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell"
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell"
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];
const ClassesPage = () => {

  const renderRow = (item: ClassType) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-100 text-sm hover:bg-preschoolPrimaryLight">
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{`${item.actualAmountOfChildren}/${item.capacity}`}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
      <td className="">
        <div className="flex items-center gap-2">
          <Link to={`/dashboard/classes/${item.id}`}>
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
        <h1 className=" hidden md:block text-lg font-semibold">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch/>
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-preschoolSecondary">
              <FontAwesomeIcon icon={faPlus} className="flex items-center justify-center"/>
            </button>
          </div>
        </div>
      </div>
      <List columns={columns} renderRow={renderRow} data={classesData}/>
      <Pagination/>
    </div>
  )
};

export default ClassesPage;