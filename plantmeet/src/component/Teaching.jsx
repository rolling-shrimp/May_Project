import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import swal from "sweetalert2";
import Foot from "./Foot";
import Head from "./Head";

import teach from "../assets/teach.jpg";
import bee from "../assets/be.png";
import Axios from "axios";
import axios from "axios";
import { Array } from "core-js";
import tw from "../assets/tw.png";
import tw2 from "../assets/tw2.png";
import tw3 from "../assets/tw3.png";
import tw4 from "../assets/tw4.png";
import "./teaching.css";
const Teaching = () => {
  const [others, setOthers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get("http://localhost:8080/product/體驗課程");
      setOthers(result.data);
    };

    fetchData();
  }, []);
  const [commodity, setCommodity] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get("http://localhost:8080/product/植感選物");
      setCommodity(result.data);
    };

    fetchData();
  }, []);
  const randomThree = () => {
    const shuffled = others.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };
  const Three = () => {
    const shuffled = commodity.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const donameChang = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const docontentChang = (e) => {
    console.log(e.target.value);
    setContent(e.target.value);
  };

  const doOkClick = () => {
    axios
      .post("http://localhost:9000/teaching", { name: name, content: content })
      .then((response) => {
        window.location.href = `/teaching/${id}`;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [messages, setTodoList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get("http://localhost:9000/teaching/list");
      setTodoList(result.data);
    };

    fetchData();
  }, []);
  //   const [product, setProduct] = useState([]);
  //   const {id} = useParams();
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await Axios.get(`http://localhost:8080/product/體驗課程/${id}`);
  //       setProduct(result.data);
  //     };

  //     fetchData();
  //   }, []);

  const [products, setProduct] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get(
        `http://localhost:8080/product/體驗課程/${id}`
      );
      setProduct(result.data[0]);
      setSelectedImage(
        result.data[0].images ? JSON.parse(result.data[0].images)[0] : ""
      );
    };

    fetchData();
  }, [id]);
  const handleImageClick = (source) => {
    setSelectedImage(source);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleClick = () => {
    swal.fire("加入成功!!", "歡迎繼續購物", "success");
  };

  return (
    <>
      <div className="teachingPage">
        <div>
          <Head />
        </div>
        {/* <div  className="container-fluid d-grid gap-3 align-items-center" style={{gridTemplateColumns: '1fr 2fr'}}>
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle" id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                        </a>
                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownNavLink" style={{gridTemplateColumns: '1fr 2fr'}}>
                            <li><a className="dropdown-item active" href="#" aria-current="page">Overview</a></li>
                            <li><a className="dropdown-item" href="#">Inventory</a></li>
                            <li><a className="dropdown-item" href="#">Customers</a></li>
                            <li><a className="dropdown-item" href="#">Products</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Reports</a></li>
                            <li><a className="dropdown-item" href="#">Analytics</a></li>
                        </ul>
                    </div>

                    <div className="d-flex align-items-center">
                        <form className="w-100 me-3">
                            <p >logo</p>
                        </form>

                        <div className="flex-shrink-0 dropdown">
                            <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false"> */}
        {/* <!-- <i style='font-size:24px' className='fas'>&#xf2bd;</i> --> */}
        {/* <i className="bi bi-person-fill"></i>
                            </a>
                            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div> */}

        {/* <div className="container">
                    <div className="row">
                        <div className="col-4 location">
                            <span>手做課程</span>
                            <span>&gt;</span>
                            <span>tw</span>
                            <span>&gt;</span>
                            <span>多肉植物</span>
                            <span>&gt;</span>
                            <span>胖胖小花園</span>
                        </div>
                    </div>
                </div> */}

        <div id="text" className="showImg container">
          <div className="row">
            {/* <div className="col-lg-6 ProductImg"
                        style={{ backgroundImage: `url(${selectedImage})`, backgroundSize: 'cover', backgroundPosition: 'center',height:'600px',  position:"relative"}}>  */}
            <div className="col-lg-6 ProductImg">
              {/* / 文件掛載問題會使圖片發生錯誤 */}
              <img
                style={{
                  height: "450px",
                  objectFit: "cover",
                  backgroundPosition: "center",
                  height: "500px",
                }}
                id="bigImg"
                src={`${selectedImage}`}
                alt=""
              />

              <div className="col" style={{ width: "100%" }}>
                <div className="smallImg" style={{ minWidth: "100%" }}>
                  {/* {JSON.parse(products.images).map((image,index) => (
                                 <img key={index} style={{maxWidth:'100%'}} onClick={() => handleImageClick(JSON.parse(products.image))} src={products.images?image:""} alt="" /> 
                                 ))
                                } */}
                  {/* {products.map(product=>{})} */}
                  {products.images &&
                    JSON.parse(products.images).map((image, index) => (
                      <img
                        key={index}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                        onClick={() => handleImageClick(image)}
                        src={image}
                        alt=""
                      />
                    ))}
                  {/* <img style={{maxWidth:'20%'}} onClick={()=>handleImageClick(products.images?JSON.parse(`${products.images}`):'')} src={products.images?JSON.parse(`${products.images}`):''} alt="" />
                                 <img style={{maxWidth:'20%'}} onClick={()=>handleImageClick(products.images?JSON.parse(`${products.images}`):'')} src={products.images?JSON.parse(`${products.images}`):''} alt="" />
                                 <img style={{maxWidth:'20%'}} onClick={()=>handleImageClick(products.images?JSON.parse(`${products.images}`):'')} src={products.images?JSON.parse(`${products.images}`):''} alt="" />
                                 <img style={{maxWidth:'20%'}} onClick={()=>handleImageClick(products.images?JSON.parse(`${products.images}`):'')} src={products.images?JSON.parse(`${products.images}`):''} alt="" />
                                 <img style={{maxWidth:'20%'}} onClick={()=>handleImageClick(products.images?JSON.parse(`${products.images}`):'')} src={products.images?JSON.parse(`${products.images}`):''} alt="" />
                               
                             */}
                </div>

                {/* )
                            //  })
                             
                            
                            } */}
              </div>
              {/* {products.map(
                                <>
                                {products.images && products.images.map((image,index)=>(

                                <div key={index} className="col" style={{width:'100%'}}>
                                <div className="smallImg" style={{minWidth:'100%'}}>
                                      <img onClick={()=>handleImageClick(JSON.parse(image))} src={JSON.parse(image)} alt=""/>
                                </div>

                            </div>
                                ))}
                            </>
                                
                                )} */}
            </div>

            <div className="col-lg-6">
              <p style={{ marginBottom: "-2rem" }} className="title">
                {products.name}
              </p>

              <span style={{ marginBottom: "2rem" }} className="price">
                單價: {products.price}
              </span>

              <select style={{ fontSize: "25px" }} className="num">
                <option value="">人數</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>

              <div className="buttonJoin">
                <button
                  type="button"
                  onClick={handleClick}
                  className="btn btn-outline-success btn-sm"
                >
                  加入購物車
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm">
                  收藏
                </button>
              </div>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "15px",
                  marginLeft: "30%",
                  marginTop: "5%",
                  color: "red",
                  fontSize: "20px",
                }}
              >
                預約須知活動日 5 天前需付款完成
              </p>
              <div className="teacherM ms-4">
                <h2 style={{ fontWeight: "bold", color: "rgb(77, 77, 77)" }}>
                  課程訊息:
                </h2>
                <p>最近日期:2023/05/05 (五) 1900-2100</p>
                <p>地點：108台北市萬華區漢口街二段121號1樓 </p>
                <p>包含：體驗、現場工具、耗材、包裝提袋、自助式飲品</p>
                <h2 style={{ fontWeight: "bold", color: "rgb(77, 77, 77)" }}>
                  簡介:
                </h2>
                <p>{products.description}</p>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="teacherContent col-lg-6">
              <div className="teacher">
                <img src={teach} alt="" />
                <p>
                  大家好，我是手做老師，將教導你們各種手工藝技巧，創造美麗的手做作品，一起展現創意和想像力！
                </p>
              </div>
              <h2 style={{ fontWeight: "bold", color: "rgb(77, 77, 77)" }}>
                體驗內容:
              </h2>
              <p>{products.content}</p>
            </div>
            <div className="col-lg-6">
              <div className="other">
                <h2 style={{ fontWeight: "bold", color: "rgb(77, 77, 77)" }}>
                  其他資訊:
                </h2>
                <ul>
                  {products.others}
                  {/* <li>地點:台中</li>
                                    <li>時長:約2個小時</li>
                                    <li>可以先選擇預設的日期及時段，我們再作最終確認。</li>
                                    <li>1人成班，每個時段最多4人，多於4人請與我們聯絡。●如希望預約其他日期及時段，請與我們聯絡。</li> */}
                </ul>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="transportation">
                    <h2
                      style={{ fontWeight: "bold", color: "rgb(77, 77, 77)" }}
                    >
                      交通:
                    </h2>
                    <ul>
                      <li>自行駕車</li>
                      <li>大眾交通</li>
                      <p>火車:搭到台北火車站</p>
                      <p>
                        公車:從台北捷運站西區出口步行至206路公車站牌，搭乘206路公車往萬華方向，並在漢口街二段121號下車即可。
                      </p>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="myMap">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.63507799214!2d121.50411290000001!3d25.0464554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90f4810fd05%3A0x7e2adf0f158c14f1!2zMTA45Y-w5YyX5biC6JCs6I-v5Y2A5ryi5Y-j6KGX5LqM5q61MTIx6JmfMeaokw!5e0!3m2!1szh-TW!2stw!4v1684311085767!5m2!1szh-TW!2stw"
                      style={{
                        width: "100%",
                        height: "250px",
                        style: "border:0;",
                        allowfullscreen: "",
                        loading: "lazy",
                        referrerpolicy: "no-referrer-when-downgrade",
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <h2>注意事項</h2>
            </div>
            <p style={{ fontSize: "20px" }}>
              ▸條款及細則活動一經確認預訂後，不可取消、退款或更改訂單。請於預定活動時間前10分鐘抵達工作坊，遲到20分鐘或以上，當放棄此課堂論。遲到或缺席者將不獲退款。三號暴風信號或以上、紅色及黑色暴雨警告情況下，工作坊將會取消，可重新安排日期。參加者應遵守活動場地規則及配合現場講師指示，若有違反因而造成損害，參加者應自行負責。
            </p>
          </div>
          <hr />
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-lg-6" style={{ border: "none" }}>
              <h2>留言板</h2>
              <div className="messageContainer">
                <ul className="list-group">
                  {messages.map((message, index) => (
                    <li className="list-group-item" key={index}>
                      {message.name}:{message.content}
                      <span className="pull-right">------於{message.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="messageBoard col-lg-6">
              <form action="/post" method="post">
                <div className="from-group">
                  <label
                    for="input_name"
                    style={{
                      fontWeight: "bold",
                      color: "rgb(80, 80, 80)",
                      fontSize: "30px",
                    }}
                  >
                    你的名字
                  </label>
                  <br />
                  <input
                    className="from-messge"
                    type="text"
                    required
                    minlength="2"
                    maxlength="10"
                    id="name"
                    name="name"
                    placeholder="請輸入你的名字"
                    autocomplete="off"
                    value={name}
                    onChange={donameChang}
                  />
                </div>
                <div className="from-group">
                  <label
                    for="textarea_messge"
                    style={{
                      fontWeight: "bold",
                      color: "rgb(80, 80, 80)",
                      fontSize: "30px",
                    }}
                  >
                    留言內容
                  </label>
                  <br />
                  <textarea
                    className="from-content"
                    type="text"
                    cols="50"
                    rows="10"
                    required
                    id="content"
                    name="content"
                    placeholder="請輸入你的留言"
                    value={content}
                    onChange={docontentChang}
                  ></textarea>
                </div>
                <div id="send-btn">
                  <button
                    type="button"
                    onClick={doOkClick}
                    style={{
                      width: "180px",
                      marginLeft: "1rem",
                      fontSize: "30px",
                    }}
                  >
                    <img src={bee} style={{ width: "50px" }} alt="" />
                    傳送
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row recommend">
            <h2 style={{ fontWeight: "bold", color: "rgb(123, 123, 123)" }}>
              其他課程推薦
            </h2>
            <div className="d-flex flex-wrap justify-content-between">
              {randomThree().map((other) => (
                <NavLink to={`/teaching/${other.id}`} className="col-lg-4 mb-4">
                  <img
                    src={JSON.parse(other.images)}
                    style={{
                      width: "90%",
                      objectFit: "cover",
                      height: "300px",
                    }}
                    alt=""
                  />
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row recommend">
            <h2 style={{ fontWeight: "bold", color: "rgb(123, 123, 123)" }}>
              相關商品推薦
            </h2>
            <div className="d-flex flex-wrap justify-content-between">
              {Three().map((commodity) => (
                <NavLink
                  to={`/teaching/${commodity.id}`}
                  className="col-lg-4 mb-4"
                >
                  <img
                    src={JSON.parse(commodity.images)}
                    style={{
                      width: "90%",
                      objectFit: "cover",
                      height: "300px",
                    }}
                    alt=""
                  />
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Foot />
        </div>
        {/* <div className="container">
                <footer className="row row-cols-5 py-5 my-5 border-top">
                    <div className="col">
                        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                        </a>
                        <p className="text-muted">&copy; 2021</p>
                    </div>

                    <div className="col">

                    </div>

                    <div className="col">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>
                </footer>
            </div> */}
        {/* <!-- <script src="../tA.js"></script> --> */}
        {/* <!-- <script src="../tA.js"></script> --> */}
        <script src="../teaching.css"></script>
        <script src="../teaching_home/teaching.js"></script>
      </div>
    </>
  );
};

export default Teaching;
