import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { GlobalVariable } from '../../../../global';

@Component({
  selector: 'app-datahubservice',
  templateUrl: './datahubservice.component.html',
  styleUrls: ['./datahubservice.component.css']
})
export class DatahubService {
  async postPrognose(prognoseObj: any) {
   
    var url = 'https://api5.cephlabs.de/projection/project_pop';
  
  
    var result = await firstValueFrom(this.http.post(url, prognoseObj)); 
    return result;
  }

  async getMigChartPrognose(prognoseObj: any) {
   
    var url = 'https://api4.cephlabs.de/pop_parameter_helper/get_aggregated_migration_chart';
  
  
    var result = await firstValueFrom(this.http.post(url, prognoseObj)); 
    return result;
  }




  async getPrognoseStats() {
   
    var url = 'https://api4.cephlabs.de/projected_pop_stats/get_initial_pop_stats';
  
  
    var result = await firstValueFrom(this.http.get(url)); 
    return result;
  }

  

  private baseApiUrl = GlobalVariable.DATAHUB_URL;

  async getRaumData(place: string[]) {
   

    var url = this.baseApiUrl + '/getRaumData';
    var body = {
      "in": place,
  }
  
    var result = await firstValueFrom(this.http.post(url, body)); 
    return result;
  }

  async getMigration(obj_key: string) {

  var url = this.baseApiUrl + '/getMigration/' + obj_key;
 
  
  var result = await firstValueFrom(this.http.get(url)); 
  return result;

  }


  async getInitialNotfalleinrichtung(obj_key: string){


    var url =  this.baseApiUrl + '/getNotfallEinrichtungen/' + obj_key;
    var res = await firstValueFrom(this.http.get(url));
    return res; 
   
  }

  async getNotfalleinrichtungAll(){


    var url =  this.baseApiUrl + '/getNotfallEinrichtungen/'; 
    var res = await firstValueFrom(this.http.get(url));
    return res; 
   
  }

  async getPopMeta(popname: string) {

    var url = this.baseApiUrl + '/getSynthMeta/' + popname;
   
    
    var result = await firstValueFrom(this.http.get(url)); 
    return result;
  
    }


  async getFertility(obj_key: string) {


   var mockJson =  [
      {
          "_id": "650193540382cf8103076ac1",
          "Object_Key": "15084",
          "Variante": "Anstieg",
          "data": [
              {
                  "Jahr": 2023,
                  "Fertilitätsrate": 1.678
              },
              {
                  "Jahr": 2024,
                  "Fertilitätsrate": 1.7075
              },
              {
                  "Jahr": 2025,
                  "Fertilitätsrate": 1.737
              },
              {
                  "Jahr": 2026,
                  "Fertilitätsrate": 1.769
              },
              {
                  "Jahr": 2027,
                  "Fertilitätsrate": 1.801
              },
              {
                  "Jahr": 2028,
                  "Fertilitätsrate": 1.833
              },
              {
                  "Jahr": 2029,
                  "Fertilitätsrate": 1.865
              },
              {
                  "Jahr": 2030,
                  "Fertilitätsrate": 1.897
              },
              {
                  "Jahr": 2031,
                  "Fertilitätsrate": 1.881
              },
              {
                  "Jahr": 2032,
                  "Fertilitätsrate": 1.873
              },
              {
                  "Jahr": 2033,
                  "Fertilitätsrate": 1.86532
              },
              {
                  "Jahr": 2034,
                  "Fertilitätsrate": 1.8618
              },
              {
                  "Jahr": 2035,
                  "Fertilitätsrate": 1.897
              }
          ]
      },
      {
          "_id": "650193540382cf8103076ac2",
          "Object_Key": "15084",
          "Variante": "Kontinuität",
          "data": [
              {
                  "Jahr": 2023,
                  "Fertilitätsrate": 1.678
              },
              {
                  "Jahr": 2024,
                  "Fertilitätsrate": 1.7075
              },
              {
                  "Jahr": 2025,
                  "Fertilitätsrate": 1.737
              },
              {
                  "Jahr": 2026,
                  "Fertilitätsrate": 1.7356
              },
              {
                  "Jahr": 2027,
                  "Fertilitätsrate": 1.7342
              },
              {
                  "Jahr": 2028,
                  "Fertilitätsrate": 1.7328
              },
              {
                  "Jahr": 2029,
                  "Fertilitätsrate": 1.7314
              },
              {
                  "Jahr": 2030,
                  "Fertilitätsrate": 1.73
              },
              {
                  "Jahr": 2031,
                  "Fertilitätsrate": 1.7286
              },
              {
                  "Jahr": 2032,
                  "Fertilitätsrate": 1.7272
              },
              {
                  "Jahr": 2033,
                  "Fertilitätsrate": 1.7258
              },
              {
                  "Jahr": 2034,
                  "Fertilitätsrate": 1.7244
              },
              {
                  "Jahr": 2035,
                  "Fertilitätsrate": 1.723
              }
          ]
      },
      {
          "_id": "650193540382cf8103076ac3",
          "Object_Key": "15084",
          "Variante": "Rückgang",
          "data": [
              {
                  "Jahr": 2023,
                  "Fertilitätsrate": 1.678
              },
              {
                  "Jahr": 2024,
                  "Fertilitätsrate": 1.7075
              },
              {
                  "Jahr": 2025,
                  "Fertilitätsrate": 1.737
              },
              {
                  "Jahr": 2026,
                  "Fertilitätsrate": 1.719
              },
              {
                  "Jahr": 2027,
                  "Fertilitätsrate": 1.701
              },
              {
                  "Jahr": 2028,
                  "Fertilitätsrate": 1.683
              },
              {
                  "Jahr": 2029,
                  "Fertilitätsrate": 1.665
              },
              {
                  "Jahr": 2030,
                  "Fertilitätsrate": 1.647
              },
              {
                  "Jahr": 2031,
                  "Fertilitätsrate": 1.629
              },
              {
                  "Jahr": 2032,
                  "Fertilitätsrate": 1.611
              },
              {
                  "Jahr": 2033,
                  "Fertilitätsrate": 1.593
              },
              {
                  "Jahr": 2034,
                  "Fertilitätsrate": 1.575
              },
              {
                  "Jahr": 2035,
                  "Fertilitätsrate": 1.557
              }
          ]
      }
  ]
 
return mockJson; 
    var url = this.baseApiUrl + '/getFertility/' + obj_key;
 
  
    var result = await firstValueFrom(this.http.get(url)); 
    return result;
  }


  async getDeathRate() {
    var url = this.baseApiUrl + '/getDeathRate/' ;
  
    var result = await firstValueFrom(this.http.get(url)); 
    return result;
  }

  async getDeathRateNew() {
    var url = 'https://api4.cephlabs.de/pop_parameter_helper/get_death_prob_chart_table' ;
  
    var result = await firstValueFrom(this.http.get(url)); 
    return result;
  }



  

  


  async getUmkreissuche(req : any) {
    var einrichtungString = '';

    req.einrichtung.forEach((einrichtung: string) => {
      einrichtungString = einrichtungString + "&gesuchter_typ=" + einrichtung + "&";       
    });




    var url = "https://api.cephlabs.de/get_umkreis_einrichtungen_distance?coordinates=" + req.position.lng +
   "&coordinates=" + req.position.lat  + "&max_distance="+ req.radius_meter + einrichtungString + "only_burgenlandkreis=" + req.within_flg; 

   console.log(url); 

   // url = this.baseApiUrl + '/getPerimeter/' + req.position.lng + '/' + req.position.lat +'/5000';
   


   // url = "https://api.cephlabs.de/get_umkreis_einrichtungen_distance?coordinates=12.1179&coordinates=51.0733&max_distance=5000&gesuchter_typ=Supermarkt&gesuchter_typ=Kindertagesstaette&only_burgenlandkreis=true"
    var result = await firstValueFrom(this.http.get(url)); 
    return result;
  }

  
  async getEinrichtungenMeta() {
    var url = this.baseApiUrl + '/getEinrichtungenMeta';  
    console.log("URL");
    console.log(url); 
    var result = await firstValueFrom(this.http.get(url)); 

    return result;
  }

  async getShapefileByIdAndLevel(place: string, selected: number) {
    var results = [];
    place = this.createShortenedKeyFromLevel(place, selected);



    var url = this.baseApiUrl + '/getShapeFileByLevel/' + place + '/' + selected; 
  
    try{

    var result = await firstValueFrom(this.http.get(url)); }
    catch(error) {
      return[]; 
    }
    results.push(result); 
    return results;
  }

  constructor(private http: HttpClient) {

  }
 
  async getDataByIndicatorStart(indicators: string[], obj_keys: string[], level: number) : Promise<any>{
    var searchObjKey = obj_keys[0];

    var url = this.baseApiUrl + '/buildKeyByLevel/' + obj_keys[0] + '/' + level; 
    console.log("hall");
   
    
    var adjKey = await firstValueFrom( this.http.get(url) ); 
    console.log(adjKey);
    

    var url = this.baseApiUrl + '/getDataByIndAndKeyStart';
    var body = {
      "Object_Key": [adjKey],
      "indicators": indicators
  }
  
    var result = await firstValueFrom(this.http.post(url, body)); 
    return result;
      
    
  
    }

    async getChartDataByIndAndkeys(indicators: string[], obj_keys: string[]) : Promise<any>{

      

      var url = this.baseApiUrl + '/getChartDataByIndAndKeys';
      var body = {
        "Object_Key": obj_keys,
        "indicators": indicators
    }
    console.warn("APPPI"); 
    console.log(url); 
    console.log(body);
    
      var result = await firstValueFrom(this.http.post(url, body)); 
      return result;
        
      
    
      }
  
  async getDataByIndicator(indicators: string[], obj_keys: string[]) : Promise<any>{

  var url = this.baseApiUrl + '/getDataByIndAndKeys';
  var body = {
    "Object_Key": obj_keys,
    "indicators": indicators
}
console.log("hello"); 
console.log(url); 

  var result = await firstValueFrom(this.http.post(url, body)); 
  return result;
    
  

  }

