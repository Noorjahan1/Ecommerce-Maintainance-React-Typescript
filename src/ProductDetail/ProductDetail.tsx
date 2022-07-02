import * as React from "react";
import Styles from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import data from "../data";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
function ProductDetail() {
  let params = useParams();
  const thumbPic = [
    { imgSource: "https://picsum.photos/id/1/200" },
    { imgSource: "https://picsum.photos/id/2/200" },
    { imgSource: "https://picsum.photos/id/3/200" },
    { imgSource: "https://picsum.photos/id/4/200" },
    { imgSource: "https://picsum.photos/id/5/200" },
  ];
  const [imageUrl,setimageUrl]=useState<String>("")
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleSelect = (index) => {
    setSelectedIndex(index);
  };
  const MouseOver = (event) => {
    event.target.style.cursor = "pointer";
  };
  const changeImageUrl=(url)=>{
    setimageUrl(url.src)
  }
  const productData = data.filter((data) => data.id === params.productId);
  const productDetails = [
    { Menufacturer: "Chanel" },
    { Availability: "In stock 20 items(s)" },
    { "Product Code": productData[0]["Vendor Code"] },
  ];
  return (
    <>
      <div className={Styles.product}>
        <div className="row mt-5 gx-5">
          {/* Product Image */}
          <div className="col-lg-6">
            <div className={Styles.productImage}>
             <img src={imageUrl===""?`${productData[0]["img"]}`:`${imageUrl}`} alt="Image" />
            </div>
            <Slider {...settings}>
              {thumbPic.map((pic) => {
                return (
                  <div className={Styles.thumbpic}>
                    <img src={pic["imgSource"]} alt="" className="img-fluid" onClick={(event)=>{changeImageUrl(event.target)}}/>
                  </div>
                );
              })}
            </Slider>
          </div>
          {/* Product Details */}
          <div className="col-lg-6">
            <div className={Styles.nameOfProduct}>
              <h3>Product Title Here</h3>
            </div>
            <div className={Styles.titles}>
              <ul className={Styles.reviewList}>
                <li>
                  <i className="fa-regular fa-star"></i>
                </li>
                <li>
                  <i className="fa-regular fa-star"></i>
                </li>
                <li>
                  <i className="fa-regular fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <p className={Styles.reviewNumber}>1 Review</p>
                </li>
              </ul>
            </div>
            <div className={Styles.productDetail}>
              {productDetails.map((productSpec) => {
                const key = Object.keys(productSpec);
                return (
                  <p>
                    {key}:<span>{Object.values(productSpec)}</span>
                  </p>
                );
              })}
            </div>
            <div className={Styles.productBriefDescription}>
              <h3>Product Description</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className={Styles.price}>
              <p>
                <span className={Styles.strike}>
                  Tk{productData[0]["Prev Price"]}
                </span>
                Tk{productData[0]["Price"]}
              </p>
            </div>
            <div className={Styles.Buy}>
              <button className={Styles.cart}>
                <i className="fa-solid fa-cart-shopping"></i>Add to Cart
              </button>
              <button className={Styles.buy}>Buy Now</button>
            </div>
          </div>
        </div>
        <div className={Styles.socialMedia}>
          <p>Share this</p>
          <a href="https://www.facebook.com/">
            <i
              className="fa-brands fa-facebook"
              style={{ color: "#305991" }}
            ></i>
          </a>
          <a href="https://twitter.com/">
            <i
              className="fa-brands fa-twitter"
              style={{ color: "#2da8d2" }}
            ></i>
          </a>
          <a href="https://g.co/kgs/ikpBtB">
            <i
              className="fa-brands fa-google-plus"
              style={{ color: "#cd222a" }}
            ></i>
          </a>
          <a href="https://www.pinterest.com/">
            <i
              className="fa-brands fa-pinterest"
              style={{ color: "#9a050c" }}
            ></i>
          </a>
        </div>

        <div className={Styles.productSpecifications}>
          <div className={Styles.tabs}>
            <Tabs
              selectedIndex={selectedIndex}
              onSelect={handleSelect}
              selectedTabClassName={Styles.tabSelected}
            >
              <TabList>
                <Tab className={Styles.tablist} onMouseOver={MouseOver}>
                  Specification
                </Tab>
                <Tab className={Styles.tablist} onMouseOver={MouseOver}>
                  Details
                </Tab>
                <Tab className={Styles.tablist} onMouseOver={MouseOver}>
                  Reviews
                </Tab>
              </TabList>
              <TabPanel>
                <div className={Styles.tab}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Porttitor leo a diam sollicitudin tempor. Neque
                    laoreet suspendisse interdum consectetur libero. Nunc
                    scelerisque viverra mauris in aliquam sem fringilla ut
                    morbi. Dui vivamus arcu felis bibendum ut tristique et.
                    Lorem mollis aliquam ut porttitor. Leo vel orci porta non.
                    Urna duis convallis convallis tellus id interdum velit. Amet
                    mattis vulputate enim nulla aliquet porttitor lacus. Nec dui
                    nunc mattis enim ut. Nec nam aliquam sem et tortor. Tortor
                    posuere ac ut consequat semper. Viverra orci sagittis eu
                    volutpat odio facilisis mauris. Sollicitudin aliquam
                    ultrices sagittis orci. Nisi lacus sed viverra tellus in hac
                    habitasse. Tortor posuere ac ut consequat semper viverra nam
                    libero justo. Odio tempor orci dapibus ultrices in iaculis
                    nunc sed. Quis hendrerit dolor magna eget est lorem ipsum.
                    Integer enim neque volutpat ac tincidunt.
                  </p>
                </div>
              </TabPanel>
              <TabPanel>
                <div className={Styles.tab}>
                  <div className={Styles.description}>
                    <h3>Description</h3>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Porttitor leo a diam sollicitudin tempor. Neque
                    laoreet suspendisse interdum consectetur libero. Nunc
                    scelerisque viverra mauris in aliquam sem fringilla ut
                    morbi. Dui vivamus arcu felis bibendum ut tristique et.
                    Lorem mollis aliquam ut porttitor. Leo vel orci porta non.
                    Urna duis convallis convallis tellus id interdum velit. Amet
                    mattis vulputate enim nulla aliquet porttitor lacus. Nec dui
                    nunc mattis enim ut. Nec nam aliquam sem et tortor. Tortor
                    posuere ac ut consequat semper. Viverra orci sagittis eu
                    volutpat odio facilisis mauris. Sollicitudin aliquam
                    ultrices sagittis orci. Nisi lacus sed viverra tellus in hac
                    habitasse. Tortor posuere ac ut consequat semper viverra nam
                    libero justo. Odio tempor orci dapibus ultrices in iaculis
                    nunc sed. Quis hendrerit dolor magna eget est lorem ipsum.
                    Integer enim neque volutpat ac tincidunt.
                  </p>
                </div>
              </TabPanel>
              <TabPanel>
                <div className={Styles.review}>
                  <h3>Last Review</h3>
                  <div className={Styles.reviewDetails}>
                    <div className={Styles.authorName}>
                      <h3>By Bin Burhan </h3>
                    </div>
                    <div className={Styles.date}>
                      <p> 10:05pm Sunday 26 Decembar</p>
                    </div>
                    <div className={Styles.reviewRate}>
                      <ul className={Styles.reviewRateList}>
                        <li>
                          <i className="fa-regular fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-regular fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-regular fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Porttitor leo a diam sollicitudin tempor. Neque
                    laoreet suspendisse interdum consectetur libero. Nunc
                    scelerisque viverra mauris in aliquam sem fringilla ut
                    morbi. Dui vivamus arcu felis bibendum ut tristique et.
                    Lorem mollis aliquam ut porttitor. Leo vel orci porta non.
                    Urna duis convallis convallis tellus id interdum velit. Amet
                    mattis vulputate enim nulla aliquet porttitor lacus. Nec dui
                    nunc mattis enim ut. Nec nam aliquam sem et tortor. Tortor
                    posuere ac ut consequat semper. Viverra orci sagittis eu
                    volutpat odio facilisis mauris. Sollicitudin aliquam
                    ultrices sagittis orci. Nisi lacus sed viverra tellus in hac
                    habitasse. Tortor posuere ac ut consequat semper viverra nam
                    libero justo. Odio tempor orci dapibus ultrices in iaculis
                    nunc sed. Quis hendrerit dolor magna eget est lorem ipsum.
                    Integer enim neque volutpat ac tincidunt.
                  </p>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
