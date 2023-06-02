<?php
class Pages extends Controller
{
    public function __construct()
    {
    }

    public function index()
    {
        $data =  ['title' => 'Quirk Templates',];
        $this->view('pages/index', $data);
    }
}
