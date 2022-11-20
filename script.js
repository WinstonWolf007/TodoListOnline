let idInput = 1;

function deleteOne(element) {
    let LIST = document.querySelectorAll(".l");

    for (let el of LIST) {
        let text = el.getElementsByTagName("p")[0].innerHTML

        if (element == text) {
            el.remove()
            break;
        }
    }
} 

function deleteAll() {
    let LIST = document.querySelectorAll(".l");
    for (let el of LIST) {
        el.remove()
    }
}

/*

<div class="l">
    <p>project3</p>
    <input type="checkbox">
    <p onclick="deleteOne('project3')" class="fa fa-trash-o" id="icon"></p>
</div>

*/

document.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        addEl();
    }
})

function addEl() {
    let LIST = document.querySelectorAll(".l");
    let text = document.querySelector("#create input").value
    
    for (let x of LIST) {
        let text2 = x.getElementsByTagName("p")[0].innerHTML
        if (text == text2 || text == "") {
            alert("E: Name already taken !!")
            return;
        }
    }

    /*
    <div class="l">
        <p>project1</p>
        <input id="1" type="checkbox" onclick="checkElement('project1', document.getElementById('1'));">
        <p onclick="deleteOne('project1')" class="fa fa-trash-o" id="icon"></p>
    </div>
    */

    let list = document.createElement('div');
    list.className = "l";

    let title = document.createElement("p");
    title.innerHTML = text;

    let input = document.createElement('input');
    input.type = "checkbox";
    input.id = idInput.toString();
    input.addEventListener("click", () => {
        checkElement(text, input)
    })

    let icon = document.createElement('p')
    icon.addEventListener("click", (e) => {
        deleteOne(text)
    });

    icon.className = "fa fa-trash-o"
    icon.id = "icon"

    list.appendChild(title);
    list.appendChild(input);
    list.appendChild(icon);

    let body = document.getElementById("body")
    body.appendChild(list)

    document.querySelector("#create input").value = "";

    idInput += 1;
}


function checkElement(tags, btn) {
    let allText = document.querySelectorAll('.l p');

    for (let x of allText) {
        if (x.innerHTML == tags) {
            if (btn.checked) {
                x.className = "textEdit";
            }
            else {
                x.className = "normalText";
            }
            break;
        }
    }
}

