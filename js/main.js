let sounds = document.querySelectorAll("audio");
let key = document.querySelectorAll(".key");
console.log("cl key =" + key);

//On boucle sur les balises audios
for (let i = 0; i < sounds.length; i++) {
    
    // On récupère toute les key des audios 
    let keysound = sounds[i].getAttribute("data-key");

    console.log("cl de sound =" + keysound);
   
    window.addEventListener("keydown", function(event){
        // Si l'input ce repeate on return false
        if (event.repeat){
            return(false);
        }
        // On compare la valeur de notre key avec l'input appuyer
        if (keysound == event.keyCode){
            console.log("cl de event.keyCode[i] =" + event.keyCode);
        //Si la condition est respecté, on ajoute les classes a key
            key[i].classList.add('playing','sound');
            sounds[i].play();
        } 
    
    })
    
    window.addEventListener("keyup", function(event){
        
        // On compare la valeur de notre key avec l'input appuyer
        if (keysound == event.keyCode){
            console.log("eventkeyCode[i] =" + event.keyCode);
        //On retire les classes ajouté a key
            key[i].classList.remove('playing','sound');
            sounds[i].pause()
            sounds[i].currentTime = 0

        } 

    })
}
// FIN DE BOUCLE


