const text = document.getElementById("text")
const tc = document.getElementById("tc")
const r = document.getElementById("r")

text.addEventListener("keyup", () => {
    update()
})

update()

function update(){
    tc.innerText = text.value.length;
    r.innerText = text.getAttribute("maxlength") - text.value.length;
}