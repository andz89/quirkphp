<?php
class user
{
  private $db;


  public function __construct()
  {
    $this->db = new Database;
  }
}
