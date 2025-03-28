/*
Description:
Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 41-60 = back). This number is followed by a letter, A-K with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:

'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'.

FundamentalsStringsArrays
*/

// Code
function planeSeat(a){
    let location = "";
    let row;
    const seatsAvail = /[ABCDEFGHK]/gi
    console.log(a.match(seatsAvail))
    if(a.match(seatsAvail) === null){
      location = "No Seat!!"
      return location;
    }
    let seatExists = true;
    let seat = a.slice(-1).toUpperCase();
    if(seat === "A" || "B" || "C"){
      seat = "Left";
    } else if (seat === "D" || "E" || "F") {
      seat = "Middle";
    } else if (seat === "G" || "H" || "K") {
      seat = "Right";
    } else {
      seatExists = false;
      console.log(seat, seatExists)
    }
    if(!seatExists) return "No Seat!!";
    if(a.length === 2) {
      row = a.slice(0,1);
    } else if(a.length === 3) {
      row = a.slice(0,2);
    }
    console.log(seat, row);
    if(row >= 1 && row <= 20){
      row = "Front-";
    } else if(row > 20 && row <= 40){
      row = "Middle-"
    } else if(row > 40 && row <= 60) {
      row = "Back-"
    } else {
      seatExists = false;
    }
    console.log(location,seat)
   if(seatExists) return `${row}${seat}`;
   if(!seatExists) return 'No Seat!!';
  }
