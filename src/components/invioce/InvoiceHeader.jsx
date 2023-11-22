// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import {
  FaFilter,
  FaCalendarAlt,
  FaSearch,
  FaSync,
  FaTimes,
} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./InvoiceHeader.css";
import CustomButton from "../CustomButton/CustomButton";

const InvoiceHeader = () => {
  const [stateDropdown, setStateDropdown] = useState("All");
  const [statusDropdown, setStatusDropdown] = useState("All");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [isEndCalendarOpen, setIsEndCalendarOpen] = useState(false);

  const datePickerRef = useRef();

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSaveDateRange = () => {
    setIsDatePickerOpen(false);
  };

  const resetFilters = () => {
    setStateDropdown("All");
    setStatusDropdown("All");
    setStartDate("");
    setEndDate("");
  };

  const openStartCalendar = () => {
    setIsStartCalendarOpen(true);
    setIsEndCalendarOpen(false);
  };

  const openEndCalendar = () => {
    setIsEndCalendarOpen(true);
    setIsStartCalendarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target)
      ) {
        setIsStartCalendarOpen(false);
        setIsEndCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="invoice-header">
      <div className="filter-icon">
        <FaFilter />
        <span>Filter by</span>
      </div>
      <div className="dropdowns">
        <div className="dropdown">
          <button className="dropdown-button">State: {stateDropdown}</button>
          <div className="dropdown-content">
            <span onClick={() => setStateDropdown("All")}>All</span>
            <span onClick={() => setStateDropdown("Active")}>Active</span>
            <span onClick={() => setStateDropdown("Inactive")}>Inactive</span>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropdown-button">Status: {statusDropdown}</button>
          <div className="dropdown-content">
            <span onClick={() => setStatusDropdown("All")}>All</span>
            <span onClick={() => setStatusDropdown("Paid")}>Paid</span>
            <span onClick={() => setStatusDropdown("Unpaid")}>Unpaid</span>
          </div>
        </div>
      </div>
      <div className="date-picker">
        <input
          type="text"
          value={`Date: ${startDate} - ${endDate}`}
          onClick={() => setIsDatePickerOpen(true)}
          readOnly
        />
        <FaCalendarAlt className="calendar-icon" />
        {isDatePickerOpen && (
          <div
            className={`date-picker-popup ${isDatePickerOpen ? "active" : ""}`}
            ref={datePickerRef}
          >
            <div className="date-picker-header">
              <span className="header-title">Filter by Date</span>
              <FaTimes
                className="close-icon"
                onClick={() => setIsDatePickerOpen(false)}
              />
            </div>
            <div className="date-picker-body">
              <div className="date-inputs">
                <label>Start Date:</label>
                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  onClickOutside={() => setIsStartCalendarOpen(false)}
                  onFocus={openStartCalendar}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select start date"
                  readOnly
                />
                {isStartCalendarOpen && (
                  <DatePicker
                    selected={startDate}
                    onChange={handleStartDateChange}
                    inline
                    // showMonthDropdown
                    // showYearDropdown
                  />
                )}
              </div>
              <div className="date-inputs">
                <label>End Date:</label>
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  onClickOutside={() => setIsEndCalendarOpen(false)}
                  onFocus={openEndCalendar}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select end date"
                  readOnly
                />
                {isEndCalendarOpen && (
                  <DatePicker
                    selected={endDate}
                    onChange={handleEndDateChange}
                    inline
                    // showMonthDropdown
                    // showYearDropdown
                  />
                )}
              </div>
            </div>
            <div className="date-picker-footer">
              <CustomButton type="empty" onClick={handleSaveDateRange}>
                Save
              </CustomButton>
            </div>
          </div>
        )}
      </div>
      <div className="search-input-container">
        <input type="text" className="search-input" placeholder="Search" />
        <FaSearch className="search-icon" />
      </div>
      <div className="reset-button" onClick={resetFilters}>
        <FaSync /> <span>Reset</span>
      </div>
    </div>
  );
};

export default InvoiceHeader;
