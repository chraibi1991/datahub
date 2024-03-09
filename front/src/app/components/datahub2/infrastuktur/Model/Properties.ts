export class Properties {
    public id: string;
    public from: string;
    public to: string;
    public length: number;
    public freespeed: number;
    public capacity: number;
    public permlanes: number;
    public oneway: number;
    public modes: string;
    public Street: string;
  
  
    constructor(
       id: string,
     from: string,
     to: string,
     length: number,
     freespeed: number,
     capacity: number,
     permlanes: number,
     oneway: number,
     modes: string,
     Street: string,
    ) {
      this.id=id;
      this.from=from;
      this.to=to;
      this.length=length;
      this.freespeed=freespeed;
      this.capacity=capacity;
      this.permlanes=permlanes;
      this.oneway=oneway;
      this.modes=modes;
      this.Street=Street;
  
  
    }
  }
  