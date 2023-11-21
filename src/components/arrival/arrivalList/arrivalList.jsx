import React from "react";
import PropTypes from "prop-types";
import { ArrivalItem } from "../arrivalsItem";
import "./arrivalList.css";

const ArrivalList = ({ list, short = false, onClick }) => {
  return (
    <div className="arrival-list">
      {list.map((el) => (
        <ArrivalItem key={el.id} item={el} short={short} onClick={onClick}/>
      ))}
    </div>
  );
};

ArrivalList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  short: PropTypes.bool,
  onClick: PropTypes.func,

};

export default ArrivalList;
