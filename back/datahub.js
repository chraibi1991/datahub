const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
var fs = require('fs');
const cors = require('cors');

app.use(express.json());
app.use(cors())


const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = 'mongodb://morizonuser:dreifachwumms@82.165.247.81:27019/';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}
);

async function perimeterSearch2(lat , lng, dist) {
  console.log("hjhj"); 
  var markers = []; 
  const raum = client.db("raeumliche_analysen").collection("einrichtungen");
  var obj = await raum.aggregate([
    {
    $geoNear: {
    near: { type: "Point", coordinates: [Number(lat), Number(lng)] },
    distanceField: "distanz",
    maxDistance: Number(dist),
    spherical: true
    }
    }
    ]).toArray()

    obj.forEach(marker => {



    var marker =   {
        "type": "Feature",
        "geometry": marker.geometry,
        "properties": {
          "name": marker.Name,
          "typ": marker.Typ,
          "kategorie": marker.Kategorie,
          "heimatgemeinde": marker.Heimatgemeinde,
          "oeffnungszeiten": marker.Oeffnungszeiten,
        }
      }

      markers.push(marker)
    })

 
  var response = {
    "einrichtungen" : obj,
    "marker"        : markers,
    "radius"        : Number(dist),
    "center"        : { type: "Point", coordinates: [Number(lat), Number(lng)] }
   }
    return response; 
}

async function perimeterSearch(lat , lng, dist, type) {
  console.log("abc")
  const raum = client.db("raeumliche_analysen").collection("einrichtungen");
  var obj = await raum.aggregate([
    {
    $geoNear: {
    near: { type: "Point", coordinates: [Number(lat), Number(lng)] },
    distanceField: "distanz",
    maxDistance: Number(dist),
    query: {  "Typ": type, },
    spherical: true
    }
    }
    ]).toArray()
  return obj; 
}

async function getRaumData(typ) {
  console.log(typ); 
  const raum = client.db("raeumliche_analysen").collection("einrichtungen");
  var r = {"properties.Typ" : { "$in": typ } } 
  var obj = await raum.find(r).toArray();
  console.log(obj); 
  return obj; 
}


async function getSynthPopMeta(popName) {

  const raum = client.db("Synthetische_Bevoelkerungen_meta").collection("name_creationdate");
  var r = {"pop_name": popName}
  var obj = await raum.find(r).toArray();
  console.log(obj); 
  return obj; 
}

async function getNotfallEinrichtungen(object_key) {

  const raum = client.db("regionale_daseinsvorsorge").collection("notfall_infrastruktur3");
  var r = {}
  if(object_key) {
    r = {"Object_Key": object_key}
  }

  var obj = await raum.find(r).toArray();
  console.log(obj); 
  return obj; 
}


async function getEinrichtungenMeta(typ) {
  console.log(typ); 
  const raum = client.db("raeumliche_analysen").collection("einrichtungen_meta");
  var obj = await raum.find().toArray();
  console.log(obj); 
  return obj; 


}


async function getDataNew(requestedIndicators, Object_Keys) {
  const regio = client.db("regionalindikatoren").collection("data_tmp");

  console.log(requestedIndicators);
  console.log(Object_Keys); 
  var objList = [];
  Object_Keys.forEach(el =>
    objList.push(el.Object_Key)); 

  var r = { "Key": { "$in": requestedIndicators }, "Object_Key": { "$in": objList } } 
  console.log(r); 
  var result = await regio.find(r, { "_id": false } ).toArray();
  let unique = [...new Set(result)];

  var chartObjects = []; 


  requestedIndicators.forEach(
    indi => {
      var dataPerIndi = unique.filter(data => data.Key == indi);
      var datasets = []; 

      var chartObj = {
        tabellenKey: indi,
        
        data: {
          labels: [],
          datasets: []
        }
      }

      dataPerIndi.forEach(d => {
        var labelF; 

        Object_Keys.forEach(el => {

          if(el.Object_Key ==  d.Object_Key) {
            labelF = el.Object_Name; 

          }
        
        }

          
        )
       
        
        var label = labelF;

        console.log("label");
        console.log(label); 
        var data = []; 
        var labelX = []; 

        d.data.forEach(datapoint => {
          data.push(datapoint.Value); 
          labelX.push(datapoint.Time); 

        })
  
        chartObj.data.labels = labelX; 
        chartObj.data.datasets.push({
          label: label,
          data: data
        })

      }
      
      )

      chartObjects.push(chartObj); 


    }
  )
  

  console.log("chart"); 
  console.log(chartObjects); 


  return chartObjects; 


 
}


async function getChartData(requestedIndicator, Object_Keys) {

  const regio = client.db("regionalindikatoren").collection("regionalindikatoren_new");

  var r = { "Key": { "$in": requestedIndicator }, "Object_Key": { "$in": Object_Keys } } //return given indicators for given object keys
  console.log(r); 
  var data = await regio.find(r).toArray();

  console.log(data); 

  return data; //parseDataForChart(requestedIndicators, await regio.find(r).toArray());
}



