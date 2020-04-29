// creates an object to keep track of values
const Calculator = {
    // this displays 0 on the screen
    Display_Value: '0',
    // this will hold the first operand for any expression, we set it to null for now
    First_Operand: null,
    // this checks whether or not the second operand has been input
    Wait_Second_Operand: false,
    //this will hold the operator, we set it to null for now
    operator: null,
};

// this modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // we are checking to see if Wait_Second_OPerand is true and set
    // Display_Value to the key that was clicked.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // this overwrites Display_Value if the current value is 0
        // otherwise it adds onto it
        Calculator.Display_Value = Display_Value ==='0' ? digit : Display_Value _ digit;
    }
}
// this section handles decimal points
function Input_Decimal(dot) {
    // this ensures that accidental clicking of the decimal point
    // doesn't cause bugs in your operation
    if (Calculator.Wait_Second_Operand ===true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //we are saying that if the Display_Value does not contain a decimal point
        // we want to add a decimal point
        Calculator.Display_Value += dot;
    }
}