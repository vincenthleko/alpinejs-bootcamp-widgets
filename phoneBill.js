
function totalPhoneBill(data) {
    var splitData = data.split(',');
    var sum = 0;
    var call = 2.75;
    var sms = 0.65;
  
    for (let i = 0; i < splitData.length; i++) {
      var data1 = splitData[i].trim();
      if (data1 === 'call') {
        sum += call;
      } else if (data1 === 'sms') {
        sum += sms;
      }
    }
    var result = 'R' + sum.toFixed(2);
    return result;
  }
  
  document.addEventListener('alpine:init', () => {
    Alpine.data('phoneBillComponent', () => ({
      phoneString: '',
      billAmount: '',
      calculateBill() {
        this.billAmount = totalPhoneBill(this.phoneString);
      }
    }));
  });
  