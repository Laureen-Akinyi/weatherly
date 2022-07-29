import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function WeatherCard({ dt, temp_min, temp_max, main, icon }) {
  const date = new Date(dt);
  return (
    <CardGroup>
      <Card>
        <Card.Img
          variant="top"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        />
        <Card.Body>
          <Card.Title>{main}</Card.Title>
          {/*  datetime is received in milliseconds, let's turn into local date time */}
          <p>
            {date.toLocaleDateString()} - {date.toLocaleTimeString()}
          </p>
          {/* minimum temperature */}
          <p>Min: {temp_min}</p>
          {/* maximum temperature */}
          <p>Max: {temp_max}</p>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        />
        <Card.Body>
          <Card.Title>{main}</Card.Title>
          {/*  datetime is received in milliseconds, let's turn into local date time */}
          <p>
            {date.toLocaleDateString()} - {date.toLocaleTimeString()}
          </p>
          {/* minimum temperature */}
          <p>Min: {temp_min}</p>
          {/* maximum temperature */}
          <p>Max: {temp_max}</p>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        />
        <Card.Body>
          <Card.Title>{main}</Card.Title>
          {/*  datetime is received in milliseconds, let's turn into local date time */}
          <p>
            {date.toLocaleDateString()} - {date.toLocaleTimeString()}
          </p>
          {/* minimum temperature */}
          <p>Min: {temp_min}</p>
          {/* maximum temperature */}
          <p>Max: {temp_max}</p>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default WeatherCard;
