import { Modification } from "./_modification.js";

export class Utilities extends Modification {
  deleteObjects() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Delete") {
        let objects = this.canvas.getActiveObjects();

        if (objects.length > 1) {
          objects.forEach((obj) => {
            this.canvas.remove(obj);
            this.canvas.discardActiveObject();
          });
        } else {
          if (this.canvas.getActiveObject().name === "boxCropper") {
            return false;
          }
          if (this.canvas.getActiveObject().name === "uploader") {
            return false;
          }
          if (this.canvas.getActiveObject().name === "content") {
            return false;
          }
          if (this.canvas.getActiveObject().name === "text-content") {
            return false;
          }

          this.canvas.remove(this.canvas.getActiveObject());
        }
      }
    });
  }

  discardActiveObject() {
    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("canvas-container")) {
        //sub header area
        // document.querySelector('.canvas-options').style.display = "none"

        this.canvas.discardActiveObject();
        this.canvas.renderAll();
      }
    });
  }

  canvasOn() {
    const select_object = (o) => {
      var activeObj = o.selected[0];

      //bold text
      let bold = document.querySelector("#bold");
      if (activeObj.type == "textbox" && activeObj.fontWeight === "bold") {
        bold.style.backgroundColor = "rgba(87, 86, 86, 0.733)";
      }
      if (activeObj.type == "textbox" && activeObj.fontWeight === "normal") {
        bold.style.backgroundColor = "";
      }
      if (activeObj.type !== "textbox") {
        bold.style.backgroundColor = "";
      }
      //-------------------------------------//

      //italic text
      let italic = document.querySelector("#italic");
      if (activeObj.type == "textbox" && activeObj.fontStyle === "italic") {
        italic.style.backgroundColor = "rgba(87, 86, 86, 0.733)";
      }
      if (activeObj.type == "textbox" && activeObj.fontStyle === "normal") {
        italic.style.backgroundColor = "";
      }
      if (activeObj.type !== "textbox") {
        italic.style.backgroundColor = "";
      }
      //-------------------------------------//

      // fontSize
      if (activeObj.type == "textbox") {
        document.querySelector("#fontSize").value = activeObj.fontSize;
        document.querySelector("#fontFamilySelect").value =
          activeObj.fontFamily;
        console.log(activeObj.fontFamily);
      } else {
        document.querySelector("#fontSize").value = "";
      }

      // -------------------------------------//

      activeObj.setControlsVisibility({ mtr: false });
      activeObj.set("borderColor", "#333");
      activeObj.set("cornerColor", "#17a2b8");
      activeObj.set("cornerSize", 7);

      activeObj.set("cornerStyle", "circle");
      activeObj.set("transparentCorners", false);
      activeObj.set("lockUniScaling", true);

      // activeObj.setControlsVisibility({
      //   mt: false,
      //   mb: false,
      //   tr: false,
      //   tl: false,
      //   br: false,
      //   bl: false,
      //   mtr: false,
      // });
    };

    //font size change when scaling
    const mouseUp_object = (o) => {
      let activeObj = o.target;
      if (activeObj !== null && activeObj.type === "textbox") {
        document.querySelector("#fontSize").value = activeObj.fontSize;
      }
    };
    const modify_object = (o) => {
      let activeObject = o.target;
      if (activeObject.name == "same-content") {
        this.canvas.getObjects().forEach((e) => {
          if (e.name == "same-content") {
            e.text = activeObject.text;

            this.canvas.renderAll();
          }
        });
      }
    };
    this.canvas.on({
      "selection:updated": select_object,
      "selection:created": select_object,
      "object:modified": modify_object,
      "mouse:up": mouseUp_object,
    });
  }

  //arrow movement
  arrowMovement() {
    var Direction = {
      LEFT: 0,
      UP: 1,
      RIGHT: 2,
      DOWN: 3,
    };

    fabric.util.addListener(document.body, "keydown", (options) => {
      if (options.repeat) {
        return;
      }
      let object = this.canvas.getActiveObject();
      if (object) {
        if (object.lockMovementY !== true) {
          var key = options.which || options.keyCode; // key detection
          console.log(key);
          if (key === 37) {
            // handle Left key
            this.moveSelected(Direction.LEFT);
          } else if (key === 38) {
            // handle Up key
            this.moveSelected(Direction.UP);
          } else if (key === 39) {
            // handle Right key
            this.moveSelected(Direction.RIGHT);
          } else if (key === 40) {
            // handle Down key
            this.moveSelected(Direction.DOWN);
          }
        }
      }
    });
  }
  //arrow key functionality
  moveSelected(direction) {
    let STEP = 0.5;

    var Direction = {
      LEFT: 0,
      UP: 1,
      RIGHT: 2,
      DOWN: 3,
    };
    var activeObject = this.canvas.getActiveObject();

    if (activeObject) {
      switch (direction) {
        case Direction.LEFT:
          activeObject.left = activeObject.left - STEP;
          break;
        case Direction.UP:
          activeObject.top = activeObject.top - STEP;
          break;
        case Direction.RIGHT:
          activeObject.left = activeObject.left + STEP;
          break;
        case Direction.DOWN:
          activeObject.top = activeObject.top + STEP;
          break;
      }
      activeObject.setCoords();
      this.canvas.renderAll();
    }
  }

  //drop menu
  files_modal_button(element) {
    document.querySelector(element).onclick = (e) => {
      let el = document.querySelector(`${element} .dropdown-content`);

      if (el.style.display == "block") {
        el.style.display = "none";
      } else {
        el.style.display = "block";
      }
    };

    window.onclick = (e) => {
      if (!e.target.matches(".dropbtn")) {
        var dropdown_insert = document.querySelector(
          `.insert-shape .dropdown-content`
        );
        if (dropdown_insert && dropdown_insert.style.display == "block") {
          dropdown_insert.style.display = "none";
        }
        let dropdown_subHeader = document.querySelector(
          `.sub_header .dropdown-content`
        );
        if (dropdown_subHeader.style.display == "block") {
          dropdown_subHeader.style.display = "none";
        }
      }
    };
  }
}
