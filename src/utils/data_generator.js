

export function getRandomArray(numItems) {
  // Create random array of objects (with date)
  let data = [];
  let dayMs = 10;
  var time_ms = Date.now();
  for (var i = 0; i < numItems; i++) {
    data.push({
      lay_length_value: Math.round(5 + 80 * Math.random()),
      line_speed_value: Math.round(5 + 50 * Math.random()),
      time: new Date(time_ms + i * dayMs)
    });
  }
  return data;
}