async function transformData(dataObj, keys, indi, meta) {

  var labelKey = [];
  var data    = []; 
  var xLabels = [];
  var dataset = [];
  var dataLines = []; 



  var pointsInTime = dataObj[0].years; 
  //1. find biggest time array
  dataObj.forEach(el => {
    if(el.years.length > pointsInTime.length){
      pointsInTime = el.years;
    }
    labelKey.push({
      Object_Key: el.Object_Key,
      Label     : el.data[0].label
    })
  })

  data['labels'] = pointsInTime; 
  var maxValGen = -100000000;
  var minValGen = 100000000;

  pointsInTime.forEach(pit => {
    var dataLine = {x :  pit }
    dataObj.forEach(el => { 
      var pitIndex = el.years.indexOf(pit); 
      var value = null; 
      if(pitIndex > -1) {
        value = el.data[0].regionYearValues[pitIndex];      
        if(value > maxValGen) {
          maxValGen = value
        }
        if(value < minValGen) {
          minValGen = value
        }
      }

      if(!isNaN(value)){
      dataLine[el.Object_Key] = value;
      }
    })
 
    if(Object.keys(dataLine).length > 1) {
        dataLines.push(dataLine)
    } else{

      const index = pointsInTime.indexOf(dataLine.x);
      if(index > 0) {
      pointsInTime.splice(index , 1);}
    }
    })

    keys.forEach( key => {


      var foundKey = labelKey.filter(el => el.Object_Key == key);
      var label = key;
      if(foundKey.length > 0) {
        label = foundKey[0].Label;
      }
      var obj = {
        label: label,
        data: "data", // dataLines,
        parsing: {
          yAxisKey: key
        }}
        dataset.push(obj); 
    })

 var generalData = { 
  labels: pointsInTime,
  myData: dataLines,
  datasets: dataset,
  max: maxValGen,
  min: minValGen,
  maxTime: pointsInTime[pointsInTime.length - 1],
  minTime: pointsInTime[0]
}



var changerates = [];
var labels = []; 

//create prognoseChart
dataset = [];
var maxValProg = -100000000;
var minValProg = 100000000;


for(var i = 1; i < dataLines.length; i++) {
  var changerate = {}
  labelKey.forEach(el => { 
      var value = parseFloat( (( dataLines[i][el.Object_Key] / dataLines[i - 1][el.Object_Key] ) - 1));
      value = Number((value * 100).toFixed(2)); 
      changerate[el.Object_Key] = value 
      value = parseFloat(value); 
      if(value  > maxValProg) {
        maxValProg = value
      }
      
      if(value < minValProg) {
        minValProg = value
      }
}) 

 changerate.x = dataLines[i].x; 
 labels.push(changerate.x);
 changerates.push(changerate)

}

keys.forEach( key => {
  var foundKey = labelKey.filter(el => el.Object_Key == key);
  var label = key;
  if(foundKey.length > 0) {
    label = foundKey[0].Label;
  }
  var obj = {
    label: label,
    data: changerates,
    parsing: {
      yAxisKey: key
    }}
    dataset.push(obj); 
})

var changeData = {
  labels: labels,
  myData: changerates,
  datasets: dataset,
  max: maxValProg,
  min: minValProg, 
  maxTime: labels[labels.length - 1],
  minTime: labels[0]}

 labels = []; 
  var sumAll = {};

  var maxValAgg = -100000000;
  var minValAgg = 100000000;

 
  

  //aggregated data
  var testObj;
  var dataObj2 = []; 
 console.log(1000000); 
  console.log(dataObj)

  dataObj.forEach(el => {
    
    var label = el.data[0].label;
    var sum = 0; 
    var counter = 0;
    el.data[0].regionYearValues.forEach(d =>{
      if(!isNaN(d)) {
      sum = sum + d;
      counter++; 
      }
    })

    console.log(value)
  var value = (sum / counter ).toFixed(3); 
    sumAll[el.Object_Key] = value; 
    value = parseFloat(value); 
    //testObj.label = label;
    //testObj.data   = [ value ]; 
    //dataObj.push(testObj); 
    console.log("hahaha");
    console.log(value); 
    dataObj2.push({
      label : label,
      data : [ value ] 
    }); 


    if(value > maxValAgg) {
      maxValAgg= value
    }
    
    if(value < minValAgg) {
      minValAgg = value
    }

    labels.push(el.Object_Key);
  })



  var sumAll2 = 0;
  keys.forEach( key => {
    sumAll2 = sumAll2 + parseFloat(sumAll[key]);
  })


  sumAll["Overall Mean"] = ( sumAll2 / keys.length ).toFixed(3); 

//  testObj.label = "Overall Mean";
//  testObj.data   = [ parseFloat(( sumAll2 / keys.length ).toFixed(3)) ]; 
  dataObj2.push({
    label : "Overall Mean",
    data : [ parseFloat(( sumAll2 / keys.length ).toFixed(3)) ]
  }); 
  labels.push("Overall Mean");

  dataset = [];

  var bundeslandKey = keys[0].substring(0,2); // get Bundesland

  bundeslandData = await getChartData(indi, [bundeslandKey]); 
 

  labelKey.push({
    Object_Key: bundeslandKey,
    Label     : bundeslandData[0].data[0].label
  })



  bundeslandData.forEach(el => {
    var sum = 0; 
    var counter = 0;
    el.data[0].regionYearValues.forEach(d =>{
      if(!isNaN(d)) {
      sum = sum + d;
      counter++; 
      }
    })

    sumAll[bundeslandKey] = (sum / counter ).toFixed(3); 
   // testObj.label = bundeslandData[0].data[0].label;
   // testObj.data   = [ parseFloat((sum / counter ).toFixed(3)) ]; 
   // dataObj.push(testObj); 

    dataObj2.push({
      label : bundeslandData[0].data[0].label,
      data : [ parseFloat((sum / counter ).toFixed(3)) ]
    }); 


    if((sum / counter ) > maxValAgg) {
      maxValAgg= (sum / counter )
    }
    
    if((sum / counter ) < minValAgg) {
      minValAgg = (sum / counter )
    }



    labels.push(bundeslandKey);
    keys.push(bundeslandKey);
  })
 
  var labelAgg = []

  keys.forEach( key => {
    var foundKey = labelKey.filter(el => el.Object_Key == key);
    var label = key;
    if(foundKey.length > 0) {
      labelAgg.push(foundKey[0].Label)
      label = foundKey[0].Label;
    }

    sumAll['x'] = label;
 
    var obj = {
      label: label,
      data: sumAll,
      parsing: {
        yAxisKey: key
      }}

      
      dataset.push(obj); 
  })


  var obj = {
    label: "Overall Mean",
    data: sumAll,
    parsing: {
      yAxisKey: "Overall Mean"
    }}
    dataset.push(obj); 


 labelAgg.push("Overall Mean");
 


  var aggData = {
    labels: labels,
    datasets: dataset,
    max: maxValAgg,
    min: minValAgg } 


    var aggData = {
      labels: ['Mittelwerte'],
      datasets: dataObj2,
      max: maxValAgg,
      min: minValAgg,
      maxTime: pointsInTime[pointsInTime.length - 1],
  minTime: pointsInTime[0] }


var data = { 
  chartMeta      : meta,
  changeData     : changeData,
  generalData    : generalData,
  aggregatedData : aggData,
  timeData       : generalData,
}

  return data; 
  
}
async function getYearlyChange(requestedIndicator, Object_Key, admin_level, minYear, maxYear, minValue, maxValue, focusedKey, filteredKeys) {
  
  var maxChartValue = -1000000;
  var minChartValue = 1000000; 
  var foundMeta = {};
  var colorPalette = ['#000000', '#696969', '#8b4513', '#2e8b57', '#808000', '#000080', '#b03060', '#ffa500', '#7cfc00',
  '#deb887', '#ba55d3', '#00ffff', '#0000ff', '#ff00ff', '#1e90ff', '#ffff54', '#dda0dd', '#98fb98', '#87cefa' ]
  var red = '#ff0000';
  var datasets = []; 

  var activeRegions = []

  const regio = client.db("regionalindikatoren").collection("regionalindikatoren_new");
  var search = "^" + Object_Key;
  var re = new RegExp(search);
  var r = { "Key": requestedIndicator, "Object_Key": { "$regex": re }, "admin_level": admin_level };
  var results = await regio.find(r).toArray();
  var colorCounter = 0; 

  if(results.length == 0) {
    return []; 
  }

  var yearsLabels;
  var maxChartValue = -1000000;
  var minChartValue = 10000000;
  var maxChartTime = 0;
  var minChartTime = 0;

  results?.forEach( res => {
    yearsLabels = res.years.splice(1, res.years.length - 1);
    minChartTime = yearsLabels[0]
    maxChartTime = yearsLabels[yearsLabels.length - 1]

    var obj_key = res.Object_Key
    var label = res.data[0].label;
   // console.log("label", label); 
    var yearlyChangeRate  = [];

    for(var i = 0; i < res.data[0].regionYearValues.length - 1; i++) {
     var zahler =   res.data[0].regionYearValues[i + 1] - res.data[0].regionYearValues[i];
     var nenner =   res.data[0].regionYearValues[i];
     if(nenner != 0 && !isNaN(nenner)) {
     var result = Number(((( zahler / nenner  )) * 100 ).toFixed(2));
     if(result > maxChartValue) {
      maxChartValue = result

     }
     if(result < minChartValue) {
      minChartValue = result
     }


     } else {
      result = undefined; 
     }
     yearlyChangeRate.push(result); 
    }

    var borderWidth = 1; 
    
    if(obj_key == focusedKey) {
      var color = red; 
      borderWidth = 3;
      colorCounter++; 
      
    } else {
      color = colorPalette[colorCounter]; 
    }
    colorCounter++; 

    datasets.push({
      label: label,
      Object_Key: obj_key, 
      backgroundColor: color,
      borderColor: color,
    
      pointBackgroundColor:  color,
      pointBorderColor: color,
      data: yearlyChangeRate,
      borderWidth: borderWidth
  })    
  })

  //FILTERING
  var minIndex = yearsLabels.indexOf(minYear)
  var maxIndex = yearsLabels.indexOf(maxYear)

  if(minIndex == -1) {
    minIndex = 0;
  }

  if(maxIndex == -1) {
    maxIndex = yearsLabels.length - 1 ;
  }

  console.log("in", minIndex, maxIndex, yearsLabels.length); 


  datasets.forEach(d => {

    console.log("B", d.data)

    d.data = d.data.slice(minIndex, maxIndex + 1);
    console.log("A", d.data)

    for(var i = 0; i < d.data.length; i++) {

      //value
      if(minValue >= d.data[i]) {
        d.data[i] = undefined;
      }
      if(maxValue < d.data[i]) {
        d.data[i] = undefined;
      }
  
    }
    

  })
  var minChartValueTemp  = 100000000;
  var maxChartValueTemp  = -10000000;

  datasets.forEach(d => {

    var val = d.data[ d.data.length-1];
    if(val < minChartValueTemp) {
      minChartValueTemp = val
    }

    if(val > maxChartValueTemp) {
      maxChartValueTemp = val
    }

   
    

  })




  console.log("haha")
  console.log(filteredKeys)
  console.log(datasets)


  datasets.forEach(d => {

    activeRegions.push({
      label: d.label,
      Object_Key: d.Object_Key,
      backgroundColor: d.backgroundColor,
      disabled: filteredKeys.indexOf(d.Object_Key) != -1
      
    })
  })

  datasets = datasets.filter(el => (filteredKeys.indexOf(el.Object_Key) == -1)); 


  foundMeta.minChartValue = minChartValue;
  foundMeta.maxChartValue = maxChartValue;
  foundMeta.minChartYear  = minChartTime;
  foundMeta.maxChartYear  = maxChartTime;
  foundMeta.regions       = activeRegions; 

  //color shapefiles

  var colorArray = [ '#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51', 'black']

  var clusterArray = [];
  clusterArray[0] = minChartValueTemp;
  clusterArray[colorArray.length - 1] = maxChartValueTemp;
 
     
  for (var i = 1; i < colorArray.length - 1; i++) {
       clusterArray[i] = minChartValueTemp + (Math.abs(maxChartValueTemp - minChartValueTemp) / colorArray.length) * i;
     }
 
 

 
  var keys = []
 
  for(var i = 0; i < datasets.length; i++) {
   keys.push(datasets[i].Object_Key)
  }
 
  var shapefiles = await getShapeFileByIds(keys);

  shapefiles.forEach(shape => {

    var dataKey = datasets.filter(d => d.Object_Key == shape.Object_Key)
    var d       = dataKey[0].data[dataKey[0].data.length - 1]
    console.log(d); 
    shape.value = d; 
    for(var i = 1; i < clusterArray.length; i++) {
      if(clusterArray[i-1] <= d && d <= clusterArray[i] ) {
      shape.color =  colorArray[i-1];
    
      }
    }
  
  
  
  
   })
  



  return  {
    chart: {
    chartMeta: foundMeta,
    chartData: {
    labels: yearsLabels.slice(minIndex, maxIndex + 1),
    datasets: datasets }
    },



    shapefiles: {
      meta: { 
        breaks: clusterArray,
        colors: colorArray }, 
      data: shapefiles
    } 
  }

 
}


