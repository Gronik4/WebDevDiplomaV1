export default function receivedDataHandler(incoming, maxLengthFilm,films) {console.log(films);
  let inc = Object.entries(incoming);
  let outgoing = {};
  let summ;
  inc.forEach(item => {
    let el = Object.entries(item[1]);
    outgoing[el[0][0]] = el[0][1]
  });console.log(outgoing);
  for(let elem of Object.values(outgoing)) {console.log(elem);
    Object.values(elem).forEach((el)=> {
      console.log(films[el]);
    });
  }
  return outgoing;
}
