function getRandomArray(numItems) {
    // Create random array of objects
    let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let data = [];
    for(var i = 0; i < numItems; i++) {
      data.push({
        label: names[i],
        value: Math.round(20 + 80 * Math.random())
      });
    }
    return data;
  }
  
  function getRandomDateArray(numItems) {
    // Create random array of objects (with date)
    let data = [];
    let dayMs = 25;
    for(var i = 0; i < numItems; i++) {
      data.push({
        time: new Date(i * dayMs),
        value: Math.round(5 + 80 * Math.random())
      });
    }
    return data;
  }


export function getData() {
    let data = [];
  
    data.push({
      title: 'Visits',
      data: getRandomDateArray(150)
    });

    return data;
  }