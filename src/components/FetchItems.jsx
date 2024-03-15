import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/ItemSlice";
import { fetchActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus= useSelector(store=>store.fetchStatus)
  const dispatch = useDispatch();
  console.log(fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController;
    const signal = controller.signal;
    dispatch(fetchAction.markFetchingStarted())
    

    fetch("http://dummyjson.com/products", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchActions.markFetchDone())
    dispatch(fetchActions.markFetchingDone())

        dispatch(itemActions  .addInitialItems(items));
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
     
    </>
  );
};

export default FetchItems;
