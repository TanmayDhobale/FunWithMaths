document.getElementById('calculate').addEventListener('click', function () {
  var list = document.getElementById('main-input').value;
  list = list.replaceAll(' ', '');
  list = list.split(',');

  list = list.map((item, index) => {
    return parseInt(item);
  });

  var operator = document.getElementById('operator').value;

  switch (operator) {
    case 'sum':
      var sum = 0;
      for (var i = 0; i < list.length; i++) {
        sum += parseInt(list[i]);
      }
      document.getElementById('output').innerHTML = sum;
      break;

    case 'average':
      var sum = 0;
      for (var i = 0; i < list.length; i++) {
        sum += parseInt(list[i]);
      }
      document.getElementById('output').innerHTML = sum / list.length;
      break;

    case 'min':
      var min = Math.min(...list);
      document.getElementById('output').innerHTML = min;
      break;

    case 'max':
      var max = Math.max(...list);
      document.getElementById('output').innerHTML = max;
      break;

    case 'median':
      // Sort the list
      list.sort(function (a, b) {
        return a - b;
      });

      // Calculate median
      var median;
      var middle = Math.floor(list.length / 2);

      if (list.length % 2 === 0) {
        median = (list[middle - 1] + list[middle]) / 2;
      } else {
        median = list[middle];
      }

      document.getElementById('output').innerHTML = median;
      break;

    case 'mode':
      var modeMap = {};
      var maxCount = 0;
      var modes = [];

      for (var i = 0; i < list.length; i++) {
        var num = list[i];
        modeMap[num] = (modeMap[num] || 0) + 1;

        if (modeMap[num] > maxCount) {
          maxCount = modeMap[num];
          modes = [num];
        } else if (modeMap[num] === maxCount) {
          modes.push(num);
        }
      }

      document.getElementById('output').innerHTML = modes.join(', ');
      break;

    case 'range':
      var min = Math.min(...list);
      var max = Math.max(...list);
      var range = max - min;
      document.getElementById('output').innerHTML = range;
      break;

    default:
      document.getElementById('output').innerHTML = 'Invalid operator';
      break;
  }
});
