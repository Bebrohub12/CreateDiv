let inp1 = document.getElementById("input1")
let inp2 = document.getElementById("input2")
let inp3 = document.getElementById("input3")
// console.log(inp1)

let btn = document.getElementById("btn")
let doc = document.getElementById("doc")

btn.onclick = () => {
    let div = document.createElement("div");
    doc.appendChild(div);
    div.style.height = inp1.value + "px"
    inp1.value = ""
    div.style.width = inp2.value + "px"
    inp2.value = ""
    let x = inp3.value
    div.style.backgroundColor = x;
    inp3.value = ""
}

