import "./cssFolder/style.css";
// import userImage from "./imgFolder/userImage.png";

function Navbar({ userImage }) {
  return (
    <nav>
      <div className="logo">
        <img src={userImage} alt="user" />
        <h3>Grupverse</h3>
      </div>
      <div className="contains">
        <ul>
          <li>
            <a href=" ">Home</a>
          </li>
          <li>
            <a href=" ">About Us</a>
          </li>
          <li>
            <a href=" ">Contact Us</a>
          </li>
          <li>
            <a href=" ">Help</a>
          </li>
          <li>
            <a href=" ">Stats</a>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <i className="fa-solid fa-bell"></i>
        <a className=" dropbtn " href=" ">
          <img src={userImage} alt="User" />
        </a>
        <div className="dropdown-content">
          <a href=" ">
            <i className="fa-solid fa-user"></i>User Profile
          </a>
          <a href=" ">
            <i className="fa-solid fa-registered"></i>Register
          </a>
          <a href=" ">
            <i className="fa-solid fa-file"></i>About
          </a>
          <a href=" ">
            <i className="fa-solid fa-phone-volume"></i>Contact
          </a>
          <a href=" ">
            <i className="fa-solid fa-envelope"></i>Terms & Condition
          </a>
          <a href=" ">
            <i className="fa-solid fa-book"></i>Privacy Policy
          </a>
          <a href=" ">
            <i className="fa-solid fa-gear"></i>Settings
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
