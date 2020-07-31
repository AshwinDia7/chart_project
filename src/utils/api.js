//const fetch = require('node-fetch');
import axios from 'axios';

export  async function getAPIData(){
    var lay_length_arr = [];
    var line_speed_arr  = [];
    var time_arr = [];
    var temp_ms = 1427221800000;
    let dayMs = 10;
    const data = {
        method: 'GET',
        mode: 'no-cors',
        credentials: 'omit',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        }
    }
 //   axios
 //   .get("http://localhost/web/meas/trend00000000,00000000")
 //   .then(res => {
 //     console.log("some response", res);
 //   });
//}
    axios.get("http://localhost/web/meas/trend00000000,00000000")
    .then(res_json => {
    //.then(res_json => {
        for (var dataobj of res_json.data){
         //   console.log(dataobj);
            lay_length_arr.push(dataobj['Len']/1000);
            line_speed_arr.push(dataobj['Vel']/1000);
        }
      for (var i=0; i<lay_length_arr.length; i++){
          var new_date_ms = new Date(temp_ms + i*dayMs);
          time_arr.push(new_date_ms)
      }
      const temp_obj = {
          lay_length_arr : lay_length_arr,
          line_speed_arr : line_speed_arr,
          time_arr : time_arr
      }
      console.log('Tem Object',temp_obj)
      return temp_obj
    })
    .catch(error => console.log(error))
}    