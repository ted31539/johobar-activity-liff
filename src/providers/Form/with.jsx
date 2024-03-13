import Context from "./Context";

const withContainer = (Component) => {
  return (props) => (
    <Context.Consumer>
      {(value) => <Component {...value} {...props} />}
    </Context.Consumer>
  );
};

export default withContainer;
