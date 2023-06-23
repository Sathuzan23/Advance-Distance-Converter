(function(){
    document.getElementById('convert').addEventListener('submit',function(event) {
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
        });
})();