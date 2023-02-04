import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}&deg;C /{" "}
                    {Math.round(item.main.temp_max)}&deg;C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label className="daily-details-title">Pressure:</label>
                  <label className="daily-details-description">
                    {item.main.pressure} hPa
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="daily-details-title">Humidity:</label>
                  <label className="daily-details-description">
                    {item.main.humidity}%
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="daily-details-title">Clouds:</label>
                  <label className="daily-details-description">
                    {item.clouds.all}%
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="daily-details-title">Wind speed:</label>
                  <label className="daily-details-description">
                    {item.wind.speed} km/h
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="daily-details-title">Sea level:</label>
                  <label className="daily-details-description">
                    {item.main.sea_level}m
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="daily-details-title">Feels like:</label>
                  <label className="daily-details-description">
                    {Math.round(item.main.feels_like)}
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
