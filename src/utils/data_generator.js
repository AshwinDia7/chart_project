var req_num = 0;
var time_arr = [];

function getRandomDateArray(numItems) {
  // Create random array of objects (with date)
  let data = [];
  var temp = 1427221800000;
  let dayMs = 10;
  for (var i = 0; i < numItems; i++) {
    data.push({
      lay_length_value: Math.round(5 + 80 * Math.random()),
      line_speed_value: Math.round(5 + 50 * Math.random()),
    });
  }
  if (req_num === 0) {
    for (var j = 0; j < numItems; j++) {
      var temp_date = new Date(temp + j * dayMs)
      time_arr.push(temp_date)
    }
  }
  if (req_num > 1) {
    const present_arr = time_arr;
    var new_arr = present_arr.slice(10);
    var last_ele_time_ms = Date.parse(new_arr[new_arr.length - 1]);
    for (var k = 1; k <= 5; k++) {
      var nex_el = new Date(last_ele_time_ms + i * 10);
      new_arr.push(nex_el);
    }
    time_arr = new_arr;
  }
  if (req_num <= 3 && req_num >= 1) {
    ++req_num
  }
  return { time_arr, data }
}


export function getData() {
  const { time_arr, data } = getRandomDateArray(300);
  return {
    time_arr: time_arr,
    len_speed_data: data
  }
}