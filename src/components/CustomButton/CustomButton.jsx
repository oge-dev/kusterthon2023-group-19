import PropTypes from "prop-types";
import { FaPlus, FaTrash, FaDownload, FaEdit } from "react-icons/fa"; // Assuming you're using react-icons for icons
import "./CustomButton.css";

const CustomButton = ({ type, onClick, children }) => {
  let buttonContent;
  let buttonClass = "";

  switch (type) {
    case "empty":
      buttonContent = children;
      buttonClass = "empty-button";
      break;
    case "add":
      buttonContent = (
        <>
          {children}{" "}
          <span className="icon">
            <FaPlus />
          </span>
        </>
      );
      buttonClass = "add-button";
      break;
    case "delete":
      buttonContent = (
        <>
          {children}{" "}
          <span className="icon">
            <FaTrash />
          </span>
        </>
      );
      buttonClass = "delete-button";
      break;
    case "download":
      buttonContent = (
        <>
          {children}{" "}
          <span className="icon">
            <FaDownload />
          </span>
        </>
      );
      buttonClass = "download-button";
      break;
    case "edit":
      buttonContent = (
        <>
          {children}{" "}
          <span className="icon">
            <FaEdit />
          </span>
        </>
      );
      buttonClass = "edit-button";
      break;
    default:
      buttonContent = children;
  }

  return (
    <button className={`custom-button ${buttonClass}`} onClick={onClick}>
      <span className="button-content">{buttonContent}</span>
    </button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.oneOf(["empty", "add", "delete", "download", "edit"])
    .isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomButton;
