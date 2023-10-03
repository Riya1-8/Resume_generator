// profile picture
let profilepic=document.getElementById("profile-pic");
let inputfile=document.getElementById("input-file");
inputfile.onchange=function(){
    profilepic.src=URL.createObjectURL(inputfile.files[0]);
}


function addnewWEfield(){
    // console.log("adding new field")
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("wefield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("rows","2");
    newnode.setAttribute("placeholder","Enter here");

    let weobj=document.getElementById("we");
    let weaddbtnobj=document.getElementById("addnewWEbtn");
    weobj.insertBefore(newnode,weaddbtnobj);

}
function addnewAQfield(){
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("aqfield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("rows","2");
    newnode.setAttribute("placeholder","Enter here");

    let aqobj=document.getElementById("aq");
    let aqaddbtnobj=document.getElementById("addnewAQbtn");
    aqobj.insertBefore(newnode,aqaddbtnobj);

 }
//  generating CV 

function generateCV(){
     let nameField=document.getElementById("nameField").value;
    //  document.getElementById("nameT").innerHTML=nameField;
    let nameT=document.getElementById("nameT");
    nameT.innerHTML=nameField;
    // direct 
    document.getElementById("name2T").innerHTML=nameField;

    // contact 
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    //address
    document.getElementById("addrT").innerHTML=document.getElementById("addrField").value;

// links
document.getElementById("emT").innerHTML=document.getElementById("emailField").value;
document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
document.getElementById("linkT").innerHTML=document.getElementById("linkField").value;
//objective
document.getElementById("objectiveT").innerHTML=document.getElementById("objField").value;
//work experience
 let wes=document.getElementsByClassName("wefield");
 let str="";
 for(let e of wes)
{
    str=str+`<li> ${e.value}</li>`;
}
document.getElementById("weT").innerHTML=str;

//academic Qualification

let aqs=document.getElementsByClassName("aqfield");
let str1="";
for(let a of aqs)
{
    str1=str1+`<li> ${a.value}</li>`;
}
document.getElementById("aqT").innerHTML=str1;
document.getElementById("cv-form").style.display="none";
document.getElementById('cv-template').style.display="block";


}
function printCV(){
    window.print();

}