var form = document.getElementById('convert'); //for get form

// To convert Miles to Km
function MilesToKilometer(){

    document.getElementById('heading').innerHTML = "Miles to Kilometer converter";
    document.querySelector('p').innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";


    form.addEventListener('submit',function(event) {
        event.preventDefault();
    
        const distance = parseFloat(document.getElementById('distance').value);
        const answer = document.getElementById('answer');
    
        if (distance) {
            var convert = (distance*1.609344).toFixed(3);
            
            answer.innerHTML = `<h2>${distance}miles = ${convert}km</h2>`;
        }
        else {
            answer.innerHTML = '<h2>Please Enter a Number!</h2>';
        }
        })();
};

//To convert Km to Miles
function KilometersToMiles(){
    
    document.getElementById('heading').innerHTML = "Kilometer to miles converter";
    document.querySelector('p').innerHTML = "Type in a number of Kilometer and click the button to convert the distance to miles.";


    form.addEventListener('submit',function(event) {
        event.preventDefault();
    
        const distance = parseFloat(document.getElementById('distance').value);
        const answer = document.getElementById('answer');
    
        if (distance) {
            var convert = (distance/1.609344).toFixed(3);
            
            answer.innerHTML = `<h2>${distance}Kilometers = ${convert}miles</h2>`;
        }
        else {
            answer.innerHTML = '<h2>Please Enter a Number!</h2>';
        }
        })();
};

//To Get Pressed Key
document.addEventListener('keydown',function(event) {


    if(event.key == 'm' ) {
        MilesToKilometer();
    }
    else if (event.key == 'k') {
        KilometersToMiles();
    }

});