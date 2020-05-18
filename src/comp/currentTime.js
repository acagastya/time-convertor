import React from 'react';
import AutoCompleteText from './autoCompleteText';

import useTime from './helpers/useTime';
import prepData from './helpers/prepData';

function CurrentTime() {
  const [TZ2, setTZ2] = React.useState('UTC');
  const { firstAbbr, fmtTime1, fmtTime2, firstTZ, secondAbbr } = prepData(
    useTime(),
    TZ2
  );
  return (
    <div className="time-conversion container" style={{ minHeight: '75vh' }}>
      <div className="row mb-3" id="fromto">
        <div className="col text-right" id="labels-from">
          <h1>From</h1>
        </div>
        <div className="col text-left" id="labels-to">
          <h1>To</h1>
        </div>
      </div>
      <div className="row mb-3" id="labels">
        <div className="col text-right" id="local-time-lbl-box">
          <h4 aria-level="4" id="local-time-lbl">
            Local time ({firstTZ})
          </h4>
        </div>
        <div className="col" id="converted-time-lbl-box">
          <AutoCompleteText
            autofocus={true}
            changeValue={setTZ2}
            defaultValue={TZ2}
            id="converted-time-lbl-input"
            placeholder="Time zone"
          />
        </div>
      </div>
      <div className="row" id="times">
        <div className="col text-right" id="local-time-box">
          <h4 aria-level="4" id="local-time">
            {fmtTime1} ({firstAbbr})
          </h4>
        </div>
        <div className="col" id="converted-time-box">
          <h4 aria-level="4" id="converted-time">
            {fmtTime2} ({secondAbbr})
          </h4>
        </div>
      </div>
    </div>
  );
}

export default CurrentTime;
