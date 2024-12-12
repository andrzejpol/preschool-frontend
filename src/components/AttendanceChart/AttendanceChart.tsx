import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboardUser} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    name: 'Mon',
    present: 34,
    absent: 20,
  },
  {
    name: 'Tue',
    present: 34,
    absent: 12,
  },
  {
    name: 'Wed',
    present: 43,
    absent: 23,
  },
  {
    name: 'Thu',
    present: 34,
    absent: 12,
  },
  {
    name: 'Fri',
    present: 43,
    absent: 25,
  },
];

const AttendanceChart = () => {

  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <FontAwesomeIcon icon={faClipboardUser} className="w-[20px] h-[20px]"/>
      </div>

    </div>
  )
};

export default AttendanceChart;