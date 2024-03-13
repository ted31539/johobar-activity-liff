import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import defaultFormProps from "./define";
import Context from "./Context";

const Provider = ({ schema, defaultValues, formProps, onSubmit, children }) => {
  const methods = useForm({
    ...defaultFormProps,
    ...formProps,
    ...defaultValues,
    resolver: yupResolver(schema),
  });

  const { handleSubmit, ...formMethods } = methods;

  return (
    <Context.Provider value={{ ...formMethods }}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </Context.Provider>
  );
};

export default Provider;
