import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
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
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius: "10px", borderColor: "lightgray"}}/>
          <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop: "20px", paddingBottom: "40px"}}/>
          <Bar dataKey="present" legendType="circle" fill="#E7EF78" radius={[10, 10, 0, 0]}/>
          <Bar dataKey="absent" legendType="circle" fill="#1CF6E2" radius={[10, 10, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
};

export default AttendanceChart;