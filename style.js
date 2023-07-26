 
//fonction qui évalue le chiffre et renvoie la sortie
function calculer() 
{ 
    let a = document.getElementById("resultat").innerHTML 
    let b = eval(a) 
    document.getElementById("resultat").innerHTML= b 
} 
//fonction qui affiche la valeur
function afficher(val) 
{ 
    document.getElementById("resultat").innerHTML+=val 
} 
//fonction qui efface l'écran 
function effacer() 
{ 
    document.getElementById("resultat").innerHTML = "" 
} 
