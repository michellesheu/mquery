import { useMemo } from "react";
import { COLUMNS } from "../Column";
import { useTable } from "react-table";
import "./Table.css";

const Table = ({ mockData }) => {
    const columns = useMemo(() => COLUMNS, []); // memoize before adding to useTable hook
    const data = useMemo(() => [...mockData], [mockData]);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns, // useTable hook takes in memoized columns and data to be displayed
        data,
    });

    return (
        <>
            {/* apply the table props */}
            <table {...getTableProps()} className="table">
                <thead>
                    {
                        // Loop over the header rows
                        headerGroups.map((headerGroup) => (
                            // Apply the header row props
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    // Loop over the headers in each row
                                    headerGroup.headers.map((column) => (
                                        // Apply the header cell props
                                        <th {...column.getHeaderProps()} className="thead">{column.render("Header")}</th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                {/* Apply the table body props */}
                <tbody {...getTableBodyProps()}>
                    {
                        // Loop over the table rows
                        rows.map((row, i) => {
                            // Prepare the row for display
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        // Loop over the rows cells
                                        row.cells.map((cell) => {
                                            // Apply the cell props
                                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
};

export default Table;