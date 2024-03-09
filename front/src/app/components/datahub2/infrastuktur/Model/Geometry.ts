export class Geometry {
    //public type :"Point" | "MultiPoint" | "LineString" | "MultiLineString" | "Polygon" | "MultiPolygon" | "GeometryCollection" | "Feature" | "FeatureCollection"
    public type:string
    ;
    public coordinates:Array<Array<number>> ;
  
    constructor(type:string,
      coordinates:Array<Array<number>> ) {
        this.type=type;
        this.coordinates=coordinates;
  
    }
  }
  