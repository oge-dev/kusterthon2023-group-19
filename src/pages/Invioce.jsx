// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { CustomButton, InvoiceHeader, InvoiceList } from "../components";

import "../styles/Invoice.css";

const Invoice = () => {
  // eslint-disable-next-line no-unused-vars
  const [invoices, setInvoices] = useState([]); // Your list of invoices
  // eslint-disable-next-line no-unused-vars
  const [filtersApplied, setFiltersApplied] = useState(false); // Assuming filters are applied

  const handleAddInvoice = () => {
    // Functionality to add a new invoice
    // Update the 'invoices' state accordingly
  };

  return (
    <div className="invoice-container">
      <div className="invoice-title">
        <h1>Invoice</h1>
        <CustomButton type="add" onClick={handleAddInvoice}>
          Add Invoice
        </CustomButton>
      </div>

      <div className="main-invoice">
        <div className="invoice-header-container">
          <InvoiceHeader />
        </div>
        <div className="invoice-card">
          {invoices.length > 0 ? (
            <InvoiceList invoices={invoices} />
          ) : (
            <div>
              {filtersApplied ? (
                <p>You have no invoices for the applied filters.</p>
              ) : (
                <p>You have no invoices.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Invoice;
