import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

const Sugerencia = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="justify-content-center text-center">
      <h1>Sugerencia</h1>
      <p>Fecha inicial</p>
      <DatePicker
      inlie
        selected={startDate}
        popperPlacement="auto"
        yearDropdownItemNumber={100}
        scrollableYearDropdown={true}
        showYearDropdown
        showMonthDropdown
        minDate={new Date("02-01-2000")}
        maxDate={new Date("02-01-2021")}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <p>Fecha Limite</p>
      <DatePicker
        popperPlacement="auto"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
      />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dato 1</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Dato 2</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Sugerencia;
