console.log("Calculator");

function handleSubmit() {
  event.preventDefault();
  let input1 = document.getElementById("number1").value;
  console.log("input1: ", input1);
  let input2 = document.getElementById("number2").value;
  console.log("input2: ", input2);
  let input3 = document.getElementById("operator").value;
  console.log("input3: ", input3);
  let result = document.getElementsByClassName("result");
  console.log("result: ", result);
  let output = 0;
  if (input3 === "addition") {
    let output = parseFloat(input1) + parseFloat(input2);
    console.log("output: ", output);
    result[0].innerHTML = output;
    console.log("output = input1 + input2;: ", (output = input1 + input2));
  } else if (input3 === "subtraction") {
    output = input1 - input2;
    result[0].innerHTML = output;
  } else if (input3 === "multiply") {
    output = input1 * input2;
    result[0].innerHTML = output;
  } else if (input3 === "division") {
    output = input1 / input2;
    result[0].innerHTML = output;
  }

  //   result[0].innerHTML = output;
}

function handleDarkMode(event) {
  console.log("event: ", event);
  let checked = document.getElementById("mySwitch").checked;
  console.log("checked: ", checked);
  if (checked) {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }
}
