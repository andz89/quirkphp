import { Modification } from "./_modification.js";

import { Open_file } from "./_open_file.js";
import Grade from "./grade.js";

export class Menu_tools extends Modification {
  processString(str) {
    // Split the string into an array using commas as separators
    var arr = str.split(",");

    // Replace "-" with an empty string if it is the last value
    if (arr[arr.length - 1].trim() === "-") {
      arr[arr.length - 1] = "";
    } else {
      // Trim the last value, capitalize the first letter, and add a period
      arr[arr.length - 1] =
        arr[arr.length - 1].trim().charAt(0).toUpperCase() + ".";
    }

    // Move the first value to the end of the array
    arr.push(arr.shift());

    // Remove all commas and consecutive spaces from the array values
    arr = arr.map(function (item) {
      return item.replace(/,/g, "").trim();
    });

    // Combine the array values into a single sentence
    var sentence = arr.join(" ");

    return sentence;
  }
  superScript() {
    let superScript = document.querySelector("#superScript");
    // Event listener for input changes

    superScript.addEventListener("click", () => {
      let object = this.canvas.getActiveObject();
      if (!object) {
        this.alert("no selected textbox or image");
        return false;
      }
      if (object.getSelectedText() != "") {
        if (
          object.getSelectionStyles()[0].deltaY == 0 ||
          object.getSelectionStyles()[0].deltaY == undefined
        ) {
          object.setSelectionStyles({
            deltaY: -+object.fontSize * 0.5,
            fontSize: object.fontSize * 0.6,
          });
          // object.setSuperscript();
        } else {
          object.setSelectionStyles({
            deltaY: undefined,
            fontSize: undefined,
          });
        }

        // // Check if the input is equal to 'th'
        // if (inputValue === 'th') {
        //   textbox.set('fill', 'blue');
        // } else {
        //   textbox.set('fill', 'black');
        // }

        this.canvas.renderAll();
      }
    });
  }
  removeSpacesAndConvertToLowercase(str) {
    // Remove spaces from the string
    const stringWithoutSpaces = str.replace(/\s/g, "");

    // Convert the string to lowercase
    const lowercaseString = stringWithoutSpaces.toLowerCase();

    return lowercaseString;
  }

  getNamePupils() {
    window.addEventListener("contextmenu", (e) => {
      e.preventDefault(); // Prevent the default context menu from showing
      let object = this.canvas.getActiveObject();
      if (object.name == "insert-name") {
        let a = document.querySelector("#select-section").value;
        let templates = this.removeSpacesAndConvertToLowercase(a);
        let url = `./js_file/json_canvas/grade/${templates}.json`;
        const uniqueUrl = url + "?timestamp=" + Date.now();
        fetch(uniqueUrl)
          .then((response) => response.text())
          .then((data) => {
            let a = JSON.parse(data);

            for (let i = 0; Object.keys(a).length > i; i++) {
              let li = document.createElement("li");
              li.className = "list-group-item";
              li.innerText = a[i];
              document.querySelector(".modal-pupil-container ul").append(li);
            }
          })
          .catch((error) => {
            console.error(error);
          });

        document.querySelector(".modal-pupil-container").style.display =
          "block";
        document
          .querySelector(".modal-pupil-container")
          .addEventListener("click", (e) => {
            if (e.target.classList.contains("close")) {
              document.querySelector(".modal-pupil-container").style.display =
                "none";
              let arr = document.querySelectorAll(
                ".modal-pupil-container ul li"
              );
              Array.from(arr).forEach((e) => {
                e.remove();
              });
            }
            if (e.target.classList.contains("list-group-item")) {
              object.text = this.processString(e.target.innerText);
              this.canvas.renderAll();
              document.querySelector(".modal-pupil-container").style.display =
                "none";
              let arr = document.querySelectorAll(
                ".modal-pupil-container ul li"
              );
              Array.from(arr).forEach((e) => {
                e.remove();
              });
            }
          });
      }
    });
  }

  getJson() {
    document.querySelector("#json-input").addEventListener("click", () => {
      let json = this.canvas.toJSON(["id", "name"]);

      let size = {
        w: this.width,
        h: this.height,
      };

      let merge = {
        json,
        size,
      };
      let json_file = JSON.stringify(merge);
      document.querySelector("#json-input").value = json_file;
    });
  }
  keyboard_shortcut() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "d") {
        event.preventDefault();
      }
      if (event.ctrlKey && event.key === "e") {
        event.preventDefault();
        if (document.querySelector("#json-input").style.display == "none") {
          document.querySelector("#json-input").style.display = "block";
        } else {
          document.querySelector("#json-input").style.display = "none";
        }
      }
      var arrowKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

      if (arrowKeys.includes(event.key)) {
        event.preventDefault();
      }
    });
    fabric.util.addListener(document.body, "keydown", (options) => {
      if (options.repeat) {
        return;
      }
      var key = options.which || options.keyCode; // key detection

      // if (key === 83 && options.ctrlKey) {
      // save()
      // }
      if (key === 68 && options.ctrlKey) {
        this.download_key();
      }
      //   if (key === 79 && options.ctrlKey) {
      // getFile()
      // }
    });
  }

  download_as_image() {
    const download_image = document.querySelector("#download-image");
    download_image.onclick = () => {
      this.download_key();
    };
  }
  download_key() {
    var scaleFactor = 3;
    this.canvas.setWidth(this.width * scaleFactor);
    this.canvas.setHeight(this.height * scaleFactor);
    this.canvas.setZoom(scaleFactor);

    this.canvas.renderAll();

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = this.canvas.toDataURL({
      format: "png",
      // quality:  1
    });

    a.download = `ribbon.png`;
    a.click();
    document.body.removeChild(a);

    this.canvas.setHeight(this.canvas.current_height);
    this.canvas.setWidth(this.canvas.current_width);
    this.canvas.setZoom(this.canvas.current_canvasScale);
  }
  honor_canvas() {
    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("honor-canvas")) {
        document.querySelector(".fontFamilySelect").innerHTML = "";
        this.canvas.dispose();
        this.canvas.off();
        document.querySelector("#canvas").remove();
        let file = new Open_file();

        file.get_file_json(with_honors);
      }
      if (e.target.classList.contains("class-picture")) {
        document.querySelector(".fontFamilySelect").innerHTML = "";
        this.canvas.dispose();
        this.canvas.off();

        document.querySelector("#canvas").remove();
        let file = new Open_file();

        file.get_file_json(class_picture);
      }
    });
  }
}
