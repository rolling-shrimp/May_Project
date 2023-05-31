
import React, { useState } from 'react';


function ShoppingCart() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [subTotal, setSubTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  function handlePaymentMethodChange(event) {
    const selectedValue = event.target.value;

    setPaymentMethod(selectedValue);
  };
  return (
    <div>
      <div className="modal" id="modalcart">
        <div className="modal-dialog modal-lg">
          <div className="modal-content" style={{ backgroundColor: '#FFFDF7', overflowY: 'auto' }}>
            <div className="modal-body">
              <button type="button" className="btn btn-close" data-bs-dismiss="modal" style={{ float: 'right' }}></button>
              <img src={require("../image/userLoginLOGO.png")} style={{ display: 'block', margin: '20px auto 0' }} />
              <br />
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
                  <span>小計</span>
                </div>
              </div>
              <form action="" method="POST">
                <div className="row">
                  <div className="col-3">
                    <input type="checkbox" />
                    <img src={require("../image/cactus/cactus (11).jpg")} alt="" />
                  </div>
                  <div className="col-3">
                    <span>鐵炮百合</span>
                  </div>
                  <div className="col-2">
                    <Counter />
                  </div>
                  <div className="col-2">
                    <p>500</p>
                  </div>
                  <div className="col-1">
                    <p>2500</p>
                  </div>
                  <div className="col-1">
                    <button type="button" style={{ fontSize: "5px" }} className="btn-secondary">
                      移除
                    </button>
                  </div>
                </div>
                <hr />
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
                    <p>1000</p>
                  </div>
                </div>

                <br />
                <hr />
                <br />
                <div className="row">
                  <div className="col-5">
                    <span style={{ fontSize: '25px', lineHeight: '20px' }}>收件人資訊</span>                    
                    <br />
                    <br />
                    <span style={{ fontSize: '15px' }}>姓名：</span>
                    <input type="text" style={{ width: '186px', height: '22px' }} required />
                    <br />
                    <span />
                    <span style={{ fontSize: '15px', marginTop: '-10px' }}>電話：</span>
                    <input type="text" style={{ width: '186px', height: '22px' }} required />
                    <br />
                    <span />
                    <div style={{ display: 'flex' , marginTop: '2px' }}>
                    <span style={{ fontSize: '15px'}}>地址：</span>
                    
                      <input type="text" style={{ width: '100px', height: '22px' }} placeholder="郵遞區號" />&nbsp;&nbsp;
                    <select name="" id="" style={{ width: '75px', height: '22px'  }} required>
                      <option value="">縣&nbsp;&nbsp;&nbsp;市</option>
                      <option value="">臺北市</option>
                      <option value="">新北市</option>
                      <option value="">基隆市</option>
                      <option value="">宜蘭縣</option>
                      <option value="">新竹市</option>
                      <option value="">新竹縣</option>
                      <option value="">桃園市</option>
                      <option value="">苗栗縣</option>
                      <option value="">臺中市</option>
                      <option value="">彰化縣</option>
                      <option value="">南投縣</option>
                      <option value="">雲林縣</option>
                      <option value="">嘉義市</option>
                      <option value="">嘉義縣</option>
                      <option value="">台南市</option>
                      <option value="">高雄市</option>
                      <option value="">屏東縣</option>
                      <option value="">台東縣</option>
                      <option value="">花蓮縣</option>
                      <option value="">澎湖縣</option>
                      <option value="">金門縣</option>
                      <option value="">連江縣</option>                      
                    </select>    
                    </div>
                                    
                    
                    <span style={{ marginLeft: '20px' }}>
                      <input type="text" style={{ width: '210px', height: '22px' }} />
                    </span>
                  </div>
                  <div className="col-7">
                    &nbsp;&nbsp;<span style={{ fontSize: 25, lineHeight: 0 }}>選擇付款方式</span>&nbsp;
                    <select name="payment_method" id="payment_method" style={{ width: 170 }} value={paymentMethod} onChange={handlePaymentMethodChange} required>
                      <option value="">選擇付款方式</option>
                      <option value="transfer">轉帳</option>
                      <option value="cash_on_delivery">貨到付款</option>
                    </select>

                    <div id="payment_message" style={{ display: paymentMethod !== '' ? '' : 'none' }}>
                      <br />&nbsp;&nbsp;
                      <span id="transfer_message" style={{ display: paymentMethod === 'transfer' ? '' : 'none' }}>轉帳帳號為:010-666-999</span>
                    </div>

                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-10 text-end">
                    <button type="submit" className="btn btn-success">
                      結帳
                    </button>
                  </div>
                </div>
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ShoppingCart ;