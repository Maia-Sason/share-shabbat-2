// TODO: use a service like holiday API (no), or https://www.hebcal.com/ to query upcoming jewish holidays (maybe shabbat times?) and send to page with SSR

// Users will receive JSON data and on client side we will create smart suggestions to make new rooms based on the upcoming holiday.

/* 
 Probably do this:
 Send user's date in a get request, (or read current time when fetch comes through), process closest holidays in backend (here) and then push out the results to the user. (no calc needed in front end)
 */

/*
items: 
[
    {
    title: 'Erev Rosh Hashana',
    date: '2022-09-25',
    hdate: '29 Elul 5782',
    category: 'holiday',
    subcat: 'major',
    hebrew: 'ערב ראש השנה',
    link: 'https://hebcal.com/h/rosh-hashana-2022?us=js&um=api',
    memo: 'The Jewish New Year. Also spelled Rosh Hashanah'
    }
]
 */

const getHolidayMatch = (key) => {
  let returnValue = "";

  switch (true) {
    case /Pesach/i.test(key):
      returnValue = "Pesach";
      break;
    case /Purim/i.test(key):
      returnValue = "Purim";
      break;
    case /Shavuot/i.test(key):
      returnValue = "Shavuot";
      break;
    case /Tish'a B'Av/i.test(key):
      returnValue = "Tish'a B'Av";
      break;
    case /Rosh Hashana/i.test(key):
      returnValue = "Rosh Hashana";
      break;
    case /Yom Kippur/i.test(key):
      returnValue = "Yom Kippur";
      break;
    case /Sukkot/i.test(key):
      returnValue = "Sukkot";
      break;
    case /Shmini Atzeret/i.test(key):
      returnValue = "Shmini Atzeret";
      break;
    case /Simchat Torah/i.test(key):
      returnValue = "Simchat Torah";
      break;
    case /Chanukah/i.test(key):
      returnValue = "Chanukah";
      break;
    default:
      returnValue = key;
      break;
  }
  return returnValue;
};

const convertDateToGregorian = (date) => {
  const splitDate = date
    .toLocaleDateString("en-US", {
      // you can use undefined as first argument
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/");
  console.log(splitDate);
  return `${splitDate[2]}-${splitDate[0]}-${splitDate[1]}`;
};

export const fetchUpcomingHoliday = async (currentDate, futureDate) => {
  const newCurrentFormattedDate = convertDateToGregorian(currentDate);

  const newFutureFormattedDate = convertDateToGregorian(futureDate);

  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const URL = `https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&start=${newCurrentFormattedDate}&end=${newFutureFormattedDate}`;

  console.log(URL);

  const res = await fetch(URL, fetchOptions);
  const data = await res.json();

  // Reduce the array by title (pesach 1, pesach 2... should be pesach)
  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = getHolidayMatch(obj[property]);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  return groupBy(data.items, "title");
};
