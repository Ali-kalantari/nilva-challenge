import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { increment } from "../../redux/actions";
import "./banner_single.css";

function Banner_single({ contacts, increment }) {
  const [data, setdata] = useState({});
  const [counter, setcounter] = useState(0);
  const params = useParams();

  

  const myFetchdata = async () => {
    const req = await fetch(`https://picsum.photos/id/${params.id}/info`);
    const result = await req.json();
    setdata(result);
  };
  const banner_counter = () => {
    increment(params.id)
  };
  useEffect(() => {
    myFetchdata();
    const count = contacts[0].filter((item) => {
      return item.id === params.id;
    });
    setcounter(contacts[0].click);
  }, []);
  return (
    <>
      <div className="single-banner-container">
        <div onClick={banner_counter} className="single-banner">
          <img src={data.download_url} />
        </div>
        <div className="counter">
          <h3>{counter}</h3>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts && state.contacts.allContacts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (contact) => {
      dispatch(increment(contact));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner_single);
