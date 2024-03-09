import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatahubComponent } from './components/datahub/datahub.component';
import { MainComponent } from './components/main/main.component';
import { DaseinsvorsorgeComponent } from './components/daseinsvorsorge/daseinsvorsorge.component';
import { SimulationComponent } from './components/simulation-section/virusinfektion/covid/simulation/simulation.component';
import { RaumAnalysenComponent } from './components/raum-analysen/raum-analysen.component';
import { LoginComponent } from './components/login/login.component';
import { TileviewComponent } from './components/tileview/tileview.component';
import { Datahub2Component } from './components/datahub2/datahub2.component';
import { DataRegioComponent } from './components/datahub2/data-regio/data-regio.component';
import { DataSynthComponent } from './components/datahub2/data-synth/data-synth.component';
import { RaumMainComponent } from './components/raum-analysen/raum-main/raum-main.component';
import { ReachMatrixComponent } from './components/raum-analysen/reach-matrix/reach-matrix.component';
import { DataSynthOverviewComponent } from './components/datahub2/data-synth-overview/data-synth-overview.component';
import { DataSynthPopComponent } from './components/datahub2/data-synth-pop/data-synth-pop.component';
import { DaseinsvorsorgeOverviewComponent } from './components/daseinsvorsorge/daseinsvorsorge-overview/daseinsvorsorge-overview.component';
import { NachfrageberechnungComponent } from './components/daseinsvorsorge/nachfrageberechnung/nachfrageberechnung.component';
import { SimulationSectionComponent } from './components/simulation-section/simulation-section.component';
import { VirusinfektionComponent } from './components/simulation-section/virusinfektion/virusinfektion.component';
import { CovidComponent } from './components/simulation-section/virusinfektion/covid/covid.component';
import { EigenesSzenarioComponent } from './components/simulation-section/virusinfektion/covid/eigenes-szenario/eigenes-szenario.component';
import { InfluenzaComponent } from './components/simulation-section/virusinfektion/influenza/influenza.component';
import { InfrastukturComponent } from './components/datahub2/infrastuktur/infrastuktur.component';


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'start', component: MainComponent },
  { path: 'datahub', component: DatahubComponent },
  { path: 'datahub2', component: Datahub2Component },
  { path: 'datahub2/data-regio', component: DataRegioComponent },
  { path: 'datahub2/data-synth', component: DataSynthOverviewComponent },
  { path: 'datahub2/data-synth/prognose', component: DataSynthComponent },
  { path: 'datahub2/data-synth/pop', component: DataSynthPopComponent  },
  { path: 'prognosen', component: DaseinsvorsorgeOverviewComponent },
  { path: 'analysen/notfallinfrastruktur', component: DaseinsvorsorgeComponent },
  { path: 'prognosen/nachfrageberechnung', component: NachfrageberechnungComponent },
  { path: 'analysen', component: RaumAnalysenComponent },
  { path: 'analysen/infrastructure', component: RaumMainComponent },
  { path: 'analysen/reachability', component: ReachMatrixComponent },
  { path: 'simulation-section/virusinfektion/covid/simulation', component: SimulationComponent },
  { path: 'tileview', component: TileviewComponent },
  { path: 'simulation-section', component: SimulationSectionComponent },
  { path: 'simulation-section/virusinfektion', component: VirusinfektionComponent },
  { path: 'simulation-section/virusinfektion/covid', component: CovidComponent },
  { path: 'simulation-section/virusinfektion/covid/eigenes-szenario', component : EigenesSzenarioComponent },
  { path: 'simulation-section/virusinfektion/influenza', component : InfluenzaComponent},
  { path: 'datahub2/infrastuktur', component : InfrastukturComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
