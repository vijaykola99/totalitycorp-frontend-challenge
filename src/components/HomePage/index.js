import NavBar from "../NavBar";
import "./index.css";

const carsList = [
  {
    id: 1,
    desktopImgUrl:
      "https://res.cloudinary.com/dijmpdww2/image/upload/v1666147809/TeslaModel3_u9rlrl.jpg",
    mobileImgUrl:
      "https://res.cloudinary.com/dijmpdww2/image/upload/v1666239891/model3-Mobile_zclyfn.jpg",
    model: "Model 3",
    order: "Custom Order",
    enquiry: "Existing Inventory",
  },
  {
    id: 2,
    desktopImgUrl:
      "https://res.cloudinary.com/dijmpdww2/image/upload/v1666148097/TeslaModelY_pf775h.jpg",
    mobileImgUrl:
      "https://res.cloudinary.com/dijmpdww2/image/upload/v1666239860/model-Y-mobile_zvtpxs.jpg",
    model: "Model Y",
    order: "Custom Order",
    enquiry: "Existing Inventory",
  },
  {
    id: 3,
    desktopImgUrl:
      "https://res.cloudinary.com/dijmpdww2/image/upload/v1666148037/TeslaModelS_ld40aq.jpg",
    mobileImgUrl:
      "https://res.cloudinary.com/dijmpdww2/image/upload/v1666239878/Model-S-Mobile_knxjkz.jpg",
    model: "Model S",
    order: "Custom Order",
    enquiry: "Existing Inventory",
  },
  {
    id: 4,
    desktopImgUrl:
      "https://res.cloudinary.com/dijmpdww2/image/upload/v1666148088/TeslaModelX_cekxut.jpg",
    mobileImgUrl:
      "https://res.cloudinary.com/dijmpdww2/image/upload/v1666239870/Model-X-Mobile_z8ohp6.jpg",
    model: "Model X",
    order: "Custom Order",
    enquiry: "Existing Inventory",
  },
  {
    id: 5,
    desktopImgUrl:
      "https://res.cloudinary.com/dijmpdww2/image/upload/v1666148114/TeslaSolarPanels_qycbjn.jpg",
    mobileImgUrl:
      "https://res.cloudinary.com/dijmpdww2/image/upload/v1666239907/mobile-SolarPanels_hcyw2h.jpg",
    model: "Solar Panels",
    order: "Order Now",
    enquiry: "Learn More",
  },
  {
    id: 6,
    desktopImgUrl:
      "https://res.cloudinary.com/dijmpdww2/image/upload/v1666148121/TeslaSolarRoofs_se4xzb.webp",
    mobileImgUrl:
      "https://res.cloudinary.com/dijmpdww2/image/upload/v1666239897/Mobile-solarRoof_wurlh3.webp",
    model: "Solar Roof",
    order: "Order Now",
    enquiry: "Learn More",
  },
  {
    id: 7,
    desktopImgUrl:
      "https://res.cloudinary.com/dijmpdww2/image/upload/v1666148021/TeslaAccesories_plwspn.jpg",
    mobileImgUrl:
      "https://res.cloudinary.com/dijmpdww2/image/upload/v1666239914/mobile-accessories_ea7t2i.jpg",
    model: "Accessories",
    order: "Shop Now",
    enquiry: "",
  },
];

const footerSection = [
  "Tesla © 2022",
  "Privacy & Legal",
  "Vehicle Recalls",
  "Contact",
  "Careers",
  "News",
  "Engage",
  "Locations",
];

const footerSectionForMobile = [
  "Tesla © 2022",
  "Privacy & Legal",
  "Vehicle Recalls",
  "Careers",
  "News",
];

const HomePage = () => {
  const imageUrl = window.innerWidth <= 767;
  return (
    <div className="main-background">
      <NavBar />
      {carsList.map((eachItem) => (
        <div
          key={eachItem.id}
          className="car-background"
          style={{
            backgroundImage: `url(${
              imageUrl ? eachItem.mobileImgUrl : eachItem.desktopImgUrl
            })`,
          }}
        >
          <div className="image-container">
            <div className="model-name-container">
              <h1 className="model-name">{eachItem.model}</h1>
              <p className="order-text">
                Order Online for{" "}
                <span className="span">Touchless Delivery</span>
              </p>
            </div>
            <div className="buttons-container">
              <button className="order-now-button">{eachItem.order}</button>
              {eachItem.enquiry !== "" && (
                <button className="existing-inventory-button">
                  {eachItem.enquiry}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      <ul className="footer-section">
        {(imageUrl ? footerSectionForMobile : footerSection).map(
          (paragraph) => (
            <li key={paragraph}>
              <p className="footer-text">{paragraph}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default HomePage;
