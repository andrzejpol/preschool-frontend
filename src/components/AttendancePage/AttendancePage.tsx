import Calendar from "react-calendar";
import {useState} from "react";
import List from "../List";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";

type Child = {
  id: number;
  name: string;
  studentId: string;
  class: string;
  isPresent: boolean;
};

const columns = [
  {
    header: "Name",
    accessor: "name"
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell"
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const AttendancePage = () => {
  const [value, setValue] = useState<Value>(new Date());

  const [children, setChildren] = useState<Child[]>([
    {id: 1, studentId: "123", name: 'John Doe', class: "Older", isPresent: false},
    {id: 2, studentId: "1233", name: 'Jane Smith', class: "Younger", isPresent: false},
    {id: 3, studentId: "1234", name: 'Sam Green', class: "Older", isPresent: false},
  ]);

  const toggleAttendance = (id: number) => {
    setChildren(prevChildren =>
      prevChildren.map(child =>
        child.id === id ? {...child, isPresent: !child.isPresent} : child
      )
    );
  };

  const renderRow = (item: Child) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-100 text-sm hover:bg-preschoolPrimaryLight">
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="">
        <div className="flex items-center gap-2">
          <button onClick={() => toggleAttendance(item.id)}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-preschoolPrimary">
            {item.isPresent ? (<FontAwesomeIcon icon={faCheck} className="flex items-center justify-center"/>) : (
              <FontAwesomeIcon icon={faXmark} className="flex items-center justify-center"/>)}
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-8 md:order-1 order-2">
        <div className="flex items-center md:justify-between justify-end">
          <h1 className="hidden md:block text-lg font-semibold">Attendance {value?.toLocaleDateString()}</h1>
          <button className="py-2 px-4 bg-teal-500 rounded-[4px] text-sm font-semibold hover:bg-teal-600">Save it
          </button>
        </div>
        <List columns={columns} renderRow={renderRow} data={children}/>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-8 md:order-2 order-1">
        <Calendar onChange={setValue} value={value} locale="en"/>
      </div>
    </div>
  );
};

export default AttendancePage;
