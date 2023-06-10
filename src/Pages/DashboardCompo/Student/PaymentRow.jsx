import moment from "moment/moment";
import React from "react";

const PaymentRow = ({ payment }) => {
  const { title, price, instructor_name, transactionId, date } = payment;


  return (
    <tr>
      <td>{title}</td>
      <td>{instructor_name}</td>
      <td>{price}</td>
      <td>{transactionId}</td>
      <td>
        {moment(date).format('MMMM Do YYYY')}
         <br />{moment(date).format('h:mm:ss a')}</td>
    </tr>
  );
};

export default PaymentRow;
