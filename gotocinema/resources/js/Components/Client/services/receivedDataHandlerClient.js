export default function receivedDataHandlerClient(incomings) {
  const out = [];
  const inc = Object.entries(incomings);
  inc.forEach(el => {
    const dataMovie = {};
    const elem = Object.entries(el[1])[0]; 
    const idf = Number(elem[0]);
    const grid= [];

    for(let value of Object.values(elem[1])) {
      const gridHall = {};
      const gridFilm = Object.entries(value)[0];
      gridHall.namehall = gridFilm[0];
      const arrSeanses = [];
      gridFilm[1].forEach((el)=> {arrSeanses.push(el.ses_start);});
      gridHall.seanses = arrSeanses;
      grid.push(gridHall);
    };
    
    dataMovie.id = idf;
    dataMovie.grid = grid;
    out.push(dataMovie);
  });
  // Чтобы посмотреть в каком это все виде для фильма с id=2 - раскоментить строку ниже
  //console.log(`id фильма= ${out[2].id} Имя зала= ${out[2].grid[0].namehall} сеансы= ${out[2].grid[0].seanses}`);
  return out;
}
