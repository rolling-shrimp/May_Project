import React, { useState } from 'react';

function ShoppingCart() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [products, setProducts] = useState([{ quantity: 0 }]);

  function handlePaymentMethodChange(event) {
    const selectedValue = event.target.value;
    setPaymentMethod(selectedValue);
  }

  function handleQuantityChange(index, value) {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = value;
    setProducts(updatedProducts);
  }

  function calculateSubtotal(quantity) {
    const price = 500;
    return quantity * price;
  }

  function calculateTotal() {
    let total = 0;
    products.forEach((product) => {
      total += calculateSubtotal(product.quantity);
    });
    return total;
  }

  function addProduct() {
    setProducts([...products, { quantity: 0 }]);
  }

  return (
    <div>
      <div className="modal" id="modalcart">
        {/* ...其他內容... */}
        <div className="modal-body">
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
                  <img src={require("../image/cactus/cactus (11).jpg")} alt="" />
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
                  <p>{calculateSubtotal(product.quantity)}</p>
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
                <p>{calculateTotal()}</p>
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
