import { Coordinates } from 'adhan';
import { getTimesAndNames } from './times.mjs';


if(process.argv.length != 4){
  console.error("error parsing arguments \n Usage example: node generateData.mjs 366 33.6082243,-7.6324728");
  process.exit();
}

const n = parseInt(process.argv[2]);
const coordinates_args = process.argv[3].split(",").map(parseFloat);
const coordinates = new Coordinates(coordinates_args[0], coordinates_args[1]);

function addDays(d, days) {
  var date = new Date(d);
  date.setDate(date.getDate() + days);
  return date;
}

function printDateData(date){
  const {names, times} = getTimesAndNames(coordinates, date);

  names.forEach((name, i) => {
    const time = times[i];
    console.log(time, name);
  });
};

const now = new Date();
for (let i = -1; i < n; i++) {
  const date = addDays(now, i)
  printDateData(date);
}
