 <!DOCTYPE html>
 <html lang="en">

 <head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title><?php echo $data['title']; ?></title>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
   <link rel="stylesheet" href="<?php echo URLROOT ?>/css/custom.css ">
   <!-- <link rel="stylesheet" href="../public/style/style.min.css"> -->
   <link rel="stylesheet" href="<?php echo URLROOT ?>/css/style.min.css ">
 </head>

 <body style="overflow:hidden">

   <div class="modal-loader"></div>
   <div class="modal-pupil-container">
     <div class="modal-pupil-container-content">
       <div class="bg-light " style="width:400px">
         <div style="padding:5px;width:400px" class="d-flex justify-content-end">
           <div class="btn btn-sm btn-danger close">Close</div>
         </div>

       </div>
       <ul class="list-group">



       </ul>
     </div>

   </div>

   <header>
     <ul style="padding:10px 0;  ">
       <div class="logo">
         <li href="" style="list-style: none "> <?php echo $data['title']; ?></li>
       </div>



       This Web App is created and developed by Dawn Andrew N. Rivero
       <div class="zoom_and_undo_container">


         <div class="zoom-container" style="margin:0 15px">
           <button id="zoomOut">&#9866;</button>
           VIEW
           <button id="zoomIn">&#10010; </button>
         </div>


       </div>
     </ul>

   </header>
   <div class="sub_header" style="margin-top:-20px">

     <div class="dropdown dropdown-files">
       <li class="dropbtn dropbtn-files">Canvas</li>
       <div id="myDropdown" class="dropdown-content">
         <li id="download-image" style="display: flex; justify-content: space-between;">Download <span>
             (Control +
             d)</span></li>
         <li><a href="index.html" target="_blank" style="text-decoration:none; color: #333;"> Create new
             tab</a></li>


       </div>

     </div>




     <div class="style-container ">


       <div class="fonts_and_text-center">

         <select id="fontFamilySelect" class="fontFamilySelect  "></select>
         <input type="number" value="18" id="fontSize"><br>




       </div>





     </div>
     <div class="text-style-align ">

       <!-- color -->
       <input type="color" id="color" value="#008080">
       <div>

         <label for="color"> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4LjMxIDEwLjA3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZvbnQtc2l6ZTo5LjAzcHg7ZmlsbDojZmZmO2ZvbnQtZmFtaWx5OkFyaWFsUm91bmRlZE1UQm9sZCwgQXJpYWwgUm91bmRlZCBNVCBCb2xkO30uY2xzLTJ7ZmlsbDojMDBhOTlkO308L3N0eWxlPjwvZGVmcz48dGl0bGU+Y29sb3IgaWNvbjwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48dGV4dCBjbGFzcz0iY2xzLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTEgNy44KSI+QTwvdGV4dD48cmVjdCBjbGFzcz0iY2xzLTIiIHk9IjguNDUiIHdpZHRoPSI4LjMxIiBoZWlnaHQ9IjEuNjEiIHJ4PSIwLjM5Ii8+PC9nPjwvZz48L3N2Zz4=" width="15" alt="">

         </label>


       </div>



       <div>
         <label id="bold"> <img class="bold" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3LjMzIDguNTgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojY2NjO308L3N0eWxlPjwvZGVmcz48dGl0bGU+QXNzZXQgMTA8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8zIiBkYXRhLW5hbWU9IkxheWVyIDMiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTS4zMywxMC4zMnYtMWwuOTEtLjE4VjNMLjMzLDIuNzh2LTFINC4xNGE0LjA5LDQuMDksMCwwLDEsMi4zNi41OSwyLDIsMCwwLDEsLjg1LDEuNzZBMS44OSwxLjg5LDAsMCwxLDcsNS4xNmExLjk0LDEuOTQsMCwwLDEtLjkyLjcsMi4wOCwyLjA4LDAsMCwxLC44Ni40LDEuNjMsMS42MywwLDAsMSwuNTEuNjgsMi4xMywyLjEzLDAsMCwxLC4xNy44OCwyLjI0LDIuMjQsMCwwLDEtLjgxLDEuODcsMy42OCwzLjY4LDAsMCwxLTIuMy42M1pNMyw1LjM0SDQuMmExLjcxLDEuNzEsMCwwLDAsMS4wNi0uMjksMSwxLDAsMCwwLC4zNy0uODIsMSwxLDAsMCwwLS4zNy0uODgsMS44MywxLjgzLDAsMCwwLTEuMTItLjI4SDNaTTMsOUg0LjU1YTEuNTksMS41OSwwLDAsMCwxLS4zQTEuMDgsMS4wOCwwLDAsMCw2LDcuODJhMS42NiwxLjY2LDAsMCwwLS4xNC0uNzEsMSwxLDAsMCwwLS40MS0uNDQsMS42OCwxLjY4LDAsMCwwLS43Mi0uMTRIM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjMzIC0xLjc0KSIvPjwvZz48L2c+PC9zdmc+" alt="">
         </label>
       </div>


       <!-- italic -->
       <div>
         <label id="italic">
           <img class="italic" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1LjIgOC43NiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNjY2M7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5pdGFsaWM8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl80IiBkYXRhLW5hbWU9IkxheWVyIDQiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTUuMjEsMi43NEM0LjA4LDIuODMsNCwyLjkxLDMuNzksMy44OUwyLjcxLDkuNTRjLS4yLDEtLjA4LDEuMTIsMSwxLjJsLS4wNy4zOEguMDlsLjA5LS4zOGMxLjA5LS4xLDEuMjEtLjE5LDEuNDEtMS4yTDIuNjgsMy44OWMuMTktMSwuMDgtMS4wNi0xLjA1LTEuMTVsLjA4LS4zOEg1LjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4wOSAtMi4zNikiLz48L2c+PC9nPjwvc3ZnPg==" alt="" />
         </label>
       </div>
       <div class="superScript-container  hover">

         <img src="./public/images/superscript.png" id="superScript">
       </div>
       <div>


         <!-- alignLeftText -->
         <label id="alignLeftText">
           <img class=" " src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4LjAzIDcuMjkiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojY2NjO308L3N0eWxlPjwvZGVmcz48dGl0bGU+bGVmdDwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzYiIGRhdGEtbmFtZT0iTGF5ZXIgNiI+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIwLjAzIiB3aWR0aD0iOCIgaGVpZ2h0PSIwLjkxIiByeD0iMC4yOCIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeT0iNCIgd2lkdGg9IjgiIGhlaWdodD0iMC45MSIgcng9IjAuMjgiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHk9IjEuOTMiIHdpZHRoPSI1Ljk3IiBoZWlnaHQ9IjAuOTEiIHJ4PSIwLjI0Ii8+PHJlY3QgY2xhc3M9ImNscy0xIiB5PSI2LjM4IiB3aWR0aD0iNS43NiIgaGVpZ2h0PSIwLjkxIiByeD0iMC4yNCIvPjwvZz48L2c+PC9zdmc+" width="15" alt="" />
         </label>
       </div>

       <div>
         <!-- alignCenterText -->
         <label id="alignCenterText">
           <img class=" " src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDcuMjkiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojY2NjO308L3N0eWxlPjwvZGVmcz48dGl0bGU+Y2VudGVyXzE8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJjZW50ZXIiPjxyZWN0IGNsYXNzPSJjbHMtMSIgd2lkdGg9IjgiIGhlaWdodD0iMC45MSIgcng9IjAuMjgiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHk9IjQiIHdpZHRoPSI4IiBoZWlnaHQ9IjAuOTEiIHJ4PSIwLjI4Ii8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIxLjEzIiB5PSIxLjkzIiB3aWR0aD0iNS43NCIgaGVpZ2h0PSIwLjkxIiByeD0iMC4yNCIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMS4yMyIgeT0iNi4zOCIgd2lkdGg9IjUuNTMiIGhlaWdodD0iMC45MSIgcng9IjAuMjMiLz48L2c+PC9nPjwvc3ZnPg==" width="15" alt="" />
         </label>
       </div>
       <div>
         <!-- alignRightText -->
         <label id="alignRightText">
           <img class=" " src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDcuMjkiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojY2NjO308L3N0eWxlPjwvZGVmcz48dGl0bGU+cmlnaHQ8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJyaWdodCI+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iOCIgaGVpZ2h0PSIwLjkxIiByeD0iMC4yOCIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeT0iNCIgd2lkdGg9IjgiIGhlaWdodD0iMC45MSIgcng9IjAuMjgiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjIuMDMiIHk9IjEuOTMiIHdpZHRoPSI1Ljk3IiBoZWlnaHQ9IjAuOTEiIHJ4PSIwLjI0Ii8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIyLjI0IiB5PSI2LjM4IiB3aWR0aD0iNS43NiIgaGVpZ2h0PSIwLjkxIiByeD0iMC4yNCIvPjwvZz48L2c+PC9zdmc+" alt="" width="15" />
         </label>
       </div>



     </div>


     <input type="text" id="json-input" style="display:none">
   </div>


   <main>
     <div style="margin-top:20px;   position:fixed; width:500px">
       <div class="container mt-5 bg-light p-2">
         <form>
           <div class="alert alert-warning" style="display:none;padding:5px 10px; height:40px">
             form should be not empty.
           </div>
           <div class="mb-3">
             <label for="select1" class="form-label">Teacher Name:</label>
             <select class="form-select" id="select-teacher">


             </select>
           </div>
           <div class="mb-3">
             <label for="select2" class="form-label">Grade & Section</label>
             <select class="form-select" id="select-section">



             </select>
           </div>
           <div class="mb-3">
             <label for="select2" class="form-label">Templates:</label>
             <select class="form-select" id="select-templates">
               <option value="ribbon.json">Ribbon</option>
               <option value="certificate-honor.json">Certificate with Honor</option>
               <option value="conduct-award.json">Conduct award</option>



             </select>
           </div>

           <div class="btn btn-primary" id="canvas-form-btn">Submit</div>
         </form>
       </div>
     </div>
     <div id="canvas-background" class="canvas-container">


     </div>




   </main>




   <!-- <script type="module" src="./main.js"></script> -->

   <!-- <script src="./library_js/fabric.js"></script>
     -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.1/fabric.min.js"></script>
   <script src="<?php echo URLROOT ?>/library_js/fonts.js"></script>
   <script type="module" src="<?php echo URLROOT ?>/main.js "></script>





 </body>

 </html>