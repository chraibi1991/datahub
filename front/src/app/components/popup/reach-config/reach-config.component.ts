import { Component, OnInit } from '@angular/core';
import { ReachMatrixComponent } from '../../raum-analysen/reach-matrix/reach-matrix.component'
import { DatahubService } from '../../../service/datahubservice/datahubservice.component';
import { RoutingserviceComponent } from '../../../service/routingservice/routingservice.component';
import { DomSanitizer } from '@angular/platform-browser';
import { Storageservice } from '../../../service/storageservice-component/storageservice-component.component';
import { SimulationService } from 'src/app/service/simulationservice/simulation.service';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';


@Component({
  selector: 'app-reach-config',
  templateUrl: './reach-config.component.html',
  styleUrls: ['./reach-config.component.css']
})
export class ReachConfigComponent implements OnInit {

rangeMin:any
rangeMax:any
  async setPop(pop: string) {
  this.step = 6
  this.pop=pop;
 var  years = await this.routingservice.getYearPopArray(pop)
//@ts-ignore
 years.sort((a:any, b:any) => parseInt(a) - parseInt(b));
 //@ts-ignore
  this.rangeMin=years[0];
  //@ts-ignore
  this.rangeMax=years[years.length - 1]


}
  src: any = []; 



  minAge = 0;
  maxAge = 100;
  umkreisMode = 2;


  latlng: any
  meta: any;
  step = 0;
  selectedMode: any = 0;
  selectedEinrichtungen: any;
  within_flg!: boolean;
  transportMode!: string;
  gemeindeebene = false;
  layers: any;
  selectedGemeinde: any;
  popYear: number = 2023;
  radius: number = 0;
  radiusObj = {
    radius: 0,
    isDistance: true
  }
  spin = false;
png: any;

/////////////ahmed Var
adressList:any = [];
adress:any
selectedAddress:any="";
filteredAdressList: string[] = [];
selectedCoordinates: any[] | undefined;
adressListCor:any= [];
showDropdown: boolean = false;
progress:any= 0.5
checkName:boolean = false;
needDialog:boolean=false;
popOptions:any;
pop:any;


fillList() {
  this.simulationsService.getAdress().subscribe((options: any) => {
      options.features.forEach((feature: any) => {
        const s = feature.properties?.street_name;
        const c = feature.geometry?.coordinates;
        this.adressListCor!.push({
          adress: s,
          coord: c
        });
        this.adressList.push(s);
      });
      this.adressList = Array.from(new Set(this.adressList));
  });
}

selectedCoordinatesLatLng:any;
getCoordinates() {
  this.checkName=false;
  this.showDropdown = false;
  if (this.selectedAddress) {
    const selectedAddressObject = this.adressListCor.find((item:any) => item.adress === this.selectedAddress);
    if (selectedAddressObject) {
      this.selectedCoordinatesLatLng={
        lat:selectedAddressObject.coord[1],
        lng:selectedAddressObject.coord[0]
      }
    }
  }
  console.log(this.selectedCoordinatesLatLng)
  this.storageService.setSelectedMarker(this.selectedCoordinatesLatLng);
  //this.storageService.setStreetName(this.selectedAddress)
}

completeDrop(){
  // Filtern Sie die Adressen, die zur Suchanfrage passen
  this.filteredAdressList = this.adressList.filter((address:any) => address.toLowerCase().includes(this.selectedAddress.toLowerCase()));
  this.showDropdown = true;
}

 


  async chooseLocation() {
    this.checkName=true;
    this.selectedAddress=undefined
    //@ts-ignore
    document.getElementById("dialog").close();
    this.reachComponent.addMarker();

  }


  async checkSteetName() {
    console.log('Überprüfen');
    if(this.checkName){
      //@ts-ignore
        await this.storageService.setStreetName(this.reachComponent.newMarker?._latlng);
          console.log('Überprüfen');
          if (this.storageService.imagePath !== '') {
            console.log('Überprüfen 2');
            this.selectedAddress = await this.storageService.getStreetName();
            console.log(this.selectedAddress);
      
            if (this.selectedAddress !== undefined) {
              if(this.selectedAddress ==''){
                this.selectedAddress='Straßennamen nicht gefunden'
              }
              
            }
          }
         
    }
    
  }