async function getChangeRateChart(requestedIndicator, Object_Key, admin_level, minYear, maxYear, minValue, maxValue, focusedKey, filteredKeys) {
  console.log(minYear, maxYear, minValue, maxValue); 
  var maxChartValue = -1000000;
  var minChartValue = 1000000; 
  var foundMeta = {};
  var colorPalette = ['#000000', '#696969', '#8b4513', '#2e8b57', '#808000', '#000080', '#b03060', '#ffa500', '#7cfc00',
  '#deb887', '#ba55d3', '#00ffff', '#0000ff', '#ff00ff', '#1e90ff', '#ffff54', '#dda0dd', '#98fb98', '#87cefa' ]
  var red = '#ff0000'
  var activeRegions = [];

  const regio = client.db("regionalindikatoren").collection("regionalindikatoren_new");
  var search = "^" + Object_Key;
  var re = new RegExp(search);
  var r = { "Key": requestedIndicator, "Object_Key": { "$regex": re }, "admin_level": admin_level };
  var results = await regio.find(r).toArray();

  if(results.length == 0) {
    return []; 
  }
  var minTimeOverAll = 100000;
  var maxTimeOverAll = 0;
  var minValueOverAll = 100000;
  var maxValueOverAll = -100000;

  var myLabels = []; 

  var datasets = []
  var colorCounter = 0; 

  var startTime = minYear;
  var endTime = maxYear; 

  if(results[0].years.indexOf(startTime) == -1) {
    var startIndex = 0
  } else {
    startIndex = results[0].years.indexOf(startTime);
  }

  if(results[0].years.indexOf(endTime) == -1) {
    var endIndex = results[0].years.length - 1; 
  } else {
    endIndex = results[0].years.indexOf(endTime);
  }
 
 

  results?.forEach( res => {
   console.log(filteredKeys)
   var label        = res.data[0].label;

      myLabels.push(label); 
      var obj_key      = res.Object_Key;

   var color = colorPalette[colorCounter]; 
   if(obj_key == focusedKey) {
     color = red; 
     colorCounter++; 
     
    
   }
   colorCounter++; 

    if(filteredKeys.indexOf(res.Object_Key ) == -1){

      var filteredData = [];
      
      var startValue   = res.data[0].regionYearValues[startIndex];
      var endValue     = res.data[0].regionYearValues[endIndex];
      var change       = ((endValue  - startValue) / startValue );
      change = Number((change * 100).toFixed(3));

      if(change < minValueOverAll) {
        minValueOverAll = change;
      }
      if(change > maxValueOverAll) {
        maxValueOverAll = change;
      }

      console.log("HH", startValue, endValue, change)



      filteredData.push(change)
      activeRegions.push({
        label: label,
        Object_Key: obj_key, 
        backgroundColor: color,
        disabled: false
  
      })
     

    datasets.push({
      label: label,
      Object_Key: obj_key, 
      backgroundColor: color,
      borderColor: color,
  
      pointBackgroundColor:  color,
      pointBorderColor: color,
      data: filteredData
  })

}  else {
  activeRegions.push({
    label: label,
    Object_Key: obj_key, 
    backgroundColor: color,
    disabled: true

  })
 

}

  } )

foundMeta.regions        = activeRegions; 

 foundMeta.minChartValue = minValueOverAll;
 foundMeta.maxChartValue = maxValueOverAll;
 foundMeta.minChartYear  = results[0].years[0];
 foundMeta.maxChartYear  = results[0].years[results[0].years.length - 1];

 var colorArray = [ '#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51', 'black']

 var clusterArray = [];
 clusterArray[0] = minValueOverAll;
 clusterArray[colorArray.length - 1] = maxValueOverAll;

    
 for (var i = 1; i < colorArray.length - 1; i++) {
      clusterArray[i] = minValueOverAll + (Math.abs(maxValueOverAll - minValueOverAll) / colorArray.length) * i;
    }


console.log(clusterArray)

 var keys = []

 for(var i = 0; i < datasets.length; i++) {
  keys.push(datasets[i].Object_Key)
 }

 var shapefiles = await getShapeFileByIds(keys);



 

 shapefiles.forEach(shape => {

  var dataKey = datasets.filter(d => d.Object_Key == shape.Object_Key)
  var d       = dataKey[0].data[dataKey[0].data.length - 1]
  console.log(d); 
  shape.value = d; 
  for(var i = 1; i < clusterArray.length; i++) {
    if(clusterArray[i-1] <= d && d <= clusterArray[i] ) {
    shape.color =  colorArray[i-1];
  
    }
  }




 })




  return  {
    chart: {
    chartMeta: foundMeta,
    chartData: {
    labels: ["Veränderung zwischen " + results[0].years[startIndex] + " und " +  results[0].years[endIndex] ],
    datasets: datasets }
    },



    shapefiles: {
      meta: { 
        breaks: clusterArray,
        colors: colorArray }, 
      data: shapefiles
    }
  }
}