  aggregateValues(list: number[]) {

    var counter = 0;
    var sum = 0;
    var max = 0;
    var min = 10000000000;
  


    list.forEach(element => {
      if(element != undefined) {
        counter++;
        sum = sum + element; 

        if(element > max){
          max = element; 
        }
        if(element < min){
          min = element; 
        }
      }
    });

    var obj = 
    {  
      "values" : [max, min, Math.round((sum/counter)*100)/100],
      "labels" : [ "Maximum", "Minimum", "Mittelwert"]
    }

    return obj; 


    
    
  }
   classifyArray(array: any[], numQuantiles: number) {
    // sort the array in ascending order
    array.sort(function(a, b) {
      return a - b;
    });
  
    // divide the array into numQuantiles quantiles
    var quantileSize = Math.floor(array.length / numQuantiles);
    var quantiles = [];
    for (var i = 0; i < numQuantiles - 1; i++) {
      quantiles.push(array[(i + 1) * quantileSize - 1]);
    }
    quantiles.push(array[array.length - 1]);

    console.log(quantiles); 

    

  
    // classify the array values based on the quantiles
    var classifiedArray = [];
    for (var i = 0; i < array.length; i++) {
      var value = array[i];
      var classIndex = 0;
      for (var j = 0; j < quantiles.length; j++) {
        if (value <= quantiles[j]) {
          classIndex = j;
          break;
        }
      }
      classifiedArray.push(classIndex);
    }
    return { quantiles: quantiles,
            class:  classifiedArray}; 
  }



  createChangeChart(chartTmp: any, min: number, max: number) {

    var chart = JSON.parse(JSON.stringify(chartTmp));
    console.log("change"); 
    console.log(chartTmp); 
    console.log(chart); 
    var values: any[] = []; 
    var labels: any[] = []; 

    chart.data.datasets.forEach((element: any) => {
      console.log(min);
      console.log(max); 
      var firstVal = element.data.filter((el: { x: number; }) => el.x == min)[0];
      var secondVal = element.data.filter((el: { x: number; }) => el.x == max)[0];
      console.log(firstVal); 
      console.log(secondVal); 
      console.log(secondVal.y - firstVal.y)
      var val = (( secondVal.y - firstVal.y ) /  firstVal.y ); 
      console.log(val); 
      values.push( {
        x: element.Object_Key,
        y: val
      }) 
 
      labels.push(element.Object_Key)



    }); 

    console.log(values)

    chart.data.datasets[0] = values; 
    chart.data.labels = labels; 

    return chart;  

  }


  createAggChart(layerKey : any, aggregated: any) {

    console.log(aggregated); 

    var aggVals =  aggregated.data.datasets.filter((d: { Object_Key: any; }) =>   this.createShortenedKeyFromLevel(d.Object_Key,4) != layerKey );
    var tarVals =  aggregated.data.datasets.filter((d: { Object_Key: any; }) =>  this.createShortenedKeyFromLevel(d.Object_Key,4) == layerKey );

    console.log(aggVals)
    var avg :number  = 0, min :number = 0, max  :number= 0; 

    aggVals.forEach((element: any) => {
      max = max + element.data[0].y; 
      min = min + element.data[1].y; 
      avg = avg + element.data[2].y; 
    });

    console.log(max); 
    console.log(aggVals.length)
    console.log(max/aggVals.length)

    tarVals.push({
      Object_Key: "*",
      data: [
        {x: 'Maximum', y: min / aggVals.length},
        {x: 'Minimum', y:  max / aggVals.length},
        {x: 'Mittelwert', y:  avg / aggVals.length} ],
        label: "Vergleich"
})

console.log(tarVals)

aggregated.data.datasets = tarVals; 
    return aggregated; 

  }

  createPrognoseChart1(chartTmp: any, min: number, max: number) {

    var chart = JSON.parse(JSON.stringify(chartTmp));
    var newdata : any; 
    var lines: { data: any; label: any; Object_Key: any; }[] = []; 
    var labels: any[] = []; 
    chart.data.datasets.forEach((element: any) => {

      var datapoint = []; 

      var firstVal = element.data.filter((el: { x: number; }) => el.x == min)[0];
      var secondVal = element.data.filter((el: { x: number; }) => el.x == max)[0];
      console.log(firstVal); 
      console.log(secondVal); 
      console.log(secondVal.y - firstVal.y)
      var val = (( secondVal.y - firstVal.y ) /  firstVal.y ); 
      console.log(val); 
      datapoint.push( {
        x: element.label,
        y: val
      }) 
 
        var line = { data: datapoint, label: element.label, Object_Key: element.Object_Key}    
        lines.push(line); 
        labels.push(element.label); 
    });

    chart.data.datasets = lines; 
    chart.data.labels   = labels; 
   


    return chart; 

  }


  createPrognoseChart(chartTmp: any) {
    var chart = JSON.parse(JSON.stringify(chartTmp));
    var newdata : any; 
    var lines: { data: any; label: any; Object_Key: any; }[] = []; 
    chart.data.datasets.forEach((element: any) => {

      var datapoint = []; 
 


      for(var i = 0; i < element.data.length - 1; i++) {
            
       var z =  (element.data[i+1].y / element.data[i].y)- 1;

       console.log(z); 
       var d = {
        y: z,
        x: element.data[i+1].x
       };

       datapoint.push(d); 


      }
        var line = { data: datapoint, label: element.label, Object_Key: element.Object_Key}    
        lines.push(line); 
    });

    chart.data.datasets = lines; 
   


    return chart; 

  }



  createAggregatedChart(chartTmp: any) {
    var chart = JSON.parse(JSON.stringify(chartTmp));
    var newdata : any; 
    var lines: { data: any; label: any; Object_Key: any; }[] = []; 
    chart.data.datasets.forEach((element: any) => {
      console.log(element)
      var counter = 0;
      var sum = 0;
      var max = 0;
      var min = 10000000000;
      element.data.forEach((d: any) => {

        console.log(d); 

        if(d.y > max) {
          max = d.y; 
        }
        if(d.y < min) {
          min = d.y; 
        }
       
        if(d.y != undefined)
        counter++;
        sum = sum + d.y;
      });

      

      newdata= [
        {x: "Maximum", y: max},
        {x: "Minimum", y: min},
        {x: "Mittelwert", y: Math.round((sum/counter)*100)/100}];
        console.log(newdata)
        var line = { data: newdata, label: element.label, Object_Key: element.Object_Key}
        counter = 0;
        sum = 0;
        max = 0;
        min = 10000000000;
        lines.push(line); 
    });

    chart.data.datasets = lines; 
    chart.data.labels        = ["Maximum", "Minimum", "Mittelwert"]; 


    return chart; 

  }
  createShortenedKeyFromLevel(search: string, admin_level: number) {
    var returnKey; 

    switch (Number(admin_level)) {
      case 7: //Ort
        returnKey = search 
        break;
      case 6: //Ortsteil
        returnKey = search.substring(0, 21);
        break;
      case 5: //Gemeinde
        returnKey = search.substring(0, 12);
        break;
      case 4: //Verband
        returnKey = search.substring(0, 9);
        break;
      case 3: //Kreis
        returnKey = search.substring(0, 5);
        break;
      case 2: // Region
        returnKey = search.substring(0, 4);
        break;
     //case 2: // Regierungsbezirk
      //  returnKey = search.substring(0, 3);
       // break;
      case 1: // Bundesland
        returnKey = search.substring(0, 2);
        break;
      default:
        returnKey = search;
  
    }
  
    return returnKey;
  
  }

  async getShapefileById(search: string):  Promise<any[]>{
    var results = [];

    var url = this.baseApiUrl + '/getShapeFileByLevel/' + search; 

    try{

    var result = await firstValueFrom(this.http.get(url)); }
    catch(error) {
      return[]; 
    }
    results.push(result); 
    return results;

  }


  getMetaForIndi(id : number , source : string ){
    var metaObj = this.getMetaDataByPlace();
    var foundItem; 

    console.log(id);
    console.log(source);

    metaObj.forEach(bereich => {

      var filtered = bereich.data.filter((indi: { Tabellen_ID: number; Source: string; }) => indi.Tabellen_ID == id && indi.Source == source)
      if(filtered.length > 0) {
        foundItem = filtered[0]; 
      }
      
    });

    return foundItem; 

  }


