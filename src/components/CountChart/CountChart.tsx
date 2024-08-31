import {RadialBarChart, RadialBar, ResponsiveContainer} from 'recharts';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChildren, faGraduationCap} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    name: 'Total',
    count: 103,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 50,
    pv: 2400,
    fill: "#E7EF78",
  },
  {
    name: 'Boys',
    count: 53,
    fill: "#1CF6E2",
  }
];

const CountChart = () => {

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <FontAwesomeIcon icon={faGraduationCap} className="w-[20px] h-[20px]"/>
      </div>
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <FontAwesomeIcon icon={faChildren}
                         className="w-[50px] h-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
      </div>
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-preschoolPrimaryLight rounded-full"/>
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-sm text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-preschoolSecondaryLight rounded-full"/>
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-sm text-gray-300">Girls (45%)</h2>
        </div>
      </div>
    </div>
  )
};

export default CountChart;