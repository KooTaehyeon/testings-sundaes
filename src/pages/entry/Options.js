import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScoopOption from './ScoopOption';
import { Row } from 'react-bootstrap';
const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, [optionType]);
  console.log(items);
  const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={items.name}
      name={items.name}
      imagePath={items.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
};

export default Options;
