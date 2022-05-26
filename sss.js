class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display {
    add(book) {
        let tbody = document.getElementById("tbody");
        let htmlstring = `<tr>
                              <td>${book.name}</td>
                              <td>${book.author}</td>
                              <td>${book.type}</td>
                            </tr>`;
        tbody.innerHTML += htmlstring;
    }
    clear() {
        let libraryFrom = document.getElementById("libraryFrom");
        libraryFrom.reset();
    }
    ale(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        } else {
            return true;
        }
    }
    show(a, b) {
        let message = document.getElementById("message");
        message.innerHTML = ` <div class="alert alert-primary" role="alert">
        Your Book is added by Succesfully !
      </div>`;
        setTimeout(() => {
            message.innerHTML = "";
        }, 3000);
    }
    danger() {
        let message = document.getElementById("message");
        message.innerHTML = `        <div class="alert alert-danger" role="alert">
                                        Please type more Charecter!
                                    </div>`;
        setTimeout(() => {
            message.innerHTML = "";
        }, 3000);
    }
}

let libraryFrom = document.getElementById("libraryFrom");
libraryFrom.addEventListener("submit", afunctions);

function afunctions(e) {
    console.log("hello");
    e.preventDefault();
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("aurhor").value;
    let type;

    let fiction = document.getElementById("fiction");
    let programmer = document.getElementById("programmer");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
        type = fiction.value;
    } else if (programmer.checked) {
        type = programmer.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }
    let display = new Display();
    let book = new Book(name, author, type);
    if (display.ale(book)) {
        display.add(book);
        display.clear();
        display.show();
    } else {
        display.danger();
    }
}
