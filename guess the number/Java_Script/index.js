let user_guess = document.getElementById("guess");
let valid_error = document.getElementById("valid");
let guessBtn = document.getElementById("guessBtn");
let computerNumber = [];
computerNumber.push(parseInt(Math.random() * 10));
computerNumber.push(parseInt(Math.random() * 10));
computerNumber.push(parseInt(Math.random() * 10));
computerNumber.push(parseInt(Math.random() * 10));
function validation(value)
{
    let regex = /^[0-9]{4}$/;
    let answer = regex.test(value);
    if (answer)
    {
        console.log(`value = _${value}_ , valid`);
        user_guess.className = "form-control w-100";
        valid_error.className = "d-none";
        user_guess.value = "";
        return true;
    }
    else
        {
        return false;
    }
}
user_guess.addEventListener("keyup", (event) =>
{
    if (event.key === "Enter")
    {
        btnclicked();
        return
    }
    let value = user_guess.value.trim("").split(" ").join("");
    let regex = /^[0-9]{4}$/;
    let answer = regex.test(value);
    if (answer) {
      console.log(`value = _${value}_ , valid`);
      user_guess.className = "form-control w-100 is-valid";
        valid_error.className = "valid-feedback d-block";
        valid_error.innerHTML = "valid guess";
      return true;
    } else {
      console.log(`value = _${value}_ , invalid`);
      user_guess.className = "form-control w-100 is-invalid";
        valid_error.className = "d-block invalid-feedback";
        valid_error.innerHTML = "invalid guess";
      return false;
    }
})
guessBtn.addEventListener("click", btnclicked)
function btnclicked()
{
        let val = user_guess.value.trim("").split(" ").join("");
        console.log(val);
        if (validation(val) == true) {
          let counter = check_num(val);
          display(counter, val);
        }
}
function check_num(val)
{
    let counter = 0;
    for (let i = 0; i < 4; i++)
        if (val[i] == computerNumber[i])
            counter++;
    return counter;
}
function display(count,val)
{
    let color;
    if (count == 0)
        color = "text-danger";
    if (count == 1)
        color = "text-secondary";
    if(count == 2)
        color = "text-info";
    if(count == 3)
    color = "text-warning";
    if (count == 4)
        color = "text-success";
    document.getElementById("result").innerHTML +=
    `<tr>
    <td class="border  border-primary border-2 w-25 fw-semibold fs-6">${val.split('').join(' ')}</td>
    <td class="border  border-primary border-2 w-25 ${color} fw-semibold fs-6">${count} Right</td>
    </tr>`
}
