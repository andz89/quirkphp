import { Right_tools } from "./_right-tools.js";
import { Menu_tools } from "./_menu-tools.js";
import { Modification } from "./_modification.js";
import { Utilities } from "./_utilities.js";
export class Canvas extends Modification {
  create_main_canvas = () => {
    this.canvas.state = [];

    let utils = new Utilities({
      canvas: this.canvas,
      width: this.width,
      height: this.height,
      canvasScale: this.canvasScale,
      SCALE_FACTOR: this.SCALE_FACTOR,
      fileHandle: this.fileHandle,
    });

    utils.deleteObjects();
    utils.canvasOn();
    utils.discardActiveObject();
    utils.arrowMovement();

    utils.files_modal_button(".sub_header");

    let menu_tools = new Menu_tools({
      canvas: this.canvas,
      width: this.width,
      height: this.height,
      canvasScale: this.canvasScale,
      SCALE_FACTOR: this.SCALE_FACTOR,
      fileHandle: this.fileHandle,
    });
    menu_tools.superScript();
    menu_tools.honor_canvas();
    menu_tools.getNamePupils();
    menu_tools.getJson();
    menu_tools.download_as_image();

    menu_tools.keyboard_shortcut();

    let right_tools = new Right_tools({
      canvas: this.canvas,
      width: this.width,
      height: this.height,
      canvasScale: this.canvasScale,
      SCALE_FACTOR: this.SCALE_FACTOR,
      fileHandle: this.fileHandle,
    });
    right_tools.fontSize("#fontSize");

    right_tools.fontColor("#color");
    right_tools.bold_text();
    right_tools.italic_text();

    right_tools.textAlign_left();
    right_tools.textAlign_center();
    right_tools.textAlign_right();
    right_tools.fontStyle();
  };
}
