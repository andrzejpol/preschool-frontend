import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faDroplet, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

const TeacherDetailPage = () => {

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      <div className="w-full xl:2/3">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="py-6 px-4 rounded-md flex-1 bg-preschoolPrimaryLight flex gap-4">
            <div className="w-1/3">
              <img
                src="https://media.istockphoto.com/id/1476170958/pl/zdj%C4%99cie/portret-m%C5%82odego-m%C4%99%C5%BCczyzny-gotowego-do-pracy-koncepcja-biznesowa.jpg?s=612x612&w=0&k=20&c=36MqHMKX0X1x53gwi8wLXeb1sXbamkBI3EfOiP5dl3k="
                alt="" className="w-[144px] h-[144px] rounded-full object-cover"/>
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Leonard Snyder</h1>
              <p className="text-sm text-gray-500">Lorem ipsum, dolor sit amet. Concectetur adipiscing elit.</p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <FontAwesomeIcon icon={faDroplet} className="flex items-center justify-center"/>
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <FontAwesomeIcon icon={faCalendarDays} className="flex items-center justify-center"/>
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="flex items-center justify-center"/>
                  <span>leonardsnyder@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} className="flex items-center justify-center"/>
                  <span>+48 609443221</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full xl:1/3"></div>
    </div>
  )
};

export default TeacherDetailPage;