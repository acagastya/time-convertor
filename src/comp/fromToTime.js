import React from 'react';
import moment from 'moment-timezone';

function AutoCompleteFrom() {
  return 'from';
}

function AutoCompleteTo() {
  return 'To';
}

function FromToTime() {
  return (
    <div className="time-conversion">
      <div className="row mb-3" id="labels">
        <div className="col" id="from-time-lbl-box">
          <AutoCompleteTo defaultValue={fromTZ} changeValue={setFromTZ} />
        </div>
        <div className="col" id="to-time-lbl-box">
          <AutoCompleteFrom defaultValue={toTZ} changeValue={setToTZ} />
        </div>
      </div>
      <div className="row" id="times">
        <div className="col text-right" id="from-time-box">
          <h4 aria-level="4" id="from-time">
            {nowMoment.tz(fromTZ).format('HH:mm:ss MMM DD, YYYY')} ({fromAbbr})
          </h4>
        </div>
        <div className="col" id="to-time-box">
          <h4 aria-level="4" id="to-time">
            {nowMoment.tz(toTZ).format('HH:mm:ss MMM DD, YYYY')} ({toAbbr})
          </h4>
        </div>
      </div>
    </div>
  );
}

export default FromToTime;
