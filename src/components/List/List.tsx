import React from "react";

const List = ({columns, renderRow, data}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[]
}) => {

  const noData = data?.length == 0;

  return (
    <table className="w-full mt-4">
      <thead>
      <tr className="text-left text-gray-500 text-sm">
        {columns.map(col => (
          <th key={col.accessor} className={col.className}>{col.header}</th>
        ))}
      </tr>
      </thead>
      {noData ? (<tbody className="flex items-center justify-center h-64 w-full ">
      <tr>
        <td colSpan={4}><p className="text-xl font-semibold text-gray-500">There is no data</p></td>
      </tr>
      </tbody>) : (<tbody>{data.map((item) => renderRow(item))}</tbody>)}
    </table>
  )
};

export default List;