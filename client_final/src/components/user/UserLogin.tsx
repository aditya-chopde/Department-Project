import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import API from "@/lib/baseUrl";
import { useNavigate } from "react-router-dom";

export default function UserLogin({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = { email, password };
    try {
      await API.post("/user/login", formData)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          localStorage.setItem("user", res.data.find._id);
          localStorage.setItem("token", res.data.token);
          // navigate("/user-dashboard");
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="lg:w-[30%] md:w-[55%] w-[65%] mx-auto mt-20">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Welcome</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"></div>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      type="password"
                      required
                      placeholder="***************"
                    />
                  </div>
                  <Button type="submit" className="w-full cursor-pointer">
                    Login
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
