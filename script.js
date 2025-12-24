var ele = document.getElementsByClassName("box")
var name = document.getElementsByClassName("name")
var role = document.getElementsByClassName("role")
var org = document.getElementsByClassName("org")
var email = document.getElementsByClassName("email")
var img = document.getElementsByClassName("img")

function validate() {
    let v1 = document.getElementById("name").value.trim()
    let v2 = document.getElementById("role").value.trim()
    let v3 = document.getElementById("org").value.trim()
    let v4 = document.getElementById("email").value.trim()
    let v5 = document.getElementById("img").value.trim()
    let clr = document.getElementById("clr").value.trim()
    let bgclr = document.getElementById("bgclr").value.trim()
    if (!v1 || !v2 || !v3 || !v4 || !v5) {
        alert("Please fill all reqiered Fields")
    }
    else if (clr == bgclr) {
        alert("Text colour and Background colour can't be same")
    }
    else {
        card()
    }
}


function card() {
    let main = document.getElementById("main")
    let next = document.createElement("div")
    next.className = "box"
    let clr = document.getElementById("clr").value
    next.style.color = clr
    let bgclr = document.getElementById("bgclr").value
    next.style.backgroundColor = bgclr
    main.appendChild(next)

    let tn = document.createElement("div")
    tn.className = "tn"
    next.appendChild(tn)
    let ta1 = document.createElement("div")
    ta1.className = "ta1"
    next.appendChild(ta1)
    let ta2 = document.createElement("div")
    ta2.className = "ta2"
    next.appendChild(ta2)

    let v1 = document.getElementById("name").value
    let nextname = document.createElement("div")
    nextname.className = "name"
    nextname.innerHTML = v1
    ta1.appendChild(nextname)

    let v2 = document.getElementById("role").value
    let nextrole = document.createElement("div")
    nextrole.className = "role"
    nextrole.innerHTML = `${v2}`
    ta2.appendChild(nextrole)

    let v3 = document.getElementById("org").value
    let nextorg = document.createElement("div")
    nextorg.className = "org"
    nextorg.innerHTML = v3
    ta2.appendChild(nextorg)
    

    let v4 = document.getElementById("email").value
    let nextemail = document.createElement("div")
    
    nextemail.className = "email"
    nextemail.innerHTML = v4
    ta1.appendChild(nextemail)

    let v5 = document.getElementById("img").value
    let nextimg = document.createElement("img")
    nextimg.className = "img"
    nextimg.src = v5
    tn.appendChild(nextimg)

    let downloadBtn = document.createElement("button");
downloadBtn.textContent = "Download Card";
downloadBtn.className = "download-btn";
next.appendChild(downloadBtn);

downloadBtn.addEventListener("click", function () {
  html2canvas(next).then(canvas => {
    const link = document.createElement("a");
    link.download = "profile-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});



    document.getElementById("name").value = ""
    document.getElementById("role").value = ""
    document.getElementById("org").value = ""
    document.getElementById("email").value = ""
    document.getElementById("img").value = ""
    document.getElementById("clr").value = ""
    document.getElementById("bgclr").value = ""

}
