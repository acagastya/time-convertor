import moment from 'moment-timezone';

function prepData(time, TZ2, TZ1 = '') {
  const ISOtime = time.toISOString();
  const tz = TZ1 || moment.tz.guess();
  const firstTZ = tz.replace(/_/g, ' ');
  const now = moment(ISOtime);
  const firstAbbr = moment.tz.zone(tz).abbr(now);
  const secondAbbr = moment.tz.zone(TZ2).abbr(now);
  let fmtTime1 = now.tz(tz).format('HH:mm:ss MMM DD, YYYY');
  let fmtTime2 = now.tz(TZ2).format('HH:mm:ss MMM DD, YYYY');
  return {
    firstAbbr,
    firstTZ,
    fmtTime1,
    fmtTime2,
    secondAbbr,
  };
}

export default prepData;
