import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const IteratingApi = () => {
  const fetchStates = useSelector((state) => {
    return {
      FetchedData: state.fetchApi.fetchedApiValues,
    };
  });
  return (
    <Fragment>
      <div>
        <h1>Fetched API Data</h1>
        <table>
          <thead>
            <tr>
              <th>Interest Id |</th>
              <th>Interest Name |</th>
              <th>Interest Sub Category Id |</th>
              <th>Interest Sub Category Name |</th>
            </tr>
          </thead>
          <tbody>
            {fetchStates.FetchedData.length > 0 ? (
              fetchStates.FetchedData.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.interestId}</td>
                    <td>{value.interestName}</td>
                    <td>{value.interestSubCategoryId}</td>
                    <td>{value.interestSubCategoryName}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No Data Available!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default IteratingApi;
