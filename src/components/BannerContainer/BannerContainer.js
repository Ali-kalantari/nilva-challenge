import React, { useState, useEffect } from "react";
import Banner from "./../Banner/Banner";
import "./bannercontainer.css";
import { connect } from "react-redux";
import { Fetchdata } from "./../../redux/actions";

function BannerContainer({ contacts, Fetchdata }) {
  // console.log( contacts)
  // console.log(contacts[0].then(()=>))

  const [data, setdata] = useState([]);
  const [n, setn] = useState(60);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    console.log("Fetch more list items!");
    // const req = await fetch(url);
    // const result = await req.json();
    const data = contacts[0].slice(0, n + 39);
    console.log(data);
    setdata(data);
  };
  useEffect(() => {
    Fetchdata();
    const mydata = contacts[0].slice(0, n);
    // console.log(mydata)
    setdata(mydata);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="banner-container">
      {data.map((item, index) => {
        return <Banner key={item.id} item={item} />;
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts && state.contacts.allContacts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Fetchdata: (contact) => {
      dispatch(Fetchdata(contact));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BannerContainer);
