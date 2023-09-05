export default function receivedDataHandler(incoming) {
  let inc = Object.entries(incoming);
  let outgoing = {};
  inc.forEach(item => {
    let el = Object.entries(item[1]);
    outgoing[el[0][0]] = el[0][1]
  });
  return outgoing;
}
