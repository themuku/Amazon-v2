import { IField } from "./field-interface";
import cn from "clsx";
import { forwardRef } from "react";

const Field = forwardRef<HTMLInputElement, IField>(
  (
    { placeholder, error, className, type = "text", style, Icon, ...rest },
    ref
  ) => {
    return (
      <div className={cn("mb-4", className)}>
        <label>
          {Icon && <Icon className="mr-3" />}
          <span className="mb-2 block">{placeholder}</span>
          <input
            placeholder={placeholder}
            className={cn(
              "px-4 py-2 w-full outline-none border border-gray border-solid focus:border-primary transition-all placeholder:font-gray rounded-lg",
              {
                "border-red": !!error,
              }
            )}
            type={type}
            {...rest}
            ref={ref}
          />
        </label>
        {error && <div className="text-red mt-1 text-sm">{error}</div>}
      </div>
    );
  }
);

Field.displayName = "Field";

export default Field;
