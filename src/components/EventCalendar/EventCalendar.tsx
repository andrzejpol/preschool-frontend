import {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "3:00PM - 7:00PM",
    description: "Lorem ipsum dolor sit amet"
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00AM - 2:00AM",
    description: "Lorem ipsum dolor sit amet"
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00PM - 2:00PM",
    description: "Lorem ipsum dolor sit amet"
  },
]

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} locale="en"/>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <FontAwesomeIcon icon={faCalendarDays} className="w-[20px] h-[20px]"/>
      </div>
      <div className="flex flex-col gap-4">
        {events.map(event => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-preschoolPrimaryLight even:border-t-preschoolSecondaryLight"
            key={event.id}>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-preschoolPrimary-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default EventCalendar;