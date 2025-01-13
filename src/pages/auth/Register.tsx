import { Button } from "@/components/ui/button";
import Auth from "@/layouts/Auth";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Auth className="flex flex-col">
      <p className="mt-2 text-black text-sm mb-4">Let's Get Started . . .</p>
      <Button>Login with google</Button>
      <Button className="mt-2">Login with email</Button>
      <p className="mt-4 self-center text-sm">
        Already have an account?
        <Link
          to="/login"
          className="ml-2 text-sm text-blue-800 font-medium underline hover:text-blue-600"
        >
          Login
        </Link>
      </p>
    </Auth>
  );
}
