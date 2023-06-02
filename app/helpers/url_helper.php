<?php function redirect($page)
{

  // ob_start();

  // header('location: ' . URLROOT . '/' . $page);

  // ob_end_flush();

  // echo ("<script>location.href = '" . URLROOT . "/ $page ;></script>");
  echo "<script type='text/javascript'>window.top.location='" . URLROOT . "/$page';</script>";
  exit;
}