async function getDataForOneIndicator(requestedIndicator, Object_Key, admin_level, minYear, maxYear, minValue, maxValue, focusedKey, filteredKeys) {
  console.log(minYear, maxYear, minValue, maxValue); 
  var activeRegions = [];

  var maxChartValue = -1000000;
  var minChartValue = 1000000; 
  var foundMeta = {};
  var colorPalette = ['#000000', '#696969', '#8b4513', '#2e8b57', '#808000', '#000080', '#b03060', '#ffa500', '#7cfc00',
  '#deb887', '#ba55d3', '#00ffff', '#0000ff', '#ff00ff', '#1e90ff', '#ffff54', '#dda0dd', '#98fb98', '#87cefa' ]
  var red = '#ff0000'


  const regio = client.db("regionalindikatoren").collection("regionalindikatoren_new");
  var search = "^" + Object_Key;
  var re = new RegExp(search);
  var r = { "Key": requestedIndicator, "Object_Key": { "$regex": re }, "admin_level": admin_level };
  var results = await regio.find(r).toArray();

  if(results.length == 0) {
    return []; 
  }
  var minTimeOverAll = 100000;
  var maxTimeOverAll = 0;
  var minValueOverAll = 100000;
  var maxValueOverAll = -100000;

  results?.forEach( res => { 
    res.years.forEach(y => {
      if(y > maxTimeOverAll) {
        maxTimeOverAll = y;
      }
      if(y < minTimeOverAll) {
        minTimeOverAll = y;
      }

      res.data[0].regionYearValues.forEach(d => {
        if(d > maxValueOverAll) {
          maxValueOverAll = d;
        }
        if(d < minValueOverAll) {
          minValueOverAll = d;
        }


      })
    })



  })

  var yearsLabel = results[0].years.filter(y => y >= minYear && y <= maxYear);

  var datasets = []
  var colorCounter = 0; 
 



  results?.forEach( res => {
   console.log(filteredKeys)

  var label        = res.data[0].label;
  var obj_key      = res.Object_Key;
  var borderWidth = 1; 
  if(obj_key == focusedKey) {
    var color = red; 
    borderWidth = 5;
    colorCounter++; 
  } else {
    color = colorPalette[colorCounter]; 
  }
  colorCounter++; 


//filteredKeys.length == 0 ||
    if( filteredKeys.indexOf(res.Object_Key ) == -1){

    

      var filteredData = [];
     // var label        = res.data[0].label;
      //var obj_key      = res.Object_Key;
    for(var i = 0; i < res.years.length; i++) {
      //check time
      if(res.years[i] >= minYear && res.years[i] <= maxYear) {
        if(yearsLabel.indexOf(res.years[i]) == -1) {
          filteredData.push(undefined); 
        }
        
        
        //check value
        if(minValue <= res.data[0].regionYearValues[i] && res.data[0].regionYearValues[i]  <= maxValue) {
          filteredData.push(res.data[0].regionYearValues[i])
          if((i ==  res.years.length - 1) &&  res.data[0].regionYearValues[i] > maxChartValue) {
            maxChartValue = res.data[0].regionYearValues[i]
          }
          if( (i ==  res.years.length - 1) && res.data[0].regionYearValues[i] < minChartValue) {
            minChartValue = res.data[0].regionYearValues[i]; 
          }
        } else {
          filteredData.push(undefined)
        }


      }

  

    }

  

    activeRegions.push({
      label: label,
      Object_Key: obj_key, 
      backgroundColor: color,
      disabled: false

    })

    datasets.push({
      label: label,
      Object_Key: obj_key, 
      backgroundColor: color,
      borderColor: color,
      pointBackgroundColor:  color,
      pointBorderColor: color,
      borderWidth: borderWidth, 
      data: filteredData
  })

} else {
  activeRegions.push({
    label: label,
    Object_Key: obj_key, 
    backgroundColor: color,
    disabled: true

  })

}

  } )



 foundMeta.minChartValue = minValueOverAll;
 foundMeta.maxChartValue = maxValueOverAll 
 foundMeta.minChartYear  = minTimeOverAll;
 foundMeta.maxChartYear  = maxTimeOverAll;
 foundMeta.regions       = activeRegions;

 var colorArray = [ '#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51', 'black']

 var clusterArray = [];
 clusterArray[0] = minChartValue;
 clusterArray[colorArray.length - 1] = maxChartValue;

    
 for (var i = 1; i < colorArray.length - 1; i++) {
      clusterArray[i] = minChartValue + (Math.abs(maxChartValue - minChartValue) / colorArray.length) * i;
    }


console.log(clusterArray)

 var keys = []

 for(var i = 0; i < datasets.length; i++) {
  keys.push(datasets[i].Object_Key)
 }

 var shapefiles = await getShapeFileByIds(keys);



 

 shapefiles.forEach(shape => {

  var dataKey = datasets.filter(d => d.Object_Key == shape.Object_Key)
  var d       = dataKey[0].data[dataKey[0].data.length - 1]
  console.log(d); 
  shape.value = d; 
  for(var i = 1; i < clusterArray.length; i++) {
    if(clusterArray[i-1] <= d && d <= clusterArray[i] ) {
    shape.color =  colorArray[i-1];
  
    }
  }




 })




  return  {
    chart: {
    chartMeta: foundMeta,
    chartData: {
    labels: yearsLabel,
    datasets: datasets }
    },



    shapefiles: {
      meta: { 
        breaks: clusterArray,
        colors: colorArray }, 
      data: shapefiles
    }
  }
}


 // Helper-Algorithmus
 
 jenksMatrices = function(data, n_classes) {

  // in the original implementation, these matrices are referred to
  // as `LC` and `OP`
  //
  // * lower_class_limits (LC): optimal lower class limits
  // * variance_combinations (OP): optimal variance combinations for all classes
  var lower_class_limits = [],
      variance_combinations = [],
      // loop counters
      i, j,
      // the variance, as computed at each step in the calculation
      variance = 0;

  // Initialize and fill each matrix with zeroes
  for (i = 0; i < data.length + 1; i++) {
      var tmp1 = [], tmp2 = [];
      for (j = 0; j < n_classes + 1; j++) {
          tmp1.push(0);
          tmp2.push(0);
      }
      lower_class_limits.push(tmp1);
      variance_combinations.push(tmp2);
  }

  for (i = 1; i < n_classes + 1; i++) {
      lower_class_limits[1][i] = 1;
      variance_combinations[1][i] = 0;
      // in the original implementation, 9999999 is used but
      // since Javascript has `Infinity`, we use that.
      for (j = 2; j < data.length + 1; j++) {
          variance_combinations[j][i] = Infinity;
      }
  }

  for (var l = 2; l < data.length + 1; l++) {

      // `SZ` originally. this is the sum of the values seen thus
      // far when calculating variance.
      var sum = 0, 
          // `ZSQ` originally. the sum of squares of values seen
          // thus far
          sum_squares = 0,
          // `WT` originally. This is the number of 
          w = 0,
          // `IV` originally
          i4 = 0;

      // in several instances, you could say `Math.pow(x, 2)`
      // instead of `x * x`, but this is slower in some browsers
      // introduces an unnecessary concept.
      for (var m = 1; m < l + 1; m++) {

          // `III` originally
          var lower_class_limit = l - m + 1,
              val = data[lower_class_limit - 1];

          // here we're estimating variance for each potential classing
          // of the data, for each potential number of classes. `w`
          // is the number of data points considered so far.
          w++;

          // increase the current sum and sum-of-squares
          sum += val;
          sum_squares += val * val;

          // the variance at this point in the sequence is the difference
          // between the sum of squares and the total x 2, over the number
          // of samples.
          variance = sum_squares - (sum * sum) / w;

          i4 = lower_class_limit - 1;

          if (i4 !== 0) {
              for (j = 2; j < n_classes + 1; j++) {
                  if (variance_combinations[l][j] >=
                      (variance + variance_combinations[i4][j - 1])) {
                      lower_class_limits[l][j] = lower_class_limit;
                      variance_combinations[l][j] = variance +
                          variance_combinations[i4][j - 1];
                  }
              }
          }
      }

      lower_class_limits[l][1] = 1;
      variance_combinations[l][1] = variance;
  }

  return {
      lower_class_limits: lower_class_limits,
      variance_combinations: variance_combinations
  };
};

