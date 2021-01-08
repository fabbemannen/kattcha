const captchas = Array.from(document.querySelectorAll(".kattcha"));
let cats = 0;
let inferiorCreatures = 0;
captchas.forEach((data, index) => {
    data.addEventListener("click", clickHandler);
    if (data.classList.contains("katt")) {
        cats++;
    } else {
        inferiorCreatures++;
    }
});

console.log("There are " + cats + " cats and " + inferiorCreatures + " inferior creatures. Find the cats!")

function clickHandler(e) {
    e.target.classList.toggle("vald");
    checkCompletion();
}

function checkCompletion() {
    //for-loop since foreach counts as a function in js, not a loop, meaning continue does not work.
    for(i = 0; i < captchas.length; i++)
    {
        if ((captchas[i].classList.contains("katt") && captchas[i].classList.contains("vald"))
        ||
        (!captchas[i].classList.contains("katt") && !captchas[i].classList.contains("vald"))) 
        {
            continue;
        } 
        else {
            console.log("Oops, still not correct!");
            document.querySelector("button").disabled = true;
            return;
        }
    }
    document.querySelector("button").disabled = false;
}