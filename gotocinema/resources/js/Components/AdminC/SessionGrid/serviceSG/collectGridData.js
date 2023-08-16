export default function collectGridData() {
  const gridData = [];
  const dateSelect = document.getElementById('SGDate').value;
  const arrHalls = document.querySelectorAll('.conf-step__seances-hall');
  arrHalls.forEach((el)=> {
    const arrFilms = el.querySelectorAll('.conf-step__seances-movie');
    arrFilms.forEach((item)=> { //console.log('IdHall= '+el.id + ' '+'IdFilm= '+item.id+' начало= '+item.childNodes[1].textContent);
      gridData.push({
        data: dateSelect,
        id_hall: Number(el.id),
        ses_start: item.childNodes[1].textContent,
        id_film: Number(item.id)
      });
    }); 
  });
  return gridData; 
}
