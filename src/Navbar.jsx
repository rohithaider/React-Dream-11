import Coin from "../assets/coin.png";
import Logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <div className="w-11/12 mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixtures</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
          <li>
            <div className="border">
            <p>0 Coin</p>
            <img src={Coin} alt="" className="w-6 h-6" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
