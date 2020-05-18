import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';

import Footer from '../comp/footer';
import Header from '../comp/header';

function Help() {
  const tz = moment.tz.guess();
  const tzAbbr = moment.tz.zone(tz).abbr(moment());
  return (
    <div
      className="container-fluid"
      style={{ maxWidth: '100vw', overflow: 'hidden', padding: 0 }}
    >
      <Header />
      <ol>
        <li>
          Use the <Link to="/">homepage</Link> to convert your{' '}
          <span className="font-weight-bold">current time</span> ({tzAbbr}) to
          other timezone.
        </li>
        <li>
          Use the <Link to="/future">/future</Link> to convert a{' '}
          <span className="font-weight-bold">future date</span> between
          different timezones.
        </li>
        <li>
          Use the <Link to="/from-to">/from-to</Link> to convert
          <span className="font-weight-bold">current time</span> between
          different timezones.
        </li>
      </ol>
      <Footer />
    </div>
  );
}

export default Help;
