import React from 'react';
import moment from 'moment-timezone';

function AutoCompleteText({ defaultValue = '', changeValue }) {
  const options = moment.tz
    .names()
    .sort()
    .map((el) => el.replace(/_/g, ' '));
  const [suggestions, setSuggestions] = React.useState([]);
  const [inputVal, setInputVal] = React.useState(
    defaultValue.replace(/_/g, ' ')
  );
  function handleChange(event) {
    const { value: input } = event.target;
    setInputVal(input);
    let recommendations = [];
    if (input.length) {
      recommendations = [
        ...recommendations,
        ...options.filter((val) =>
          val.toLowerCase().includes(input.toLowerCase())
        ),
      ];
    }
    setSuggestions(Array.from(new Set([...recommendations])));
  }

  function handleClick(value) {
    setSuggestions([]);
    setInputVal(value);
    changeValue(value.replace(/ /g, '_'));
  }

  return (
    <h2 aria-level="2" id="converted-time-lbl">
      <input
        role="searchbox"
        autoFocus
        className="w-75"
        id="converted-time-lbl-input"
        name="converted-time-lbl-input"
        onChange={handleChange}
        type="text"
        placeholder="Time Zone"
        aria-placeholder="Time Zone"
        value={inputVal}
        maxLength={100}
      />
      <div
        id="suggestion-list"
        style={{ maxHeight: '50vh', overflow: 'scroll' }}
      >
        <h6 aria-level="6">
          <ul className="list-group" role="list">
            {suggestions.length > 0
              ? suggestions.map((el, i) => (
                  <li
                    className="list-group-item list-group-item-action"
                    key={i}
                    onClick={() => handleClick(el)}
                    role="listitem"
                    // style={{ paddingLeft: 0 }}
                  >
                    {el.replace(/_/g, ' ')}
                  </li>
                ))
              : null}
          </ul>
        </h6>
      </div>
    </h2>
  );
}

export default AutoCompleteText;
