import { useState } from "react";
import Button from "../ui/button";

const EventSearch = (props) => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    props.findEventHandler(year, month);
  };

  return (
    <form className="event-search" onSubmit={onSubmitHandler}>
      <div className="event-search__content">
        <div className="event-search__content__group">
          <label htmlFor="year">Year</label>
          <select id="year" onChange={(e) => setYear(e.target.value)}>
            <option value="2020" default disabled>Year</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div className="event-search__content__group">
          <label htmlFor="month">Month</label>
          <select id="month" onChange={(e) => setMonth(e.target.value)}>
            <option value="1" default disabled>Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>

      <Button>Finds Events</Button>
    </form>
  );
};

export default EventSearch;
