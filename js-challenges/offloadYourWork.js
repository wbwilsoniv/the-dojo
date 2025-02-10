/*
Description:
You are the best freelancer in the city. Everybody knows you, but what they don't know, is that you are actually offloading your work to other freelancers and and you rarely need to do any work. You're living the life!

To make this process easier you need to write a method called workNeeded to figure out how much time you need to contribute to a project.

Giving the amount of time in minutes needed to complete the project and an array of pair values representing other freelancers' time in [Hours, Minutes] format ie. [[2, 33], [3, 44]] calculate how much time you will need to contribute to the project (if at all) and return a string depending on the case.

If we need to contribute time to the project then return "I need to work x hour(s) and y minute(s)"
If we don't have to contribute any time to the project then return "Easy Money!"
*/

// Initial Attempt

function workNeeded(projectMinutes, freelancers){
    let pHours = projectMinutes / 60;
    let pMins = 60 - pHours;
    let fHours = freelancers[0][0];
    let fMins = freelancers[0][1];
    let fHtoM = fHours * 60;
    let fLML = fHtoM + fMins;
    
    let workNeeded = projectMinutes - fLML;
    let hNeeded = workNeeded / 60;
    let mNeeded = workNeeded % 60;
    console.log(fHtoM, fLML, workNeeded);
    let response = ""
    workNeeded <= 0 ? response = "Easy Money!" : response = `I need to work ${workNeeded/60} hour(s) and ${workNeeded % 60} minute(s)`;
    console.log(response);
    return response;
  }

  // Working Solution

  function workNeeded(projectMinutes, freelancers){
    const totFlMins = freelancers.reduce((total, [hours, minutes]) => {
      return total + (hours * 60 + minutes);
    }, 0);
    const minsLeft = projectMinutes - totFlMins;
    let response = ""
      if(minsLeft <= 0){
        response = "Easy Money!"
      } else {
        const hNeeded = Math.floor(minsLeft / 60);
        const mNeeded = minsLeft % 60;
        response = `I need to work ${hNeeded} hour(s) and ${mNeeded} minute(s)`;
      };
    return response;
  }

  // Refactored

  const workNeeded = (p, f) => (p = f.reduce((s,[h,m])=> s - h*60- m,p)) <= 0  ? 
                "Easy Money!" :
                `I need to work ${p/60|0} hour(s) and ${p%60} minute(s)`;