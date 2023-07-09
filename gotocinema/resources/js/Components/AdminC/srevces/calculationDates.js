import moment from "moment";

export default function calcDates() {
  const tsNow = Date.now();
  const minDate = moment(tsNow).format('YYYY-MM-DD');
  const delta = 3*7*24*60*60*1000;
  const maxDate = moment(tsNow + delta).format('YYYY-MM-DD');
  return{min: minDate, max: maxDate};
}
