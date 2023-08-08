import moment from 'moment/moment';
import 'moment/locale/ru'; // Установка языка(русский)

export default function calculateNav(date, next) {
  const arrData = [];
  for(let i = 0; i < 7; i++) {
    const weekDay = moment(date+ i*next).format('dd');
    const manthNum = moment(date + i*next).format('DD');
    const fullData = moment(date + i*next).format('YYYY-MM-DD');
    arrData.push({
      day: weekDay,
      num: manthNum,
      fullD: fullData
    });
  }
  
  return arrData;
}
