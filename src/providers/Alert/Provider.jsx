import { isEmpty } from "lodash";
import { Fragment, useCallback, useEffect, useState } from "react";
import Alert from "src/components/Alert";
import Context from "./Context";

const Provider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [type, setType] = useState("");

  /* 
  'error'
| 'info'
| 'success'
| 'warning' */
  const showAlert = useCallback((message, type) => {
    setType(type);
    setMessages((preMessages) => [...preMessages, message]);
  }, []);

  const showError = useCallback((message) => {
    setType("error");
    setMessages((preMessages) => [...preMessages, message]);
  }, []);

  const closeAlert = useCallback(() => {
    setType("");
    setMessages((preMessages) => {
      const tempMessages = [...preMessages];
      tempMessages.pop();
      return tempMessages;
    });
  }, []);

  const props = { closeAlert, showAlert, showError };

  useEffect(() => {
    if (isEmpty(messages)) return;
    setTimeout(closeAlert, 6000);
  }, [messages]);

  return (
    <Fragment>
      <Context.Provider value={props}>{children}</Context.Provider>
      <Alert
        autoHideDuration={6000}
        isOpen={!isEmpty(messages)}
        messages={messages}
        type={type}
      />
    </Fragment>
  );
};

export default Provider;
