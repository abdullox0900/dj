import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

export type PropsWithReactHookForm<T extends FieldValues> = {
  hookFormData?: {
    register: UseFormRegister<T>;
    registerName: string;
    options?: RegisterOptions;
  };
};
