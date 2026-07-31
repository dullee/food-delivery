"use client";
import Image from "next/image";
import bikeImg from "@/public/deliveryBike.jpg";

import Link from "next/link";

import BackButton from "../_components/backButton";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Formik, Field, Form, ErrorMessage } from "formik";

import * as Yup from "yup";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email. Use a format like example@email.com")
          .required("Email is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {/* 1. Pass a function to Formik to access form state */}
      {({ isValid, dirty }) => {
        // 2. Determine if the email is currently valid and filled out
        const isEmailValid = isValid && dirty;

        return (
          <Form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="border px-3 py-2 rounded-md"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="text-red-500 text-xs"
              />
            </div>

            <Button
              type="submit"
              disabled={!isEmailValid} // Optionally disable clicking when invalid
              // 3. Conditionally set opacity (opaque when valid, 20% opacity when invalid)
              className={`bg-black transition-opacity ${
                isEmailValid ? "opacity-100" : "opacity-20 pointer-events-none"
              }`}
            >
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};


export default function SignUp() {
  return (
    <div className="flex flex-col  items-center">
      <main className="flex w-full max-w-360 flex-row justify-between items-center md:pl-25 ">
        <div className="w-full max-w-md flex flex-col gap-6">
          <div className="w-9 h-9">
            <BackButton />
          </div>

          <h1 className="font-semibold text-2xl">Create your account</h1>
          <p>Sign up to explore your favorite dishes.</p>
          <SignupForm />

          <div className="flex justify-center gap-2">
            <p>Already have an account? </p>

            {/*     ------- TO DO: Add log in page ----------------------------------------
            <span><Link href={}>Log in</Link></span>
            -------------------------------------------

            */}
          </div>
        </div>
        <Image
          loading="eager"
          className="p-5 max-sm:hidden"
          src={bikeImg}
          alt="delivery worker on bike"
        />
      </main>
    </div>
  );
}
