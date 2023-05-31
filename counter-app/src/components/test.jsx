// import React, { useState } from 'react';


// function Calculator() {
//   const [products, setProducts] = useState([{ quantity: 0, price: 0 }]);

//   const handleQuantityChange = (event, index) => {
//     const updatedProducts = [...products];
//     updatedProducts[index].quantity = parseInt(event.target.value, 10);
//     setProducts(updatedProducts);
//   };

//   const handlePriceChange = (event, index) => {
//     const updatedProducts = [...products];
//     updatedProducts[index].price = parseInt(event.target.value, 10);
//     setProducts(updatedProducts);
//   };

//   const calculateSubtotal = (quantity, price) => {
//     return quantity * price;
//   };

//   const calculateTotal = () => {
//     let total = 0;
//     products.forEach((product) => {
//       total += calculateSubtotal(product.quantity, product.price);
//     });
//     return total;
//   };

//   const addProduct = () => {
//     setProducts([...products, { quantity: 0, price: 0 }]);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>數量</th>
//             <th>價格</th>
//             <th>小記</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, index) => (
//             <tr key={index}>
//               <td>
//                 <input
//                   type="number"
//                   value={product.quantity}
//                   onChange={(event) => handleQuantityChange(event, index)}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   value={product.price}
//                   onChange={(event) => handlePriceChange(event, index)}
//                 />
//               </td>
//               <td>{calculateSubtotal(product.quantity, product.price)}</td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td colSpan="2">總計</td>
//             <td>{calculateTotal()}</td>
//           </tr>
//         </tfoot>
//       </table>
//       <button onClick={addProduct}>新增產品</button>
//     </div>
//   );
// }

// export default Calculator;








// import React, { useState } from 'react';

// function Counter({ value, onChange }) {
//   const handleIncrement = () => {
//     onChange(value + 1);
//   };

//   const handleDecrement = () => {
//     if (value > 0) {
//       onChange(value - 1);
//     }
//   };

//   return (
//     <div>
//       <button
//         style={{ border: 'none', background: 'none', padding: '0', fontSize: 'inherit', cursor: 'pointer', fontSize: '1.3em' }}
//         onClick={handleDecrement}
//       >
//         <img src={require("../image/Minus.png")} alt="" />
//       </button>
//       {value}
//       <button
//         style={{ border: 'none', background: 'none', padding: '0', fontSize: 'inherit', cursor: 'pointer', fontSize: '1.3em' }}
//         onClick={handleIncrement}
//       >
//         <img src={require("../image/Plus.png")} alt="" />
//       </button>
//     </div>
//   );
// }

// function Calculator() {
//   const [products, setProducts] = useState([{ quantity: 0 }]);

//   const handleQuantityChange = (index, value) => {
//     const updatedProducts = [...products];
//     updatedProducts[index].quantity = value;
//     setProducts(updatedProducts);
//   };

//   const calculateSubtotal = (quantity) => {
//     const price = 500; // 固定價格為500
//     return quantity * price;
//   };

//   const calculateTotal = () => {
//     let total = 0;
//     products.forEach((product) => {
//       total += calculateSubtotal(product.quantity);
//     });
//     return total;
//   };

//   const addProduct = () => {
//     setProducts([...products, { quantity: 0 }]);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>數量</th>
//             <th>價格</th>
//             <th>小記</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, index) => (
//             <tr key={index}>
//               <td>
//                 <Counter
//                   value={product.quantity}
//                   onChange={(value) => handleQuantityChange(index, value)}
//                 />
//               </td>
//               <td>
//                 <p>500</p>
//               </td>
//               <td>{calculateSubtotal(product.quantity)}</td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td colSpan="2">總計</td>
//             <td>{calculateTotal()}</td>
//           </tr>
//         </tfoot>
//       </table>
//       <button onClick={addProduct}>新增產品</button>
//     </div>
//   );
// }

// export default Calculator;

import React, { useState } from 'react';

function ShoppingCart() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [products, setProducts] = useState([{ quantity: 0 }]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  

  function handleQuantityChange(index, value) {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = value;
    setProducts(updatedProducts);
    calculateSubTotal(updatedProducts);
  }

  function calculateSubTotal(products) {
    let subTotal = 0;
    products.forEach((product) => {
      subTotal += product.quantity * product.price;
    });
    setSubTotal(subTotal);
    calculateTotalAmount(subTotal);
  }

  function calculateTotalAmount(subTotal) {
    const discount = 0.1; // 10% discount
    const total = subTotal * (1 - discount);
    setTotalAmount(total);
  }

  

  return (
    <div>
      <div >
        {/* ...其他內容... */}
        <div >
          {/* ...其他內容... */}
          <div className="row" style={{ fontSize: '20px', lineHeight: '30px' }}>
            <div className="col-3">
              <span>選取訂購</span>
            </div>
            <div className="col-3">
              <span>商品名稱</span>
            </div>
            <div className="col-2">
              <span>&nbsp;數量</span>
            </div>
            <div className="col-2">
              <span>單價</span>
            </div>
            <div className="col-2">
              <span>小記</span>
            </div>
          </div>
          <form action="" method="POST">
            {products.map((product, index) => (
              <div className="row" key={index}>
                <div className="col-3">
                  <input type="checkbox" />
                  {/* <img src={require("../image/cactus/cactus (11).jpg")} alt="" /> */}
                </div>
                <div className="col-3">
                  <span>鐵炮百合</span>
                </div>
                <div className="col-2">
                  <Counter
                    value={product.quantity}
                    onChange={(value) => handleQuantityChange(index, value)}
                  />
                </div>
                <div className="col-2">
                  <p>500</p>
                </div>
                <div className="col-2">
                  <p>{product.quantity * 500}</p>
                </div>
                <div className="col-1">
                  <button type="button" style={{ fontSize: "5px" }} className="btn-secondary">
                    移除
                  </button>
                </div>
              </div>
            ))}
            <hr />
            {/* ...其他內容... */}
            <div className="row">
              <div className="col-8">
                <span>使用優惠券:</span> &nbsp;
                <select name="" id="">
                  <option value="">無</option>
                  <option value="">全品項9折</option>
                  <option value="">全品項85折</option>
                </select>
              </div>
              <div className="col-2 text-end">
                <p>總金額</p>
              </div>
              <div className="col-2">
                <p>{totalAmount}</p>
              </div>
            </div>
            {/* ...其他內容... */}
          </form>
          {/* ...其他內容... */}
        </div>
      </div>
    </div>
  );
}

function Counter({ value, onChange }) {
  const handleIncrement = (event) => {
    event.preventDefault();
    onChange(value + 1);
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    if (value > 0) {
      onChange(value - 1);
    } else {
      onChange(0);
    }
  };

  return (
    <div>
      <button
        style={{ border: 'none', background: 'none', padding: '0', fontSize: 'inherit', cursor: 'pointer', fontSize: '1.3em' }}
        onClick={handleDecrement}
      >
        <img src={require("../image/Minus.png")} alt="" />
      </button>
      {value}
      <button
        style={{ border: 'none', background: 'none', padding: '0', fontSize: 'inherit', cursor: 'pointer', fontSize: '1.3em' }}
        onClick={handleIncrement}
      >
        <img src={require("../image/Plus.png")} alt="" />
      </button>
    </div>
  );
}

export default ShoppingCart;
