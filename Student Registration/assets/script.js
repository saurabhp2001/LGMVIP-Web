let i = 0;
document.getElementById("myfrm").addEventListener("submit",function (e) {
    e.preventDefault();
    let form = document.getElementById("myfrm");
    let name = form.querySelector("input[id='name']").value;
    let email = form.querySelector("input[id='email']").value;
    let java = document.getElementById("java");
    let html = document.getElementById("html");
    let css = document.getElementById("css");
    let image = document.getElementById("image").value;

    let skills = "";
    if(java.checked === true) {
        skills += "Java ";
    }
    if(html.checked === true) {
        skills += "HTML ";
    }
    if(css.checked === true) {
        skills += "CSS ";
    }

    let gender = "";
    if(document.getElementById("male").checked === true) {
        gender = "Male";
    }
    if(document.getElementById("female").checked === true) {
        gender = "Female";
    }

    let color = "";
    if(i%2 === 0) {
        color = "#ffffff";
    } else {
        color = "#eaf1d2";
    }

    let div = "<div class=\"m-2 w-100 row p-2 shadow rounded-3\" style=\"background: "+color+";\">\n" +
        "                <div style=\"text-align: left;\" class=\"col-md-8 shadow p-2 rounded-3\">\n" +
        "                    <div class=\"w-100 border-bottom mb-2\">\n" +
        "                    <h5>Description</h5>\n" +
        "                    </div>\n" +
        "                    <div> <span><h6>"+name+"</h6></span> </div>\n" +
        "                    <div> <span><h6>"+gender+"</h6></span> </div>\n" +
        "                    <div> <span><h6><a href=\"mailto:"+email+"\">"+email+"</a></h6></span> </div>\n" +
        "                    <div> <span><h6>"+skills+"</h6></span> </div>\n" +
        "                </div>\n" +
        "                <div class=\"col-md-4 p-2\">\n" +
        "                    <div class=\"w-100 border-bottom mb-2\">\n" +
        "                        <h5 style=\"text-align: left;\">Image</h5>\n" +
        "                    </div>\n" +
        "                    <img class=\"p-1\" width=\"100%\" height=\"150px\" src=\""+image+"\">\n" +
        "                </div>\n" +
        "            </div><br>";
    document.getElementById("students_data").innerHTML += div;
    console.log("name "+name+" email "+email+" gender "+gender+" skills "+skills);
    i++;
});
