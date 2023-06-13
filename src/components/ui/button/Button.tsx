import cn from "clsx";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "orange" | "white";
  size?: "sm" | "md" | "lg";
}

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  variant = "orange",
  size = "md",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(
        "rounded-xl font-medium shadow px-10 py-2 hove:shadow-lg trasition duration-300 ease-in-out",
        {
          "text-white bg-primary": variant === "orange",
          "text-primary bg-white": variant === "white",
          "px-5 py-2 text-sm": size === "sm",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
