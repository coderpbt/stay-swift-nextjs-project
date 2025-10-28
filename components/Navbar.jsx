
import Link from "next/link"

const Navbar = ({sideMenu}) => {
  return (
    <nav>
    <Link className="text-3xl font-bold border-2 py-2 px-4 rounded-md border-black" href="/">
      Stay Swift
    </Link>
    {
      sideMenu && (
         <ul>
            <li>
              <Link href="#">Recommended Places</Link>
            </li>

            <li>
              <Link href="#">About Us</Link>
            </li>

            <li>
              <Link href="#">Contact us</Link>
            </li>

            <li>
              <Link href="/bookings">Bookings</Link>
            </li>

            <li>
              <Link href="/login" class="login">Login</Link>
            </li>
        </ul>
      )
    }
   
  </nav>
  )
}

export default Navbar