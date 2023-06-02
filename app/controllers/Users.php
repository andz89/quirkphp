<?php
class Users extends Controller
{
  public function __construct()
  {
    $this->userModel = $this->model('user');
    $this->doctorModel = $this->model('doctor');
  }

  public function index()
  {
    $data =  ['title' => '',];
    $this->view('pages/index', $data);
  }
}
