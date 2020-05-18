import React from 'react';
import moment from 'moment-timezone';

import AutoCompleteText from '../comp/autoCompleteText';

function Future() {
  const now = moment(new Date());
  const today = now.format('YYYY-MM-DD');
  const guess = moment.tz.guess();
  const timeRightNow = now.format('HH:mm');
  const [date, setDate] = React.useState(today);
  const [time, setTime] = React.useState(timeRightNow);
  const [TZ1, setTZ1] = React.useState(guess);
  const [TZ2, setTZ2] = React.useState('UTC');
  const [err, setErr] = React.useState('');
  const [convertedTime, setConvertedTime] = React.useState(undefined);
  const [chosenTime, setChosenTime] = React.useState(undefined);
  function handleDateChange(e) {
    setDate(e.target.value);
    setConvertedTime(undefined);
  }

  function handleTimeChange(e) {
    setTime(e.target.value);
    setConvertedTime(undefined);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // 0. Reset error
    setErr('');
    setConvertedTime(undefined);
    setChosenTime(undefined);
    // 1. validate chosen date
    const chosenDate = moment(date);
    if (!chosenDate.isValid()) {
      setErr('Chosen date is not valid.');
      console.warn(err);
      return;
    }
    // 1.1 chosenDate is in the range
    const epoch = moment('01-18-2038', 'MM-DD-YYYY');
    if (epoch.unix() - chosenDate.unix() < 0) {
      setErr('Chosen date is outside the maximum permissible limit.');
      console.warn(err);
      return;
    }
    // if (chosenDate.unix() - now.unix() < 0) {
    //   setErr('Chosen date is in the past.');
    //   console.log(err);
    //   return;
    // }

    // 2. validate chosen time
    const dateStr = chosenDate.format('YYYY-MM-DD');
    const timeStr = time;
    const completeTimeStr = `${dateStr} ${timeStr}`;
    const completeTime = moment.tz(completeTimeStr, TZ1);
    if (!completeTime.isValid) {
      setErr('Error occurred while parsing time.');
      console.warn(err);
      return;
    }
    // 3. validate chosen timezone
    if (moment.tz.names().indexOf(TZ1) < 0) {
      setErr('Selected timezone does not exist.');
      return;
    }
    // 4. validate set timezone
    if (moment.tz.names().indexOf(TZ2) < 0) {
      setErr('Destination timezone does not exist.');
      return;
    }
    // 5. convert time
    setChosenTime(completeTime.tz(TZ1).format('HH:mm:ss MMM DD, YYYY'));
    const convTime = completeTime.tz(TZ2).format('HH:mm:ss MMM DD, YYYY');
    setConvertedTime(convTime);
  }

  return (
    <div className="container" style={{ minHeight: '75vh' }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="choose-date">Choose date</label>
          <input
            aria-describedby="choose-date"
            className="form-control"
            id="choose-date"
            max={'2038-01-18'}
            min={now}
            name="choose-date"
            onChange={handleDateChange}
            placeholder="Enter date"
            type="date"
            value={date}
          />
        </div>
        <div className="form-group">
          <label htmlFor="choose-time">Choose time</label>
          <input
            aria-describedby="choose-time"
            className="form-control"
            id="choose-time"
            name="choose-time"
            onChange={handleTimeChange}
            placeholder="Enter time"
            type="time"
            value={time}
          />
        </div>
        <div className="form-group">
          <label htmlFor="choose-from-timezone">Set timezone</label>
          <AutoCompleteText
            autofocus={false}
            changeValue={setTZ1}
            clearInput={setConvertedTime}
            defaultValue={TZ1}
            id="choose-from-timezone"
            placeholder="Set timezone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="convert-to-timezone">Convert to timezone</label>
          <AutoCompleteText
            autofocus={false}
            changeValue={setTZ2}
            clearInput={setConvertedTime}
            defaultValue={TZ2}
            id="convert-to-timezone"
            placeholder="Convert to timezone"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Convert
        </button>
      </form>
      {!!err === true ? (
        <ErrorAlert msg={err} />
      ) : !!convertedTime === true ? (
        <FutureConversion
          chosenTime={chosenTime}
          convertedTime={convertedTime}
          TZ1={TZ1}
          TZ2={TZ2}
        />
      ) : null}
    </div>
  );
}

function FutureConversion({ chosenTime, convertedTime, TZ1, TZ2 }) {
  const mmChosenTime = moment(chosenTime, 'HH:mm:ss DD MMM, YYYY');
  const mmConvTime = moment(convertedTime, 'HH:mm:ss MMM DD, YYYY');
  const fromLbl = moment.tz.zone(TZ1).abbr(mmChosenTime);
  const toLbl = moment.tz.zone(TZ2).abbr(mmConvTime);
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col">
          <h1>{TZ1.replace(/_/g, ' ')}</h1>
        </div>
        <div className="col">
          <h1>{TZ2.replace(/_/g, ' ')}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {chosenTime} ({fromLbl})
        </div>
        <div className="col">
          {convertedTime} ({toLbl})
        </div>
      </div>
    </div>
  );
}

function ErrorAlert({ msg }) {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {msg}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Future;