// Der Algorithmus

// # [Jenks natural breaks optimization](http://en.wikipedia.org/wiki/Jenks_natural_breaks_optimization)
// (https://github.com/simogeo/geostats/blob/master/lib/geostats.js#L407) (works)

jenks = function(data, n_classes) {

  // sort data in numerical order
  data = data.slice().sort(function (a, b) { return a - b; });

  // get our basic matrices
  var matrices = jenksMatrices(data, n_classes),
      // we only need lower class limits here
      lower_class_limits = matrices.lower_class_limits,
      k = data.length - 1,
      kclass = [],
      countNum = n_classes;

  // the calculation of classes will never include the upper and
  // lower bounds, so we need to explicitly set them
  kclass[n_classes] = data[data.length - 1];
  kclass[0] = data[0];

  // the lower_class_limits matrix is used as indexes into itself
  // here: the `k` variable is reused in each iteration.
  while (countNum > 1) {
      kclass[countNum - 1] = data[lower_class_limits[k][countNum] - 2];
      k = lower_class_limits[k][countNum] - 1;
      countNum--;
  }

  return kclass;
};

async function getData(requestedIndicators, Object_Keys) {
  obj_keys = [];
  const regio = client.db("regionalindikatoren").collection("data_tmp");

  Object_Keys.forEach(k => {
    k = createKeyFromLevel(k, 8);
    obj_keys.push(k);
  })
  var r = { "Key": { "$in": requestedIndicators }, "Object_Key": { "$in": obj_keys } } //return given indicators for given object keys

  if (requestedIndicators == []) {
    r = { "Object_Key": { "$in": obj_keys } } //return all indicators for given object keys
  }

  if (obj_keys == []) {
    r = { "Key": { "$in": requestedIndicators } } //return all object keys for given indicatos
  }

  if ((requestedIndicators == []) & (obj_keys == [])) {
    r = {}; // return all 
  }

  return await regio.find(r).toArray(); //parseDataForChart(requestedIndicators, await regio.find(r).toArray());
}



