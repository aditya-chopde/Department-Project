import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import API from "@/lib/baseUrl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

export default function UserSignUp({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const generateYears = () => {
    const startYear = 2000;
    const endYear = new Date().getFullYear() + 1;
    const years = [];
    for (let year = startYear; year < endYear; year++) {
      years.push(`${year}-${year + 1}`);
    }
    return years;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = { name, email, department, year, phone, password };
    try {
      await API.post("/user/signup", formData)
        .then((res) => {
          alert(res.data.message);
          navigate("/");

          setName("");
          setEmail("");
          setDepartment("");
          setYear("");
          setPhone("");
          setPassword("");
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
      <div className="lg:w-[32%] md:w-[55%] w-[75%] mx-auto mt-20">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">
              Create an accout to get started
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"></div>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      type="text"
                      placeholder="John Jadhav"
                      required
                    />
                  </div>
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
                    <Label htmlFor="department">Select Year</Label>
                    <Select onValueChange={(e) => setYear(e)} required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {generateYears().map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      id="phone"
                      type="text"
                      placeholder="1234567890"
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
                    Sign Up
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
