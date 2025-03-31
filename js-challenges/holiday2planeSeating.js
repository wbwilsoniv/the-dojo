/*
Description:
Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 41-60 = back). This number is followed by a letter, A-K with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:

'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'.

#Fundamentals #Strings #Arrays #Regex
*/

// Code - Works

function planeSeat(a){
    if (!/^([1-9]|[1-5][0-9]|60)[A-HK]$/.test(a)) {
      return "No Seat!!";
    }
    
    const seatNumber = parseInt(a.match(/\d+/)[0]);
    const seatLetter = a.charAt(a.length - 1);
    
    let section;
    if (seatNumber >= 1 && seatNumber <= 20) {
      section = "Front";
    } else if (seatNumber <= 40) {
      section = "Middle";
    } else if (seatNumber <= 60) {
      section = "Back";
    } else {
      return "No Seat!!";
    }
    
    let cluster;
    if (/[A-C]/.test(seatLetter)) {
      cluster = "Left";
    } else if (/[D-F]/.test(seatLetter)) {
      cluster = "Middle";
    } else if (/[GHK]/.test(seatLetter)) {
      cluster = "Right";
    } else {
      return "No Seat!!";
    }
  
    return `${section}-${cluster}`;
  
  }

// Refactored

function planeSeat(a){
    const number = parseInt(a);
    const letter = a[a.length - 1];
    if (number > 60 || letter == 'I' || letter == 'J') return 'No Seat!!';
    return `${number > 20 ? number > 40 ? 'Back-' : 'Middle-' : 'Front-'}${letter > 'C' ? letter > 'F' ? 'Right' : 'Middle' : 'Left'}`;
  }

