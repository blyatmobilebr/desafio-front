import "./Button.css";

function Button(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div>
      <button className="add-button" type={props.type} onClick={handleClick}>
        {props.text}
      </button>
    </div>
  );
}

export default Button;