async function parseDataForChart(requestedIndicators, result_data) {
  cachedObjectKey = [];
  chartDataAll = [];


  for (element of requestedIndicators) {

    filtered = result_data.filter(el => el.Key == element);
    lines = [];
    listFiltered = [];
    addedObjKeys = [];
    for (da of filtered) {
      if (addedObjKeys.indexOf(da.Object_Key) == -1) { //we might have multiple data
  
        addedObjKeys.push(da.Object_Key);
        listFiltered.push(da);
        listTest = [];
        listLabels = [];

        for (dataPoint of da.data) {
          listLabels.push(dataPoint.Time);
          listTest.push({
            x: dataPoint.Time,
            y: dataPoint.Value
          })


        }

        var name = await getTextFromKey(da.Object_Key)
        this.lines.push({ data: listTest, label: name, Object_Key: da.Object_Key  })
        this.cachedObjectKey.push(da.Object_Key.substring(0, 9));



      }
    }

    this.chartDataAll.push({
      key: element,
      data: {
        labels: listLabels,
        datasets: this.lines
      }
    });

  }




  return chartDataAll;

}


async function getShapeFileSALandkreis() {
  const shapes = client.db("shapefiles_germany").collection("landkreise_SA_infos");
  var obj = await shapes.find().toArray();
  return obj;
}

async function getRegioDataByKeyAndLevel(keyArray, level){
  const regio = client.db("regionalindikatoren").collection("regionalindikatoren_new");
  var regexFromMyArray = new RegExp(keyArray.join("|"));
  //var r = { "Object_Key": { "$regex": regexFromMyArray }};

  var r =  { "Object_Key" : { "$in": keyArray}
            }


  var array =  await regio.find(r).toArray();

  return array; 

}


async function getRegioDataByKey(keyArray){
  const regio = client.db("regionalindikatoren").collection("regionalindikatoren_new");
  var regexFromMyArray = new RegExp(keyArray.join("|"));
  //var r = { "Object_Key": { "$regex": regexFromMyArray }};

  var r =  { "Object_Key" : { "$in": keyArray}}


  var array =  await regio.find(r).toArray();

  return array; 

}

async function getShapeFileByLevel(search, admin_level) {
  const shapes = client.db("shapefiles_germany").collection("admin_shapes");
  var level = Number(admin_level);


  if (!isNaN(level)) {
    search = "^" + search;
    var re = new RegExp(search);
    var r = { "Object_Key": { "$regex": re }, "admin_leve": level };
  } else {
    r = { "Object_Key": search };
  }


  var obj = await shapes.find(r).toArray();
  return obj;
}

async function getShapeFileByIds(requestedObject) {
  const shapes = client.db("shapefiles_germany").collection("admin_shapes");

  var r = { "Object_Key": { "$in": requestedObject } }

  return await shapes.find(r).toArray();
}
async function getDataKeyStartMulti(requestedIndicators, Object_Keys) {

  result_data = [];
  for (k = 0; k < Object_Keys.length; k++) {
    data = await getDataStartsWith(requestedIndicators, Object_Keys[k]);
    result_data.push(data);
  }

  var shapefiles = await getShapeFileByIds(Object_Keys);
  var obj = parseDataForChart(requestedIndicators, result_data[0]);



  return obj;

}




async function getDataStartsWith(requestedIndicators, Object_Key) {

  const regio = client.db("regionalindikatoren").collection("data_tmp");


  var re = new RegExp(Object_Key);

  // return given indicator data, that starts with object_key
  var r = { "Key": { "$in": requestedIndicators }, "Object_Key": { "$regex": re } }

  if (requestedIndicators == []) {
    r = { "Object_Key": { "$regex": re } } //return all data, that starts with Obj Key
  }

  return await regio.find(r).toArray();
}


async function hasData(Object_Key) {

  var data = getAllDataByObjKey([Object_Key]);
  if (data == []) {


    wvkData = data.filter(el => el.Source != "Inkar");
    if (wvkData = []) {
    
      getDataFromWVK(Object_Key);
    }

  }


}

