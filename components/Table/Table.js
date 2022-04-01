import React from "react";

const Table = (props) => {
    const { headers, data, keys } = props;
    return (
        <table className='table-container'>
            <thead className="table__head">
                <tr>
                    {headers.map(val => {
                        return <th key={val} accessKey={val}>{val}</th>
                    }
                    )}
                </tr>
            </thead>

            <tbody className="table__body">
                {renderTableData(data, keys)}
            </tbody>
        </table>
    )

    function renderTableData(data, keys) {
        return data.map((item, idx) => {
            return (
                <tr key={idx}>
                    {!keys &&
                        Object.keys(item).map((key, idx) => {
                            return <td key={idx}>{item[key]}</td>;
                        })}
                    {keys &&
                        keys.map((key) => {
                            return <td>{item[key]}</td>;
                        })}
                </tr>
            );
        });
    }
}
export default Table;
