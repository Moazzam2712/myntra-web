import React from "react";
import Footer from "./Footer";
import BagSummary from "./BagSummary";
import BagItem from "./BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  console.log(items );

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map(item=> <BagItem item={item} />)}
         
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
