import React, { useState, useEffect } from "react";
import { gsap, Bounce, Elastic } from "gsap";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import Foot from "./Foot";
import Head from "./Head";
import "./CourseIndex.css";

import Heart from "./heart/heart";
import cart from "../assets/nav-cart-h.png";
import logo from "../assets/home_m.png";
import banner1 from "../assets/banner1.png";
import banner2_1 from "../assets/banner2-1.png";
import banner2_2 from "../assets/banner2-2.png";
import banner3_1 from "../assets/banner3-1.png";
import banner3_2 from "../assets/banner3-2.png";
import banner4 from "../assets/banner-text.png";
import twtext from "../assets/twtext.png";
import tw2text from "../assets/tw2text.png";
import tw3text from "../assets/tw3text.png";
import tw4text from "../assets/tw4text.png";
import tw from "../assets/tw.png";
import tw2 from "../assets/tw2.png";
import tw3 from "../assets/tw3.png";
import tw4 from "../assets/tw4.png";
import Plant from "./Plant";

const CourseIndex = () => {
  const tl = gsap.timeline();
  const handleMouseEnter = () => {
    tl
      // Ground
      .fromTo(
        [".ldl-scale > g >path:nth-child(4)"],
        {
          duration: 0.2,
          scaleY: 0,
          scaleX: 0,
          transformOrigin: "center",
          ease: Bounce.easeOut,
          stagger: 0,
        },
        {
          duration: 0.2,
          scaleY: 1,
          scaleX: 1,
          transformOrigin: "50% 50%",
          ease: Bounce.easeOut,
          stagger: 0,
        }
      )
      .fromTo(
        [".ldl-scale > g >path:nth-child(3)"],
        {
          duration: 0.1,
          scaleY: 0,
          scaleX: 0,
          transformOrigin: "center",
          ease: Bounce.easeOut,
          stagger: 0,
        },
        {
          duration: 0.1,
          scaleY: 1,
          scaleX: 1,
          transformOrigin: "50% 50%",
          ease: Bounce.easeOut,
          stagger: 0,
        }
      )
      .fromTo(
        [".ldl-scale> g >path:nth-child(2)"],
        {
          duration: 0.1,
          scaleX: 0,
          transformOrigin: "right",
          ease: Elastic.easeOut.config(1, 0.2),
          stagger: 0,
        },
        {
          duration: 0.1,
          scaleX: 1,
          transformOrigin: "right",
          ease: Elastic.easeOut.config(1, 0.2),
          stagger: 0,
        }
      )
      .fromTo(
        [".ldl-scale> g >path:nth-child(1)"],
        {
          duration: 0.1,
          scaleX: 0,
          transformOrigin: "left",
          ease: Elastic.easeOut.config(1, 0.2),
          stagger: 0,
        },
        {
          duration: 0.1,
          scaleX: 1,
          transformOrigin: "left",
          ease: Elastic.easeOut.config(1, 0.2),
          stagger: 0,
        }
      );
  };
  const handleMouseLeave = () => {
    if (tl.isActive()) {
      tl.clear();
    }
  };

  const [value, setValue] = useState(0);
  const [activeView, setActiveView] = useState("view_grid");

  const handleLinkClick = (e) => {
    const clickedLink = e.target;
    const clickedView = clickedLink.getAttribute("data_view");

    setActiveView(clickedView);
    if (clickedView === "view_grid") {
      document.querySelector(".view_grid").style.display = "block";
      document.querySelector(".view_list").style.display = "none";
    } else if (clickedView === "view_list") {
      document.querySelector(".view_grid").style.display = "none";
      document.querySelector(".view_list").style.display = "block";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setValue(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = {
    banner4: {
      marginTop: `${value * 0.9}px`,
      display: value > 200 ? "none" : "block",
    },
    banner2_1: {
      left: `${value * 2}px`,
    },
    banner2_2: {
      left: `${value * -2}px`,
    },
    banner3_1: {
      left: `${value * -0.5}px`,
    },
    banner3_2: {
      left: `${value * 0.5}px`,
    },
  };
  const [products, setTodoList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get("http://localhost:8080/product/體驗課程");
      setTodoList(result.data);
    };

    fetchData();
  }, []);
  const [filter, setFilter] = useState(null);
  // 設定要篩選的類別
  const filterResult = (catItem) => {
    setFilter(catItem);
  };
  let filteredProducts = products;
  //為了根據選擇的篩選條件 filter 來過濾 products 陣列
  if (filter) {
    filteredProducts = products.filter((product) => {
      return product.categoryId === filter;
    });
  }

  const [others, setOthers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get("http://localhost:8080/product/體驗課程");
      setOthers(result.data);
    };

    fetchData();
  }, []);
  const randomThree = () => {
    const shuffled = others.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  // const filterResult=(catItem)=>{
  //   setFilter(catItem);
  //   };
  //       let filteredProducts = products;
  //       if (filter) {
  //       filteredProducts = products.filter((product) => {
  //       return product.categoryId == filter;
  //   });
  // }
  // const handleFilterClick = (categoryId) => {
  //   if (categoryId) {
  //     const filtered = products.filter((product) => product.categoryId === categoryId);
  //     setFilteredProducts(filtered);
  //   } else {
  //     setFilteredProducts(products);
  //   }
  //   setFilter(categoryId);
  // };
  return (
    <div className="coursePage">
      <Head />
      {/* <div
        className="container-fluid d-grid gap-3 align-items-center"
        style={{ gridTemplateColumns: "1fr 2fr" }}
      >
        <div className="d-flex align-items-center">
          <form className="w-100 me-3">
            <img className="logo" src={logo} alt="" />
          </form>

          <div className="vip">
            <a
              href="#"
              className="d-block link-dark text-decoration-none "
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            > */}
      {/* <i className="bi bi-person-fill"></i> */}
      {/* <img className="cart" src={cart} alt="" /> */}
      {/* <!-- <i style='font-size:24px' className='fas'>&#xf2bd;</i> --> */}
      {/* </a> */}
      {/* <ul
              className="dropdown-menu text-small shadow"
              aria-labelledby="dropdownUser2"
            >
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li> */}
      {/* <li><hr className="dropdown-divider"/></li> */}
      {/* <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul> */}
      {/* </div>
        </div>
      </div> */}
      <section id="parallax">
        <img id="banner1" src={banner1} alt="" />
        <img id="banner2_1" src={banner2_1} style={styles.banner2_1} alt="" />
        <img id="banner2_2" src={banner2_2} style={styles.banner2_2} alt="" />
        <img id="banner3_1" src={banner3_1} style={styles.banner3_1} alt="" />
        <img id="banner3_2" src={banner3_2} style={styles.banner3_2} alt="" />
        <img
          className="textimg"
          id="banner4"
          src={banner4}
          style={styles.banner4}
          alt=""
        />
      </section>
      {/* <!-- <div className="myimg">
      <img src="../課程banner/banner1.png" alt="">
    </div>
    <div className="banner2">
      <img  src="../課程banner/banner2.png" alt="">
    </div> --> */}

      <div className="container">
        <div className="changText row ">
          <div className="col  ms-3 " style={{ width: "20%" }}>
            <img style={{ width: "20%" }} src={tw} alt="" />
            <img
              className="imgText"
              src={twtext}
              style={{
                zIndex: "999",
                width: "10%",
                height: "25%",
                paddingTop: "30px",
              }}
              alt=""
            />
          </div>
          <div className="col  ms-3" style={{ width: "20%" }}>
            <img style={{ width: "20%" }} src={tw2} alt="" />
            <img
              className="imgText"
              src={tw2text}
              style={{
                zIndex: "999",
                width: "10%",
                height: "25%",
                paddingTop: "30px",
              }}
              alt=""
            />
          </div>
          <div className="col  ms-3" style={{ width: "20%" }}>
            <img style={{ width: "20%" }} src={tw3} alt="" />
            <img
              className="imgText"
              src={tw3text}
              style={{
                zIndex: "999",
                width: "10%",
                height: "25%",
                paddingTop: "30px",
              }}
              alt=""
            />
            {/* <!-- <a href="../teaching_home/teaching.html"><p>南部</p></a> --> */}
          </div>
          <div className="col  ms-3" style={{ width: "20%" }}>
            <img style={{ width: "20%" }} src={tw4} alt="" />
            <img
              className="imgText"
              src={tw4text}
              style={{
                zIndex: "999",
                width: "10%",
                height: "25%",
                paddingTop: "30px",
              }}
              alt=""
            />
            {/* <!-- <a href="../teaching_home/teaching.html"><p>線上課程</p></a> --> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="changArea row ">
          <div className="col"></div>
          <div className="col">{/* <img src={tw2} alt="" /> */}</div>
          <div className="col" style={{ display: "none" }}>
            <img src={tw2} alt="" />
            {/* <img src={""} alt="" /> */}
          </div>
          <div className="col" style={{ opacity: "0" }}>
            <img src={tw2} alt="" />
            {/* <img src={''} alt="" /> */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="area">
            <button className="buttonArea" onClick={() => setFilter(null)}>
              全部課程
            </button>
            {/* <!-- <span>/</span> --> */}
            <button className="buttonArea" onClick={() => filterResult(3)}>
              不凋花
            </button>
            {/* <!-- <span>/</span> --> */}
            <button className="buttonArea" onClick={() => filterResult(1)}>
              多肉植物
            </button>
            {/* <!-- <span>/</span> --> */}
            <button className="buttonArea" onClick={() => filterResult(2)}>
              生態瓶
            </button>
            <i
              style={{ fontSize: "25px" }}
              data_view="view_grid"
              className={`myClick bi bi-grid-3x3-gap-fill ${
                activeView === "view_grid" ? "active" : ""
              }`}
              onClick={handleLinkClick}
            ></i>
            <i
              style={{ fontSize: "30px", margin: "10px" }}
              data_view="view_list"
              className={`myClick bi bi-justify ${
                activeView === "view_list" ? "active" : ""
              }`}
              onClick={handleLinkClick}
            ></i>
            {/* <div className="row">
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Category: {product.categoryId}</p>
        </div>
      ))}
      </div> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="view_grid view_wrap" style={{ display: "block" }}>
          <div className="row">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="card col-lg-3 me-3 ms-4 view_item"
                style={{ width: "30%" }}
              >
                <NavLink to={`/teaching/${product.id}`}>
                  <div
                    className="card-img-top"
                    style={{
                      backgroundImage: `url(${JSON.parse(product.images)[0]})`,
                      backgroundSize: "cover",
                      height: "250px",
                    }}
                  />
                </NavLink>
                {/* <div className=" vi_left"> */}
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>

                  <p className="card-text">{product.description}</p>
                  <span style={{ position: "absolute", marginLeft: "130px" }}>
                    <Heart />
                  </span>
                  <NavLink to={`/teaching/${product.id}`}>
                    <button className="shopCar">加入購物車</button>
                  </NavLink>
                  <Plant />
                  {/* </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="view_wrap view_list" style={{ display: "none" }}>
          <div className="row">
            {filteredProducts.map((product) => (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="col-12 view_item"
              >
                <NavLink to={`/teaching/${product.id}`}>
                  <div className="vi_left">
                    <img
                      style={{ objectFit: "cover" }}
                      src={JSON.parse(product.images)[0]}
                      alt=""
                    />
                  </div>
                </NavLink>

                <div className="vi_right">
                  <p className="title">{product.name}</p>
                  <p className="corucontent">{product.description}</p>
                  <br />
                  <span style={{ position: "absolute" }}>
                    <Heart />
                  </span>
                  <NavLink to={`/teaching/${product.id}`}>
                    <button className="shopCar">加入購物車</button>
                  </NavLink>
                  <Plant />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div>
          <h5>相關商品推薦</h5>
        </div>
        <div className="container">
          <div className="row recommend">
            <div className="col-4">
              <img src={tw} alt="" />
            </div>
            <div className="col-4">
              <img src={tw} alt="" />
            </div>
            <div className="col-4">
              <img src={tw} alt="" />
            </div>
          </div>
        </div>
      </div> */}
      </div>
      <div className="container">
        <div className="row recommend">
          <h4 style={{ fontWeight: "bold", color: "rgb(123, 123, 123)" }}>
            相關商品推薦
          </h4>
          <div className="d-flex flex-wrap justify-content-between">
            {randomThree().map((other) => (
              <NavLink to={`/teaching/${other.id}`} className="col-lg-4 mb-4">
                <img
                  src={JSON.parse(other.images)}
                  style={{ width: "90%", objectFit: "cover", height: "300px" }}
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

      <script src="../tA.js"></script>
    </div>
  );
};

export default CourseIndex;
