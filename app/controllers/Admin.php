<?php
class Admin extends Controller
{
  public function __construct()
  {
    $this->doctorModel = $this->model('doctor');

    $this->userModel = $this->model('user');

    if (isset($_SESSION['user_role']) && $_SESSION['user_role'] == 'user') {
      redirect('index');
      return false;
    }
  }

  public function index()
  {

    $doctors_count = $this->doctorModel->getDoctorsCount();
    $bookings_count = $this->userModel->getAllBookings_count();
    $users_count = $this->userModel->getAllUsers_count();



    $data =  [
      'doctors_count' => $doctors_count,
      'bookings_count' => $bookings_count,
      'users_count' => $users_count

    ];

    if (isset($_SESSION['user_role'])) {

      $this->view('admin/index', $data);
    } else {

      // Check for POST
      // Check for POST
      if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Process form
        // Sanitize POST data
        $_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

        // Init data
        $data = [
          'email' => trim($_POST['email']),
          'password' => trim($_POST['password']),
          'email_err' => '',
          'password_err' => '',
        ];
        // Validate Email
        if (empty($data['email'])) {
          $data['email_err'] = 'Pleae enter email';
        }

        // Validate Password
        if (empty($data['password'])) {
          $data['password_err'] = 'Please enter password';
        }

        //check for user/email
        if ($this->userModel->findUserByEmail_admin($data['email'])) {
          //user found

        } else {
          //No user found
          $data['email_err'] = 'No user found';
        }

        // Make sure errors are empty
        if (empty($data['email_err']) && empty($data['password_err'])) {
          // Validated
          // check and set logged in user
          $loggedInUser = $this->userModel->login_admin($data['email'], $data['password']);

          if ($loggedInUser) {
            // Create Session
            $this->createUserSession($loggedInUser);
          } else {
            $data['password_err'] = 'Password incorrect';


            $this->view('users/login-admin', $data);
          }
        } else {
          // Load view with errors
          $this->view('users/login-admin', $data);
        }
      } else {
        // Init data
        $data = [
          'email' => '',
          'password' => '',
          'email_err' => '',
          'password_err' => '',
        ];

        // Load view
        $this->view('users/login-admin', $data);
      }
    }
  }
}
