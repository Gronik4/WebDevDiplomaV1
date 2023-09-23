export default function handlerClientParameters(data) {
  const row = {};
  const areal = [];
  const prepared = data.slice(1, -1).replace(/%22/g, '"');
  const obj = JSON.parse(prepared);

  obj.namehall = decodeURIComponent(obj.namehall);// Декодирует URL код в кирилицу
  obj.namefilm = decodeURIComponent(obj.namefilm);
  
  obj.places.forEach(el => {
    if(Object.keys(row).includes(el[0])) {
      const value = row[el[0]];
      row[el[0]] = value+el[1]+',';
    } else {row[el[0]] = el[1]+","}
  });

  for(let item of Object.entries(row)) {
    const spelling = item[1].slice(0, -1).length === 1? 'место:': 'места:';
    const edit = `ряд ${item[0]} ${spelling} ${item[1].slice(0, -1)} `;
    areal.push(edit);  
  }
  obj.places = areal
  return obj;
}
