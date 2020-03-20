import React from "react";

const ErrorItem = ({ result }) => {

  return (
    <li>
      <div className="result">
        <div className="not-found-msg">{result.error}</div>
      </div>
    </li>
  );
};

export default ErrorItem;
