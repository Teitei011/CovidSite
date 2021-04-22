async function getData(locationName) {
  const response = await fetch("brazil/" + locationName + ".csv");
  const data = await response.text();

  const date = [];
  const cases = [];
  const deaths = [];
  const daily_cases = [];
  const daily_deaths = [];
  const cases_moving_average = [];
  const deaths_moving_average = [];
  const sum_of_daily_cases_week = [];
  const sum_of_daily_deaths_week = [];
  const table = data.split("\n").slice(1);


  table.forEach((row) => {
    const cols = row.split(",");
    date.push(cols[1]);
    cases.push(cols[2]);
    daily_cases.push(cols[3]);
    deaths.push(cols[4]);
    daily_deaths.push(cols[5]);

    cases_moving_average.push(cols[6]);
    deaths_moving_average.push(cols[7]);

    sum_of_daily_cases_week.push(cols[8]);
    sum_of_daily_deaths_week.push(cols[9]);
  });


  // Brasil dataset is different than the rest 
  date.pop();
  cases.pop();
  deaths.pop();
  daily_cases.pop();
  daily_deaths.pop();
  cases_moving_average.pop();
  deaths_moving_average.pop();
  sum_of_daily_cases_week.pop();
  sum_of_daily_deaths_week.pop();


  // date = await changeDateOrderArray(date);


  return {
    date,
    cases,
    daily_cases,
    deaths,
    daily_deaths,
    cases_moving_average,
    deaths_moving_average,
    sum_of_daily_cases_week,
    sum_of_daily_deaths_week
  };
}

function change2Dot(nStr) {
  nStr += '';
  let x = nStr.split('.');
  let x1 = x[0];
  let x2 = x.length > 1 ? '.' + x[1] : '';
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + '.' + '$2');
  }
  return x1 + x2;
}


function changeSymbol(value) {
  return value.replace(".", ',');

}
