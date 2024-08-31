import UserCard from "../UserCard";
import CountChart from "../CountChart";
import AttendanceChart from "../AttendanceChart";
import EventCalendar from "../EventCalendar";

const Dashboard = () => {

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student"/>
          <UserCard type="parent"/>
          <UserCard type="teacher"/>
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart/>
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart/>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar/>
      </div>
    </div>
  )
};

export default Dashboard;