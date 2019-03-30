      <script >
var objetos = new Array();
objetos[0] = "../ups.png";
objetos[1] = "../fail.png";
objetos[2] = "../ups1.png";

function aleatorio() {
  var azar = Math.floor(Math.random() * objetos.length);
  document.images["imagen"].src = objetos[azar];
}
</script>
</head>

<body onload="aleatorio()">
     <img src="./imag" name="imagen" />
