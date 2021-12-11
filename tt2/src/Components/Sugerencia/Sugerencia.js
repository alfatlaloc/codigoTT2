import { useState } from "react";
import DatePicker from "react-datepicker";

const Sugerencia = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return <div> SUgerencia
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
  </div>;
};

export default Sugerencia;