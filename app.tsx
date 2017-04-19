import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as DatePicker from 'react-datepicker'
import * as moment from 'moment'

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

require('react-datepicker/dist/react-datepicker.css')

ReactDOM.render(<DatePicker onChange={e => console.log(e)} />, document.getElementById("mount"))
