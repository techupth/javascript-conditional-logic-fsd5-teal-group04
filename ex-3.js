//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

//Start coding here

//   lightBulbStatus === ""
//     ? console.log("Please choose the correct input (On/Off)")
//     : lightBulbStatus === "On"
//     ? console.log("Light bulb is On."):lightBulbStatus==="Off" ? console.log("Light bulb is Off."):null

lightBulbStatus === "On"
  ? console.log("Light bulb is On.")
  : lightBulbStatus === "Off"
  ? console.log("Light bulb is Off.")
  : console.log("Please choose the correct input (On/Off)");
