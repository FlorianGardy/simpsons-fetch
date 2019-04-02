import React from "react";

const Quote = props => {
  console.log(props.isLoading);
  let quoteSection = props.isLoading ? (
    <p>Loading... Please wait.</p>
  ) : (
    <div>
      <h2>{props.character}</h2>
      <img src={props.image} alt={props.character} />
      <p>{props.quote}</p>
    </div>
  );

  return <div>{quoteSection}</div>;
};

export default Quote;
