import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, ModalBody } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import { debounce } from "lodash";
import axios from "axios";
// import backGroundImage form "./examing/測驗/01.png";
import backgroundImage from "./examing/測驗/01.png";
import courseBack from "./homepng/dried-flowers.png";

import { ReactComponent as Icon } from "./homepng/ord.svg";
import { ReactComponent as Icon2 } from "./homepng/nav-icon-cart.svg";
import { ReactComponent as Icon3 } from "./homepng/nav-icon-people.svg";
import { ReactComponent as Flogo } from "./homepng/footer-logo.svg";
import { ReactComponent as Icon4 } from "./icon-15.svg";
import { ReactComponent as Icon5 } from "./icon-16.svg";
import { ReactComponent as Icon6 } from "./icon-17.svg";
import { ReactComponent as Icon7 } from "./icon-18.svg";
import "./homepagestyle.css";
// import Animate from "animate.css-react";
import "animate.css";
// import "loading.css";
// let dialogRef = useRef(null);
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
            <div className="modal-body" style={{ minHeight: "600px" }}>
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
                  left: "180px",
                  top: "123.69px",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  letterSpacing: "0.4em",
                  color: "#5AAB8E",
                  fontSize: "35px",
                }}
              >
                會員登入
              </a>
              <form className="log_into" onSubmit={handleLoginSubmit}>
                <input
                  className="email"
                  type="text"
                  name="email"
                  placeholder="請輸入電子信箱"
                  style={{ fontSize: "25px" }}
                />
                <br />
                <a
                  style={{ fontSize: "13px" }}
                  id="lost_password"
                  data-bs-toggle="modal"
                  data-bs-target="#lostPasswordModal"
                  href="#"
                >
                  忘記密碼?
                </a>
                <a
                  style={{
                    marginLeft: "1rem",
                    left: "170px",
                    fontSize: "13px",
                  }}
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
                  style={{ fontSize: "25px" }}
                />
                <button
                  className="user_login_submit"
                  type="submit"
                  style={{ fontSize: "25px" }}
                >
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
            <div className="modal-body" style={{ minHeight: "600px" }}>
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
            <div className="modal-body" style={{ minHeight: "600px" }}>
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
            <div className="modal-body" style={{ minHeight: "600px" }}>
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
                style={{ fontSize: "25px", lineHeight: "30px" }}
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

              <form
                onSubmit={handleShoppingSubmit}
                style={{ fontSize: "20px" }}
              >
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
  const handleBirthdayChange = (event) => {
    const updatedUsers = [...users];
    updatedUsers[0].birthday = event.target.value;
    setUsers(updatedUsers);
  };
  ///////////////////////////////////////////更新資料  假資料////////////////////////////////////

  const handleUpdateUserSubmit = (event) => {
    event.preventDefault();

    const updatedUserData = {
      name: users[0].name,
      phone: users[0].phone,
      address: users[0].address,
      Postal_code: users[0].Postal_code,
      County: users[0].County,
      birthday: "1986-02-12", // 在這裡設定新的日期值
    };

    // 使用axios進行PUT請求，將更新的資料提交到後端的/user路由
    axios
      .get("http://localhost:8080/user", updatedUserData)
      .then((response) => {
        console.log("資料更新成功");
      })
      .catch((error) => {
        console.error("資料更新失敗:", error);
      });
  };

  //////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////// 更新資料/////////////////////////////////////////////////
  const handleSubmit = (event) => {
    event.preventDefault(); // 防止表單自動提交

    // 取得要提交的資料
    const updatedUserData = {
      name: users[0].name,
      phone: users[0].phone,
      address: users[0].address,
      Postal_code: users[0].Postal_code,
      County: users[0].County,
    };

    // 使用axios進行PUT請求，將更新的資料提交到後端的/user/:id 路由
    axios
      .updateData("http://localhost:8080/user/4", updatedUserData)
      .then((response) => {
        console.log("資料更新成功");
      })
      .catch((error) => {
        console.error("資料更新失敗:", error);
      });
  };

  ////////////////////////////////////////////////////////// 更新資料結束/////////////////////////////////

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
              {/* <img src={users[0].user_image} alt="UserImg" /> */}
            </div>

            <div id="userName"> {users[0].name} </div>

            <div id="userMail"> {users[0].email} </div>

            <button id="Logout">登出</button>

            <div id="main_body_SelectInfo">
              <div id="userdata">
                <p id="userdata_title">會員資料</p>
                <div className="userdataList">
                  <form
                    id="user_form"
                    onSubmit={handleUpdateUserSubmit}
                    style={{ fontSize: "20px" }}
                  >
                    <label htmlFor="name">姓名：</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={users[0].name}
                      onChange={handleNameChange}
                      required
                      style={{ width: "196.5px", height: "28px" }}
                    />
                    <br />
                    <label htmlFor="nickname">暱稱：</label>
                    <input
                      type="text"
                      id="nickname"
                      name="nickname"
                      style={{ width: "196.5px", height: "28px" }}
                    />
                    <br />
                    <label htmlFor="phone">電話：</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={users[0].phone}
                      onChange={handlePhoneChange}
                      placeholder="請輸入手機號碼"
                      required
                      style={{ width: "196.5px", height: "28px" }}
                    />
                    <br />
                    <p>電子信箱：{users[0].email}</p>
                    <p>
                      會員密碼：*********************
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#passwordchange"
                        style={{ color: "#5AAB8E" }}
                      >
                        變更密碼
                      </a>
                    </p>
                    <label htmlFor="gender">性別：</label>
                    <select id="gender" name="gender" required>
                      <option value="女">女</option>
                      <option value="男">男</option>
                      <option value="其他">其他</option>
                    </select>
                    <br />
                    <label htmlFor="birthday">出生日期：</label>
                    <input
                      type="date"
                      id="birthday"
                      name="birthday"
                      value={users[0].birthday}
                      onChange={handleBirthdayChange}
                    />
                    <br />
                    <div style={{ display: "flex", marginTop: "2px" }}>
                      <span style={{ fontSize: "20px" }}>地址：</span>
                      <input
                        type="text"
                        style={{ width: "100px", height: "25px" }}
                        placeholder="郵遞區號"
                        value={users[0].Postal_code}
                        onChange={handlePostalcodeChange}
                        maxlength={6}
                      />
                      &nbsp;&nbsp;
                      <select
                        name=""
                        id=""
                        style={{ width: "100px", height: "25px" }}
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
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="text"
                      style={{ width: "240px", height: "28px" }}
                      value={users[0].address}
                      onChange={handleAddressChange}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button id="form_submit" type="submit">
                      更新資料
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function Index() {
  // 點擊測驗button
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // 蜜蜂折價卷點擊
  const [appear, setappear] = useState(false);
  const somethingClose = () => setappear(false);
  let change = () => {
    console.log("ok");
    let cupon = document.getElementById("cupon");
    let cupon1 = document.getElementById("cupon1");
    console.log(cupon);
    console.log(cupon.parentElement.parentElement);
    // cupon.style.display = "none";
    cupon.classList.add("disappear");
    cupon1.classList.add("disappear");
    let cupcontainer = document.getElementById("cupcontainer");
    console.log(cupcontainer);
    let theImage = document.createElement("img");
    let imagePath = require("./bee3.png");
    theImage.setAttribute("src", imagePath);
    cupcontainer.appendChild(theImage);
    theImage.style.animation = "showup 0.5s forwards";
    cupcontainer.style.top = "150px";
    // let close = document.createElement('button');

    theImage.onclick = function () {
      this.style.display = "none";
      setappear(true);

      // cupon.style.display = "block";
      // cupon.classList.remove("disappear");
      // cupon1.classList.remove("disappear");
      // cupcontainer.style.top = "450px";
      //  let jumpdiv= document.createElement("div")
    };
  };

  // 點擊浪漫花海
  let chooseOption = () => {
    let wrapcontent = document.querySelector(".wrapcontent");
    console.log(wrapcontent);
    wrapcontent.style.display = "none";
    let flowersea = document.querySelector(".flowersea");
    console.log(flowersea);
    let flwstyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    };
    flowersea.style = flwstyle;
  };
  //點擊花海-美觀實用
  let chooseOption1_1 = () => {
    let flowersea = document.querySelector(".flowersea");
    console.log(flowersea);
    flowersea.style.display = "none";
    let flowersea1_1 = document.querySelector(".flowersea1_1");
    console.log(flowersea1_1);
    let flwstyle = {
      display: "flex",
      justifyContent: "around",
      alignItems: "center",
      flexDirection: "column",
    };
    flowersea1_1.style = flwstyle;
  };
  //點擊花海-美觀香氛
  let chooseOption1_2 = () => {
    let flowersea = document.querySelector(".flowersea");
    console.log(flowersea);
    flowersea.style.display = "none";
    let flowersea1_2 = document.querySelector(".flowersea1_2");
    console.log(flowersea1_2);
    let flwstyle = {
      display: "flex",
      justifyContent: "around",
      alignItems: "center",
      flexDirection: "column",
    };
    flowersea1_2.style = flwstyle;
  };
  //點擊花海-純欣賞裝飾
  let chooseOption1_3 = () => {
    let flowersea = document.querySelector(".flowersea");
    console.log(flowersea);
    flowersea.style.display = "none";
    let yoo = document.getElementById("yoo");
    console.log(yoo);
    let flwstyle = {
      display: "flex",
      justifyContent: "around",
      alignItems: "center",
      flexDirection: "column",
    };
    yoo.style = flwstyle;
  };

  //點擊陽光草地
  let chooseOption2 = () => {
    let wrapcontent = document.querySelector(".wrapcontent");
    console.log(wrapcontent);
    wrapcontent.style.display = "none";
    let sunshine = document.getElementById("sunshine");
    let flwstyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    };
    sunshine.style = flwstyle;
  };
  //點擊陽光草地-無印極簡
  let chooseOption2_1 = () => {
    let sunshine = document.getElementById("sunshine");

    sunshine.style.display = "none";
    let sunshine1_1 = document.getElementById("sunshine1_1");

    let flwstyle = {
      display: "flex",
      justifyContent: "around",
      alignItems: "center",
      flexDirection: "column",
    };
    sunshine1_1.style = flwstyle;
  };
  //點擊陽光草地-創意布置
  let chooseOption2_2 = () => {
    let sunshine = document.getElementById("sunshine");

    sunshine.style.display = "none";
    let sunshine1_2 = document.getElementById("sunshine1_2");

    let flwstyle = {
      display: "flex",
      justifyContent: "around",
      alignItems: "center",
      flexDirection: "column",
    };
    sunshine1_2.style = flwstyle;
  };
  //點擊陽光草地-可愛溫馨
  let chooseOption2_3 = () => {
    let sunshine = document.getElementById("sunshine");

    sunshine.style.display = "none";
    let sunshine1_3 = document.getElementById("sunshine1_3");

    let flwstyle = {
      display: "flex",
      justifyContent: "around",
      alignItems: "center",
      flexDirection: "column",
    };
    sunshine1_3.style = flwstyle;
  };

  //點擊寧靜森森林
  let chooseOption3 = () => {
    let wrapcontent = document.querySelector(".wrapcontent");
    wrapcontent.style.display = "none";
    let eco = document.getElementById("eco");

    let flwstyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    };
    eco.style = flwstyle;
  };

  //點擊寧靜森森林-簡單風格
  let chooseOption3_1 = () => {
    let eco = document.getElementById("eco");

    eco.style.display = "none";
    let eco1_1 = document.getElementById("eco1_1");

    let flwstyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    };
    eco1_1.style = flwstyle;
  };
  //點擊寧靜森森林-迷你景觀
  let chooseOption3_2 = () => {
    let eco = document.getElementById("eco");
    eco.style.display = "none";
    let eco1_2 = document.getElementById("eco1_2");

    let flwstyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    };
    eco1_2.style = flwstyle;
  };
  let ModalStyle = {
    position: "absolute",
    left: "0",
    right: "0",
    margin: "0 auto",
    top: "2rem",

    backgroundColor: "#fffdf6",
    width: "800px",
    height: "500px",

    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    border: "unset",
  };
  let ModalHead = {
    border: "unset",
    height: "10px",
  };

  const [value, setValue] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      //視差滾動
      setValue(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //元素進場動畫
  let li = document.querySelectorAll("ul li");
  li.forEach((item) => {
    function isElementInView(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    let handledElements = new Set();
    function handleScroll() {
      // const targetElement = document.getElementById("my-target-element");

      if (isElementInView(item) && !handledElements.has(item)) {
        // The target element is in view, perform desired action
        item.classList.add("visible");
        item.classList.toggle("animate__animated");
        item.classList.toggle("animate__rotateInDownLeft");
        // console.log('Target element is now visible!');
      }
    }

    window.addEventListener("scroll", handleScroll);
  });
  let slogan = document.querySelectorAll(".product .slogan");

  slogan.forEach((item) => {
    function isElementInView(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    let handledElements = new Set();
    function handleScroll() {
      // const targetElement = document.getElementById("my-target-element");

      if (isElementInView(item) && !handledElements.has(item)) {
        // The target element is in view, perform desired action
        item.classList.add("visible");
        item.classList.toggle("animate__animated");
        item.classList.toggle("animate__jello");
        // console.log('Target element is now visible!');
      }
    }

    window.addEventListener("scroll", handleScroll);
  });
  let product = document.querySelectorAll(".product .flower555");
  product.forEach((item) => {
    function isElementInView(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    let handledElements = new Set();
    function handleScroll() {
      // const targetElement = document.getElementById("my-target-element");

      if (isElementInView(item) && !handledElements.has(item)) {
        // The target element is in view, perform desired action
        item.classList.add("visible");
        item.classList.add("animate__animated");
        item.classList.toggle("animate__wobble");
        // console.log('Target element is now visible!');
      }
    }

    window.addEventListener("scroll", handleScroll);
  });
  //底部左右仙人掌進場
  const elementRef = useRef(null);
  const elementRef2 = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const element = elementRef.current;
  //     const scrollPosition = window.scrollY || window.pageYOffset;
  //     const elementPosition = element.getBoundingClientRect();

  //     // Calculate the desired scroll position at which to add the class
  //     const desiredScrollPosition =
  //       elementPosition.top - window.innerHeight / 1.3;

  //     if (scrollPosition >= desiredScrollPosition) {
  //       element.classList.add("animate__animated");
  //       element.classList.add("animate__bounceInLeft");
  //       // element.style.animation = "bounceInLeft 3s linear";
  //     } else {
  //       element.classList.remove("animate__animated");
  //       element.classList.remove("animate__bounceInLeft");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  useEffect(() => {
    const handleScroll = debounce(() => {
      const element = elementRef.current;
      const scrollPosition = window.scrollY || window.pageYOffset;
      const elementPosition = element.getBoundingClientRect();

      // Calculate the desired scroll position at which to add the class
      const desiredScrollPosition =
        elementPosition.top - window.innerHeight / 2;

      if (scrollPosition >= desiredScrollPosition) {
        // element.classList.add('animate-class');
        element.classList.add("animate__animated");
        element.classList.add("animate__bounceInLeft");
        // element.style.display="block";
        // element.style.animation = "showup 3s forwards";
      } else {
        // element.classList.remove('animate-class');
        element.classList.remove("animate__animated");
        element.classList.remove("animate__bounceInLeft");
      }
    }, 300); // Adjust the debounce delay (in milliseconds) to control the frequency of class addition

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // Cancel the debounce on component unmount
    };
  }, []);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const element = elementRef2.current;
      const scrollPosition = window.scrollY || window.pageYOffset;
      const elementPosition = element.getBoundingClientRect();

      // Calculate the desired scroll position at which to add the class
      const desiredScrollPosition =
        elementPosition.top - window.innerHeight / 2;

      if (scrollPosition >= desiredScrollPosition) {
        // element.classList.add('animate-class');
        element.classList.add("animate__animated");
        element.classList.add("animate__bounceInRight");
        // element.style.animation = "showup 3s forwards";
      } else {
        // element.classList.remove('animate-class');
        element.classList.remove("animate__animated");
        element.classList.remove("animate__bounceInRight");
      }
    }, 300); // Adjust the debounce delay (in milliseconds) to control the frequency of class addition

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // Cancel the debounce on component unmount
    };
  }, []);

  return (
    <React.Fragment>
      <UserLogin />
      <ShoppingCart />
      <div className="all" style={{ position: "relative" }}>
        <div id="cupcontainer">
          <div id="cupon" onClick={change}>
            <img
              id="cupon1"
              src={require("./優惠券蜜蜂-20230501T071404Z-001/優惠券蜜蜂/be.png")}
              alt=""
            />
          </div>
        </div>
        <Modal
          show={appear}
          onHide={somethingClose}
          animation={false}
          style={ModalStyle}
          // className="d-flex flex-column justify-content-center align-items-center theTestModal"
          // className="wrapcontent flowersea1_2"
          className="d-flex flex-column justify-content-center align-items-center theTestModal"
        >
          <Modal.Body
            // style={{ height: "fit-content" }}
            className=" d-flex flex-column justify-content-around align-items-center"
          >
            <div
              className="wrapcontent flowersea d-flex flex-column align-items-center"
              style={{ justifyContent: "center" }}

              // style={{ display: "none" }}
            >
              <img
                src={require("./homepng/home_m.png")}
                alt=""
                style={{ width: "140px" }}
              />
              <p style={{ color: "#348187" }}>折價卷已收藏，登入會員即可領取</p>
              <div
                className="exOption d-flex flex-row justify-content-center align-items-center"
                style={{ marginTop: "2rem" }}
              >
                <button
                  className="choosing d-flex flex-column justify-content-around align-items-center"
                  style={{
                    // marginLeft: "1rem",
                    border: "black solid 2px",
                    borderRadius: "10px",
                    padding: "0.5rem 1rem",
                    backgroundColor: "unset",
                  }}
                  onClick={somethingClose}
                >
                  <p style={{ fontSize: "1.5rem" }}>繼續觀看</p>
                </button>
              </div>

              {/* <button>領取優惠卷</button> */}
            </div>
          </Modal.Body>
        </Modal>

        <section id="firstpage">
          {/* <div id="flower22" style={{ width: "100%", top: `${value * 0.9}px` }}> */}
          <div
            id="flower22"
            style={{ width: "100%" }}
            className="animate__animated animate__bounceInUp"
          >
            <img
              id="flowernum2"
              src={require("./homepng/home-bg2.png")}
              alt=""
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          {/* <div id="flower33" style={{ width: "100%", top: `${value * 0.8}px` }}> */}
          <div
            id="flower33"
            style={{ width: "100%" }}
            className="animate__animated animate__bounceInUp"
          >
            <img
              id="flowernum2"
              src={require("./homepng/home-bg3.png")}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <img
            src={require("./homepng/home-bg1.png")}
            alt=""
            id="firstBackground"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: "1",
            }}
          />
          {/* 測驗第一頁 */}
          <Modal
            // style={ModalPosition}
            // onClick={handleClose}
            show={show}
            onHide={handleClose}
            animation={false}
            style={ModalStyle}
            className="d-flex flex-column justify-content-center align-items-center theTestModal"
          >
            <Modal.Header style={ModalHead} closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>

            <Modal.Body
              id="mybodyy"
              // closeButton
              style={{ height: "fit-content" }}
              className=" d-flex flex-column justify-content-center align-items-center"
            >
              {/* 測驗第一頁 */}
              <div className="wrapcontent">
                <img
                  src={require("./homepng/home_m.png")}
                  alt=""
                  style={{ width: "140px" }}
                />
                <p style={{ color: "#348187" }}>測驗你的專屬綠洲</p>
                <h3>Q1如果出去玩，會選擇哪裡呢?</h3>

                <div className="exOption d-flex flex-row justify-content-around align-items-center">
                  <button
                    onClick={chooseOption}
                    className="choosing d-flex flex-column justify-content-around align-items-center"
                  >
                    <p>
                      浪漫 <br /> 花海
                    </p>
                  </button>
                  <button
                    onClick={chooseOption2}
                    className="choosing d-flex flex-column justify-content-around align-items-center"
                  >
                    <p>
                      陽光 <br /> 草地
                    </p>
                  </button>
                  <button
                    onClick={chooseOption3}
                    className="choosing d-flex flex-column justify-content-around align-items-center"
                  >
                    <p>
                      寧靜 <br /> 森林
                    </p>
                  </button>
                </div>
              </div>
              {/* 浪漫花海 */}
              <div
                className="wrapcontent flowersea"
                style={{ display: "none" }}
                // id="flowersea"
              >
                <img
                  src={require("./homepng/home_m.png")}
                  alt=""
                  style={{ width: "140px" }}
                />
                <p style={{ color: "#348187" }}>測驗你的專屬綠洲</p>
                <h3>Q2你希望得到怎樣的商品呢?</h3>

                <div className="exOption d-flex flex-row justify-content-around align-items-center">
                  <button
                    onClick={chooseOption1_1}
                    className="choosing d-flex flex-column justify-content-around align-items-center"
                  >
                    <p>
                      美觀 <br /> 實用
                    </p>
                  </button>
                  <button
                    onClick={chooseOption1_2}
                    className="choosing d-flex flex-column justify-content-around align-items-center"
                  >
                    <p>
                      美觀 <br /> 香氛
                    </p>
                  </button>
                  <button
                    onClick={chooseOption1_3}
                    className="choosing d-flex flex-column justify-content-around align-items-center"
                  >
                    <p style={{ textAlign: "center" }}>
                      純欣賞 <br /> 裝飾
                    </p>
                  </button>
                </div>
              </div>
              {/* 花海-美觀實用 */}
              <div
                className="wrapcontent flowersea1_1"
                style={{ display: "none" }}
              >
                <img
                  src={require("./homepng/home_m.png")}
                  alt=""
                  style={{ width: "140px" }}
                />
                <p style={{ color: "#348187", marginTop: "1rem" }}>
                  喜歡花海、美觀實用商品的你，這是我們推薦的課程! <br />
                  趕快報名課程吧
                </p>

                <div className="course d-flex flex-column justify-content-center align-items-center">
                  <img src={courseBack} alt="" />
                  <NavLink
                    to={"/number2"}
                    style={{ textDecoration: "none", color: "#348187" }}
                  >
                    報名課程
                  </NavLink>
                </div>
                {/* <button>領取優惠卷</button> */}
              </div>
              {/* 花海-美觀香氛 */}
              <div
                className="wrapcontent flowersea1_2"
                style={{ display: "none" }}
                id="yo"
              >
                <img
                  src={require("./homepng/home_m.png")}
                  alt=""
                  style={{ width: "140px" }}
                />
                <p style={{ color: "#348187", marginTop: "1rem" }}>
                  喜歡花海、美觀香氛商品的你，這是我們推薦的課程! <br />
                  快領取優惠卷，報名課程吧
                </p>

                <div className="course d-flex flex-row justify-content-center align-items-center">
                  <a>課程連結</a>
                </div>
                {/* <button>領取優惠卷</button> */}
              </div>
              {/* 花海-純欣賞裝飾 */}
              <div
                className="wrapcontent flowersea1_2"
                style={{ display: "none" }}
                id="yoo"
              >
                <img
                  src={require("./homepng/home_m.png")}
                  alt=""
                  style={{ width: "140px" }}
                />
                <p style={{ color: "#348187", marginTop: "1rem" }}>
                  喜歡花海、純欣賞裝飾商品的你，這是我們推薦的課程! <br />
                  快領取優惠卷，報名課程吧
                </p>

                <div className="course d-flex flex-row justify-content-center align-items-center">
                  <a>課程連結</a>
                </div>
                {/* <button>領取優惠卷</button> */}
              </div>
              {/* 陽光草地 */}
              <div
                className="wrapcontent flowersea"
                style={{ display: "none" }}
                id="sunshine"
              >
                <img
                  src={require("./homepng/home_m.png")}
                  alt=""
                  style={{ width: "140px" }}
                />
                <p style={{ color: "#348187" }}>測驗你的專屬綠洲</p>
                <p>Q2你喜歡怎樣布置你的房間呢?</p>

                <div className="exOption d-flex flex-row justify-content-around align-items-center">
                  <button
                    onClick={chooseOption2_1}
                    className="choosing d-flex flex-column justify-content-center align-items-center"
                  >
                    <p>
                      無印 <br /> 極簡
                    </p>
                  </button>
                  <button
                    onClick={chooseOption2_2}
                    className="choosing d-flex flex-column justify-content-around align-items-center"
                  >
                    <p>
                      創意 <br /> 布置
                    </p>
                  </button>
                  <button
                    onClick={chooseOption2_3}
                    className="choosing d-flex flex-column justify-content-around align-items-center"
                  >
                    <p>
                      可愛 <br /> 溫馨
                    </p>
                  </button>
                </div>
              </div>
              {/* 陽光草地-無印極簡 */}
              <div
                className="wrapcontent flowersea1_2"
                style={{ display: "none" }}
                id="sunshine1_1"
              >
                <img
                  src={require("./homepng/home_m.png")}
                  alt=""
                  style={{ width: "140px" }}
                />
                <p style={{ color: "#348187", marginTop: "1rem" }}>
                  喜歡陽光、無印極簡房間的你，這是我們推薦的課程!
                </p>
                <p style={{ color: "#348187" }}>快領取優惠卷，報名課程吧</p>

                <div className="course d-flex flex-row justify-content-center align-items-center">
                  <a>課程連結</a>
                </div>
                {/* <button>領取優惠卷</button> */}
              </div>
              {/* 陽光草地-創意布置*/}
              <div
                className="wrapcontent flowersea1_2"
                style={{ display: "none" }}
                id="sunshine1_2"
              >
                <img
                  src={require("./homepng/home_m.png")}
                  alt=""
                  style={{ width: "140px" }}
                />
                <p style={{ color: "#348187", marginTop: "1rem" }}>
                  喜歡陽光、創意布置的你，這是我們推薦的課程!
                </p>
                <p style={{ color: "#348187" }}>快領取優惠卷，報名課程吧</p>

                <div className="course d-flex flex-row justify-content-center align-items-center">
                  <a>課程連結</a>
                </div>
                {/* <button>領取優惠卷</button> */}
              </div>
              {/* 陽光草地-可愛溫馨 */}
              <div
                className="wrapcontent flowersea1_2"
                style={{ display: "none" }}
                id="sunshine1_3"
              >
                <img
                  src={require("./homepng/home_m.png")}
                  alt=""
                  style={{ width: "140px" }}
                />
                <p style={{ color: "#348187", marginTop: "1rem" }}>
                  喜歡陽光、可愛溫馨房間的你，這是我們推薦的課程!
                </p>
                <p style={{ color: "#348187" }}>快領取優惠卷，報名課程吧</p>

                <div className="course d-flex flex-row justify-content-center align-items-center">
                  <a>課程連結</a>
                </div>
                {/* <button>領取優惠卷</button> */}
              </div>

              {/* 寧靜森林 */}
              <div
                className="wrapcontent flowersea"
                style={{ display: "none", justifyContent: "center" }}
                id="eco"
              >
                <img
                  src={require("./homepng/home_m.png")}
                  alt=""
                  style={{ width: "140px" }}
                />
                <p style={{ color: "#348187" }}>測驗你的專屬綠洲</p>
                <p>Q2如果你有一個陽台，會怎樣布置呢?</p>

                <div className="exOption d-flex flex-row justify-content-center align-items-center">
                  <button
                    className="choosing d-flex flex-column justify-content-around align-items-center"
                    style={{ marginRight: "1rem" }}
                    onClick={chooseOption3_1}
                  >
                    <p>
                      簡單 <br /> 風格
                    </p>
                  </button>
                  <button
                    className="choosing d-flex flex-column justify-content-around align-items-center"
                    style={{ marginLeft: "1rem" }}
                    onClick={chooseOption3_2}
                  >
                    <p>
                      迷你 <br /> 景觀
                    </p>
                  </button>
                </div>
              </div>
              {/* 寧靜森林-簡單風格 */}
              <div
                className="wrapcontent flowersea1_2"
                style={{ display: "none" }}
                id="eco1_1"
              >
                <img
                  src={require("./homepng/home_m.png")}
                  alt=""
                  style={{ width: "140px" }}
                />
                <p style={{ color: "#348187", marginTop: "1rem" }}>
                  喜歡森林、簡單風格陽台的你，這是我們推薦的課程!
                </p>
                <p style={{ color: "#348187" }}>快領取優惠卷，報名課程吧</p>

                <div className="course d-flex flex-row justify-content-center align-items-center">
                  <a>課程連結</a>
                </div>
                {/* <button>領取優惠卷</button> */}
              </div>
              {/* 寧靜森林-迷你景觀 */}
              <div
                className="wrapcontent flowersea1_2"
                style={{ display: "none" }}
                id="eco1_2"
              >
                <img
                  src={require("./homepng/home_m.png")}
                  alt=""
                  style={{ width: "140px" }}
                />
                <p style={{ color: "#348187", marginTop: "1rem" }}>
                  喜歡森林、迷你景觀陽台的你，這是我們推薦的課程!
                </p>
                <p style={{ color: "#348187" }}>快領取優惠卷，報名課程吧</p>

                <div className="course d-flex flex-row justify-content-center align-items-center">
                  <a>課程連結</a>
                </div>
                {/* <button>領取優惠卷</button> */}
              </div>
            </Modal.Body>
          </Modal>

          <div id="tabletree">
            <img
              src={require("./homepng/home-table.png")}
              style={{
                height: "150px",
                width: "100%",
                // right: `${value * -2}px`,
              }}
              alt=""
            />
          </div>
          <div
            id="plates"
            class="d-flex flex-row align-items-center justify-content-around"
            style={{ height: "100px", width: "50%" }}
          >
            <img
              src={require("./homepng/home-table-1.png")}
              style={{ height: "80px", width: "80px" }}
              alt=""
              class="plate"
            />
            <img
              src={require("./homepng/home-table-2.png")}
              alt=""
              class="plate"
            />
            <img
              src={require("./homepng/home-table-3.png")}
              alt=""
              class="plate"
            />
            <img
              src={require("./homepng/home-table-4.png")}
              alt=""
              class="plate"
            />
            <img
              style={{ height: "93px", width: "90px" }}
              src={require("./homepng/home-table-5.png")}
              alt=""
              class="plate"
            />
            <img
              alt=""
              class="plate"
              src={require("./homepng/home-table-6.png")}
            />
          </div>
          <header>
            <nav
              className="d-flex justify-content-center align-items-center up"
              // id="up"
              // className="up"
            >
              <button>
                <NavLink className="thelinksss" to={"/cour02"}>
                  主題企劃
                </NavLink>
              </button>
              <button>
                <NavLink className="thelinksss" to={"/cour02"}>
                  體驗課程
                </NavLink>
              </button>
              {/* <button>體驗課程</button> */}
              <button>
                <NavLink className="thelinksss" to={"/cour02"}>
                  植感購物
                </NavLink>
              </button>
            </nav>
            <div
              id="greenUp"
              class="green d-flex justify-content-center align-iems-center greenUp "
            >
              <a data-bs-toggle="modal" data-bs-target="#modalcart" href="">
                <Icon2 style={{ width: "40px", height: "40px" }} />
              </a>
              {/* <div
                style={{
                  // backgroundColor: "#5bab8e",
                  width: "40px",
                  height: "40px",
                }}
              >
              </div> */}
              <div
                style={{
                  // backgroundColor: "#5bab8e",
                  width: "40px",
                  height: "40px",
                  marginLeft: "0.5rem",
                }}
              >
                <a data-bs-toggle="modal" data-bs-target="#user_login">
                  <Icon3
                    style={{ width: "40px", height: "40px", fill: "#fac959" }}
                  />
                </a>
              </div>
            </div>
            <img
              class="logo2"
              src={require("./icons/logo-s-w.png")}
              alt=""
              id="upic"
            />
          </header>
          <img
            id="left"
            class="meat left"
            src={require("./homepng/home-cactus-l.png")}
            alt=""
            style={{ left: `${value * -0.2}px` }}
          />
          <img
            id="right"
            class="meat right"
            src={require("./homepng/home-cactus-r.png")}
            alt=""
            style={{ right: `${value * -0.2}px` }}
          />

          <div class="theme d-flex flex-column align-items-center justify-content-center">
            <img
              src={require("./homepng/home_sologn.png")}
              alt="thetheme"
              // style={{ width: "375px", height: "130px" }}
              id="logo"
            />

            <div
              id="handAndcircle"
              style={{ position: "relative", marginBottom: "2.5rem" }}
              className="d-flex flex-column align-items-center justify-content-center handAndcircle"
            >
              <Button
                onClick={handleShow}
                // className="btn"
                // data-bs-toggle="modal"
                // data-bs-target="#showDia"
                // onClick={startTest}
                // className="exam"
                typeof="button"
                style={{
                  backgroundColor: "unset",
                  border: "unset",
                  // display: "block",
                  // marginTop: `${value * 0.9}px`,
                  display: value > 100 ? "none" : "block",
                }}
              >
                {/* <img src={require("./homepng/ordp.png")} alt="" /> */}
                <Icon className="icon" />
                <p>
                  開始測驗 <br />
                  你的專屬綠洲
                </p>
              </Button>
              <img
                src={require("./homepng/home-head-2.png")}
                alt=""
                className="hands"
              />
              <img
                className="circle"
                src={require("./homepng/home-test.png")}
                alt=""
                style={{
                  position: "absolute",
                  bottom: "0",
                }}
              />
            </div>
          </div>
        </section>
        {/* <!-- 第二個頁面 --> */}
        <section
          id="secondPage"
          class="d-flex flex-column align-items-center"
          style={{
            // minHeight: "188vh",
            borderBottom: "3px solid black",
            // top: `${value * 0.9}px`,
          }}
        >
          <div
            id="headerdown"
            class="d-flex flex-row justify-content-center align-items-center"
          >
            <img
              id="downpic"
              class="logo2"
              src={require("./icons/logo-s-w.png")}
              alt=""
            />
            <nav
              id="under"
              class="d-flex justify-content-center align-items-center"
            >
              <button>主題企劃</button>
              <button>體驗課程</button>
              <button>植感購物</button>
            </nav>
            <div
              id="greenunder"
              class="green d-flex justify-content-center align-iems-center greenunder"
              style={{ marginLeft: "1rem" }}
            >
              <div
                style={{
                  // backgroundColor: "#5bab8e",
                  width: "40px",
                  height: "40px",
                }}
              >
                <a data-bs-toggle="modal" data-bs-target="#modalcart" href="">
                  <Icon2 style={{ width: "40px", height: "40px" }} />
                </a>
              </div>
              <div
                style={{
                  // backgroundColor: "#5bab8e",
                  width: "40px",
                  height: "40px",
                  marginLeft: "0.5rem",
                }}
              >
                <a data-bs-toggle="modal" data-bs-target="#user_login" href="">
                  <Icon3 style={{ width: "40px", height: "40px" }} />
                </a>
              </div>
            </div>
          </div>
          <div
            // id="productarea"
            className="d-flex flex-row justify-content-center productarea"
          >
            <div
              className="product d-flex flex-column align-items-center "
              style={{ marginRight: "70px" }}
            >
              <img
                className="title"
                src={require("./drive-download-20230423T032916Z-001/meatPlant 1.png")}
                alt=""
              />
              <img
                className="flower555"
                src={require("./drive-download-20230423T032916Z-001/大專2-15.png")}
                alt=""
              />
              <img
                className="slogan "
                src={require("./drive-download-20230423T032916Z-001/大專2-24.png")}
                alt=""
              />
            </div>
            <div className="product d-flex flex-column align-items-center ">
              <img
                class="title"
                src={require("./drive-download-20230423T032916Z-001/flower 1.png")}
                alt=""
              />
              <img
                className="flower555"
                src={require("./drive-download-20230423T032916Z-001/大專2-16.png")}
                alt=""
              />
              <img
                className="slogan"
                src={require("./drive-download-20230423T032916Z-001/大專2-25.png")}
                alt=""
              />
            </div>
            <div
              className="product d-flex flex-column align-items-center"
              style={{ marginLeft: "70px" }}
            >
              <img
                className="title"
                src={require("./drive-download-20230423T032916Z-001/bottle 1.png")}
                alt=""
              />
              <img
                className="flower555"
                src={require("./drive-download-20230423T032916Z-001/大專2-17.png")}
                alt=""
              />
              <img
                className="slogan"
                src={require("./drive-download-20230423T032916Z-001/大專2-26.png")}
                alt=""
              />
            </div>
          </div>
          <img
            id="BG"
            style={{ position: "absolute", top: "47rem", width: "100.25%" }}
            src={require("./homepng/bg3.png")}
            alt="555"
          />
          <div
            style={{
              position: "relative",
              bottom: "1rem",
              height: "fit-content",
              width: "100%",
            }}
          >
            <ul className="ulll" style={{ paddingLeft: "unset" }}>
              <li className="li">
                <div class="informzone d-flex flex-column justify-content-center align-items-center">
                  <h2>植遇團隊</h2>
                  <img
                    src={require("./3-20230423T032928Z-001/3/thesquad.png")}
                    alt=""
                    class="inform"
                    style={{
                      height: "300px",
                      width: "272px",
                    }}
                  />
                </div>
              </li>

              <li className="li">
                <div class="informzone d-flex flex-column justify-content-center align-items-center">
                  <h2>交流社群</h2>
                  <img
                    src={require("./3-20230423T032928Z-001/3/media.png")}
                    alt=""
                    class="inform"
                    style={{ height: "300px", width: "272px" }}
                  />
                </div>
              </li>
              <li className="li">
                <div class="informzone d-flex flex-column justify-content-center align-items-center">
                  <h2>服務據點</h2>
                  <img
                    src={require("./3-20230423T032928Z-001/3/place.png")}
                    alt=""
                    class="inform"
                    style={{ height: "300px", width: "272px" }}
                  />
                </div>
              </li>
              <li className="li">
                <div class="informzone d-flex flex-column justify-content-center align-items-center">
                  <h2>線上教學</h2>
                  <img
                    src={require("./3-20230423T032928Z-001/3/highQuality.png")}
                    alt=""
                    class="inform"
                    style={{ height: "300px", width: "272px" }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* <!-- 第三個頁面 --> */}
        <section id="thirdpage" class="">
          <img
            id="left"
            className="meat left "
            src={require("./homepng/home-cactus-l.png")}
            alt=""
            ref={elementRef}
            // style={{ left: `${value * 0.005}px` }}
          />
          <img
            id="right"
            className="meat right"
            src={require("./homepng/home-cactus-r.png")}
            alt=""
            ref={elementRef2}
          />
          <div id="thirdpgHouse">
            <img
              id="sologan"
              src={require("./homepng/home_sologn.png")}
              alt="thetheme"
              style={{ marginTop: "1rem" }}
            />
            <div
              id="activity"
              className="d-flex flex-row aling-items-center justify-content-center"
            >
              <NavLink
                to={"/number2"}
                className="showtag"
                href=""
                style={{
                  marginRight: "1rem",
                }}
              >
                <img
                  className="d-block w-100 show"
                  // src="holder.js/800x400?text=First slide&bg=373940",
                  alt="First slide"
                  src={require("./homepng/commend1.png")}
                />
              </NavLink>
              <NavLink className="showtag" href="">
                <img
                  className="d-block w-100 show"
                  // src="holder.js/800x400?text=First slide&bg=373940",
                  alt="First slide"
                  src={require("./homepng/commend2.png")}
                />
              </NavLink>
              <NavLink
                className="showtag"
                href=""
                style={{
                  marginLeft: "1rem",
                }}
              >
                <img
                  className="d-block w-100 show"
                  // src="holder.js/800x400?text=First slide&bg=373940",
                  alt="First slide"
                  src={require("./homepng/commend3.png")}
                />
              </NavLink>
            </div>
            <img
              id="plantbottom"
              src={require("./4/BG2.png")}
              alt=""
              style={{
                height: "45%",
                width: "100%",
                // top: `${value * -0.3}px`,
              }}
            />
            <div id="tableZone" class="d-flex justify-content-center">
              <button
                type="button"
                style={{
                  backgroundColor: "unset",
                  border: "unset",
                  marginRight: "3rem",
                }}
              >
                <a href="#" class="d-block" style={{ position: "relative" }}>
                  <img src={require("./4/board.png")} alt="" />
                  <p>看&nbsp;課&nbsp;程</p>
                </a>
              </button>
              <button
                type="button"
                style={{ backgroundColor: "unset", border: "unset" }}
              >
                <a href="#" class="d-block" style={{ position: "relative" }}>
                  <img src={require("./4/board.png")} alt="" />
                  <p>買&nbsp;成&nbsp;品</p>
                </a>
              </button>
              <button
                type="button"
                style={{
                  backgroundColor: "unset",
                  border: "unset",
                  marginLeft: "3rem",
                }}
              >
                <a href="#" class="d-block" style={{ position: "relative" }}>
                  <img src={require("./4/board.png")} alt="" />
                  <p>找&nbsp;靈&nbsp;感</p>
                </a>
              </button>
            </div>
          </div>

          <footer className="d-flex flex-column justify-content-center align-items-center">
            <div
              className=" the d-flex flex-row align-items-center custom-font"
              style={{ height: "100%", width: "60%" }}
            >
              <Flogo className="logggg" />
              <div
                className="d-flex flex-column align-items-center justify-content-center tt"
                style={{ height: "100%", marginLeft: "1rem", width: "300px" }}
              >
                <div
                  className="d-flex flex-row justify-content-around align-items-center"
                  style={{
                    width: "100%",
                    height: "50px",
                    marginTop: "1rem",
                    // border: "black 2px solid",
                  }}
                >
                  {" "}
                  <a
                    className="act"
                    href=""
                    style={{
                      height: "fit-content",
                      width: "fit-content",
                      display: "block",
                    }}
                  >
                    <Icon4 style={{ height: "38px", width: "38px" }} />
                  </a>
                  <a
                    className="act"
                    href=""
                    style={{
                      height: "fit-content",
                      width: "fit-content",
                      display: "block",
                    }}
                  >
                    <Icon5 style={{ height: "38px", width: "38px" }} />
                  </a>
                  <a
                    className="act"
                    href=""
                    style={{
                      height: "fit-content",
                      width: "fit-content",
                      display: "block",
                    }}
                  >
                    <Icon6 style={{ height: "38px", width: "38px" }} />
                  </a>
                  <a
                    className="act"
                    href=""
                    style={{
                      height: "fit-content",
                      width: "fit-content",
                      display: "block",
                    }}
                  >
                    <Icon7 style={{ height: "38px", width: "38px" }} />
                  </a>
                </div>
                <p
                  className="custom-font"
                  style={{
                    color: "white",
                    marginTop: "1rem",
                    fontSize: "0.6rem",
                  }}
                >
                  @ 2023 plantmeet. All Rights Reserved.
                </p>
              </div>
              <div
                className="d-flex flex-column align-items-start justify-content-center ftinf"
                style={{
                  height: "fit-content",
                  marginLeft: "1rem",
                  // border: "2px solid white",
                  width: "200px",
                }}
              >
                <h6 className="custom-font">關於植遇</h6>
                <div
                  className="d-flex flex-row justify-content-center"
                  style={{
                    height: "fit-content",
                    width: "100%",
                    // border: "2px solid white",
                  }}
                >
                  <div
                    className="d-flex flex-column justify-content-center"
                    style={{
                      width: "50%",
                      height: "fit-content",
                      // border: "2px solid white",
                    }}
                  >
                    <a className="custom-font" href="">
                      品牌故事
                    </a>
                    <a className="custom-font" href="">
                      會員權益
                    </a>
                    <a className="custom-font" href="">
                      隱私政策
                    </a>
                  </div>
                  <div
                    className="d-flex flex-column"
                    style={{
                      width: "50%",
                      height: "fit-content",
                    }}
                  >
                    <a className="custom-font" href="">
                      運送須知
                    </a>
                    <a className="custom-font" href="">
                      退換貨辦法
                    </a>
                    <a className="custom-font" href="">
                      更多FAQ
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="d-flex flex-column align-items-start justify-content-center ftinf"
                style={{
                  height: "fit-content",
                  // marginLeft: "1rem",
                  width: "200px",
                  // border: "2px solid white",
                }}
              >
                <h6 className="custom-font">服務時間</h6>
                <p className="custom-font">週一至週五 13:00-18:30</p>
                <p className="custom-font">週六及週日 10:00-18:30</p>
                <p className="custom-font">週三公休日 - 暫不服務</p>
              </div>
              <div
                className="d-flex flex-column align-items-start justify-content-center ftinf"
                style={{
                  height: "fit-content",
                  // marginLeft: "1rem",
                  // border: "2px solid white",
                  width: "250px",
                }}
              >
                <h6 className="custom-font">植遇門市</h6>
                <p className="custom-font">新北市板橋區民族路168號</p>
                <p className="custom-font">台中市南屯區黎明路二段658號</p>
                <p className="custom-font">高雄市仁武區泰山里仁勇路400號</p>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Index;
