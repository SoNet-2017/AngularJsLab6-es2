window.onload = function()
{
    var num1 = document.getElementById("NUM1");
    num1.setAttribute("onchange", "calcola();");
    num1.setAttribute("onkeyup", "calcola();");
    var num2 = document.getElementById("NUM2");
    num2.setAttribute("onchange", "calcola();");
    num2.setAttribute("onkeyup", "calcola();");
    calcola();
    acquisisciPizza();
}

function calcola()
{
    var num1 = document.getElementById("NUM1").value;
    var num2 = document.getElementById("NUM2").value;
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = sum;
    document.getElementById("NUM1Span").innerHTML = num1;
    document.getElementById("NUM2Span").innerHTML = num2;
}

function acquisisciPizza()
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4)
        {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304)
            {
                var response = xhr.responseText;
                var pizza = JSON.parse(response);
                document.getElementById('pizza').innerHTML = pizza.name;
            }
            else
            {
                alert("Request was unsuccessful: " + xhr.status);
            }
        }
    };
    xhr.open("get", "pizza.json", true);
    xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
    xhr.send(null);
}