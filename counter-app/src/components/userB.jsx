import React, { useEffect, useState } from "react";
// import { Modal, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, NavLink, useNavigate } from "react-router-dom";
import userData from "../plantmeet_server/model/userData";
import axios from "axios";
import Head from "./header2";
import Foot from "./footer";

function UserLogin() {
  {
    /*會員註冊驗證*/
  }
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.match(/[^@\s]+@[^@\s]+/)) {
      setEmailError("非正確信箱格式");
    } else {
      setEmailError("");
      // 創建表單資料物件
      const formData = {
        email: email,
        // 其他需要的表單欄位資料
      };

      // 調用 createUser 方法，將表單資料傳遞給該方法
      userData.createUser(formData, (error, result) => {
        if (error) {
          // 處理錯誤
          console.error("無法創建使用者:", error);
        } else {
          // 處理成功
          console.log("使用者創建成功:", result);
          // 在這裡可以進行其他後續操作，例如導航到其他頁面或顯示成功訊息等
        }
      });
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // 在這裡處理表單提交的數據，例如進行登入驗證

    // 在完成相應處理後，使用以下代碼進行跳轉
    window.location.href = "/userA";
  };
  {
    /*會員註冊驗證結束*/
  }
  return (
    <div>
      {/* modal登入開始 */}
      <div className="modal" id="user_login">
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: "#FFFDF7" }}>
            <div className="modal-body">
              <button
                type="button"
                className="btn btn-close"
                data-bs-dismiss="modal"
                style={{ float: "right" }}
              ></button>
              <img
                src={require("../image/userLoginLOGO.png")}
                alt="我是圖"
                id="userLoginLOGO"
              />
              <a
                style={{
                  position: "absolute",
                  left: "195px",
                  top: "123.69px",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  letterSpacing: "0.4em",
                  color: "#5AAB8E",
                }}
              >
                會員登入
              </a>
              <form onSubmit={handleLoginSubmit}>
                <input
                  className="email"
                  type="text"
                  name="email"
                  placeholder="請輸入電子信箱"
                />
                <br />
                <a
                  id="lost_password"
                  data-bs-toggle="modal"
                  data-bs-target="#lostPasswordModal"
                  href="#"
                >
                  忘記密碼?
                </a>
                <a
                  style={{ left: "170px" }}
                  id="register"
                  data-bs-toggle="modal"
                  data-bs-target="#registerModal"
                  href="#"
                >
                  註冊會員
                </a>
                <input
                  className="password"
                  type="password"
                  name="password"
                  placeholder="請輸入密碼"
                />
                <button className="user_login_submit" type="submit">
                  登入
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* modal登入結束 */}

      {/* modal忘記密碼開始 */}
      <div className="modal" id="lostPasswordModal">
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: "#FFFDF7" }}>
            <div className="modal-body">
              <button
                type="button"
                className="btn btn-close"
                data-bs-dismiss="modal"
                style={{ float: "right" }}
              ></button>
              <img
                src={require("../image/userLoginLOGO.png")}
                alt="我是圖"
                id="userLoginLOGO"
              />
              <a
                style={{
                  position: "absolute",
                  left: "195px",
                  top: "123.69px",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  letterSpacing: "0.4em",
                  color: "#5AAB8E",
                }}
              >
                忘記密碼?
              </a>
              <form>
                <input className="email" type="text" name="email" />
                <br />
                <p
                  style={{
                    position: "absolute",
                    width: "325px",
                    height: "62px",
                    left: "90px",
                    top: "271.69px",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  請輸入註冊的電子郵件。您將會在電子郵件信箱中收到重設密碼的連結。
                </p>

                <button className="user_login_submit" type="submit">
                  送出
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* modal結束 */}

      {/* modal註冊會員開始 */}
      <div className="modal" id="registerModal">
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: "#FFFDF7" }}>
            <div className="modal-body">
              <button
                type="button"
                className="btn btn-close"
                data-bs-dismiss="modal"
                style={{ float: "right" }}
              ></button>
              <img
                src={require("../image/userLoginLOGO.png")}
                alt=""
                id="userLoginLOGO"
              />
              <a
                style={{
                  position: "absolute",
                  left: "195px",
                  top: "123.69px",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  letterSpacing: "0.4em",
                  color: "#5AAB8E",
                }}
              >
                註冊會員
              </a>
              <form onSubmit={handleSubmit}>
                <input
                  className="email"
                  type="text"
                  name="email"
                  placeholder="請輸入電子信箱"
                  onChange={handleChange}
                  required
                />
                <br />
                {emailError && (
                  <p
                    style={{
                      color: "red",
                      position: "absolute",
                      left: "210px",
                      top: "255px",
                      fontSize: "12px",
                    }}
                  >
                    {emailError}
                  </p>
                )}
                <br />
                <input
                  className="password"
                  type="password"
                  name="password"
                  placeholder="請輸入8~16位英文+數字組合"
                  required
                />
                <br />
                <p></p>
                <p
                  style={{
                    position: "absolute",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "15px",
                    textAlign: "justify",
                    letterSpacing: "0.1em",
                    width: "325px",
                    left: "90px",
                    top: "410px",
                  }}
                >
                  我們會使用你的個人資料來支援你在本網站中的使用體驗、管理你的帳號存取權，以及用於隱私權政策中說明的其他用途。
                </p>
                <button className="user_login_submit" type="submit">
                  註冊
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* modal結束 */}

      <div className="modal" id="passwordchange">
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: "#FFFDF7" }}>
            <div className="modal-body">
              <button
                type="button"
                className="btn btn-close"
                data-bs-dismiss="modal"
                style={{ float: "right" }}
              ></button>
              <img
                src={require("../image/userLoginLOGO.png")}
                alt=""
                id="userLoginLOGO"
              />
              <a
                style={{
                  position: "absolute",
                  left: "195px",
                  top: "123.69px",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  letterSpacing: "0.4em",
                  color: "#5AAB8E",
                }}
              >
                變更密碼
              </a>
              <form>
                <input
                  className="email"
                  type="text"
                  name=""
                  placeholder="請輸入原密碼"
                />
                <br />
                <input
                  className="password"
                  type="password"
                  name=""
                  placeholder="請輸入新密碼"
                />
                <input
                  style={{
                    position: "absolute",
                    width: "325px",
                    height: "62px",
                    left: "90px",
                    top: "361.69px",
                    background: "#90E07C",
                    borderRadius: "10px",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                  type="password"
                  name=""
                  placeholder="請再次輸入新密碼"
                />
                <button className="user_login_submit" type="submit">
                  變更密碼
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function ShoppingCart() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [products, setProducts] = useState([
    {
      name: "多肉植物|紫太陽",
      quantity: 1,
      price: 1500,
      image: require("../image/2.jpg"),
    },
    {
      name: "不凋花|紅梅之夢",
      quantity: 1,
      price: 1500,
      image: require("../image/3.jpg"),
    },
    {
      name: "現場體驗|手作絹花",
      quantity: 3,
      price: 1000,
      image: require("../image/1.png"),
    },
  ]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [users, setUsers] = useState([]);
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    const updatedUsers = [...users];
    updatedUsers[0].name = event.target.value;
    setUsers(updatedUsers);
  };
  const handlePhoneChange = (event) => {
    const updatedUsers = [...users];
    updatedUsers[0].phone = event.target.value;
    setUsers(updatedUsers);
  };
  const handleAddressChange = (event) => {
    const updatedUsers = [...users];
    updatedUsers[0].address = event.target.value;
    setUsers(updatedUsers);
  };
  const handlePostalcodeChange = (event) => {
    const updatedUsers = [...users];
    updatedUsers[0].Postal_code = event.target.value;
    setUsers(updatedUsers);
  };
  const handleCountyChange = (event) => {
    const updatedUsers = [...users];
    updatedUsers[0].County = event.target.value;
    setUsers(updatedUsers);
  };

  function handlePaymentMethodChange(event) {
    const selectedValue = event.target.value;
    setPaymentMethod(selectedValue);
  }

  function handleQuantityChange(index, value) {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = value;
    setProducts(updatedProducts);
  }

  function calculateSubTotal() {
    let subTotal = 0;
    products.forEach((product) => {
      subTotal += product.quantity * product.price;
    });
    return subTotal;
  }

  function calculateTotalAmount(subTotal) {
    let total = subTotal;
    if (coupon === "discount10") {
      total = total * 0.9 + 120; // 10% discount
    } else if (coupon === "discount15") {
      total = total * 0.85 + 120; // 15% discount
    } else {
      total = subTotal + 120;
    }
    return total;
  }

  function handleCouponChange(event) {
    const selectedCoupon = event.target.value;
    setCoupon(selectedCoupon);
  }

  useEffect(() => {
    const subTotal = calculateSubTotal();
    setSubTotal(subTotal);
    const total = calculateTotalAmount(subTotal);
    setTotalAmount(total);
  }, [products, coupon]);

  useEffect(() => {
    // 使用axios進行GET請求
    axios
      .get("http://localhost:8080/user")
      .then((response) => {
        // 從回應中取得資料
        const data = response.data;

        // 更新組件的狀態
        setUsers(data);
      })
      .catch((error) => {
        // 處理錯誤
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleShoppingSubmit = (event) => {
    event.preventDefault();
    // 在這裡處理表單提交的數據，例如進行登入驗證

    // 在完成相應處理後，使用以下代碼進行跳轉
    window.location.href = "/userB";
  };

  return (
    <div>
      <div className="modal" id="modalcart">
        <div className="modal-dialog modal-lg">
          <div
            className="modal-content"
            style={{ backgroundColor: "#FFFDF7", overflowY: "auto" }}
          >
            <div className="modal-body">
              <button
                type="button"
                className="btn btn-close"
                data-bs-dismiss="modal"
                style={{ float: "right" }}
              ></button>
              <img
                src={require("../image/userLoginLOGO.png")}
                style={{ display: "block", margin: "20px auto 0" }}
              />
              <br />
              <div
                className="row"
                style={{ fontSize: "20px", lineHeight: "30px" }}
              >
                <div className="col-3">
                  <span>訂購</span>
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

              <form onSubmit={handleShoppingSubmit}>
                {products.map((product, index) => (
                  <div className="row" key={index}>
                    <div className="col-3">
                      {/* <input type="checkbox" /> */}
                      <img src={product.image} alt="" />
                    </div>
                    <div className="col-3">
                      <span>{product.name}</span>
                    </div>
                    <div className="col-2">
                      <Counter
                        value={product.quantity}
                        onChange={(value) => handleQuantityChange(index, value)}
                      />
                    </div>
                    <div className="col-2">
                      <p>{product.price}</p>
                    </div>
                    <div className="col-1">
                      <p>{product.quantity * product.price}</p>
                    </div>
                    <div className="col-1">
                      <button
                        type="button"
                        style={{ fontSize: "5px" }}
                        className="btn-secondary"
                      >
                        移除
                      </button>
                    </div>
                  </div>
                ))}
                <hr />

                <div className="row">
                  <div className="col-6">
                    <span>使用優惠券:</span> &nbsp;
                    <select name="" id="" onChange={handleCouponChange}>
                      <option value="">無</option>
                      <option value="discount10">全品項9折</option>
                      <option value="discount15">全品項85折</option>
                    </select>
                  </div>
                  <div className="col-2">
                    <p>運費:120</p>
                  </div>
                  <div className="col-2 text-end">
                    <p>總金額</p>
                  </div>
                  <div className="col-2">
                    <p>{totalAmount}</p>
                  </div>
                </div>

                <br />
                <hr />
                <br />

                <div className="row">
                  {users.map((user) => (
                    <div className="col-5">
                      <span style={{ fontSize: "25px", lineHeight: "20px" }}>
                        收件人資訊
                      </span>
                      <br />
                      <br />
                      <span style={{ fontSize: "15px" }}>姓名：</span>
                      <input
                        type="text"
                        style={{ width: "186px", height: "22px" }}
                        value={users[0].name}
                        onChange={handleNameChange}
                        required
                      />
                      <br />
                      <span />
                      <span style={{ fontSize: "15px", marginTop: "-10px" }}>
                        電話：
                      </span>
                      <input
                        type="text"
                        style={{ width: "186px", height: "22px" }}
                        value={users[0].phone}
                        onChange={handlePhoneChange}
                        required
                      />
                      <br />
                      <span />
                      <div style={{ display: "flex", marginTop: "2px" }}>
                        <span style={{ fontSize: "15px" }}>地址：</span>
                        <input
                          type="text"
                          style={{ width: "100px", height: "22px" }}
                          placeholder="郵遞區號"
                          value={users[0].Postal_code}
                          onChange={handlePostalcodeChange}
                          maxlength={6}
                        />
                        &nbsp;&nbsp;
                        <select
                          name=""
                          id=""
                          style={{ width: "75px", height: "22px" }}
                          required
                        >
                          <option value="">{users[0].County}</option>
                          <option value="">臺北市</option>
                          <option value="">新北市</option>
                          <option value="">基隆市</option>
                          <option value="">宜蘭縣</option>
                          <option value="">新竹市</option>
                          <option value="">新竹縣</option>
                          <option value="">桃園市</option>
                          <option value="">苗栗縣</option>
                          <option value="">台中市</option>
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

                      <span style={{ marginLeft: "20px" }}>
                        <input
                          type="text"
                          style={{ width: "210px", height: "22px" }}
                          value={users[0].address}
                          onChange={handleAddressChange}
                        />
                      </span>
                    </div>
                  ))}

                  <div className="col-7">
                    &nbsp;&nbsp;
                    <span style={{ fontSize: 25, lineHeight: 0 }}>
                      選擇付款方式
                    </span>
                    &nbsp;
                    <select
                      name="payment_method"
                      id="payment_method"
                      style={{ width: 170 }}
                      value={paymentMethod}
                      onChange={handlePaymentMethodChange}
                      required
                    >
                      <option value="">選擇付款方式</option>
                      <option value="transfer">轉帳</option>
                      <option value="cash_on_delivery">貨到付款</option>
                    </select>
                    <div
                      id="payment_message"
                      style={{ display: paymentMethod !== "" ? "" : "none" }}
                    >
                      <br />
                      &nbsp;&nbsp;
                      <span
                        id="transfer_message"
                        style={{
                          display: paymentMethod === "transfer" ? "" : "none",
                        }}
                      >
                        轉帳帳號為:010-666-999
                      </span>
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
        style={{
          border: "none",
          background: "none",
          padding: "0",
          fontSize: "inherit",
          cursor: "pointer",
          fontSize: "1.3em",
        }}
        onClick={handleDecrement}
      >
        <img src={require("../image/Minus.png")} alt="" />
      </button>
      {value}
      <button
        style={{
          border: "none",
          background: "none",
          padding: "0",
          fontSize: "inherit",
          cursor: "pointer",
          fontSize: "1.3em",
        }}
        onClick={handleIncrement}
      >
        <img src={require("../image/Plus.png")} alt="" />
      </button>
    </div>
  );
}
function Order() {
  const [orders, setOrders] = useState([
    {
      orderNumber: "202305150001",
      status: "處理中",
      orderDate: "2023/05/15",
      shippingDate: "處理中",
      totalAmount: "9120",
      showDetails: false,
      details: [
        {
          product: "多肉植物|紫太陽",
          price: "1500",
          quantity: "1",
          subTotal: "1500",
        },
        {
          product: "不凋花|紅梅之夢",
          price: "1500",
          quantity: "1",
          subTotal: "1500",
        },
        {
          product: "現場體驗|手作絹花",
          price: "1000",
          quantity: "6",
          subTotal: "6000",
        },
      ],
    },
    {
      orderNumber: "202304280005",
      status: "已出貨",
      orderDate: "2023/04/28",
      shippingDate: "2023/04/30",
      totalAmount: "3120",
      showDetails: false,
      details: [
        {
          product: "不凋花|紅梅之夢",
          price: "1500",
          quantity: "2",
          subTotal: "3000",
        },
      ],
    },
  ]);

  function handleShowDetails(index) {
    const updatedOrders = [...orders];
    updatedOrders[index].showDetails = !updatedOrders[index].showDetails;
    setOrders(updatedOrders);
  }

  return (
    <>
      {orders.map((order, index) => (
        <div className="table" key={index}>
          <ul className="header">
            <li>訂單編號: {order.orderNumber}</li>
            <li>訂單狀態: {order.status}</li>
          </ul>
          <ul className="content">
            <li>
              訂購日期: {order.orderDate}
              <br />
              出貨日期: {order.shippingDate}
            </li>
            <li>商品總額: {order.totalAmount}</li>
            <li>
              <button
                onClick={() => handleShowDetails(index)}
                className="btn btn-outline-success"
              >
                查看明細
              </button>
            </li>
          </ul>
          {order.showDetails && (
            <div id={`order-details${index + 1}`}>
              <h2>訂單編號：{order.orderNumber}</h2>
              <ul>
                {order.details.map((detail, detailIndex) => (
                  <li className="order_li" key={detailIndex}>
                    <p>商品: {detail.product}</p>
                    <p>價格: {detail.price}</p>
                    <p>數量: {detail.quantity}</p>
                    <p>小記: {detail.subTotal}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
      <br />
    </>
  );
}

function UserPage() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState("");
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    const updatedUsers = [...users];
    updatedUsers[0].name = event.target.value;
    setUsers(updatedUsers);
  };
  const handlePhoneChange = (event) => {
    const updatedUsers = [...users];
    updatedUsers[0].phone = event.target.value;
    setUsers(updatedUsers);
  };

  useEffect(() => {
    // 使用axios進行GET請求
    axios
      .get("http://localhost:8080/user")
      .then((response) => {
        // 從回應中取得資料
        const data = response.data;

        // 更新組件的狀態
        setUsers(data);
      })
      .catch((error) => {
        // 處理錯誤
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div id="main_body">
      <div id="main_body_inner">
        {/* sidebar */}
        {/* ---------------------------------------------------------------------------------------------------------------------- */}
        <div id="main_body_sidebar">
          <a href="" id="userSidebarIcon">
            <img src={require("../image/LOGO- icons/LOGO.png")} alt="" />{" "}
          </a>
          <div className="sidebar" style={{ fontSize: "30px" }}>
            <ul>
              <li>
                <img
                  src={require("../image/userSidebarIcon/sidebaricon1.png")}
                  alt="會員資料"
                />
                <NavLink to="/userA">會員資料</NavLink>
              </li>
              <li>
                <img
                  src={require("../image/userSidebarIcon/sidebaricon2.png")}
                  alt="我的訂單"
                />
                <NavLink to="/userB">我的訂單</NavLink>
              </li>
              <li>
                <img
                  src={require("../image/userSidebarIcon/sidebaricon3.png")}
                  alt="收藏清單"
                />
                <NavLink to="/userC">收藏清單</NavLink>
              </li>
              <li>
                <img
                  src={require("../image/userSidebarIcon/sidebaricon4.png")}
                  alt="我的優惠"
                />
                <NavLink to="/userD">我的優惠</NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------- */}
        {/* sidebar結束 */}
        {users.map((user) => (
          <div id="main_body_show">
            <div className="circle">
              <img
                src={require("../image/UserImg/pikachu.png")}
                alt="UserImg"
              />
            </div>
            <div id="userName">{users[0].name}</div>
            <div id="userMail">{users[0].email} </div>
            <button id="Logout">登出</button>

            <div id="main_body_SelectInfo">
              <Order />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UserB() {
  return (
    <div>
      <Head />
      <UserLogin />

      <ShoppingCart />
      <UserPage />
      <Foot />
    </div>
  );
}
export default UserB;
