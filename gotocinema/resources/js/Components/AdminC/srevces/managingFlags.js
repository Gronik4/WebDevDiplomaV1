
export default function getFlags(headerName) {
  const flags = {};
  switch(headerName) {
    case 'Управление залами':
      flags.flag = 1;
      flags.flagDel = 'hd';
      flags.add = 'addHall';
      flags.del = 'deleteHall'; 
      break;
    case 'Сетка сеансов':
      flags.flag = 2;
      flags.flagDel = 'fd';
      flags.add = 'addFilm';
      flags.del = 'deleteFilm'; 
      break;
    default: flags = 0; break;
  }
  return flags;
}
