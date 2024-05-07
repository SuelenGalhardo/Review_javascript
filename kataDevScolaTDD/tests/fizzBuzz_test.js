
import { expect } from "chai"



function FizzBuzz (number){
    if( number == 3 ) {
      return "Fizz" 
    } else if (number == 5){
     return "buzz"
     
    }
    
   }
   
   describe("Fizz buzz", () => {
     it("returns fizz when the number is three", () => {
       // Arrange
       const numberTest = 3
       // Action to test
       const action = FizzBuzz (numberTest) 
       // Assert
       expect(action).toBe("Fizz")
     })
     it("returns buzz when the number is five", () => {
       // Arrange
       const numberTest = 5
       // Action to test
       const action = FizzBuzz (numberTest) 
       // Assert
       expect(action).toBe("buzz")
     })
   })
   