async function getDataFromWVK(ars) {


  var resultData = [];

  var topicsIstDaten = "aus-und-weiterbildung+beschaeftigung-arbeitsmarkt+demografische-entwicklung+finanzen+integration+kinderbetreuung+nachhaltigkeit-sdgs+pendler-innen+pflege+schueler-innen-und-abschluesse+soziale-lage+anteile-der-altersgruppen+bevoelkerung-nach-altersgruppen-1+entwicklung-der-altersgruppen+altersstrukturgrafik-ist-daten"
  var topicsPrognoseDaten = "demografische-prognose+bevoelkerung-nach-altersgruppen-2+anteile-der-altersgruppen-1+entwicklung-der-altersgruppen-1+pflegebeduerftige+versorgung-der-pflegebeduerftigen+altersstrukturgrafik-prognose";
  var url = "https://www.wegweiser-kommune.de/data-api/rest/statistics/data/" + topicsIstDaten + '+' + ars;
  var url2 = "https://www.wegweiser-kommune.de/data-api/rest/statistics/data/" + topicsPrognoseDaten + '+' + ars;
  var data = await axios.get(url)
    .then(res => {
      return res.data;
    })
    .catch(err => { console.log('Error: ', err.message); });

  var data2 = await axios.get(url2)
    .then(res => {
      return res.data;
    })
    .catch(err => { console.log('Error: ', err.message); });



  data.data.indicators.forEach(indi => {

    var listData = [];
    for (var i = 0; i < indi.regionYearValues[0].length; i++) {
      var lObj =
      {
        "Value": indi.regionYearValues[0][i],
        "Time": data.years[i],
        "Schlussel": ars
      }
      listData.push(lObj);
    }

    var obj = {
      "Object_Key": createKeyFromLevel(ars, 8),
      "Tabellen_ID": indi.id,
      "Key": "WVK" + indi.id,
      "Source": "WVK",
      "data": listData
    };

    resultData.push(obj);

  })

  data2.data.indicators.forEach(indi => {

    var listData = [];
    for (var i = 0; i < indi.regionYearValues[0].length; i++) {
      var lObj =
      {
        "Value": indi.regionYearValues[0][i],
        "Time": data.years[i],
        "Schlussel": ars
      }
      listData.push(lObj);
    }

    var obj = {
      "Object_Key": createKeyFromLevel(ars, 8),
      "Tabellen_ID": indi.id,
      "Key": "WVK" + indi.id,
      "Source": "WVK",
      "data": listData
    };

    resultData.push(obj);

  })



  var json = JSON.stringify(resultData);
  return resultData;
  /*
    fs.writeFile("WVK.json", json, function (err) {
      if (err) throw err;
      console.log('complete');
    }
    );
  
  
  
    return json;*/



}
async function getTextFromKey(search) {

  result = [];

  search = createKeyFromLevel(search, 8);

  const metaKeys = client.db("shapefiles_administrative").collection("meta_data");
  
  var r = { Object_Key: search } //return given indicators for given object keys

  result = await metaKeys.find(r).sort("admin_level", -1).toArray();

  if (result.length > 0) {
    return result[0].Object_Name;
  }
  return search;



}
async function getKeyFromText(search, admin_level) {

  result = [];
  search = search.replaceAll('_', ' ');
  const metaKeys = client.db("shapefiles_administrative").collection("meta_data");

  var r = { Object_Name: search } //return given indicators for given object keys
  if (admin_level) {
    var r = { Object_Name: search, admin_level: admin_level }
  }
  result = await metaKeys.find(r).sort("admin_level", -1).toArray();

  if (result.length > 0) {
    return result[0].Object_Key;
  }

  search = search.replaceAll(' ', '_');

  
  await axios.get('https://www.wegweiser-kommune.de/data-api/rest/region/get/' + search)
    .then(res => {
      return res.data.ars;
    })
    .catch(err => { console.log('Error: ', err.message); });

}

function getLevelFromKey(search) {
  searchParts = search.split("_");
  searchParts[0] = searchParts[0].padEnd(12, '0') //padding

  if (searchParts[2] != '' & searchParts[2] != undefined & searchParts[2] != '*') {
    return 8;
  }
  if (searchParts[1] != '' & searchParts[1] != undefined & searchParts[1] != '00000000') {
    return 7;
  }
  if (searchParts[0].substring(9, 12) != '000') {
    return 6;
  }
  if (searchParts[0].substring(5, 9) != '0000') {
    return 5;
  }
  if (searchParts[0].substring(3, 5) != '00') {
    return 4;
  }
  if (searchParts[0].substring(3, 4) != '0') {
    return 3;
  }
  if (searchParts[0].substring(2, 3) != '0') {
    return 2;
  }
  if (searchParts[0].substring(0, 2) != '00') {
    return 1;
  }
  return 0;
}

async function getFertility(Object_Key) {

  const regio = client.db("pop_prognose").collection("fertil_rates_variants_from_2023");

  var r = { "Object_Key":  Object_Key  } //return given indicators for given object keys
  console.log(r); 
  var data = await regio.find(r).toArray();

  console.log(data); 

  return data; //parseDataForChart(requestedIndicators, await regio.find(r).toArray());
}

async function getMigration(Object_Key) {

  const regio = client.db("pop_prognose").collection("migration_data_age_classes_BLK");

  var r = { "Object_Key":  Object_Key  } //return given indicators for given object keys
  console.log(r); 
  var data = await regio.find(r).toArray();

  console.log(data); 

  return data; //parseDataForChart(requestedIndicators, await regio.find(r).toArray());
}


async function getDeathRate() {

  const regio = client.db("pop_prognose").collection("death_rates_from_2023");

  var r = { } 

  var data = await regio.find(r).toArray();

  console.log(data); 

  return data; 
}


function createKeyFromLevel(search, admin_level) {
  var ortsteil = '00000000';
  var ort = '*';
  var returnKey;


  search = search.padEnd(12, '0') //padding

  searchParts = search.split("_");
  if (searchParts.length > 1) {
    ortsteil = searchParts[1];

  }

  if (searchParts.length > 2) {
    ort = searchParts[2];
  }


  admin_level = Number(admin_level);
  switch (admin_level) {
    case 8: //Ort
      returnKey = searchParts[0] + '_' + ortsteil + '_' + ort;
      break;
    case 7: //Ortsteil
      returnKey = searchParts[0] + '_' + ortsteil
      break;
    case 6: //Gemeinde
      returnKey = searchParts[0].substring(0, 12);
      break;
    case 5: //Verband
      returnKey = searchParts[0].substring(0, 9);
      break;
    case 4: //Kreis
      returnKey = searchParts[0].substring(0, 5);
      break;
    case 3: // Region
      returnKey = searchParts[0].substring(0, 4);
      break;
    case 2: // Regierungsbezirk
      returnKey = searchParts[0].substring(0, 3);
      break;
    case 1: // Bundesland
      returnKey = searchParts[0].substring(0, 2);

      break;
    default:
      returnKey = search;

  }

  return returnKey;

}

