export class Modification {
  constructor(property) {
    this.canvas = property.canvas;
    this.canvasScale = property.canvasScale;
    this.SCALE_FACTOR = property.SCALE_FACTOR;
    this.fileHandle = property.fileHandle;
    this.width = property.width;
    this.height = property.height;
  }

  loaderShow() {
    document.querySelector(".modal-loader").classList.add("spinner-1");
    document.querySelector(".modal-loader").style.display = "block";
  }
  loaderHide() {
    document.querySelector(".modal-loader").classList.remove("spinner-1");
    document.querySelector(".modal-loader").style.display = "none";
  }
}
