var count=0;
var table=document.createElement("table")
document.body.appendChild(table)

var head= document.createElement("thead")
table.appendChild(head)

var tr=document.createElement("tr")
head.appendChild(tr)

var th=document.createElement("th")
th.textContent="Si.No"
tr.appendChild(th)

var th1=document.createElement("th")
th1.textContent="Vechile No"
tr.appendChild(th1)

var th1=document.createElement("th")
th1.textContent="Vechile Type"
tr.appendChild(th1)

var th1=document.createElement("th")
th1.textContent="Owner Name"
tr.appendChild(th1)

var th1=document.createElement("th")
th1.textContent="Check  in"
tr.appendChild(th1)

var th1=document.createElement("th")
th1.textContent="Check  out"
tr.appendChild(th1)

var tbody=document.createElement("tbody")
table.appendChild(tbody)


var button=document.getElementById("but")
button.addEventListener("click",()=>{
var vechileno=document.getElementById("vechileno").value
var vechiletype=document.getElementById("vechiletype").value
var ownername=document.getElementById("ownername").value
var checkin=document.getElementById("checkin").value
var checkout=document.getElementById("checkout").value
//var inputs=document.querySelectorAll('input')
if(vechileno===''){
    alert("please enter the VechilNO")
    return false;
}
if(vechiletype==='select'){
    alert("please select the VechilType")
    return false;
}
if(ownername===''){
    alert("please enter the Ownername")
    return false;
}
if(checkin===''){
    alert("please enter the Checkin time")
    return false;
}
if(checkout===''){
    alert("please enter the checkout time")
    return false;
}
count++

var tr=document.createElement("tr")
tbody.appendChild(tr)

var th=document.createElement("td")
th.textContent=count
tr.appendChild(th)

var th1=document.createElement("td")
th1.textContent=document.getElementById("vechileno").value
tr.appendChild(th1)

var th1=document.createElement("td")
th1.textContent=document.getElementById("vechiletype").value
tr.appendChild(th1)


var th1=document.createElement("td")
th1.textContent=document.getElementById("ownername").value
tr.appendChild(th1)

var th1=document.createElement("td")
th1.textContent=document.getElementById("checkin").value
tr.appendChild(th1)

var th1=document.createElement("td")
th1.textContent=document.getElementById("checkout").value
tr.appendChild(th1)

// document.getElementById('vechileno').value = ''

// document.getElementById('ownername').value = ''
// document.getElementById('checkin').value = ''
// document.getElementById('checkout').value = ''

})