import { Properties } from "./Properties";
import { Geometry } from "./Geometry";

export class Feature {
  public type?: string;
  public properties ?:Properties ;
  public geometry?: Geometry ;


  constructor(){}
}