  getMetaDataByPlace() : any[]{
    return [{
      "Bereich": "Arbeitslosigkeit",
      "data": [
        {
          "Name": "Arbeitslose an der Gesamtbevölkerung",
          "Tabellen_ID": 37,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Arbeitslose Jugendliche  an der Bevölkerung 15 bis 24 Jahre",
          "Tabellen_ID": 34,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Langzeitarbeitslosenquote",
          "Tabellen_ID": 273,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Arbeitslose an den SvB",
          "Tabellen_ID": 207,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Arbeitslose an den SvB unter 25 Jahren",
          "Tabellen_ID": 214,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Arbeitslose Frauen",
          "Tabellen_ID": 15,
          "Source": "Inkar",
          "Beschreibung": "Anteil der arbeitslosen Frauen an den Arbeitslosen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Arbeitslose Männer",
          "Tabellen_ID": 16,
          "Source": "Inkar",
          "Beschreibung": "Anteil der arbeitslosen Männer an den Arbeitslosen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Anteil ältere Arbeitslose",
          "Tabellen_ID": 34,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Arbeitslosen 55 Jahre und älter an den Arbeitslosen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Anteil weibliche ältere Arbeitslose",
          "Tabellen_ID": 35,
          "Source": "Inkar",
          "Beschreibung": "Anteil der weiblichen Arbeitslosen 55 Jahre und älter an den weiblichen Arbeitslosen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Anteil männliche ältere Arbeitslose",
          "Tabellen_ID": 36,
          "Source": "Inkar",
          "Beschreibung": "Anteil der männlichen Arbeitslosen 55 Jahre und älter an den männlichen Arbeitslosen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Anteil jüngere Arbeitslose",
          "Tabellen_ID": 37,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Arbeitslosen unter 25 Jahren an den Arbeitslosen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Anteil weibliche jüngere Arbeitslose",
          "Tabellen_ID": 38,
          "Source": "Inkar",
          "Beschreibung": "Anteil der weiblichen Arbeitslosen unter 25 Jahren an den weiblichen Arbeitslosen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Anteil männliche jüngere Arbeitslose",
          "Tabellen_ID": 39,
          "Source": "Inkar",
          "Beschreibung": "Anteil der männlichen Arbeitslosen unter 25 Jahren an den männlichen Arbeitslosen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Ältere Arbeitslose",
          "Tabellen_ID": 40,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Arbeitslosen 55 Jahre und älter an Einwohnern von 55 bis unter 65 Jahren in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Weibliche ältere Arbeitslose",
          "Tabellen_ID": 41,
          "Source": "Inkar",
          "Beschreibung": "Anteil der weiblichen Arbeitslosen 55 Jahre und älter an weiblichen Einwohnern von 55 bis unter 65 Jahren in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Männliche ältere Arbeitslose",
          "Tabellen_ID": 42,
          "Source": "Inkar",
          "Beschreibung": "Anteil der männlichen Arbeitslosen 55 Jahre und älter an männlichen Einwohnern von 55 bis unter 65 Jahren in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Jüngere Arbeitslose",
          "Tabellen_ID": 43,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Arbeitslosen unter 25 Jahren an Einwohnern von 15 bis unter 25 Jahren in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Weibliche jüngere Arbeitslose",
          "Tabellen_ID": 44,
          "Source": "Inkar",
          "Beschreibung": "Anteil der weiblichen Arbeitslosen unter 25 Jahren an weiblichen Einwohnern von 15 bis unter 25 Jahren in %",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Männliche jüngere Arbeitslose",
          "Tabellen_ID": 45,
          "Source": "Inkar",
          "Beschreibung": "Anteil der männlichen Arbeitslosen unter 25 Jahren an männlichen Einwohnern von 15 bis unter 25 Jahren in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Weibliche Langzeitarbeitslose",
          "Tabellen_ID": 18,
          "Source": "Inkar",
          "Beschreibung": "Anteil der weiblichen Arbeitslosen, 1 Jahr und länger arbeitslos, an den weiblichen Arbeitslosen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Männliche Langzeitarbeitslose",
          "Tabellen_ID": 19,
          "Source": "Inkar",
          "Beschreibung": "Anteil der männlichen Arbeitslosen, 1 Jahr und länger arbeitslos, an den männlichen Arbeitslosen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Ausländische Arbeitslose",
          "Tabellen_ID": 20,
          "Source": "Inkar",
          "Beschreibung": "Anteil der ausländischen Arbeitslosen an den Arbeitslosen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Ausländische weibliche Arbeitslose",
          "Tabellen_ID": 21,
          "Source": "Inkar",
          "Beschreibung": "Anteil der ausländischen weiblichen  Arbeitslosen an den weiblichen Arbeitslosen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Ausländische männliche Arbeitslose",
          "Tabellen_ID": 22,
          "Source": "Inkar",
          "Beschreibung": "Anteil der ausländischen männlichen Arbeitslosen an den männlichen Arbeitslosen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Arbeitslose ohne Ausbildung",
          "Tabellen_ID": 23,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Arbeitslosen ohne Berufsausbildung an den Arbeitslosen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Arbeitslose mit Anforderungsniveau Experte",
          "Tabellen_ID": 24,
          "Source": "Inkar",
          "Beschreibung": "Anteil Arbeitslose Anforderungsniveau Experte an den Arbeitslosen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Arbeitslose mit Anforderungsniveau Spezialist",
          "Tabellen_ID": 25,
          "Source": "Inkar",
          "Beschreibung": "Anteil Arbeitslose Anforderungsniveau Spezialist an den Arbeitslosen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Arbeitslose mit Anforderungsniveau Fachkraft",
          "Tabellen_ID": 26,
          "Source": "Inkar",
          "Beschreibung": "Anteil Arbeitslose Anforderungsniveau Fachkraft an den Arbeitslosen in %",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Arbeitslose mit Anforderungsniveau Helfer",
          "Tabellen_ID": 27,
          "Source": "Inkar",
          "Beschreibung": "Anteil Arbeitslose Anforderungsniveau Helfer an den Arbeitslosen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        }
      ]
    },{
      "Bereich": "Aus- und Weiterbildung",
      "data": [
        {
          "Name": "Ausbildungsbeginner:innen mit Förderschulabschluss",
          "Tabellen_ID": 229,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Ausbildungsbeginner:innen ohne Hauptschulabschluss",
          "Tabellen_ID": 231,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Ausbildungsbeginner:innen mit Hauptschulabschluss",
          "Tabellen_ID": 230,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Ausbildungsbeginner:innen mit Realschulabschluss",
          "Tabellen_ID": 232,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Ausbildungsbeginner:innen mit Fachhoch-/Hochschulabschluss",
          "Tabellen_ID": 228,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Erfolgsquote beim Abschluss beruflicher Bildungsgänge",
          "Tabellen_ID": 250,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Beteiligung an Weiterbildungsmaßnahmen - Gesamt",
          "Tabellen_ID": 247,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Beteiligung an Weiterbildungsmaßnahmen - Jugendliche",
          "Tabellen_ID": 248,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Beteiligung an Weiterbildungsmaßnahmen - Ältere",
          "Tabellen_ID": 245,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Beteiligung an Weiterbildungsmaßnahmen - Frauen",
          "Tabellen_ID": 246,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Beteiligung an Weiterbildungsmaßnahmen - Männer",
          "Tabellen_ID": 249,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Eingliederung durch Weiterbildungsmaßnahmen - Gesamt",
          "Tabellen_ID": 297,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Eingliederung durch Weiterbildungsmaßnahmen - Jugendliche",
          "Tabellen_ID": 298,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Eingliederung durch Weiterbildungsmaßnahmen - Ältere",
          "Tabellen_ID": 295,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Eingliederung durch Weiterbildungsmaßnahmen - Frauen",
          "Tabellen_ID": 296,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Eingliederung durch Weiterbildungsmaßnahmen - Männer",
          "Tabellen_ID": 299,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Verhältnis der Schulabbrecher:innenquote von Ausländer:innen zur Schulabbrecher:innenquote gesamt",
          "Tabellen_ID": 278,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        }
      ]
    },{
      "Bereich": "Bauen und Wohnen",
      "data": [
        {
          "Name": "Mietpreise",
          "Tabellen_ID": 294,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Wohnfläche pro Person",
          "Tabellen_ID": 175,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Fertiggestellte Wohngebäude mit erneuerbarer Energie",
          "Tabellen_ID": 289,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Wohnungen in Ein-/Zweifamilienhäusern",
          "Tabellen_ID": 176,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Baugenehmigungen für Wohnungen",
          "Tabellen_ID": 47,
          "Source": "Inkar",
          "Beschreibung": "Baugenehmigungen für neue Wohnungen je 1.000 Einwohner",
          "unit": "Anzahl/1000",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Baugenehmigungen für Wohnungen in Ein- und Zweifamilienhäusern",
          "Tabellen_ID": 48,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Baugenehmigungen für neue Wohnungen in Gebäuden mit 1 und. 2 Wohnungen an den Baugenehmigungen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Baugenehmigungen für Wohnungen in Mehrfamilienhäusern",
          "Tabellen_ID": 49,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Baugenehmigungen für neue Wohnungen in Gebäuden mit 3 u. mehr Wohnungen an den Baugenehmigungen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Fertiggestellte Wohnungen im Bestand",
          "Tabellen_ID": 50,
          "Source": "Inkar",
          "Beschreibung": "Fertiggestellte Wohnungen je 1.000 Wohnungen des Bestandes",
          "unit": "Anzahl/1000",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Neue Ein- und Zweifamilienhäuser",
          "Tabellen_ID": 51,
          "Source": "Inkar",
          "Beschreibung": "Anteil neu errichteter Ein- und Zweifamilienhäuser an den neu errichteten Häusern in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Neubauwohnungen in Ein- und Zweifamilienhäusern",
          "Tabellen_ID": 52,
          "Source": "Inkar",
          "Beschreibung": "Anteil neuer Wohnungen in Ein- und Zweifamilienhäusern an den neuen Wohnungen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Neubauwohnungen je Einwohner",
          "Tabellen_ID": 53,
          "Source": "Inkar",
          "Beschreibung": "Fertiggestellte Wohnungen in neuen Wohngebäuden je 1.000 Einwohner",
          "unit": "Anzahl/1000",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Neubauwohnungen in Ein- und Zweifamilienhäusern je Einwohner",
          "Tabellen_ID": 54,
          "Source": "Inkar",
          "Beschreibung": "Fertiggestellte Wohnungen in neuen Ein- und Zweifamilienhäusern je 1.000 Einwohner",
          "unit": "Anzahl/1000",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Neubauwohnungen in Mehrfamilienhäusern",
          "Tabellen_ID": 55,
          "Source": "Inkar",
          "Beschreibung": "Fertiggestellte Wohnungen in neuen Mehrfamilienhäusern je 1.000 Einwohner",
          "unit": "Anzahl/1000",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Ein- und Zweifamilienhäuser",
          "Tabellen_ID": 58,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Wohngebäude mit 1 und 2 Wohnungen an den Wohngebäuden in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Mehrfamilienhäuser",
          "Tabellen_ID": 59,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Wohngebäude mit 3 und mehr Wohnungen an den Wohngebäuden in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Ein- und Zweiraumwohnungen",
          "Tabellen_ID": 60,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Wohnungen mit 1 und 2 Räumen an den Wohnungen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "5- und mehr Raum-Wohnungen",
          "Tabellen_ID": 61,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Wohnungen mit 5 und mehr Räumen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Wohnungen in Ein- und Zweifamilienhäusern",
          "Tabellen_ID": 63,
          "Source": "Inkar",
          "Beschreibung": "Anteil Wohnungen in Ein- und Zweifamilienhäusern an allen Wohnungen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Wohnungen in Mehrfamilienhäusern",
          "Tabellen_ID": 64,
          "Source": "Inkar",
          "Beschreibung": "Anteil Wohnungen in Mehrfamilienhäusern an allen Wohnungen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        }
      ]
    },{
      "Bereich": "Beschäftigung / Arbeitsmarkt",
      "data": [
        {
          "Name": "Beschäftigungsanteil im 1. Sektor",
          "Tabellen_ID": 26,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Beschäftigungsanteil im 2. Sektor",
          "Tabellen_ID": 27,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Beschäftigungsanteil im 3. Sektor",
          "Tabellen_ID": 28,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Arbeitsplatzzentralität",
          "Tabellen_ID": 178,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Arbeitsplatzentwicklung der vergangenen 5 Jahre",
          "Tabellen_ID": 179,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Beschäftigungsquote",
          "Tabellen_ID": 183,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Frauenbeschäftigungsquote",
          "Tabellen_ID": 184,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Verhältnis der Beschäftigungsquote von Frauen und Männern",
          "Tabellen_ID": 185,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Beschäftigungsquote 55- bis 64-Jährige",
          "Tabellen_ID": 177,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Beschäftigungsanteil im Dienstleistungssektor",
          "Tabellen_ID": 180,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Beschäftigungsentwicklung im Dienstleistungssektor",
          "Tabellen_ID": 181,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Geringfügig Beschäftigte (Wohnort)",
          "Tabellen_ID": 61,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Geringfügig Beschäftigte - Frauen (Wohnort)",
          "Tabellen_ID": 63,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Geringfügig Beschäftigte - Männer (Wohnort)",
          "Tabellen_ID": 62,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Geringfügig Beschäftigte - 15- bis 64-Jährige (Wohnort)",
          "Tabellen_ID": 59,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Geringfügig Beschäftigte - ab 65 Jahre (Wohnort)",
          "Tabellen_ID": 60,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Erwerbstätige Aufstocker:innen - Gesamt",
          "Tabellen_ID": 15,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Erwerbstätige Aufstocker:innen - Frauen",
          "Tabellen_ID": 17,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Erwerbstätige Aufstocker:innen - Männer",
          "Tabellen_ID": 16,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Existenzgründungen",
          "Tabellen_ID": 268,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Hochqualifizierte am Arbeitsort",
          "Tabellen_ID": 182,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Hochqualifizierte am Wohnort",
          "Tabellen_ID": 186,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil Unterbeschäftigte - Gesamt",
          "Tabellen_ID": 29,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil Unterbeschäftigte -  Frauen",
          "Tabellen_ID": 31,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil Unterbeschäftigte -  Männer",
          "Tabellen_ID": 30,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Verhältnis der Beschäftigungsquote von Frauen und Männern",
          "Tabellen_ID": 185,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Verdienstabstand zwischen Frauen und Männern",
          "Tabellen_ID": 304,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Beschäftigungsquote",
          "Tabellen_ID": 183,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Beschäftigungsquote 55- bis 64-Jährige",
          "Tabellen_ID": 177,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Erwerbstätige Aufstocker:innen - Gesamt",
          "Tabellen_ID": 15,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Existenzgründungen",
          "Tabellen_ID": 268,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Hochqualifizierte am Arbeitsort",
          "Tabellen_ID": 182,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Verhältnis der Beschäftigungsquote von Ausländer:innen zur Beschäftigungsquote gesamt",
          "Tabellen_ID": 285,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Erwerbsfähige Bevölkerung (15 bis unter 65 Jahre)",
          "Tabellen_ID": 6,
          "Source": "Inkar",
          "Beschreibung": "Zahl der Einwohner im Alter von 15 bis unter 65 Jahren",
          "unit": "Anzahl",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Sozialversicherungspflichtig Beschäftigte am Arbeitsort",
          "Tabellen_ID": 8,
          "Source": "Inkar",
          "Beschreibung": "Zahl der sozialversicherungspflichtig Beschäftigten am Arbeitsort insgesamt",
          "unit": "Anzahl",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Sozialversicherungspflichtig Beschäftigte am Wohnort",
          "Tabellen_ID": 9,
          "Source": "Inkar",
          "Beschreibung": "Zahl der sozialversicherungspflichtig Beschäftigten am Wohnort insgesamt",
          "unit": "Anzahl",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Anteil Minijobs an den Beschäftigungsverhältnissen",
          "Tabellen_ID": 88,
          "Source": "Inkar",
          "Beschreibung": "Anteil der geringfügig entlohnten Beschäftigten am Arbeitsort an den privatrechtlichen Beschäftigungsverhältnissen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Anteil Minijobs (ausschließlich) an den Beschäftigungsverhältnissen",
          "Tabellen_ID": 89,
          "Source": "Inkar",
          "Beschreibung": "Anteil der geringfügig entlohnten Beschäftigten am Arbeitsort (ausschließlich) an den privatrechtlichen Beschäftigungsverhältnissen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Anteil Minijobs (Nebenverdienst) an den Beschäftigungsverhältnissen",
          "Tabellen_ID": 90,
          "Source": "Inkar",
          "Beschreibung": "Anteil der geringfügig entlohnten Beschäftigten am Arbeitsort im Nebenjob an den privatrechtlichen Beschäftigungsverhältnissen in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Anteil Minijobs (ausschließlich) an geringfügig Beschäftigten",
          "Tabellen_ID": 91,
          "Source": "Inkar",
          "Beschreibung": "Anteil der geringfügig entlohnten Beschäftigten am Arbeitsort (ausschließlich) an den geringfügig entlohnten Beschäftigten in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Anteil Minijobs (Nebenverdienst)",
          "Tabellen_ID": 92,
          "Source": "Inkar",
          "Beschreibung": "Anteil der geringfügig entlohnten Beschäftigten im Nebenjob an den geringfügig entlohnten Beschäftigten in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Anteil Minijobs (Frauen)",
          "Tabellen_ID": 93,
          "Source": "Inkar",
          "Beschreibung": "Anteil der geringfügig entlohnten weiblichen Beschäftigten an den geringfügig entlohnten Beschäftigten am Arbeitsort in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Anteil Minijobs (Männer)",
          "Tabellen_ID": 94,
          "Source": "Inkar",
          "Beschreibung": "Anteil der geringfügig entlohnten männlichen Beschäftigten an den geringfügig entlohnten Beschäftigten in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Beschäftigtenquote Frauen",
          "Tabellen_ID": 66,
          "Source": "Inkar",
          "Beschreibung": "SV beschäftigte Frauen am Wohnort je 100 Frauen im erwerbsfähigen Alter in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Beschäftigtenquote Männer",
          "Tabellen_ID": 67,
          "Source": "Inkar",
          "Beschreibung": "SV beschäftigte Männer am Wohnort je 100 Männer im erwerbsfähigen Alter in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Verhältnis junge zu alte Erwerbsfähige",
          "Tabellen_ID": 69,
          "Source": "Inkar",
          "Beschreibung": "Verhältnis junge (15-<20J) zu alte (60-<65J) Erwerbsfähige in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Verhältnis der Beschäftigungsquote von Frauen zu Männern",
          "Tabellen_ID": 521,
          "Source": "Inkar",
          "Beschreibung": "SV Beschäftigtenquote der Frauen am Wohnort je SV Beschäftigtenquote der Männer am Wohnort in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        }
      ]
    },{
      "Bereich": "Bevölkerung nach Altersgruppen",
      "data": [
        {
          "Name": "Anteil 0- bis 2-Jährige",
          "Tabellen_ID": 94,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 0- bis 2-Jährige - männlich",
          "Tabellen_ID": 95,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 0- bis 2-Jährige - weiblich",
          "Tabellen_ID": 96,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 3- bis 5-Jährige",
          "Tabellen_ID": 97,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 3- bis 5-Jährige - männlich",
          "Tabellen_ID": 98,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 3- bis 5-Jährige - weiblich",
          "Tabellen_ID": 99,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 6- bis 9-Jährige",
          "Tabellen_ID": 100,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 6- bis 9-Jährige - männlich",
          "Tabellen_ID": 101,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 6- bis 9-Jährige - weiblich",
          "Tabellen_ID": 102,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 10- bis 15-Jährige",
          "Tabellen_ID": 103,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 10- bis 15-Jährige - männlich",
          "Tabellen_ID": 104,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 10- bis 15-Jährige - weiblich",
          "Tabellen_ID": 105,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 16- bis 18-Jährige",
          "Tabellen_ID": 106,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 16- bis 18-Jährige - männlich",
          "Tabellen_ID": 107,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 16- bis 18-Jährige - weiblich",
          "Tabellen_ID": 108,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 19- bis 24-Jährige",
          "Tabellen_ID": 109,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 19- bis 24-Jährige - männlich",
          "Tabellen_ID": 110,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 19- bis 24-Jährige - weiblich",
          "Tabellen_ID": 111,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 25- bis 44-Jährige",
          "Tabellen_ID": 112,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 25- bis 44-Jährige - männlich",
          "Tabellen_ID": 113,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 25- bis 44-Jährige - weiblich",
          "Tabellen_ID": 114,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 45- bis 64-Jährige",
          "Tabellen_ID": 115,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 45- bis 64-Jährige - männlich",
          "Tabellen_ID": 116,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 45- bis 64-Jährige - weiblich",
          "Tabellen_ID": 117,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 65- bis 79-Jährige",
          "Tabellen_ID": 118,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 65- bis 79-Jährige - männlich",
          "Tabellen_ID": 119,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 65- bis 79-Jährige - weiblich",
          "Tabellen_ID": 120,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil ab 80-Jährige",
          "Tabellen_ID": 121,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil ab 80-Jährige - männlich",
          "Tabellen_ID": 122,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil ab 80-Jährige - weiblich",
          "Tabellen_ID": 123,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 0- bis 2-Jährige",
          "Tabellen_ID": 64,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 0- bis 2-Jährige - männlich",
          "Tabellen_ID": 65,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 0- bis 2-Jährige - weiblich",
          "Tabellen_ID": 66,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 3- bis 5-Jährige",
          "Tabellen_ID": 67,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 3- bis 5-Jährige - männlich",
          "Tabellen_ID": 68,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 3- bis 5-Jährige - weiblich",
          "Tabellen_ID": 69,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 6- bis 9-Jährige",
          "Tabellen_ID": 70,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 6- bis 9-Jährige - männlich",
          "Tabellen_ID": 71,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 6- bis 9-Jährige - weiblich",
          "Tabellen_ID": 72,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 10- bis 15-Jährige",
          "Tabellen_ID": 73,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 10- bis 15-Jährige - männlich",
          "Tabellen_ID": 74,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 10- bis 15-Jährige - weiblich",
          "Tabellen_ID": 75,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 16- bis 18-Jährige",
          "Tabellen_ID": 76,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 16- bis 18-Jährige - männlich",
          "Tabellen_ID": 77,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 16- bis 18-Jährige - weiblich",
          "Tabellen_ID": 78,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 19- bis 24-Jährige",
          "Tabellen_ID": 79,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 19- bis 24-Jährige - männlich",
          "Tabellen_ID": 80,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 19- bis 24-Jährige - weiblich",
          "Tabellen_ID": 81,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 25- bis 44-Jährige",
          "Tabellen_ID": 82,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 25- bis 44-Jährige - männlich",
          "Tabellen_ID": 83,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 25- bis 44-Jährige - weiblich",
          "Tabellen_ID": 84,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 45- bis 64-Jährige",
          "Tabellen_ID": 85,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 45- bis 64-Jährige - männlich",
          "Tabellen_ID": 86,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 45- bis 64-Jährige - weiblich",
          "Tabellen_ID": 87,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 65- bis 79-Jährige",
          "Tabellen_ID": 88,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 65- bis 79-Jährige - männlich",
          "Tabellen_ID": 89,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 65- bis 79-Jährige - weiblich",
          "Tabellen_ID": 90,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung ab 80-Jährige",
          "Tabellen_ID": 91,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung ab 80-Jährige - männlich",
          "Tabellen_ID": 92,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung ab 80-Jährige - weiblich",
          "Tabellen_ID": 93,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 0- bis 2-Jährige seit 2011",
          "Tabellen_ID": 124,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 0- bis 2-Jährige seit 2011 - männlich",
          "Tabellen_ID": 125,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 0- bis 2-Jährige seit 2011 - weiblich",
          "Tabellen_ID": 126,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 3- bis 5-Jährige seit 2011",
          "Tabellen_ID": 127,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 3- bis 5-Jährige seit 2011 - männlich",
          "Tabellen_ID": 128,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 3- bis 5-Jährige seit 2011 - weiblich",
          "Tabellen_ID": 129,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 6- bis 9-Jährige seit 2011",
          "Tabellen_ID": 130,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 6- bis 9-Jährige seit 2011 - männlich",
          "Tabellen_ID": 131,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 6- bis 9-Jährige seit 2011 - weiblich",
          "Tabellen_ID": 132,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 10- bis 15-Jährige seit 2011",
          "Tabellen_ID": 133,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 10- bis 15-Jährige seit 2011 - männlich",
          "Tabellen_ID": 134,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 10- bis 15-Jährige seit 2011 - weiblich",
          "Tabellen_ID": 135,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 16- bis 18-Jährige seit 2011",
          "Tabellen_ID": 136,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 16- bis 18-Jährige seit 2011 - männlich",
          "Tabellen_ID": 137,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 16- bis 18-Jährige seit 2011 - weiblich",
          "Tabellen_ID": 138,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 19- bis 24-Jährige seit 2011",
          "Tabellen_ID": 139,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 19- bis 24-Jährige seit 2011 - männlich",
          "Tabellen_ID": 140,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 19- bis 24-Jährige seit 2011 - weiblich",
          "Tabellen_ID": 141,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 25- bis 44-Jährige seit 2011",
          "Tabellen_ID": 142,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 25- bis 44-Jährige seit 2011 - männlich",
          "Tabellen_ID": 143,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 25- bis 44-Jährige seit 2011 - weiblich",
          "Tabellen_ID": 144,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 45- bis 64-Jährige seit 2011",
          "Tabellen_ID": 145,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 45- bis 64-Jährige seit 2011 - männlich",
          "Tabellen_ID": 146,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 45- bis 64-Jährige seit 2011 - weiblich",
          "Tabellen_ID": 147,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 65- bis 79-Jährige seit 2011",
          "Tabellen_ID": 148,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 65- bis 79-Jährige seit 2011 - männlich",
          "Tabellen_ID": 149,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 65- bis 79-Jährige seit 2011 - weiblich",
          "Tabellen_ID": 150,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung ab 80-Jährige seit 2011",
          "Tabellen_ID": 151,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung ab 80-Jährige seit 2011 - männlich",
          "Tabellen_ID": 152,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung ab 80-Jährige seit 2011 - weiblich",
          "Tabellen_ID": 153,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        }
      ]
    },{
      "Bereich": "Daseinsvorsorge",
      "data": [
        {
          "Name": "Personal in Pflegediensten",
          "Tabellen_ID": 275,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Personal in Pflegeheimen",
          "Tabellen_ID": 276,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Plätze in Pflegeheimen",
          "Tabellen_ID": 263,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        }
      ]
    },{
      "Bereich": "Demografische Entwicklung",
      "data": [
        {
          "Name": "Bevölkerung",
          "Tabellen_ID": 13,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerungsentwicklung seit 2011",
          "Tabellen_ID": 155,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerungsentwicklung über die letzten 5 Jahre",
          "Tabellen_ID": 154,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Geburten",
          "Tabellen_ID": 162,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Sterbefälle",
          "Tabellen_ID": 163,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Vorzeitige Sterblichkeit - Frauen",
          "Tabellen_ID": 288,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Vorzeitige Sterblichkeit - Männer",
          "Tabellen_ID": 287,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Natürlicher Saldo",
          "Tabellen_ID": 164,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Zuzüge",
          "Tabellen_ID": 169,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Fortzüge",
          "Tabellen_ID": 170,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Wanderungssaldo",
          "Tabellen_ID": 171,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Familienwanderung",
          "Tabellen_ID": 165,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bildungswanderung",
          "Tabellen_ID": 166,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Wanderung zu Beginn der 2. Lebenshälfte",
          "Tabellen_ID": 167,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Alterswanderung",
          "Tabellen_ID": 168,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Durchschnittsalter",
          "Tabellen_ID": 172,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Medianalter",
          "Tabellen_ID": 173,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Jugendquotient",
          "Tabellen_ID": 159,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Altenquotient",
          "Tabellen_ID": 157,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Gesamtquotient",
          "Tabellen_ID": 161,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil unter 18-Jährige",
          "Tabellen_ID": 158,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil Elternjahrgänge",
          "Tabellen_ID": 160,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 65- bis 79-Jährige",
          "Tabellen_ID": 156,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil ab 80-Jährige",
          "Tabellen_ID": 174,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Einwohner:innendichte",
          "Tabellen_ID": 58,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung",
          "Tabellen_ID": 360,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerungsentwicklung",
          "Tabellen_ID": 363,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerungsanteil - Frauen",
          "Tabellen_ID": 497,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerungsanteil - Männer",
          "Tabellen_ID": 491,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Geburten",
          "Tabellen_ID": 344,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Sterbefälle",
          "Tabellen_ID": 345,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Natürlicher Saldo",
          "Tabellen_ID": 346,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil Elternjahrgänge - Gesamt",
          "Tabellen_ID": 482,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil Elternjahrgänge - Frauen",
          "Tabellen_ID": 481,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil Elternjahrgänge - Männer",
          "Tabellen_ID": 480,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Total Fertility Rate (TFR)",
          "Tabellen_ID": 347,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Fortzüge",
          "Tabellen_ID": 349,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Zuzüge",
          "Tabellen_ID": 348,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Wanderungssaldo",
          "Tabellen_ID": 350,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Natürliche Bevölkerungsentwicklung",
          "Tabellen_ID": 586,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Durchschnittsalter",
          "Tabellen_ID": 483,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Medianalter",
          "Tabellen_ID": 484,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Jugendquotient",
          "Tabellen_ID": 487,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Altenquotient",
          "Tabellen_ID": 488,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil unter 18-Jährige",
          "Tabellen_ID": 486,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil ab 65-Jährige",
          "Tabellen_ID": 473,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 65- bis 79-Jährige",
          "Tabellen_ID": 454,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 65- bis 79-Jährige - Frauen",
          "Tabellen_ID": 493,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 65- bis 79-Jährige - Männer",
          "Tabellen_ID": 489,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil ab 80-Jährige",
          "Tabellen_ID": 464,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil ab 80-Jährige - Frauen",
          "Tabellen_ID": 494,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil ab 80-Jährige - Männer",
          "Tabellen_ID": 490,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 0- bis 2-Jährige",
          "Tabellen_ID": 367,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 3- bis 5-Jährige",
          "Tabellen_ID": 377,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 6- bis 9-Jährige",
          "Tabellen_ID": 387,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 10- bis 15-Jährige",
          "Tabellen_ID": 397,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 16- bis 18-Jährige",
          "Tabellen_ID": 407,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 19- bis 24-Jährige",
          "Tabellen_ID": 417,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 25- bis 44-Jährige",
          "Tabellen_ID": 427,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 45- bis 64-Jährige",
          "Tabellen_ID": 437,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung 65- bis 79-Jährige",
          "Tabellen_ID": 447,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerung ab 80-Jährige",
          "Tabellen_ID": 457,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 0- bis 2-Jährige",
          "Tabellen_ID": 374,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 3- bis 5-Jährige",
          "Tabellen_ID": 384,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 6- bis 9-Jährige",
          "Tabellen_ID": 394,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 10- bis 15-Jährige",
          "Tabellen_ID": 404,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 16- bis 18-Jährige",
          "Tabellen_ID": 414,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 19- bis 24-Jährige",
          "Tabellen_ID": 424,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 25- bis 44-Jährige",
          "Tabellen_ID": 434,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 45- bis 64-Jährige",
          "Tabellen_ID": 444,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil 65- bis 79-Jährige",
          "Tabellen_ID": 454,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil ab 80-Jährige",
          "Tabellen_ID": 464,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 0- bis 2-Jährige",
          "Tabellen_ID": 370,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 3- bis 5-Jährige",
          "Tabellen_ID": 380,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 6- bis 9-Jährige",
          "Tabellen_ID": 390,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 10- bis 15-Jährige",
          "Tabellen_ID": 400,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 16- bis 18-Jährige",
          "Tabellen_ID": 410,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 19- bis 24-Jährige",
          "Tabellen_ID": 420,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 25- bis 44-Jährige",
          "Tabellen_ID": 430,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 45- bis 64-Jährige",
          "Tabellen_ID": 440,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung 65- bis 79-Jährige",
          "Tabellen_ID": 450,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung ab 80-Jährige",
          "Tabellen_ID": 460,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Abhängigenquote Junge",
          "Tabellen_ID": 144,
          "Source": "Inkar",
          "Beschreibung": "Einwohner unter 15 Jahren je 100 Einwohner im erwerbsfähigen Alter",
          "unit": "Anzahl/100",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Abhängigenquote Alte",
          "Tabellen_ID": 145,
          "Source": "Inkar",
          "Beschreibung": "Einwohner 65 Jahre und älter je 100 Einwohner im erwerbsfähigen Alter",
          "unit": "Anzahl/100",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Frauenanteil",
          "Tabellen_ID": 146,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Frauen an den Einwohnern in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Frauenanteil 20 bis unter 40 Jahre",
          "Tabellen_ID": 147,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Frauen an den Einwohnern von 20 bis unter 40 Jahren in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Gesamtwanderungssaldo",
          "Tabellen_ID": 152,
          "Source": "Inkar",
          "Beschreibung": "Gesamtwanderungssaldo je 1.000 Einwohner",
          "unit": "Anzahl/1000",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Geborene",
          "Tabellen_ID": 177,
          "Source": "Inkar",
          "Beschreibung": "Geborene je 1.000 Einwohner",
          "unit": "Anzahl/1000",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Gestorbene",
          "Tabellen_ID": 178,
          "Source": "Inkar",
          "Beschreibung": "Gestorbene je 1.000 Einwohner",
          "unit": "Anzahl/1000",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Natürlicher Saldo",
          "Tabellen_ID": 179,
          "Source": "Inkar",
          "Beschreibung": "Natürlicher Saldo je 1.000 Einwohner",
          "unit": "Anzahl/1000",
          "Ist_Daten": "Ist-Daten"
        }
      ]
    },{
      "Bereich": "Energieinfrastruktur, sonst. Infrastruktur",
      "data": [
        {
          "Name": "Strom aus erneuerbaren Quellen",
          "Tabellen_ID": 282,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Ladesäuleninfrastruktur",
          "Tabellen_ID": 272,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Breitbandversorgung - Private Haushalte",
          "Tabellen_ID": 305,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        }
      ]
    },{
      "Bereich": "Finanzen",
      "data": [
        {
          "Name": "Einzahlungen lfd. Verwaltung",
          "Tabellen_ID": 315,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Auszahlungen lfd. Verwaltung",
          "Tabellen_ID": 316,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Primärsaldo",
          "Tabellen_ID": 317,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Finanzeinzahlungen",
          "Tabellen_ID": 318,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Finanzauszahlungen",
          "Tabellen_ID": 319,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Finanzsaldo",
          "Tabellen_ID": 320,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Staatliche Investitionszuweisungen",
          "Tabellen_ID": 321,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Sachinvestitionen",
          "Tabellen_ID": 322,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Investitionssaldo",
          "Tabellen_ID": 323,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Investitionskredite",
          "Tabellen_ID": 324,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Investitionskredite % zum Vorjahr",
          "Tabellen_ID": 339,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Finanzmittelsaldo",
          "Tabellen_ID": 325,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "nachrichtlich: Vermögenssaldo",
          "Tabellen_ID": 326,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Liquiditätskredite",
          "Tabellen_ID": 327,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Liquiditätskredite % zum Vorjahr",
          "Tabellen_ID": 340,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Verschuldung im Kernhaushalt",
          "Tabellen_ID": 328,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Grundsteuer B",
          "Tabellen_ID": 329,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Hebesatz Grundsteuer B",
          "Tabellen_ID": 341,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Gewerbesteuer (netto)",
          "Tabellen_ID": 330,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Hebesatz Gewerbesteuer",
          "Tabellen_ID": 342,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Einkommensteuer",
          "Tabellen_ID": 331,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Realisiertes Steuerpotenzial pro Einwohner:in",
          "Tabellen_ID": 187,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schlüsselzuweisungen",
          "Tabellen_ID": 332,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Allgemeine Deckungsmittel",
          "Tabellen_ID": 333,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Umlage an Gemeindeverbände",
          "Tabellen_ID": 334,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Verfügbare Deckungsmittel",
          "Tabellen_ID": 335,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Personalauszahlungen",
          "Tabellen_ID": 336,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Kostenerstattung für Sozialausgaben",
          "Tabellen_ID": 337,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Soziale Leistungen",
          "Tabellen_ID": 338,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Jugendhilfe",
          "Tabellen_ID": 343,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        }
      ]
    },{
      "Bereich": "Flächennutzung und Umwelt",
      "data": [
        {
          "Name": "Stickstoffüberschuss der Landwirtschaft",
          "Tabellen_ID": 306,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Abwasserbehandlung",
          "Tabellen_ID": 266,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Flächeninanspruchnahme",
          "Tabellen_ID": 271,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Flächenneuinanspruchnahme",
          "Tabellen_ID": 269,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Flächennutzungsintensität",
          "Tabellen_ID": 270,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Naherholungsflächen",
          "Tabellen_ID": 274,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Trinkwasserverbrauch",
          "Tabellen_ID": 283,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Abfallmenge",
          "Tabellen_ID": 265,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Siedlungslast im Überschwemmungsgebiet",
          "Tabellen_ID": 280,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Naturschutzflächen",
          "Tabellen_ID": 300,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Landschaftsqualität",
          "Tabellen_ID": 307,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Unzerschnittene Freiraumflächen",
          "Tabellen_ID": 284,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Siedlungs- und Verkehrsfläche",
          "Tabellen_ID": 248,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Siedlungs- und Verkehrsfläche an der Fläche in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Siedlungs- und Verkehrsfläche",
          "Tabellen_ID": 248,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Siedlungs- und Verkehrsfläche an der Gesamtfläche in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Siedlungsdichte in km²",
          "Tabellen_ID": 249,
          "Source": "Inkar",
          "Beschreibung": "Einwohner je km² Siedlungs- und Verkehrsfläche",
          "unit": "Anzahl/km²",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Erholungsfläche",
          "Tabellen_ID": 250,
          "Source": "Inkar",
          "Beschreibung": "Anteil Erholungsfläche an der Fläche in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Erholungsfläche je Einwohner",
          "Tabellen_ID": 251,
          "Source": "Inkar",
          "Beschreibung": "Erholungsfläche je Einwohner in m²",
          "unit": "m²/Anzahl",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Erholungsfläche je Einwohner",
          "Tabellen_ID": 251,
          "Source": "Inkar",
          "Beschreibung": "Erholungsfläche in m² je Einwohner",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Freifläche",
          "Tabellen_ID": 252,
          "Source": "Inkar",
          "Beschreibung": "Anteil Freifläche an der Fläche in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Freifläche je Einwohner",
          "Tabellen_ID": 253,
          "Source": "Inkar",
          "Beschreibung": "Freifläche je Einwohner in m²",
          "unit": "m²/Anzahl",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Landwirtschaftsfläche",
          "Tabellen_ID": 254,
          "Source": "Inkar",
          "Beschreibung": "Anteil Landwirtschaftsfläche an der Fläche in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Naturnähere Fläche",
          "Tabellen_ID": 255,
          "Source": "Inkar",
          "Beschreibung": "Anteil naturnähere Fläche an der Fläche in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Naturnähere Fläche je Einwohner",
          "Tabellen_ID": 256,
          "Source": "Inkar",
          "Beschreibung": "Naturnähere Fläche je Einwohner in m²",
          "unit": "m²/Anzahl",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Waldfläche",
          "Tabellen_ID": 257,
          "Source": "Inkar",
          "Beschreibung": "Anteil Waldfläche an der Fläche in %",
          "unit": "m²/Anzahl",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Wasserfläche",
          "Tabellen_ID": 258,
          "Source": "Inkar",
          "Beschreibung": "Anteil Wasserfläche an der Fläche in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        }
      ]
    },{
      "Bereich": "Gesundheit",
      "data": [
        {
          "Name": "Vorzeitige Sterblichkeit - Frauen",
          "Tabellen_ID": 288,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Vorzeitige Sterblichkeit - Männer",
          "Tabellen_ID": 287,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        }
      ]
    },{
      "Bereich": "Gleichstellung",
      "data": [
        {
          "Name": "Frauenanteil in Stadtrat, Gemeinderat bzw. Kreistag",
          "Tabellen_ID": 302,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        }
      ]
    },{
      "Bereich": "Integration",
      "data": [
        {
          "Name": "Ausländer:innen",
          "Tabellen_ID": 57,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil Ausländer:innen",
          "Tabellen_ID": 38,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil Ausländer:innen unter 15-Jährige",
          "Tabellen_ID": 42,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil Ausländer:innen 15- bis 24-Jährige",
          "Tabellen_ID": 39,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil Ausländer:innen 25- bis 64-Jährige",
          "Tabellen_ID": 40,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil Ausländer:innen ab 65-Jährige",
          "Tabellen_ID": 41,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Eingebürgerte im Jahr",
          "Tabellen_ID": 48,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Geduldete Personen",
          "Tabellen_ID": 47,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "3-Jährige mit Migrationshintergrund in Tageseinrichtungen",
          "Tabellen_ID": 50,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Kinder mit Migrationshintergrund in Tageseinrichtungen",
          "Tabellen_ID": 49,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Förderschüler:innen - Ausländer:innen",
          "Tabellen_ID": 290,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schulabgänger:innen allgmb. Schulen mit Fachhoch-/Hochschulreife - Ausländer:innen",
          "Tabellen_ID": 43,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schulabgänger:innen allgmb. Schulen ohne Hauptschulabschluss - Ausländer:innen",
          "Tabellen_ID": 44,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Ausländische Auszubildende an den ausländischen SvB",
          "Tabellen_ID": 45,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Auszubildende an den SvB",
          "Tabellen_ID": 46,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Arbeitslose Ausländer:innen an der ausländischen Bevölkerung",
          "Tabellen_ID": 35,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Arbeitslose ausländische Jugendliche an der ausländischen Bevölkerung 15 bis 24 Jahre",
          "Tabellen_ID": 36,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "SGB II-Quote - Ausländer:innen",
          "Tabellen_ID": 54,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Kinderarmut - Ausländer:innen",
          "Tabellen_ID": 55,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Altersarmut - Ausländer:innen",
          "Tabellen_ID": 52,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Verhältnis der Beschäftigungsquote von Ausländer:innen zur Beschäftigungsquote gesamt",
          "Tabellen_ID": 285,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Verhältnis der Schulabbrecher:innenquote von Ausländer:innen zur Schulabbrecher:innenquote gesamt",
          "Tabellen_ID": 278,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Eingebürgerte im Jahr",
          "Tabellen_ID": 48,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        }
      ]
    },{
      "Bereich": "Kinderbetreuung",
      "data": [
        {
          "Name": "Unter 3-Jährige in Tageseinrichtungen",
          "Tabellen_ID": 211,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Unter 3-Jährige in Tageseinrichtungen - bis 25 h Betreuung",
          "Tabellen_ID": 254,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Unter 3-Jährige in Tageseinrichtungen - 25 bis 35 h Betreuung",
          "Tabellen_ID": 255,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Unter 3-Jährige in Tageseinrichtungen - mehr als 35 h Betreuung",
          "Tabellen_ID": 256,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "3- bis 5-Jährige in Tageseinrichtungen",
          "Tabellen_ID": 212,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "3- bis 5-Jährige in Tageseinrichtungen - bis 25 h Betreuung",
          "Tabellen_ID": 251,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "3- bis 5-Jährige in Tageseinrichtungen - 25 bis 35 h Betreuung",
          "Tabellen_ID": 252,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "3- bis 5-Jährige in Tageseinrichtungen - mehr als 35 h Betreuung",
          "Tabellen_ID": 253,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "5- bis 10-Jährige in Tageseinrichtungen",
          "Tabellen_ID": 213,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Personal mit Hochschulabschluss in Tageseinrichtungen",
          "Tabellen_ID": 292,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Personal mit Fachschulabschluss in Tageseinrichtungen",
          "Tabellen_ID": 291,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Unter 3-Jährige in Tagespflege",
          "Tabellen_ID": 215,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Unter 3-Jährige in Tagespflege - bis 25 h Betreuung",
          "Tabellen_ID": 260,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Unter 3-Jährige in Tagespflege - 25 bis 35 h Betreuung",
          "Tabellen_ID": 261,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Unter 3-Jährige in Tagespflege - mehr als 35 h Betreuung",
          "Tabellen_ID": 262,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "3- bis 5-Jährige in Tagespflege",
          "Tabellen_ID": 216,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "3- bis 5-Jährige in Tagespflege - bis 25 h Betreuung",
          "Tabellen_ID": 257,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "3- bis 5-Jährige in Tagespflege - 25 bis 35 h Betreuung",
          "Tabellen_ID": 258,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "3- bis 5-Jährige in Tagespflege - mehr als 35 h Betreuung",
          "Tabellen_ID": 259,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "6- bis 10-Jährige in Tagespflege",
          "Tabellen_ID": 217,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Unter 3-Jährige in Tageseinrichtungen",
          "Tabellen_ID": 211,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Integrative Kindertageseinrichtungen",
          "Tabellen_ID": 303,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        }
      ]
    },{
      "Bereich": "Nachhaltigkeit / SDGs",
      "data": [
        {
          "Name": "Bruttoinlandsprodukt",
          "Tabellen_ID": 301,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Straftaten",
          "Tabellen_ID": 281,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Finanzmittelsaldo",
          "Tabellen_ID": 325,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Realisiertes Steuerpotenzial pro Einwohner:in",
          "Tabellen_ID": 187,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Liquiditätskredite",
          "Tabellen_ID": 327,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        }
      ]
    },{
      "Bereich": "Pendler:innen",
      "data": [
        {
          "Name": "Einpendler:innen an den SvB - Gesamt",
          "Tabellen_ID": 188,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Auspendler:innen an den SvB - Gesamt",
          "Tabellen_ID": 191,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Pendlersaldo an der Bevölkerung - Gesamt",
          "Tabellen_ID": 194,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Einpendler:innen an der Bevölkerung - Gesamt",
          "Tabellen_ID": 197,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Auspendler:innen an der Bevölkerung - Gesamt",
          "Tabellen_ID": 200,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Einpendler:innen an den SvB - Frauen",
          "Tabellen_ID": 189,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Einpendler:innen an den SvB - Männer",
          "Tabellen_ID": 190,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Auspendler:innen an den SvB - Frauen",
          "Tabellen_ID": 192,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Auspendler:innen an den SvB - Männer",
          "Tabellen_ID": 193,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Pendlersaldo an der Bevölkerung - Frauen",
          "Tabellen_ID": 195,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Pendlersaldo an der Bevölkerung - Männer",
          "Tabellen_ID": 196,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Einpendler:innen an der Bevölkerung - Frauen",
          "Tabellen_ID": 198,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Einpendler:innen an der Bevölkerung - Männer",
          "Tabellen_ID": 199,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Auspendler:innen an der Bevölkerung - Frauen",
          "Tabellen_ID": 201,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Auspendler:innen an der Bevölkerung - Männer",
          "Tabellen_ID": 202,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Einpendler",
          "Tabellen_ID": 370,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Einpendler an den SV Beschäftigten am Arbeitsort in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Auspendler",
          "Tabellen_ID": 371,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Auspendler an den SV Beschäftigten am Wohnort in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Pendlersaldo",
          "Tabellen_ID": 372,
          "Source": "Inkar",
          "Beschreibung": "Pendlersaldo je 100 SV Beschäftigte am Arbeitsort",
          "unit": "Anzahl/100",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Pendler mit Arbeitsweg 50 km und mehr",
          "Tabellen_ID": 373,
          "Source": "Inkar",
          "Beschreibung": "Anteil der SV Beschäftigten mit einem Arbeitsweg von 50 km und mehr am Wohnort in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Pendler mit Arbeitsweg 150 km und mehr",
          "Tabellen_ID": 374,
          "Source": "Inkar",
          "Beschreibung": "Anteil der SV Beschäftigten mit einem Arbeitsweg von 150 km und mehr am Wohnort in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Pendler mit Arbeitsweg 300 km und mehr",
          "Tabellen_ID": 375,
          "Source": "Inkar",
          "Beschreibung": "Anteil der SV Beschäftigten mit einem Arbeitsweg von 300 km und mehr am Wohnort in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        }
      ]
    },{
      "Bereich": "Pflege",
      "data": [
        {
          "Name": "Pflegebedürftige an der Gesamtbevölkerung",
          "Tabellen_ID": 19,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Pflegebedürftige an der älteren Bevölkerung",
          "Tabellen_ID": 264,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Pflegebedürftige - Ambulant",
          "Tabellen_ID": 20,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Pflegebedürftige - Vollstationär",
          "Tabellen_ID": 22,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Pflegebedürftige - Dauerhaft vollstationär",
          "Tabellen_ID": 23,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Pflegebedürftige - Kurzzeitig vollstationär",
          "Tabellen_ID": 24,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Pflegebedürftige - Teilstationär",
          "Tabellen_ID": 21,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Pflegegeldempfänger:innen",
          "Tabellen_ID": 25,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Plätze in Pflegeheimen",
          "Tabellen_ID": 263,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Personal in Pflegeheimen",
          "Tabellen_ID": 276,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Personal in Pflegediensten",
          "Tabellen_ID": 275,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Bevölkerungsentwicklung 2013 bis 2030",
          "Tabellen_ID": 589,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil ab 80-Jährige",
          "Tabellen_ID": 590,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Pflegebedürftige - Gesamt",
          "Tabellen_ID": 591,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Pflegebedürftige - Frauen",
          "Tabellen_ID": 593,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Pflegebedürftige - Männer",
          "Tabellen_ID": 592,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Leistungsbezieher:innen ohne Pflegestufe",
          "Tabellen_ID": 594,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil Pflegebedürftige",
          "Tabellen_ID": 596,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung der Pflegebedürftigen",
          "Tabellen_ID": 595,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil Angehörigenpflege",
          "Tabellen_ID": 603,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil ambulante Pflege",
          "Tabellen_ID": 604,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil stationäre Pflege",
          "Tabellen_ID": 605,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Angehörigenpflege 2013 bis 2030",
          "Tabellen_ID": 597,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Ambulante Pflege 2013 bis 2030",
          "Tabellen_ID": 598,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Stationäre Pflege 2013 bis 2030",
          "Tabellen_ID": 599,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Angehörigenpflege 2013 bis 2030",
          "Tabellen_ID": 606,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Ambulante Pflege 2013 bis 2030",
          "Tabellen_ID": 607,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Stationäre Pflege 2013 bis 2030",
          "Tabellen_ID": 608,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Personal in Vollzeitäquivalenten - Ambulant",
          "Tabellen_ID": 600,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Personal in Vollzeitäquivalenten - Stationär",
          "Tabellen_ID": 601,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Entwicklung des Personals in Vollzeitäquivalenten",
          "Tabellen_ID": 602,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Versorgungslücken - ambulante Pflege 2013 bis 2030",
          "Tabellen_ID": 609,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Versorgungslücken - stationäre Pflege 2013 bis 2030",
          "Tabellen_ID": 610,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil Versorgungslücken - ambulante Pflege 2013 bis 2030",
          "Tabellen_ID": 611,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Anteil Versorgungslücken - stationäre Pflege 2013 bis 2030",
          "Tabellen_ID": 612,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Prognose-Daten",
          "unit": "je 1.000 Einwohner:innen"
        }
      ]
    },{
      "Bereich": "Schüler:innen und Abschlüsse",
      "data": [
        {
          "Name": "Schulabgänger:innen allgmb. Schulen mit Fachhoch-/Hochschulreife - Gesamt",
          "Tabellen_ID": 32,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schulabgänger:innen allgmb. Schulen ohne Hauptschulabschluss - Gesamt",
          "Tabellen_ID": 33,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schulabgänger:innen allgmb./berufsb. Schulen ohne Hauptschulabschluss - Gesamt",
          "Tabellen_ID": 226,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schüler:innen an Grundschulen",
          "Tabellen_ID": 240,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schüler an Förderschulen",
          "Tabellen_ID": 237,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schüler:innen an Hauptschulen",
          "Tabellen_ID": 242,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schüler:innen an Realschulen",
          "Tabellen_ID": 243,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schüler:innen an Gesamtschulen",
          "Tabellen_ID": 239,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schüler:innen an Gymnasien",
          "Tabellen_ID": 241,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schüler:innen an Waldorfschulen",
          "Tabellen_ID": 238,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schüler:innen an Schularten mit mehreren Bildungsgängen",
          "Tabellen_ID": 244,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schüler:innen an Abendschulen/Kollegs",
          "Tabellen_ID": 236,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schüler:innen an Berufsschulen/Berufsfachschulen",
          "Tabellen_ID": 233,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schüler:innen an Fachschulen",
          "Tabellen_ID": 235,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schüler:innen an Berufsoberschulen/Techn. Oberschulen",
          "Tabellen_ID": 234,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schulabgänger:innen mit Förderschulabschluss - Gesamt",
          "Tabellen_ID": 224,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schulabgänger:innen allgmb./berufsb. Schulen ohne Hauptschulabschluss - Gesamt",
          "Tabellen_ID": 226,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schulabgänger:innen mit Hauptschulabschluss - Gesamt",
          "Tabellen_ID": 225,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schulabgänger:innen mit Realschulabschluss - Gesamt",
          "Tabellen_ID": 227,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Schulabgänger:innen allgmb./berufsb. Schulen mit Fachhoch-/Hochschulreife - Gesamt",
          "Tabellen_ID": 223,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        }
      ]
    },{
      "Bereich": "Soziale Lage",
      "data": [
        {
          "Name": "SGB II-Quote",
          "Tabellen_ID": 53,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Kinderarmut",
          "Tabellen_ID": 56,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Altersarmut",
          "Tabellen_ID": 51,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "SGB II-/SGB XII-Quote",
          "Tabellen_ID": 279,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Kinderarmut",
          "Tabellen_ID": 218,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Jugendarmut",
          "Tabellen_ID": 219,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Altersarmut",
          "Tabellen_ID": 220,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Einpersonen-Haushalte",
          "Tabellen_ID": 209,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Haushalte mit Kindern",
          "Tabellen_ID": 210,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Wohnfläche pro Person",
          "Tabellen_ID": 175,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Kaufkraft",
          "Tabellen_ID": 203,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Haushalte mit niedrigem Einkommen",
          "Tabellen_ID": 205,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Haushalte mit mittlerem Einkommen",
          "Tabellen_ID": 204,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Haushalte mit hohem Einkommen",
          "Tabellen_ID": 206,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Arbeitslose an den ausländischen SvB",
          "Tabellen_ID": 208,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Kinderarmut",
          "Tabellen_ID": 218,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Jugendarmut",
          "Tabellen_ID": 219,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Altersarmut",
          "Tabellen_ID": 220,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "SGB II-Quote",
          "Tabellen_ID": 221,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "ALG II-Quote",
          "Tabellen_ID": 222,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Breitbandversorgung - Private Haushalte",
          "Tabellen_ID": 305,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Haushaltsgröße",
          "Tabellen_ID": 141,
          "Source": "Inkar",
          "Beschreibung": "Personen je Haushalt",
          "unit": "Anzahl",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Haushalte mit Kindern",
          "Tabellen_ID": 143,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Haushalte mit Kindern an allen Haushalten in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Haushalte mit niedrigem Einkommen",
          "Tabellen_ID": 238,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Haushalte mit einem Nettoeinkommen von unter 1.500 pro Monat an den Haushalten insgesamt in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Haushalte mit mittlerem Einkommen",
          "Tabellen_ID": 239,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Haushalte mit einem Nettoeinkommen zwischen 1.500 und 3.600 pro Monat an den Haushalten insgesamt in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Haushalte mit hohem Einkommen",
          "Tabellen_ID": 240,
          "Source": "Inkar",
          "Beschreibung": "Anteil der Haushalte mit einem Nettoeinkommen von über 3.600 pro Monat an den Haushalten insgesamt in %",
          "unit": "%",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Kaufkraft",
          "Tabellen_ID": 241,
          "Source": "Inkar",
          "Beschreibung": "Kaufkraft je Einwohner in Euro",
          "unit": "Euro",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Einzelhandelsrelevante Kaufkraft",
          "Tabellen_ID": 242,
          "Source": "Inkar",
          "Beschreibung": "Einzelhandelsrelevante Kaufkraft je Einwohner in Euro",
          "unit": "Euro",
          "Ist_Daten": "Ist-Daten"
        }
      ]
    },{
      "Bereich": "Verkehr und Erreichbarkeit",
      "data": [
        {
          "Name": "Wohnungsnahe Grundversorgung - Apotheke",
          "Tabellen_ID": 308,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Wohnungsnahe Grundversorgung - Hausarzt",
          "Tabellen_ID": 312,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Wohnungsnahe Grundversorgung - Krankenhaus",
          "Tabellen_ID": 293,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Wohnungsnahe Grundversorgung - Grundschule",
          "Tabellen_ID": 309,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Wohnungsnahe Grundversorgung - Supermarkt",
          "Tabellen_ID": 310,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "PKW-Dichte",
          "Tabellen_ID": 277,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "PKW mit Elektroantrieb",
          "Tabellen_ID": 267,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Verunglückte im Verkehr",
          "Tabellen_ID": 286,
          "Source": "WVK",
          "Beschreibung": "X Personen zogen auf je 1.000 Einwohner:innen des betrachteten Gebiets mehr zu als daraus fortgezogen sind (bzw. umgekehrt, falls der Saldo negativ ausfällt). Betrachtet werden die Wanderungsverflechtungen zwischen der ausgewählten Gemeinde und den Kreisen und kreisfreien Städten im übrigen Bundesgebiet. Eine Betrachtung nur auf Gemeindeebene ist nicht möglich. Geringfügige Rundungsdifferenzen zwischen den ausgewiesenen Werten – zum Beispiel zwischen Zuzügen, Fortzügen und Wanderungssaldo einer Kommune – können vorkommen, da die Berechnungen nicht mit gerundeten Werten erfolgten.",
          "Ist_Daten": "Ist-Daten",
          "unit": "je 1.000 Einwohner:innen"
        },
        {
          "Name": "Erreichbarkeit von Autobahnen",
          "Tabellen_ID": 345,
          "Source": "Inkar",
          "Beschreibung": "Durchschn. Pkw-Fahrzeit zur nächsten BAB-Anschlussstelle in Minuten",
          "unit": "Minuten",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Erreichbarkeit von Flughäfen",
          "Tabellen_ID": 346,
          "Source": "Inkar",
          "Beschreibung": "Durchschn. Pkw-Fahrzeit zum nächsten internationalen Flughafen in Deutschland in Minuten",
          "unit": "Minuten",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Erreichbarkeit von IC/EC/ICE-Bahnhöfen",
          "Tabellen_ID": 347,
          "Source": "Inkar",
          "Beschreibung": "Durchschn. Pkw-Fahrzeit zum nächsten IC/ICE-Bahnhof in Minuten",
          "unit": "Minuten",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Straßenverkehrsunfälle",
          "Tabellen_ID": 367,
          "Source": "Inkar",
          "Beschreibung": "Straßenverkehrsunfälle insgesamt je 100.000 Einwohner",
          "unit": "Anzahl/100000",
          "Ist_Daten": "Ist-Daten"
        },
        {
          "Name": "Getötete im Straßenverkehr",
          "Tabellen_ID": 369,
          "Source": "Inkar",
          "Beschreibung": "Getötete im Straßenverkehr je 100.000 Einwohner",
          "unit": "Anzahl/100000",
          "Ist_Daten": "Ist-Daten"
        }
      ]
    }]
    
  


  }
}

