export default function changeTension(goalid, source, flag) {
  const goal = Number(goalid);//
  const idTaken = document.querySelector('.taken').id;
  const arr = source.slice();
  let index = 0;
  switch(flag) {
    case 'add':
      index = arr.indexOf(goal);
      arr.splice(index, 0, Number(idTaken));
      break;
    case 'addend':
      arr.push(Number(idTaken));
      break;
    case 'del':
      index = arr.indexOf(Number(idTaken));
      arr.splice(index, 1);
      break;
    case 'delend':
      arr.pop(idTaken);
      break;
    default: break;
  }console.log(arr);
  return arr;
}

