let start = (yourGirl) => {
    var ourGirl = yourGirl.id
    var botGirl = botChoice()
    console.log(ourGirl)
    console.log(botGirl)
    console.log(yourGirl.src)
    //seethe winner
    //display massage 
    let result = seeTheWinner (ourGirl,botGirl)
    message(yourGirl,result)
     
    


}

let botChoice = () =>{
    let ra9m = randomNumber()
    return ['sara', 'kanza' , 'momy'][ra9m]
}

function randomNumber(){
    return Math.floor(Math.random()*3)
}

let seeTheWinner = (ourGirl,botGirl) =>{
    let girl ={
        'sara':1200,'kanza':300,'momy':7000
    }
    if(girl[ourGirl] == girl[botGirl]){
        return 0.5
    }
    if(girl[ourGirl] > girl[botGirl]){
        return 1
    }
     if(girl[ourGirl] < girl[botGirl]){
            return 0
    }
}

let message = ( yourGirl , result) =>{
    document.getElementById('sara').remove()
    document.getElementById('kanza').remove()
    document.getElementById('momy').remove()
    document.getElementById('main').innerHTML="<img src ='"+yourGirl.src+"'style='transition = 0.7s' class='classimg'>"
    let mana3raf = {
        1:'winner',
        0:'loser',
        0.5:'the same result'
    }
    let div = document.createElement('h1')
   div.innerHTML= mana3raf[result]
   div.setAttribute('class','ktiba')
    document.getElementById('main').appendChild(div)
    
   
            
            
           
        

    
}

