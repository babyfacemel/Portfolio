function calculate() {
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {
        
        /* get the operands from the form */
        var operand1 = document.getElementById("Operand1").value;
        var operand2 = document.getElementById("Operand2").value;
        
        /* convert the operands from string to floating point */
        var operand1fp = parseFloat (operand1);
        var operand2fp = parseFloat (operand2);
        
        /* figure out which operator was checked and place the value in operator */
        var operator;
        if (document.getElementById("plus").checked) {
            operator = document.getElementById("plus").value;
        }
        if (document.getElementById("minus").checked) {
            operator = document.getElementById("minus").value;
        }
        if (document.getElementById("multiply").checked) {
            operator = document.getElementById("multiply").value;
        }
        if (document.getElementById("divide").checked) {
            operator = document.getElementById("divide").value;
        }

        var result;
        
        if (operator == "plus") { 
                result = (operand1fp + operand2fp);
        }
        
        if (operator == "minus") {
                result = (operand1fp - operand2fp);
        }
        
        if (operator == "multiply") {
                result = (operand1fp * operand2fp);
        }
        
        if (operator == "divide") {
                result = (operand1fp / operand2fp);
        }
        
        /* convert the result to a string and display it */
        document.getElementById("Result").innerHTML = result.toString();
    }
}

function clearform() {
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    document.getElementById("plus").checked = false;
    document.getElementById("minus").checked = false;
    document.getElementById("multiply").checked = false;
    document.getElementById("divide").checked = false;
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$( "#myform" ).validate({
    
});