 sleep(ms:any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  setValue($event: Event, arg1: string) {
    //@ts-ignore
    var val = Number($event.target.ariaValueText)

    switch (arg1) {
      case 'max':
        this.maxAge = val;
        break;
      case 'min':
        this.minAge = val;
        break;
      case 'popYear':
        this.popYear = val;
        break;
      case 'radius':
        this.radius = val;
        this.radiusObj.radius = val;
        this.radiusObj.isDistance = true;
        break;
      case 'time':
        this.radius = val;
        this.radiusObj.radius = val;
        this.radiusObj.isDistance = false;
        break;

    }
  }


  displayRaster(res: any) {

    //console.log(res); 
    //this.storageService.setResult(res); 

    this.reachComponent.updateLayerRaster();

  }

  closeDialog() {
    this.step = 0;
    this.spin = false;
    //@ts-ignore
    document.getElementById("dialog").close();
  }


  async endDialog() {

    var res: any;

    this.spin = true;
 

    if (this.selectedMode == 0) {

      var umkreisRequest = {
        type: "Umkreissuche",
        position: this.storageService.getSelectedMarker(),
        gesuchter_typ: this.selectedEinrichtungen,
        only_burgenlandkreis: this.within_flg,
        radius_meter: this.radiusObj.radius * 1000,
        radius_time: this.radiusObj.radius,
        mode: this.transportMode,
        street_name:this.selectedAddress,
      }

      console.log(umkreisRequest);
      try{
      if (this.radiusObj.isDistance) {
        res = await this.routingservice.getUmkreissuche(umkreisRequest)
      } else {
        res = await this.routingservice.getIsochrone(umkreisRequest)
      }
    } catch(error) {
      //alert("Error /GET Umkreissuche"); 
      this.spin = false; 
      this.step = 0;
      //this.closeDialog();
      res='empty';
      this.needDialog=true;
    
  
    }
      if(res!='empty'){
        this.storageService.setResult(res, undefined);
        this.closeDialog();
      }
    }
    else {
      var rasterRequest = {
        type: "Rastersuche",
        pop: this.pop,
        year: this.popYear,
        age_from: this.minAge,
        age_to: this.maxAge,
        gemeinde: this.selectedGemeinde,
        mode: this.transportMode,
        gesuchter_typ: this.selectedEinrichtungen,
        only_burgenlandkreis: this.within_flg,
      }


      try{
      res = await this.routingservice.getRasterAnalyse(rasterRequest);
      console.warn("res", res)
      this.closeDialog();}
      catch(error) {
        //alert("Error /GET Rasteranalyse"); 
        this.spin = false; 
        this.step = 0;

        //this.closeDialog();
        res='empty';
        this.needDialog=true;
 
      }

      if(res!='empty'){
        this.storageService.setResult(res, undefined);
        this.closeDialog();
      }
     // this.displayRaster(res);
    }

    if(res!='empty'){
      this.reachComponent.updateResult(0);
    }
    

  
    //this.closeDialog();
  }


  constructor(private reachComponent: ReachMatrixComponent, public storageService: Storageservice, private datahub: DatahubService, public routingservice: RoutingserviceComponent, private _sanitizer: DomSanitizer,private simulationsService:SimulationService) {
    setInterval(async () => {
      //this.latlng = this.storageService.getSelectedMarker();
 
      //this.imagePath = this.storageService.getIMGSource()
      this.layers = this.storageService.getCurrentShapes()
      //console.log(this.layers)
    }, 1000);






  }
  async ngOnInit(): Promise<void> {
    this.fillList();
    this.meta = await this.datahub.getEinrichtungenMeta();
    this.popOptions= await this.routingservice.getPopulation();
    
  }


  auswahlInLandkreis(mode: boolean){
    this.within_flg = mode;
    if(this.selectedMode == 0) {
      this.endDialog();
    } else{
      this.step = 5; 
    }


  }







}
