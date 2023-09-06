import schemeFilmService from "./schemeFilmService";

export default function testTension(tension, datas, takenId) {console.log('сработал testTension');
  if(tension.length !== 0) {
    const idDuration = JSON.parse(datas).find(item=> item.id === Number(takenId)).duration;
    const listFilms = schemeFilmService(tension, datas);
    const workingHours = listFilms.reduce((summ, next)=> summ + Number(next.dur) + 10, 0);
    if(workingHours + Number(idDuration) > 779) {
      alert(`Нельзя добавить этот фильм в сетку этого зала! Так как время демонстрации фильмов превысит продолжительность работы зала.`);
      return false;
    }
  }
  return true;
}
