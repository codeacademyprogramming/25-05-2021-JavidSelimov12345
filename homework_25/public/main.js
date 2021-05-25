





let basket = document.getElementsByClassName('basket')[0]
let basket_list= document.getElementsByClassName('basket_elements')[0]
let children_list=basket_list.childElementCount
let counts=document.getElementsByClassName('counts')[0]
counts.innerText=children_list
basket.addEventListener('click',function(){
    if(basket_list.style.display==='block'){
        basket_list.style.display='none'
    }
    else{
        basket_list.style.display='block'
    }
    
})


function displayRadioValue() {
    var ele = document.getElementsByName('radAnswer');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        document.getElementById("result").innerHTML
                = "Gender: "+ele[i].value;
    }
}

