import React from "react";
import {render, screen} from "@testing-library/react";
import List from "../List";

describe("List Component", () => {
  const columns = [
    {header: "Name", accessor: "name", className: "text-left"},
    {header: "Age", accessor: "age", className: "text-center"},
    {header: "Email", accessor: "email", className: "text-right"},
  ];

  const renderRow = (item) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.email}</td>
    </tr>
  );

  const data = [
    {id: 1, name: "John Doe", age: 30, email: "john@example.com"},
    {id: 2, name: "Jane Smith", age: 25, email: "jane@example.com"},
  ];

  it("renders the table headers correctly", () => {
    render(<List columns={columns} renderRow={renderRow} data={data}/>);

    columns.forEach((col) => {
      expect(screen.getByText(col.header)).toBeInTheDocument();
    });
  });

  it("displays no data message when data is empty", () => {
    render(<List columns={columns} renderRow={renderRow} data={[]}/>);

    expect(screen.getByText("There is no data")).toBeInTheDocument();
  });

  it("renders the table rows correctly when data is provided", () => {
    render(<List columns={columns} renderRow={renderRow} data={data}/>);

    data.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.age.toString())).toBeInTheDocument();
      expect(screen.getByText(item.email)).toBeInTheDocument();
    });
  });

  it("matches the snapshot when data is present", () => {
    const {asFragment} = render(
      <List columns={columns} renderRow={renderRow} data={data}/>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("matches the snapshot when no data is present", () => {
    const {asFragment} = render(
      <List columns={columns} renderRow={renderRow} data={[]}/>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
