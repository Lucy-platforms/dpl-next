import FieldError from "@ui/FieldError";
import FieldLabel from "@ui/FieldLabel";
import { clsx } from "@utils/index";
import React from "react";

type Props = {
  containerClassName?: string;
  className?: string;
  error?: string;
  touched?: boolean;
  label?: string;
  labelClassName?: string;
};

const TextField = React.forwardRef<
  HTMLInputElement | null,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    {
      touched,
      error,
      containerClassName,
      className,
      label,
      labelClassName,
      ...rest
    },
    ref
  ) => {
    const showError = !!touched && !!error;
    const containerClassNames = clsx("block relative", containerClassName);
    const classNames = clsx(
      `block h-12 bg-primary-30 pl-4
    text-base leading-5
    placeholder:text-primary-90 placeholder:opacity-40 rounded-md`,
      containerClassName,
      className,
      showError ? "border border-error-50 placeholder" : ""
    );
    return (
      <div className={containerClassNames}>
        {!!label && (
          <FieldLabel htmlFor={rest.name} className={labelClassName}>
            {label}
          </FieldLabel>
        )}
        <input className={classNames} ref={ref} {...rest} />
        {showError && <FieldError error={error} />}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