main().catch(err => console.log(err));

async function main() {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");

  var array = await getShapeFileByIds(["hh"]);


}

app.get('/getPerimeter/:lat/:lng/:distance', async (req, res) => {
  

  res.json(await perimeterSearch2(req.params.lat, req.params.lng, req.params.distance)); } )


app.get('/getPerimeter/:lat/:lng/:distance/:type', async (req, res) => {

  res.json(await perimeterSearch(req.params.lat, req.params.lng, req.params.distance, req.params.type)) })

app.get('/getRaumData/:typ', async (req, res) => {
  res.json(await getRaumData(req.params.typ))
})

app.get('/getSynthMeta/:popName', async (req, res) => {
  res.json(await getSynthPopMeta(req.params.popName))
})

app.get('/getNotfallEinrichtungen/:objectKey', async (req, res) => {
  res.json(await getNotfallEinrichtungen(req.params.objectKey))
})

app.get('/getNotfallEinrichtungen/', async (req, res) => {
  res.json(await getNotfallEinrichtungen(undefined))
})

getNotfallEinrichtungen

app.post('/getRaumData/', async (req, res) => {

  res.json(await getRaumData(req.body.in))
})

app.post('/getYearlyChange/', async (req, res) => {

  var rawData = await getYearlyChange(req.body.tableKey, req.body.objectKey,req.body.admin_level, req.body.minTime, req.body.maxTime, req.body.minValue, req.body.maxValue, req.body.focusedKey, req.body.filterKeys)

  res.json(rawData)
})


app.post('/getChangeRateChart/', async (req, res) => {

  var rawData = await getChangeRateChart(req.body.tableKey, req.body.objectKey,req.body.admin_level, req.body.minTime, req.body.maxTime, req.body.minValue, req.body.maxValue, req.body.focusedKey, req.body.filterKeys)

  res.json(rawData)
})
app.post('/getGeneralChartData/', async (req, res) => {

  var rawData = await getDataForOneIndicator(req.body.tableKey, req.body.objectKey,req.body.admin_level, req.body.minTime, req.body.maxTime, req.body.minValue, req.body.maxValue, req.body.focusedKey, req.body.filterKeys)

  res.json(rawData)
})

app.get('/buildKeyByLevel/:search/:level', async (req, res) => {

  res.json(createKeyFromLevel(req.params.search, req.params.level));

})

app.get('/getLevelFromKey/:key', async (req, res) => {
  res.send(getLevelFromKey(req.params.key))
})


app.get('/getKeyFromText/:search/:level', async (req, res) => {
  resjson = await getKeyFromText(req.params.search, req.params.level);
  res.send(resjson)
})

app.get('/getKeyFromText/:search', async (req, res) => {
  resjson = await getKeyFromText(req.params.search);
  res.send(resjson)
})
app.get('/getShapeFileByLevel/:search/:level', async (req, res) => {

  resjson = await getShapeFileByLevel(req.params.search, req.params.level)
  res.send(resjson)
})

app.get('/getShapeFileByLevel/:search', async (req, res) => {
  resjson = await getShapeFileByLevel(req.params.search, undefined)
  res.send(resjson)
})



app.post('/getTextFromKey/:search', async (req, res) => {
  resjson = await getTextFromKey(req.params.search);
  res.send(resjson)
})






app.post('/getDataByIndAndKeyStart', async (req, res) => {

  var listID = [];
  var obj_keys = req.body.Object_Key;
  resjson = await getDataKeyStartMulti(req.body.indicators, obj_keys);
  res.json(resjson)

})


app.post('/getDataByIndAndKeyNew', async (req, res) => {
  //res.set('Access-Control-Allow-Origin', 'http://localhost:4200');

  var obj_keys  = req.body.obj_keys;
  var indi_keys = req.body.indi_keys;

  resjson = await getDataNew(indi_keys , obj_keys);





  res.json(resjson)
})




app.post('/getRegioDataByKey', async (req, res) => {
  //res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  var obj_keys = req.body.Object_Key;
 
  resjson = await getRegioDataByKey(obj_keys);
  res.json(resjson)
})


app.post('/getDataByIndAndKeys', async (req, res) => {
  //res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  var obj_keys = req.body.Object_Key;
  var listID = [];
  var indiData = await getChartData(req.body.indicators, obj_keys); 

  var resjson = await transformData(indiData, obj_keys, req.body.indicators); 

  res.json(resjson)
})


app.post('/getChartDataByIndAndKeys', async (req, res) => {
  //res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  var obj_keys = req.body.Object_Key;
  var listID = [];
  var indiData = await getChartData(req.body.indicators, obj_keys); 


  const regio = client.db("regionalindikatoren").collection("meta_new")
  const regioMeta = regio.find();
  metaChart = await regioMeta.toArray();

 
  var foundMetafoundMeta;
  metaChart.forEach(m =>{
    m.data.forEach(md => {
      if( (md.Source + md.Tabellen_ID) == req.body.indicators[0]) {
        console.log("found"); 
        foundMeta = md; 
        
      }



    })
  })
 
  

  var resjson = await transformData(indiData, obj_keys, req.body.indicators, foundMeta); 

  res.json(resjson)
})



app.get('/getIndicatorMeta', async (req, res) => {

  const regio = client.db("regionalindikatoren").collection("meta_new")
  const regioMeta = regio.find();

  resjson = await regioMeta.toArray();
  console.log(resjson)
  res.json(resjson)
})






app.get('/getEinrichtungenMeta', async (req, res) => {
 
  resjson = await getEinrichtungenMeta()
  res.json(resjson)
})

app.get('/getShapeFileSALandkreis', async (req, res) => {
 
  resjson = await getShapeFileSALandkreis()
  res.json(resjson)
})

app.get('/getMigration/:object_key', async (req, res) => {
  res.json(await getMigration(req.params.object_key)) })

app.get('/getFertility/:object_key', async (req, res) => {
  res.json(await getFertility(req.params.object_key)) })




app.get('/getDeathRate', async (req, res) => {
  res.json(await getDeathRate()) })

app.get('/', async (req, res) => {


  //Test stuff 
  const db = client.db("andy_test");
  const shapefile = db.collection("test_alex")
  const result = shapefile.find();



  resjson = await result.toArray()
  res.json(resjson)
})

app.listen(port, () => {
  console.log(`Datahub listening on port ${port}`)
})