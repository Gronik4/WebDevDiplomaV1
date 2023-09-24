export default function asHandlerConder(code) {
  const out =  {};
  switch(code) {
    case '10':
    case '11':
    case '12':
      out.mess = `На эту дату есть проданные билеты. Изменять ни чего нельзя!`;
      out.contentButt = 'hidd';
      break;    
    case '00':
      out.mess = 'Всё готово, теперь можно';
      out.contentButt = 'Открыть продажу билетов';
      break;
    case '02':
      out.mess = 'Сетка заполнена не полностью. Открыть продажу билетов не удастся:';
      out.contentButt = 'Кнопка заблокирована';
      break;
    case '01':
      out.mess = 'Продажи открыты, но проданных мест пока нет. Можно:';
      out.contentButt = 'Приостановить продажу билетов';
      break;
    default:
      out.contentButt='non';
      out.mess='non';
  }console.log(out.contentButt);
  return out;
}
