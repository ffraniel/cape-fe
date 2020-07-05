import React from "react";

const DateFormatter = ({ date }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const monthKey = dateObj.getMonth();
  const month = months[monthKey];
  const year = dateObj.getFullYear();
  return (
    <>
      {day} {month} {year}
    </>
  );
};

export default DateFormatter;
