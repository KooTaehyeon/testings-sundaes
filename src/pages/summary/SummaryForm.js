import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

// const Example = () => (
//   <OverlayTrigger trigger='click' placement='right' overlay={popover}>
//     <Button variant='success'>Click me to see</Button>
//   </OverlayTrigger>
// );

// render(<Example />);

export default function SummatForm() {
  const [tuChecked, setTcChecked] = useState(false);

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Body>no ice cream will actually be delivered</Popover.Body>
    </Popover>
  );
  // const Example = () => (
  //   <OverlayTrigger trigger='click' placement='right' overlay={popover}>
  //     <Button variant='success'>Click me to see</Button>
  //   </OverlayTrigger>
  // );

  const checkBoxLable = (
    <OverlayTrigger placement='right' overlay={popover}>
      <span>
        I agree to <span style={{ color: 'blue' }}>terms and conditions</span>
      </span>
    </OverlayTrigger>
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
        confirm order
      </Button>
    </Form>
  );
}
