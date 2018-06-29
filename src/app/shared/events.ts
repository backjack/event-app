export interface Event {

     id:string,
     name: string,
     location ?:any,
     imgUrl: string,
     startDate : Date,
     price: number,
     professor:string,
     duration: number,
     online?: string

}
