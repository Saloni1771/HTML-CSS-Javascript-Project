let currentdisplay = '';
    document.querySelector('#display').value = currentdisplay;
    let buttonElement = document.querySelector('.button');
    // for +/- sign
    function plusMinus(x) {
      let i = x.length - 1;
      while (i >= 0 && x[i] !== '+' && x[i] !== '-' && x[i] !== '*' && x[i] !== '/' && x[i] !== '%') {
        i--;
      }
      const before = x.slice(0, i + 1);
      const after = x.slice(i + 1);
      return `${before}(-${after})`;
      return x;
    }

  
function evaluateExpression(expr) {
  try {
    // Handle expressions ending with % (e.g., "14*58-88%")
    if (expr.includes('%')) {
      // Match the last number followed by %
      const percentMatch = expr.match(/(.*)([-+*/])(\d+(\.\d+)?)%$/);
      if (percentMatch) {
        const baseExpr = percentMatch[1]; // e.g., "14*58"
        const operator = percentMatch[2]; // e.g., "-"
        const percentValue = parseFloat(percentMatch[3]); // e.g., 88

        const baseResult = eval(baseExpr); // e.g., 812
        const percentOfBase = (baseResult * percentValue) / 100;

        // Final expression: baseExpr + operator + percentOfBase
        expr = `${baseResult}${operator}${percentOfBase}`;
      } else {
        // Handle standalone percentages like "50%" => "50/100"
        expr = expr.replace(/(\d+(\.\d+)?)%/g, '($1/100)');
      }
    }

    const result = eval(expr);
    return parseFloat(result.toFixed(4));
  } catch (e) {
    return "Error";
  }
}
//event listner for keywords from keyboard
document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    currentdisplay += key;
  } else if (key === 'Enter') {
    currentdisplay = evaluateExpression(currentdisplay);
  } else if (key === 'Backspace') {
    currentdisplay = currentdisplay.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    currentdisplay = '';
  }

  document.querySelector('#display').value = currentdisplay;
});
