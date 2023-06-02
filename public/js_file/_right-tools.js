import { Modification } from "./_modification.js";

export class Right_tools extends Modification {
  fontSize(selector) {
    let fontSize = document.querySelector(selector);
    fontSize.oninput = (e) => {
      let object = this.canvas.getActiveObject();
      if (object) {
        if (object.getSelectedText() != "") {
          object.setSelectionStyles({ fontSize: e.target.value });
          //  fontSizeinput = e.target.value
          object.dirty = true;
          this.canvas.renderAll();
          // object.set({fontSize: e.target.value })
        } else {
          object.removeStyle("fontSize");
          object.set({ fontSize: e.target.value });
          object.dirty = true;
          this.canvas.renderAll();
        }
      }
    };
  }

  //font color change
  fontColor(selector) {
    let color = document.querySelector(selector);
    color.addEventListener("input", (e) => {
      let object = this.canvas.getActiveObject();

      if (object != undefined) {
        if (window.getSelection().toString() != "") {
          object.setSelectionStyles({ fill: e.target.value });
          canvas.renderAll();
        } else if (window.getSelection().toString() == "") {
          object.removeStyle("fill");
          object.set("fill", e.target.value);
          object.dirty = true;
          this.canvas.renderAll();
        }
      }
    });
  }

  bold_text() {
    document.querySelector("#bold").onclick = () => {
      let object = this.canvas.getActiveObject();

      if (object && object.bold === undefined) {
        if (object.getSelectedText() == "") {
          //empty
          object.removeStyle("fontWeight");
          object.set({ fontWeight: "bold" });
          object.dirty = true;
          this.canvas.renderAll();
          bold.style.backgroundColor = "rgba(87, 86, 86, 0.733)";
          object.bold = true;
        } else {
          object.setSelectionStyles({ fontWeight: "bold" });
          bold.style.backgroundColor = "rgba(87, 86, 86, 0.733)";
          object.bold = true;
          object.dirty = true;
          this.canvas.renderAll();
        }
      } else {
        if (object.getSelectedText() == "") {
          //empty
          object.removeStyle("fontWeight");

          //to check if some text is normal and bold
          if (object.fontWeight == "normal") {
            object.set({ fontWeight: "bold" });
            this.canvas.renderAll();
          } else {
            object.set({ fontWeight: "normal" });
            object.dirty = true;
            this.canvas.renderAll();
            bold.style.backgroundColor = "";
            object.bold = undefined;
          }
        } else {
          object.setSelectionStyles({ fontWeight: "normal" });
          object.dirty = true;
          bold.style.backgroundColor = "";
          this.canvas.renderAll();
          object.bold = undefined;
        }
      }
    };
  }

  italic_text() {
    let italic = document.querySelector("#italic");
    italic.onclick = () => {
      let object = this.canvas.getActiveObject();

      if (object.italic === undefined) {
        if (object.getSelectedText() == "") {
          object.removeStyle("fontStyle");

          object.set({ fontStyle: "italic" });

          object.dirty = true;
          this.canvas.renderAll();
          object.italic = true;
          italic.style.backgroundColor = "rgba(87, 86, 86, 0.733)";
        } else {
          object.setSelectionStyles({ fontStyle: "italic" });
          object.dirty = true;
          this.canvas.renderAll();
          object.italic = true;
          italic.style.backgroundColor = "rgba(87, 86, 86, 0.733)";
        }
      } else {
        if (object.getSelectedText() == "") {
          object.removeStyle("fontStyle");

          //to check if some text is normal and italic
          if (object.fontStyle == "normal") {
            object.set({ fontStyle: "italic" });
            this.canvas.renderAll();
          } else {
            object.set({ fontStyle: "" });
            object.dirty = true;
            this.canvas.renderAll();
            italic.style.backgroundColor = "";
            object.italic = undefined;
          }
        } else {
          object.setSelectionStyles({ fontStyle: "normal" });

          object.dirty = true;
          this.canvas.renderAll();
          object.italic = undefined;
          italic.style.backgroundColor = "";
        }
      }
    };
  }

  textAlign_left() {
    document.querySelector("#alignLeftText");
    alignLeftText.onclick = () => {
      let object = this.canvas.getActiveObject();
      if (!object) {
        return false;
      }
      object.set("textAlign", "left");
      object.dirty = true;
      this.canvas.renderAll();
    };
  }

  textAlign_center() {
    let alignCenterText = document.querySelector("#alignCenterText");
    alignCenterText.onclick = () => {
      let object = this.canvas.getActiveObject();
      if (!object) {
        return false;
      }
      object.set("textAlign", "center");
      object.dirty = true;
      this.canvas.renderAll();
    };
  }

  textAlign_right() {
    let alignRightText = document.querySelector("#alignRightText");
    alignRightText.onclick = () => {
      let object = this.canvas.getActiveObject();
      if (!object) {
        return false;
      }
      object.set("textAlign", "right");
      this.canvas.setActiveObject(object);
      object.dirty = true;
      this.canvas.renderAll();
    };
  }

  fontStyle() {
    //fonts
    var fonts = ["Roboto", "Work Sans"];

    fonts.unshift("Times New Roman");
    // Populate the fontFamily select
    let fontFamilySelect = document.querySelector("#fontFamilySelect");
    fonts.forEach((font) => {
      var option = document.createElement("option");
      option.innerHTML = font;
      option.value = font;
      option.style.fontFamily = font;
      option.style.fontSize = "1rem";

      fontFamilySelect.appendChild(option);
    });

    // Apply selected font on change
    fontFamilySelect.onchange = (e) => {
      let object = this.canvas.getActiveObject();
      if (e.target.value !== "Times New Roman") {
        loadAndUse(e.target.value);
        console.log("1");
      } else {
        object.set("fontFamily", e.target.value);
        this.canvas.renderAll();
        console.log("2");
      }
    };

    const loadAndUse = (font) => {
      let object = this.canvas.getActiveObject();

      var myfont = new FontFaceObserver(font);
      myfont
        .load()
        .then(() => {
          // when font is loaded, use it.

          object.set("fontFamily", font);
          this.canvas.renderAll();
        })
        .catch((e) => {
          this.alert("unstable internet connection. cannot load google fonts");
        });
    };
  }
}
