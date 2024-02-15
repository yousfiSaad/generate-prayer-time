import { CalculationMethod, PrayerTimes } from 'adhan';

const date = new Date();

const getPrayerTime = (coordinates) => (date) => {
  const params = CalculationMethod.MoonsightingCommittee();
  const prayerTimes = new PrayerTimes(coordinates, date, params);

  return prayerTimes;
}

function getTimesAndNames(coordinates, date){
  const names = [
    "Fajr   ",
    "Sunrise",
    "Dhuhr  ",
    "Asr    ",
    "Sunset ",
    "Maghrib",
    "Isha   "
  ];
  const ptime = getPrayerTime(coordinates)(date);
  const times = [
    ptime.fajr,
    ptime.sunrise,
    ptime.dhuhr,
    ptime.asr,
    ptime.sunset,
    ptime.maghrib,
    ptime.isha
  ].map(d => d.getTime())

  return { names, times };
}
// const { names, times } = getTimesAndNames(date);

const _getTimesAndNames = getTimesAndNames;
export { _getTimesAndNames as getTimesAndNames };
// const _times = times;
// export { _times as times };
// const _names = names;
// export { _names as names };

