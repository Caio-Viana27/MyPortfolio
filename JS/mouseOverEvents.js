
const elements = [
    //{ id: "html", color: "#cf3907" },
    //{ id: "css", color: "#74C0FC" },
    { id: "js", color: "#FFD43B" },
    { id: "react", color: "#74C0FC" },
    { id: "node", color: "#63E6BE" },
    { id: "java", color: "#c90808" },
    { id: "sql", color: "#817b7b" }
];

elements.forEach(element => {
    const el = document.getElementById(element.id);
    el.onmouseover = () => onMouseOver(element.color);
    el.onmouseout = onMouseOut;
});

function onMouseOver(color) {
    document.getElementById("stackInfo").style.boxShadow = `0 0 10px 4px ${color}`;
}

function onMouseOut() {
    document.getElementById("stackInfo").style.boxShadow = "0 0 10px 4px #d4c7c7";
}