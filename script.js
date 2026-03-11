function runCode(){

let html=document.getElementById("html").value;
let css=document.getElementById("css").value;
let js=document.getElementById("js").value;

let output=document.getElementById("output").contentWindow.document;

output.open();

output.write(`
<html>
<style>${css}</style>
<body>
${html}
<script>${js}<\/script>
</body>
</html>
`);

output.close();
}

document.querySelectorAll("textarea").forEach((item)=>{
item.addEventListener("keyup",runCode);
});
