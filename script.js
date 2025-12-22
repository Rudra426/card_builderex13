var ele = document.getElementsByClassName("box")
var title = document.getElementsByClassName("title")
var cname = document.getElementsByClassName("cname")
var views = document.getElementsByClassName("views")
var upd = document.getElementsByClassName("upd")
var time = document.getElementsByClassName("time")
var img = document.getElementsByClassName("img")

function validate() {
    let v1 = document.getElementById("title").value.trim()
    let v2 = document.getElementById("cname").value.trim()
    let v3 = document.getElementById("views").value.trim()
    let v4 = document.getElementById("upd").value.trim()
    let v5 = document.getElementById("time").value.trim()
    let v6 = document.getElementById("img").value.trim()
    let clr = document.getElementById("clr").value.trim()
    let bgclr = document.getElementById("bgclr").value.trim()
    if (!v1 || !v2 || !v3 || !v4 || !v5 || !v6) {
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

    let v1 = document.getElementById("title").value
    let nexttitle = document.createElement("div")
    nexttitle.className = "title"
    nexttitle.innerHTML = v1
    ta1.appendChild(nexttitle)

    let v2 = document.getElementById("cname").value
    let nextcname = document.createElement("div")
    nextcname.className = "cname"
    nextcname.innerHTML = `•${v2}`
    ta2.appendChild(nextcname)

    let v3 = document.getElementById("views").value
    let nextviews = document.createElement("div")
    nextviews.className = "views"
    if (v3 < 1000) {
        nextviews.innerHTML = `•${v3} views`
    }
    else if (v3 > 1000000) {
        nextviews.innerHTML = `•${v3/1000000}M views`
    } else {
        nextviews.innerHTML = `•${v3/1000}K views`
    }

    ta2.appendChild(nextviews)

    let v4 = document.getElementById("upd").value
    let nextupd = document.createElement("div")
    nextupd.className = "upd"
    nextupd.innerHTML = `•${v4} months ago`
    ta2.appendChild(nextupd)

    let v5 = document.getElementById("time").value
    let nexttime = document.createElement("div")
    nexttime.className = "time"
    nexttime.innerHTML = v5
    tn.appendChild(nexttime)

    let v6 = document.getElementById("img").value
    let nextimg = document.createElement("img")
    nextimg.className = "img"
    nextimg.src = v6
    tn.appendChild(nextimg)


    document.getElementById("title").value = ""
    document.getElementById("cname").value = ""
    document.getElementById("views").value = ""
    document.getElementById("upd").value = ""
    document.getElementById("time").value = ""
    document.getElementById("img").value = ""
    document.getElementById("clr").value = ""
    document.getElementById("bgclr").value = ""

}
