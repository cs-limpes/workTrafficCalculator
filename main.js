
let trafficGoal = 0;
let leadsGoal = 0;
// new total leads goal/conversion rate 1
function webTrafficGoal() {
      let var1 = document.querySelector("#ntlcalc").value
      let var2 = document.querySelector("#wtCR").value
      document.querySelector("#wtrcalc").innerText = Number(var1/var2);
}

 // total sales goal / total leads + conversion rate
function totalLeadsGoal(){
      let var3 = document.querySelector("#wtrcalc").innerText.value
      let var4 = document.querySelector("#tlCR").value
      document.querySelector("#ntlcalc").innerText = Number(var3/var4);
}