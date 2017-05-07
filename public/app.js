window.onload = () => {

  document.querySelector('form').addEventListener('submit', onSubmit);

  function updateResult(fromNumber, fromBase, toBase, toNumber) {
    var result = document.querySelector('#result');
    result.style.display = "block";
    result.innerHTML = `The result is <b>${toNumber}</b> in <i>base ${toBase}</i>.`;
  }

  function covertToBase(fromNumber, fromBase, toBase) {
    var decimalNumber = parseInt(fromNumber, fromBase);
    return decimalNumber.toString(toBase);
  }

  function onSubmit(e) {
    console.log('onSubmit');
    e.preventDefault();
    var form = document.querySelector('form');
    var fromNumber = form.elements.number.value;
    var fromBase = Number(form.elements.from_base.value);
    var toBase = Number(form.elements.to_base.value);
    var toNumber = covertToBase(fromNumber, fromBase, toBase);
    updateResult(fromNumber, fromBase, toBase, toNumber);
  }

};