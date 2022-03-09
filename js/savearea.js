function savebutton(){

    if(window.confirm("前回保存したデータは上書きされます。")){

        var local_list=[];
	var list_message="[保存済みデータ]\n";
	
	for(i=0;i<24;i++){
		var weaponID="weapon"+i;
		var savedata=document.getElementById(weaponID).textContent;
		local_list.push(savedata);
		list_message+=savedata+",";
	}

        localStorage.setItem('salmonrandomweapondata_storage', JSON.stringify(local_list))
        document.getElementById("save_weapondata").innerHTML=list_message;

    }

    else{
    }

}

function restorationbutton(){
    
    if(window.confirm("現在の入力内容は上書きされます。")){

        var storagedata=JSON.parse(localStorage.getItem('salmonrandomweapondata_storage'))

	for(i=0;i<24;i++){
	var storageweapon=document.createTextNode(storagedata[i])
	var weaponID="weapon"+i
	document.getElementById(weaponID).innerHTML=storageweapon.textContent;
	}
    }else{
    }
}

function deletebutton(){
    if(window.confirm("本当に保存データを削除しますか？")){

        localStorage.removeItem("salmonrandomweapondata_storage")
        document.getElementById("save_weapondata").innerHTML="削除しました";

    }

    else{
    }
}