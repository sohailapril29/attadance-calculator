function calculateAverage() {
    var percentages = document.getElementsByClassName('percentage');
    var sum = 0;
    
    for (var i = 0; i < percentages.length; i++) {
      sum += parseFloat(percentages[i].value);
    }
    
    var average = sum / percentages.length;
    var averageDisplay = document.getElementById('average');
    averageDisplay.innerText = 'Average: ' + average.toFixed(2);
    
    if (average >= 75) {
      averageDisplay.style.color = 'green';
    } else if (average >= 65 && average <= 74) {
      averageDisplay.style.color = 'blue';
    } else if (average >= 10 && average <= 64) {
      averageDisplay.style.color = 'red';
    } else {
      averageDisplay.style.color = 'black';
    }
  }
  