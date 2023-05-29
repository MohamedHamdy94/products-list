import React from 'react';

const Total = (props) => {
  const { items } = props;
  let total = parseFloat(items.reduce((a, b) => a + b.quantity * b.price, 0));
  return (
    <div>
      <p className="text">Total Price: {total}</p>
    </div>
  );
};

export default Total;
