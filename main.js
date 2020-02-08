funkcja(10,-10);
function funkcja (y, z){
    let x;

    x = y+z;
    console.log('Wynik dodawania wynosi '+x);   
    if(x<0){
        console.log('Wynik jest ujemny');
    }

    x = y-z;
    console.log('Wynik odejmowania wynosi '+x);
    if(x<0){
        console.log('Wynik jest ujemny');
    }
    
    x = y*z;
    console.log('Wynik mnożenia wynosi ' +x);
    if(x<0){
        console.log('Wynik jest ujemny');
    }
}