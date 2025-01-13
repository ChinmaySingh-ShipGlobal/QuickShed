import { Button } from "@/components/ui/button";
import Auth from "@/layouts/Auth";

export default function Register() {
  return (
    <Auth className="flex flex-col">
      <Button>Login with google</Button>
      <Button className="mt-2">Login with email</Button>
    </Auth>
  );
}
