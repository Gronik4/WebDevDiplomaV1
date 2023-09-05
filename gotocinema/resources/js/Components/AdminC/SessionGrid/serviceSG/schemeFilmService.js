export default function schemeFilmService(tension, datas) {

  let renderDate;
  if(tension.length === 0) {
    renderDate = 'В зале сансов пока не запланировано';
    return renderDate;
  } else {
    renderDate = [];
  }
  
  let totalTime = 10 * 60; // Время начала работы зала 10:00, с начала суток, в минутах.  
  let totalWidth = 0;


  
  tension.forEach((el )=> {
    const filmsDat = JSON.parse(datas);
    const film = filmsDat.find(item=> item.id === el);
    const hoursStart = Math.trunc(totalTime/60);
    const minutesStart = totalTime % 60>9? totalTime % 60: `0${totalTime % 60}`;
    const hoursEnd = Math.trunc((totalTime + Number(Number(film.duration)))/60);
    const minutesEnd = (totalTime + Number(film.duration)) % 60 > 9? (totalTime + Number(film.duration)) % 60: `0${(totalTime + Number(film.duration)) % 60}`;
    renderDate.push(
      {
        id: film.id,
        name: film.name,
        dur: Number(film.duration),
        posStart: totalWidth,
        timeStart: `${hoursStart}:${minutesStart}`,
        timeEnd: `${hoursEnd}:${minutesEnd}`
      }
    );
    totalWidth += (Number(film.duration) + 10);
    totalTime += (Number(film.duration) + 10);
  });
  return renderDate;
}
