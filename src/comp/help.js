import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';

function Help() {
  const basePath = process.env.PUBLIC_URL;
  const tz = moment.tz.guess();
  const tzAbbr = moment.tz.zone(tz).abbr(moment());
  return (
    <div className="container" style={{ minHeight: '75vh' }}>
      <ol>
        <li>
          Use the{' '}
          <Link
            to={`${basePath}/`}
            style={{
              background: 'lavender',
              borderRadius: '5px',
              padding: '2px 5px',
            }}
          >
            homepage
          </Link>{' '}
          to convert your <span className="font-weight-bold">current time</span>{' '}
          ({tzAbbr}) to other timezone.
        </li>
        <li>
          Use the{' '}
          <Link
            to={`${basePath}/future`}
            style={{
              background: 'lavender',
              borderRadius: '5px',
              padding: '2px 5px',
            }}
          >
            /future
          </Link>{' '}
          to convert a <span className="font-weight-bold">future date</span>{' '}
          between different timezones.
        </li>
        <li>
          Use the{' '}
          <Link
            to={`${basePath}/from-to`}
            style={{
              background: 'lavender',
              borderRadius: '5px',
              padding: '2px 5px',
            }}
          >
            /from-to
          </Link>{' '}
          to convert
          <span className="font-weight-bold"> current time</span> between
          different timezones.
        </li>
      </ol>
    </div>
  );
}

export default Help;
