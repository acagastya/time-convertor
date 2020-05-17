import React from 'react';
import moment from 'moment-timezone';
import AutoCompleteText from './autoCompleteText';

function useTime() {
  const [time, setTime] = React.useState(new Date());
  function updateTime() {
    setTime(new Date());
  }
  React.useEffect(() => {
    let interval = setInterval(() => updateTime(), 1000);
    return () => clearInterval(interval);
  });
  return time;
}

function CurrentTime() {
  const now = useTime();
  const [TZ, setTZ] = React.useState('America/New_York');
  const ISOtime = now.toISOString();
  const tz = moment.tz.guess();
  const localTZ = tz.replace(/_/g, ' ');
  const nowMoment = moment(ISOtime);
  const localAbbr = moment.tz.zone(tz).abbr(nowMoment);
  const otherAbbr = moment.tz.zone(TZ).abbr(nowMoment);
  return (
    <div className="time-conversion">
      <div className="row mb-3" id="labels">
        <div className="col text-right" id="local-time-lbl-box">
          <h2 aria-level="2" id="local-time-lbl">
            Local time ({localTZ})
          </h2>
        </div>
        <div className="col" id="converted-time-lbl-box">
          <AutoCompleteText defaultValue={TZ} changeValue={setTZ} />
        </div>
      </div>
      <div className="row" id="times">
        <div className="col text-right" id="local-time-box">
          <h4 aria-level="4" id="local-time">
            {nowMoment.tz(localTZ).format('HH:mm:ss MMM DD, YYYY')} ({localAbbr}
            )
          </h4>
        </div>
        <div className="col" id="converted-time-box">
          <h4 aria-level="4" id="converted-time">
            {nowMoment.tz(TZ).format('HH:mm:ss MMM DD, YYYY')} ({otherAbbr})
          </h4>
        </div>
      </div>
    </div>
  );
}

export default CurrentTime;
