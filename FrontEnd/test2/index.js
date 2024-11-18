let list={
    theTitle:"elzero",
    theDis:"elzero webschool",
    theDate:"25/10"
};
let colors=
["bg-primary","bg-secondary","bg-info","bg-danger","bg-warning","bg-dark","bg-light"];
for(let i =0 ;i <7;i++)
{
    if(colors[i]=="bg-dark")
    {
        document.getElementsByClassName("row")[0].innerHTML+=(`
            <div class="col-12 ${colors[i]} text-light">
                <h1>${list.theTitle}</h1>
                <span>${list.theDis}</span>
                <p>${list.theDate}</p>
            </div>    
                `);

    }
    else
    {
    document.getElementsByClassName("row")[0].innerHTML+=(`
        <div class="col-12 ${colors[i]}">
            <h1>${list.theTitle}</h1>
            <span>${list.theDis}</span>
            <p>${list.theDate}</p>
        </div>    
            `);}

}
