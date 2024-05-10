import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {CookieService} from 'ngx-cookie-service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { DatahubComponent } from './components/datahub/datahub.component';
import { RaumAnalysenComponent } from './components/raum-analysen/raum-analysen.component';
import { DaseinsvorsorgeComponent } from './components/daseinsvorsorge/daseinsvorsorge.component';
import { SimulationComponent } from './components/simulation-section/virusinfektion/covid/simulation/simulation.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { DatahubService } from './service/datahubservice/datahubservice.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { RegioService } from './service/regioservice/regioservice.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { Storageservice } from './service/storageservice-component/storageservice-component.component';
import {MatButtonModule} from '@angular/material/button';
import { TileviewComponent } from './components/tileview/tileview.component';
import { Datahub2Component } from './components/datahub2/datahub2.component';
import { MyCarouselComponent } from './components/my-carousel/my-carousel.component';
import { DataRegioComponent } from './components/datahub2/data-regio/data-regio.component';
import { DataSynthComponent } from './components/datahub2/data-synth/data-synth.component';
import { DataMainComponent } from './components/datahub2/data-main/data-main.component';
import { MatInputModule } from '@angular/material/input';
import { NgChartsModule } from 'ng2-charts';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table'  
import {MatRadioModule} from '@angular/material/radio';
import { GraphViewerComponent } from './components/graph-viewer/graph-viewer.component';
import { RaumMainComponent } from './components/raum-analysen/raum-main/raum-main.component';
import { ReachMatrixComponent } from './components/raum-analysen/reach-matrix/reach-matrix.component';
import { ReachConfigComponent } from './components/popup/reach-config/reach-config.component';
import { RoutingserviceComponent } from './service/routingservice/routingservice.component';
import { ChartContainerComponent } from './components/chart-container/chart-container.component';
import { VorsorgeserviceComponent } from './components/daseinsvorsorge/vorsorgeservice/vorsorgeservice.component';

import { DatePipe } from '@angular/common';
import { DataSynthOverviewComponent } from './components/datahub2/data-synth-overview/data-synth-overview.component';
import { DataSynthPopComponent } from './components/datahub2/data-synth-pop/data-synth-pop.component';
import { DaseinsvorsorgeOverviewComponent } from './components/daseinsvorsorge/daseinsvorsorge-overview/daseinsvorsorge-overview.component';
import { SimulationService } from './service/simulationservice/simulation.service';
import { NachfrageberechnungComponent } from './components/daseinsvorsorge/nachfrageberechnung/nachfrageberechnung.component';
import { SimulationSectionComponent } from './components/simulation-section/simulation-section.component';
import { VirusinfektionComponent } from './components/simulation-section/virusinfektion/virusinfektion.component';
import { CovidComponent } from './components/simulation-section/virusinfektion/covid/covid.component';
import { EigenesSzenarioComponent } from './components/simulation-section/virusinfektion/covid/eigenes-szenario/eigenes-szenario.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { InfluenzaComponent } from './components/simulation-section/virusinfektion/influenza/influenza.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { InfrastukturComponent } from './components/datahub2/infrastuktur/infrastuktur.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReportModalComponent } from './components/datahub2/data-regio/report-modal/report-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatahubComponent,
    RaumAnalysenComponent,
    DaseinsvorsorgeComponent,
    SimulationComponent,
    MainComponent,
    LoginComponent,
    
    DatahubService,
    RegioService,
    TileviewComponent,
    Datahub2Component,
    MyCarouselComponent,
    DataRegioComponent,
    DataSynthComponent,
    DataMainComponent,
    GraphViewerComponent,
    RaumMainComponent,
    ReachMatrixComponent,
    ReachConfigComponent,
    RoutingserviceComponent,
    ChartContainerComponent,
    VorsorgeserviceComponent,
    DataSynthOverviewComponent,
    DataSynthPopComponent,
    DaseinsvorsorgeOverviewComponent,
    NachfrageberechnungComponent,
    SimulationSectionComponent,
    VirusinfektionComponent,
    CovidComponent,
    EigenesSzenarioComponent,
    InfluenzaComponent,
    InfrastukturComponent,
    ReportModalComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgChartsModule, 
    MatExpansionModule,
    MatRadioModule,
    MatFormFieldModule, 
    MatSliderModule,
    MatProgressSpinnerModule,
    MatInputModule,
    HttpClientModule, 
    MatButtonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatListModule, 
    FormsModule, 
    MatSelectModule,
    MatSlideToggleModule,
    LeafletModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule,
    MatCheckboxModule,  
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonToggleModule,
    TypeaheadModule,
    MatDialogModule
  ],
  providers: [
    DatahubService, 
    HttpClient,
    RegioService, 
    Storageservice,  
    RoutingserviceComponent, 
    VorsorgeserviceComponent,
    DatePipe,
    CookieService,
    SimulationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
