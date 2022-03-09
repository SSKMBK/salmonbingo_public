function onclick_color(style,weaponID) {

    if (document.getElementById(weaponID).style.background=="rgb(255, 165, 0)"){

        button= document.getElementById(weaponID);
        button.style.background = "#ffffff";

    }

    else{
        button= document.getElementById(weaponID);
        button.style.background = "#ffa500";
    }
    
}

function updatebutton(){
  update=document.getElementById("update")
  QandA=document.getElementById("QandA")
  update.style.display="block";
  QandA.style.display="none";
}

function QandAbutton(){
  update=document.getElementById("update")
  QandA=document.getElementById("QandA")
  update.style.display="none";
  QandA.style.display="block";
}

function closebutton(){
  update=document.getElementById("update")
  QandA=document.getElementById("QandA")
  update.style.display="none";
  QandA.style.display="none";
}
