import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faDroplet, faEnvelope, faPhone, faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const opinions = [
  {
    id: 1,
    from: "Joe Doe",
    date: "02.09.2024",
    message:
      "Lucas is an imaginative and energetic preschooler who brings a sense of adventure to everything he does. He’s always the first to suggest playing make-believe games, where he becomes a brave knight or a daring astronaut. In the classroom, Lucas is curious and eager to learn, often asking questions that show his deep interest in the world around him. However, his enthusiasm can sometimes lead to impatience, especially when he has to wait his turn or sit still during storytime. Despite this, Lucas is kind-hearted and quick to share his toys, making him a favorite among his peers. With gentle guidance, he’s learning to balance his excitement with patience, and his infectious smile lights up every room he enters."
  },
  {
    id: 2,
    from: "Joe Doe",
    date: "03.09.2024",
    message:
      "Lucas is an imaginative and energetic preschooler who brings a sense of adventure to everything he does. He’s always the first to suggest playing make-believe games, where he becomes a brave knight or a daring astronaut. In the classroom, Lucas is curious and eager to learn, often asking questions that show his deep interest in the world around him. However, his enthusiasm can sometimes lead to impatience, especially when he has to wait his turn or sit still during storytime. Despite this, Lucas is kind-hearted and quick to share his toys, making him a favorite among his peers. With gentle guidance, he’s learning to balance his excitement with patience, and his infectious smile lights up every room he enters."
  }, {
    id: 3,
    from: "Joe Doe",
    date: "04.09.2024",
    message:
      "Lucas is an imaginative and energetic preschooler who brings a sense of adventure to everything he does. He’s always the first to suggest playing make-believe games, where he becomes a brave knight or a daring astronaut. In the classroom, Lucas is curious and eager to learn, often asking questions that show his deep interest in the world around him. However, his enthusiasm can sometimes lead to impatience, especially when he has to wait his turn or sit still during storytime. Despite this, Lucas is kind-hearted and quick to share his toys, making him a favorite among his peers. With gentle guidance, he’s learning to balance his excitement with patience, and his infectious smile lights up every room he enters."
  },
]

const StudentDetailPage = () => {

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      <div className="w-full xl:2/3">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="py-6 px-4 rounded-md flex-1 bg-preschoolPrimaryLight flex gap-4">
            <div className="w-1/3">
              <img
                src="https://static.vecteezy.com/system/resources/previews/029/364/950/non_2x/3d-carton-of-boy-going-to-school-ai-photo.jpg"
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
        <div className="mt-4">
          <div className="flex items-center justify-end md:justify-between">
            <h1 className=" hidden md:block text-lg font-semibold my-2">Opinions</h1>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-preschoolSecondary">
              <FontAwesomeIcon icon={faPlus} className="flex items-center justify-center"/>
            </button>
          </div>
          {opinions.map((opinion) => (
            <div className="flex flex-col gap-2 p-4 my-2 border border-gray-200 rounded-md">
              <p>{opinion.message} </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{opinion.from}</span>
                <span>{opinion.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full xl:1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link to={"/dashboard/classes"}
                  className="p-3 rounded-md bg-preschoolSecondary text-gray-500">Student&apos;s Classes</Link>
            <Link to={"/dashboard/parents"}
                  className="p-3 rounded-md bg-preschoolSecondary text-gray-500">Student&apos;s Parents</Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default StudentDetailPage;