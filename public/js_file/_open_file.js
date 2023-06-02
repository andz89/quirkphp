import { Canvas } from "./canvas.js";

export class Open_file {
  get_file_json(canvas_json) {
    let class_picture = JSON.parse(canvas_json);
    let canvasScale = 1;
    let SCALE_FACTOR = 1.1;
    let width = class_picture.size.w;
    let height = class_picture.size.h;

    const canvas = (width, height) => {
      let c = document.createElement("canvas");
      c.id = "canvas";
      document.querySelector("#canvas-background").appendChild(c);
      return new fabric.Canvas("canvas", {
        width: width,
        height: height,
        backgroundColor: "#fff",
        preserveObjectStacking: true,

        splitByGrapheme: false,
        selection: true,
      });
    };
    let canvas_created = canvas(width, height);
    function replaceBreakLine(valueToEscape) {
      if (valueToEscape != null && valueToEscape != "") {
        return valueToEscape.replaceAll("<-br->", "\n");
      } else {
        return valueToEscape;
      }
    }

    function replaceQoute(valueToEscape) {
      if (valueToEscape != null && valueToEscape != "") {
        return valueToEscape.replaceAll("<-q->", "'");
      } else {
        return valueToEscape;
      }
    }
    canvas_created.loadFromJSON(class_picture.json, () => {
      let a = canvas_created.getObjects();
      a.forEach((e) => {
        if (e.type === "textbox") {
          e.text = replaceQoute(replaceBreakLine(e.text));
          e.centeredScaling = true;
          e.setControlsVisibility({
            mt: false,
            mb: false,
            tr: false,
            tl: false,
            br: false,
            bl: false,
            mtr: false,
          });

          e.lockMovementX = true;
        }
        if (e.name == "teacher") {
          e.text = document
            .querySelector("#select-teacher")
            .value.toUpperCase();

          // document.querySelector("#select-templates").value;
          e.editable = false;
        }
        if (e.text == "section") {
          e.text = document.querySelector("#select-section").value;
          e.editable = false;
          e.fontSize = 12;
        }
        if (e.type === "image") {
          e.lockMovementX = true;
          e.lockMovementY = true;
          e.lockScalingX = true;
          e.lockScalingX = true;
          e.lockRotation = true;
          e.selectable = false;
          e.hoverCursor = "default";
          e.scaleToWidth(canvas_created.width);
          e.opacity = 1;
        }
        canvas_created.renderAll();
        document.querySelector(".modal-loader").classList.remove("spinner-1");
        document.querySelector(".modal-loader").style.display = "none";
      });
    });

    let canvasInit = new Canvas({
      canvas: canvas_created,
      width: fabric.util.parseUnit(width),
      height: fabric.util.parseUnit(height),
      canvasScale: canvasScale,
      SCALE_FACTOR: SCALE_FACTOR,
    });
    canvasInit.create_main_canvas();

    function fitCanvasToScreen() {
      SCALE_FACTOR = 0.9;

      canvasScale = canvasScale / SCALE_FACTOR;
      canvas_created.setHeight(height * (1 / SCALE_FACTOR));
      canvas_created.setWidth(width * (1 / SCALE_FACTOR));
      canvas_created.setZoom(canvasScale);

      canvas_created.current_canvasScale = canvasScale;
      canvas_created.current_width = canvas_created.getWidth();
      canvas_created.current_height = canvas_created.getHeight();
      canvas_created.renderAll();
    }

    fitCanvasToScreen();

    function zoomIn(selector) {
      SCALE_FACTOR = 1.1;

      let zoomIn = document.querySelector(selector);
      zoomIn.addEventListener("click", () => {
        canvasScale = canvasScale * SCALE_FACTOR;
        canvas_created.setHeight(canvas_created.getHeight() * SCALE_FACTOR);
        canvas_created.setWidth(canvas_created.getWidth() * SCALE_FACTOR);
        canvas_created.setZoom(canvasScale);

        canvas_created.current_canvasScale = canvasScale;
        canvas_created.current_width = canvas_created.getWidth();
        canvas_created.current_height = canvas_created.getHeight();
        canvas_created.renderAll();
      });
    }
    zoomIn("#zoomIn");

    function zoomOut(selector) {
      let zoomOut = document.querySelector(selector);
      SCALE_FACTOR = 1.1;

      zoomOut.addEventListener("click", (e) => {
        canvasScale = canvasScale / SCALE_FACTOR;
        canvas_created.setHeight(
          canvas_created.getHeight() * (1 / SCALE_FACTOR)
        );
        canvas_created.setWidth(canvas_created.getWidth() * (1 / SCALE_FACTOR));
        canvas_created.setZoom(canvasScale);

        canvas_created.current_canvasScale = canvasScale;
        canvas_created.current_width = canvas_created.getWidth();
        canvas_created.current_height = canvas_created.getHeight();
        canvas_created.renderAll();
      });
    }

    zoomOut("#zoomOut");
  }
}
