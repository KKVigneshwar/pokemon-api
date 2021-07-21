document.body.style.backgroundColor = "yellow";

//creating div element
var div = document.createElement("div");
document.body.append(div);

var h1 = document.createElement("h1");
h1.innerText = "Pokemon API";
h1.setAttribute("class", "display-5 mt-2");

//styling h1
h1.style.wordSpacing = "10px";
h1.style.fontFamily = "'Otomanopee One', sans-serif";
h1.style.color = "blue";
h1.style.textShadow = "3px 2px 8px lightblue";
h1.style.textAlign = "center";
div.append(h1);

//creating a line
var line = document.createElement("hr");
div.append(line);

//creating div for input
var div1 = document.createElement("div");
document.body.append(div1);
div1.style.textAlign = "center";

//creating input box
var input = document.createElement("input");
input.setAttribute("id", "myinput");
input.setAttribute("placeholder", "Search");
input.setAttribute("class", "input form-control-lg mt-3 mb-3");
div1.append(input);

//creating a button
var search = document.createElement("button");
search.innerText = "Search";
search.setAttribute("class", "btn btn-primary");
search.setAttribute("type", "submit");
search.setAttribute("onclick", "handleclick()");
div1.append(search);

search.style.marginLeft = "15px";

var reset = document.createElement("button");
reset.innerText = "Reset";
reset.setAttribute("onclick", "refresh()");
reset.setAttribute("class", "btn btn-primary");
reset.setAttribute("type", "reset");
div1.append(reset);

var div3 = document.createElement("div");
div3.setAttribute("id", "disp");
div3.setAttribute("class", "text-center");
document.body.append(div3);

var div4 = document.createElement("div");
div4.setAttribute("id", "disp1");
// div4.setAttribute("class", "col-md-4 col-lg-4");
document.body.append(div4);

reset.style.marginLeft = "15px";

// onload disply 50 pokemons
dataview();
async function dataview() {
  for (let i = 1; i <= 50; i++) {
    await showdisp(i);
  }
}

async function showdisp(i) {
  try {
    var url = "https://pokeapi.co/api/v2/pokemon/" + i + "/";
    console.log(url);
    var api = await fetch(url);
    var resp = await api.json();
    console.log(resp);

    var container = document.createElement("div");
    container.setAttribute("class", "container text-center");
    container.setAttribute("id", "d1");
    document.getElementById("disp1").append(container);

    var img = document.createElement("img");
    img.src = resp.sprites.front_default;
    document.getElementById("d1").append(img);

    var div1 = document.createElement("div");
    div1.innerHTML = "Name : " + resp.name;
    document.getElementById("d1").append(div1);

    var len = resp.abilities.length;

    for (let i = 0; i < len; i++) {
      const element = resp.abilities[i];
      var div2 = document.createElement("div");
      div2.innerHTML = " * Abilities : " + element.ability.name;
      document.getElementById("d1").append(div2);
    }

    for (let i = 0; i < 2; i++) {
      var div3 = document.createElement("div");
      div3.innerHTML = " * Moves : " + resp.moves[i].move.name;
      document.getElementById("d1").append(div3);
    }

    var div4 = document.createElement("div");
    div4.innerHTML = "Weight : " + resp.weight + " Kg";
    document.getElementById("d1").append(div4);
  } catch (error) {
    console.error();
  }
  return false;
}

function handleclick() {
  document.getElementById("disp1").innerHTML = "";
  document.getElementById("disp").innerHTML = "";
  var a = document.getElementById("myinput").value;
  if (a == "" || null) {
    alert("empty box");
    refresh()
    return false;
  } else {
    hi(a);
  }
}

async function hi(a) {
  try {
    var url = "https://pokeapi.co/api/v2/pokemon/" + a + "/";
    console.log(url);
    var api = await fetch(url);
    var resp = await api.json();
    console.log(resp);

    var container = document.createElement("div");
    container.setAttribute("class", "container");
    container.setAttribute("id", "d1");
    document.getElementById("disp").append(container);

    var img = document.createElement("img");
    img.src = resp.sprites.front_default;
    document.getElementById("d1").append(img);

    var div1 = document.createElement("div");
    div1.innerHTML = "Name : " + resp.name;
    document.getElementById("d1").append(div1);

    var len = resp.abilities.length;

    for (let i = 0; i < len; i++) {
      const element = resp.abilities[i];
      var div2 = document.createElement("div");
      div2.innerHTML = " * Abilities : " + element.ability.name;
      document.getElementById("d1").append(div2);
    }

    for (let i = 0; i < 2; i++) {
      var div3 = document.createElement("div");
      div3.innerHTML = " * Moves : " + resp.moves[i].move.name;
      document.getElementById("d1").append(div3);
    }

    var div4 = document.createElement("div");
    div4.innerHTML = "Weight : " + resp.weight + " Kg";
    document.getElementById("d1").append(div4);

    document.getElementById("myinput").value =""
  }

  catch(error) {
    console.error();
  }
}

//to reset
function refresh() {
  location.reload();
}
