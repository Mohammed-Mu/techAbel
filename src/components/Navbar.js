"use client";
import { signOut } from "firebase/auth"; // Import Firebase signOut
import { auth } from "@/lib/firebase"; // Firebase auth configuration
import { useRouter } from "next/navigation"; // For redirection
import { useAuth } from "@/context/AuthContext"; // Custom hook to get the user state
import Link from "next/link"; // Import Link from next/link

export default function Navbar() {
  const { user } = useAuth(); // Get the current user from the AuthContext
  const router = useRouter(); // Use useRouter for redirection after logout

  // Handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase sign-out function
      router.push("/auth/login"); // Redirect to login page
    } catch (error) {
      console.error("Error logging out: ", error); // Handle any errors during sign-out
    }
  };

  return (
    <nav className="bg-black shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link href="/">
            <span className="text-2xl font-bold text-green-600 cursor-pointer">
              TechABLE
            </span>
          </Link>

          <div className="flex space-x-6">
            <Link href="/jobs" className="text-blue-600 hover:text-blue-500">
              Jobs
            </Link>
            <Link href="/dashboard" className="text-blue-600 hover:text-blue-500">
              Dashboard
            </Link>
            <Link href="/profile" className="text-blue-600 hover:text-blue-500">
              Profile
            </Link>
            {/* Add Jobs section */}
            <Link href="/add-job" className="text-blue-600 hover:text-blue-500">
              Add Jobs
            </Link>
          </div>

          <div className="flex space-x-4">
            {/* Show Logout button if user is authenticated, otherwise show Login/Signup */}
            {user ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer"
              >
                Logout
              </button>
            ) : (
              <>
                <Link href="/auth/login">
                  <span className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer">
                    Login
                  </span>
                </Link>
                <Link href="/auth/signup">
                  <span className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer">
                    Sign Up
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
