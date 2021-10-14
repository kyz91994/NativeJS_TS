import {CityType} from "../02_objectTests/02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";
import {create} from "domain";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [ {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
        },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            }

        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                    title: "Central Str"}
                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"}
                }
            }
        ],
        citizensNumber: 1000000
    }
})

//1 create in file function to pass tests
test('Budget should be changed for HOSPITAL', ()=>{
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);
})
//2 изменить бюджет fire-station
test('Budget should be changed fo FIRE-STATION', ()=>{
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

//3 починить дом
test('House should be repaired', ()=>{
    repairHouse(city.houses[1]);
    expect(city.houses[1]).toBeTruthy()
})
//4 уменьшить кол-во персонала
test('staff should be increased', ()=>{
    toFireStaff(city.governmentBuildings[0],20);
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})
test('staff should be rise up', ()=>{
    toHireStaff(city.governmentBuildings[0],20);
    expect(city.governmentBuildings[0].staffCount).toBe(220)
})

test('Greeting message should be correct fo city', ()=>{
    const message = createMessage(city);
    expect(message).toBe("Hello New York citizens, i wish luck for all 1000000")
})