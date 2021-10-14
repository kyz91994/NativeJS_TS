import {GovernmentBuildingsType, HousesType,CityType} from "../02_objectTests/02";

export function addMoneyToBudget(building:GovernmentBuildingsType, sum:number){
    building.budget += sum
}
export function repairHouse(house:HousesType){
    house.repaired = true
}
export function toFireStaff(building:GovernmentBuildingsType, people:number ){
    building.staffCount -= people
}
export function toHireStaff(building: GovernmentBuildingsType, people: number){
    building.staffCount += people
}
export function createMessage (city: CityType){
    return `Hello ${city.title} citizens, i wish luck for all ${city.citizensNumber}`

}