import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import Logout from "./auth/Logout";

const Navbar = async ({ sideMenu }) => {
    const session = await auth();
    console.log(session);
    return (
        <nav>
               <Link className="text-3xl font-bold border-2 py-2 px-4 rounded-md border-black" href="/">
      Stay Swift
    </Link>
            {sideMenu && (
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
                        {
                            session?.user ? (
                                <idiv>
                                    <span className="mx-1"> {session?.user?.name} </span>
                                    <span> | </span>
                                    <Logout />
                                </idiv>
                            ) : ( <Link href="/login" className="login">
                            Login
                        </Link>)
                        }

                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;