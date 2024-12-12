import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const TableSearch = ({onSearch}: { onSearch: (query: string) => void }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputValue(query);
    onSearch(query);
  };

  return (
    <div
      className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="flex items-center justify-center"/>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Search..."
             className="w-[200px] p-2 bg-transparent outline-none"/>
    </div>
  )
};

export default TableSearch;