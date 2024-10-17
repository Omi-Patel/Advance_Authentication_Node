"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Lock, User, EyeOff, Eye } from "lucide-react"; // Lucide Icons
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Assuming you're using shadcn's utility for conditional classes
import Loader from "@/components/Loader";

// Validation schema using Yup
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [loading, setLoading] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        console.log("Form values:", values);
        setLoading(false);
      }, 4000);
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen sm:p-6 bg-background text-primary ">
      <Card className="max-w-md w-full shadow-lg rounded-md bg-background text-primary sm:p-6">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Sign Up
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <Label htmlFor="name">Name</Label>
              <div className="relative">
                <User className="absolute h-5 w-5 left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={cn(
                    "pl-10",
                    formik.touched.name && formik.errors.name
                      ? "border-red-500"
                      : ""
                  )}
                />
              </div>
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </div>
              )}
            </div>

            {/* Email Input */}
            <div>
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute h-5 w-5 left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={cn(
                    "pl-10",
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : ""
                  )}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </div>
              )}
            </div>

            {/* Password Input */}
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute h-5 w-5 left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={cn(
                    "pl-10",
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : ""
                  )}
                />
                <button
                  type="button"
                  onClick={handleTogglePassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className={`flex gap-4 justify-center items-center w-full mt-4 bg-blue-600 hover:bg-blue-700 ${
                loading ? "text-gray-300 tracking-wider" : "text-white"
              } py-2 rounded-md`}
            >
              {loading ? "Processing.." : "Sign Up"}
              {loading && <Loader />}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <a href="#" className="text-blue-600">
              Sign In
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupForm;
