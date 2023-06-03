import Meta from "../../ui/Meta";
import { validEmail } from "./valid-email";
import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { IEmailPassword } from "@/store/user/user.interface";
import Heading from "@/ui/Heading";
import Button from "@/ui/button/Button";
import Field from "@/ui/input/Field";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Auth: FC = () => {
  const { isLoading } = useAuth();
  const { login, register } = useActions();

  const [type, setType] = useState<"login" | "register">("login");

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEmailPassword>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
    if (type === "login") login(data);
    else register(data);

    reset();
  };

  return (
    <Meta title="Auth">
      <section className="flex h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg bg-white shadow-sm p-8 m-auto"
        >
          <Heading className="capitalize text-center mb-4">{type}</Heading>
          <Field
            {...formRegister("email", {
              required: "Email is required",
              pattern: {
                value: validEmail,
                message: "Please enter a valid email adress",
              },
            })}
            placeholder="Email"
            error={errors.email?.message}
          />
          <Field
            {...formRegister("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password min length should be 6 chars",
              },
            })}
            type="password"
            placeholder="Password"
            error={errors.password?.message}
          />
          <Button variant="white">Let's go!</Button>
        </form>
      </section>
    </Meta>
  );
};

export default Auth;
