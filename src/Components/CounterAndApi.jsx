import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "../ReduxHandling/Reducers/counterAndApiSlice";
import { fetchApi } from "../ReduxHandling/Reducers/counterAndApiSlice";
import IteratingApi from "./IteratingApi";

const CounterAndApi = () => {
  const dispatch = useDispatch();
  const fetchStates = useSelector((state) => {
    return {
      Counter: state.fetchApi.counter,
      FetchedData: state.fetchApi.fetchedApiValues,
    };
  });
  let fetchApiBtn;
  if (fetchStates.FetchedData.length > 0) {
    fetchApiBtn = "blockBtn";
  } else {
    fetchApiBtn = "allowBtn";
  }
  return (
    <Fragment>
      <div>
        <div>
          <h1>Counter And Fetch API</h1>
        </div>
        <div>
          <hr></hr>
        </div>
        <div>
          <h1>Counter Value: {fetchStates.Counter}</h1>
          <button
            onClick={() => {
              dispatch(increment());
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              dispatch(reset());
            }}
          >
            Reset
          </button>
        </div>
        <div>
          <hr></hr>
        </div>
        <div>
          <h1>Fetch API</h1>
          <button
            onClick={() => {
              dispatch(fetchApi());
            }}
            className={fetchApiBtn}
          >
            Fetch API
          </button>
        </div>
        <div>
          <hr></hr>
        </div>
        <div>
          <IteratingApi />
        </div>
      </div>
    </Fragment>
  );
};

export default CounterAndApi;
