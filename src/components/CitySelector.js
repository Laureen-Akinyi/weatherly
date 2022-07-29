import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const CitySelector = () => {
  const [city, setCity] = useState('');

  return (
    <>
      <Row>
        <Col>
          <h1>Search your city</h1>
        </Col>
      </Row>

      <Row>
        {/* xs={4} takes the one third  of the page*/}
        <Col xs={4} className="text-center">
          <FormControl
            placeholder="Enter city"
            // update city value with the user's input
            onChange={(event) => setCity(event.target.value)}
            // value will be the currently selected city
            value={city}
          />
        </Col>
      </Row>

     
    </>
  );
};

export default CitySelector;