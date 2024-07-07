// airtime.js
function enoughAirtime(usage, airtime) {
    var splitData = usage.split(',');
    var sum = 0;
    var call = 2.75;
    var sms = 0.65;
    var data = 12.00;
  
    for (let i = 0; i < splitData.length; i++) {
      var data1 = splitData[i].trim();
      if (data1 === 'call') {
        sum += call;
      } else if (data1 === 'sms') {
        sum += sms;
      } else if (data1 === 'data') {
        sum += data;
      }
    }
  
    var results = airtime - sum;
    if (results < 0.00) {
      results = 0;
    }
    
    var finalResults = 'R' + results.toFixed(2);
    return finalResults;
  }
  
  document.addEventListener('alpine:init', () => {
    Alpine.data('airtimeComponent', () => ({
      usageString: '',
      availableAirtime: '',
      remainingAirtime: '',
      calculateAirtime() {
        this.remainingAirtime = enoughAirtime(this.usageString, parseFloat(this.availableAirtime));
      }
    }));
  });
  