import React from 'react';
import AutoCompleteText from './autoCompleteText';
import moment from 'moment-timezone';

import useTime from './helpers/useTime';
import prepData from './helpers/prepData';

function FromToTime() {
  const guessedTZ = moment.tz.guess();
  const [TZ1, setTZ1] = React.useState(guessedTZ);
  const [TZ2, setTZ2] = React.useState('UTC');
  const { firstAbbr, fmtTime1, fmtTime2, secondAbbr } = prepData(
    useTime(),
    TZ2,
    TZ1
  );
  return (
    <div className="time-conversion">
      <div className="row mb-3" id="fromto">
        <div className="col text-right" id="labels-from">
          <h1>From</h1>
        </div>
        <div className="col text-left" id="labels-to">
          <h1>To</h1>
        </div>
      </div>
      <div className="row mb-3" id="labels">
        <div className="col text-right" id="first-time-lbl-box">
          <AutoCompleteText
            autofocus={true}
            changeValue={setTZ1}
            defaultValue={TZ1}
            id="first-time-lbl-input"
            placeholder="First time zone"
          />
        </div>
        <div className="col" id="second-time-lbl-box">
          <AutoCompleteText
            changeValue={setTZ2}
            defaultValue={TZ2}
            id="second-time-lbl-input"
            placeholder="Second time zone"
          />
        </div>
      </div>
      <div className="row" id="times">
        <div className="col text-right" id="first-time-box">
          <h4 aria-level="4" id="first-time">
            {fmtTime1} ({firstAbbr})
          </h4>
        </div>
        <div className="col" id="second-time-box">
          <h4 aria-level="4" id="second-time">
            {fmtTime2} ({secondAbbr})
          </h4>
        </div>
      </div>
    </div>
  );
}

export default FromToTime;
