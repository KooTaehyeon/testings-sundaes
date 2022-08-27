import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
export default function SummatForm() {
  const [tuChecked, setTcChecked] = useState(false);

  const checkBoxLable = (
    <span>
      I agree to <span style={{ color: 'blue' }}>terms and conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId='terms-and-conditions'>
        <Form.Check
          type='checkbox'
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkBoxLable}
        ></Form.Check>
      </Form.Group>
      <Button variant={'primary'} type='submit' disabled={!tuChecked}>
        Confirm order
      </Button>
    </Form>
  );
}
