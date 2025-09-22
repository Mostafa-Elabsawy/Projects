let temp1 = null;
let temp2 = null;
let current = null;
function button_clicked(number)
{
    if(temp1==null&&temp2==null&&current==null)
    {
        document.getElementById("screen").innerHTML="";
        document.getElementById("result").innerHTML="";

    }
    document.getElementById("screen").innerHTML += number.value;
    if (temp2 == null)
        temp2 = 0;
    temp2 = (temp2 * 10) + Number(number.value);
    console.log(temp1);
}

function operator(op)
{
    if(op.value=="c")
    {
        document.getElementById("screen").innerHTML="";
        document.getElementById("result").innerHTML="";
        return;
    }
    if (temp2 == null)
        return;
    if (op.value != "=" && op.value != "c" )
        document.getElementById("screen").innerHTML += " "+op.value + " ";

    if (current == null)
    {
        temp1 = temp2;
        temp2 = null;
        current = op.value;
        return;
    }
    temp1 = (current == "+") ? temp1 + temp2 : temp1;
    temp1 = (current == "-") ? temp1 - temp2 : temp1;
    temp1 = (current == "*") ? temp1 * temp2 : temp1;
    temp1 = (current == "/") ? temp1 / temp2 : temp1;
    if (op.value == "=")
    {
        document.getElementById("result").innerHTML = temp1;
        temp1 = null;
        temp2 = null;
        current = null;
        return;

    }
    temp2 = null;
    current = op.value;
}