import React from 'react'
import ReactDOM from 'react-dom'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css';

ReactDOM.render(<DatePicker onChange={e => console.log(e.format("YYYY-MM-DD"))} />, document.getElementById("mount"))
