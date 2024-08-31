import {faInfo} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const UserCard = ({type}: { type: string }) => {

  return (
    <div className="rounded-2xl odd:bg-preschoolPrimaryLight even:bg-preschoolSecondaryLight p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-gray-500">2024/25</span>
        <FontAwesomeIcon icon={faInfo} className="flex items-center justify-center w-[10px] h-[10px] text-gray-500"/>
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  )
};

export default UserCard;