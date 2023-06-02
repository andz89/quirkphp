// import {Modal} from "./js_file/gwill.js";
// import {Canvas} from "./js_file/canvas.js";
import { Open_file } from "./js_file/_open_file.js";
import List from "./js_file/list.js";
let list = new List();
//==================window height size=======================//
let header_size = document.querySelector("header").offsetHeight;
let sub_header_size = document.querySelector(".sub_header").offsetHeight;

document.querySelector("main").style.height =
  window.innerHeight - header_size - sub_header_size + "px";

//window_height resize
window.addEventListener("resize", () => {
  let header_size = document.querySelector("header").offsetHeight;
  let sub_header_size = document.querySelector(".sub_header").offsetHeight;

  document.querySelector("main").style.height =
    window.innerHeight - header_size - sub_header_size + "px";
});

//==========================================================//

//====================== canvas tools ========================//

//================= open json file and create canvas ===========================//
let teacher = list.teacher();

for (let i = 0; teacher.length > i; i++) {
  let option = document.createElement("option");
  option.value = teacher[i];
  option.innerText = teacher[i];
  document.querySelector("#select-teacher").append(option);
}
let grade = list.grade();

for (let i = 0; grade.length > i; i++) {
  let option = document.createElement("option");
  option.value = grade[i];
  option.innerText = grade[i];
  document.querySelector("#select-section").append(option);
}

document.querySelector("#canvas-form-btn").onclick = (e) => {
  document.querySelector(".modal-loader").classList.add("spinner-1");
  document.querySelector(".modal-loader").style.display = "block";

  let parent = e.target.parentElement;

  if (
    parent.querySelector("#select-teacher").value == "Select an option" ||
    parent.querySelector("#select-section").value == "Select an option"
  ) {
    parent.querySelector(".alert").style.display = "block";
    setTimeout(() => {
      parent.querySelector(".alert").style.display = "none";
    }, 2000);
    document.querySelector(".modal-loader").classList.remove("spinner-1");
    document.querySelector(".modal-loader").style.display = "none";
    return false;
  }

  canvas();
};
function canvas() {
  // let templates = document.querySelector("#select-templates").value;

  var fonts = ["Roboto", "Work Sans"];

  const loadAndUse = (font) => {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < font.length; i++) {
        var myfont = new FontFaceObserver(font[i]);

        myfont
          .load()
          .then(() => {
            // when font is loaded, use it.
          })
          .catch((e) => {
            let log = "error loading font";
            reject(log);
          });

        if (i + 1 == font.length) {
          resolve();
        }
      }
    });
  };
  loadAndUse(fonts)
    .then(() => {
      let templates = document.querySelector("#select-templates").value;

      let url = `./js_file/json_canvas/${templates}`;
      const uniqueUrl = url + "?timestamp=" + Date.now();
      fetch(uniqueUrl)
        .then((response) => response.text())
        .then((data) => {
          document.querySelector(".modal-pupil-container").style.display =
            "none";

          let file = new Open_file();
          file.get_file_json(data);
        })
        .catch((error) => {
          // Handle any errors that occurred during the fetch
          console.error(error);
        });
    })
    .catch((e) => {
      console.log("error of fonts");
    });
}

//================================== end ==============================//
