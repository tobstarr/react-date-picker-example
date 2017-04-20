import * as React from "react";
import * as ReactDOM from "react-dom";
import * as moment from "moment";

const DatePicker = require("react-datepicker").default;

class User {
  name: string;
}

require("react-datepicker/dist/react-datepicker.css");

const Component = (props: { start: moment.Moment, end: moment.Moment }) => (
  <div>
    <div>
      <DatePicker
        selected={props.start}
        onChange={(e: any) => console.log(e)}
      />
    </div>
    <div>
      <DatePicker selected={props.end} onChange={(e: any) => console.log(e)} />
    </div>
  </div>
);

ReactDOM.render(
  <Component start={moment()} end={moment().add(1, "day")} />,
  document.getElementById("mount")
);
