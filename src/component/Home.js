import React from "react";
import "./home.css";
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const home = () => {
  return (
    <div className="maincontainer">
      <div className="container1">
        <h1>GANGA CONFECTIONERIES PVT. LTD.</h1>
        <img
          src="https://previews.123rf.com/images/espies/espies1710/espies171000019/87182063-stock-photo-of-indian-sweets-served-in-silver-or-wooden-plate-variety-of-peda-burfi-laddu-in-decorat.jpg"
          alt="sweet"
        />
        <p>
          Ganga Confectioner is listed under Sweet SHops in Rajendra Nagar Sector 5, Sahibabad Delhi, Check Address, Contack Number, Ratings & Reviews, Photos, Maps etc, on Justdial.
          Cakes are pretty much the highlight of all events in our lives. Any celebration, whether a birthday, an anniversary, or an accomplishment, is incomplete without a delicious cake. A cake can be defined as an ideal incomplete without a delicious cake. A cake can be defined as an ideal sweet dish when it jsut melts in your mouth and hsa the most distinctive flavour with the perfect filling and texture. All our sweet cravings can be satisfied at the cake in Sahibabad, Delhi, where you would never be disappointed with the availability of a variety of scrumptious cakes and bekery items.
          From cakes to brownies, and cupcakes to macarons, cake shops in Sahibabad, Delhi are your go-to-hotspot for treating your sweet tooth. 
        </p>
        <p className="boldpara">
          Share your opinion in 30 minutes interview and win Cash Rewards
        </p>
      </div>

      <div className="container2">
        <h1>RSVP NOW</h1>
        <p>
          Given the focus of this panel, why do you think you are uniquely positioned to provide valuable point? please be specific about your relavent expertise and the perspective that you represent.
        </p>
        <div className="up">
          <div className="labels1">
            <label>Enter your name</label>
            <input type="text" />
          </div>
          <div className="labels1">
            <label>Enter your E-mail</label>
            <input type="text" />
          </div>
        </div>

        <div className="down">
          <div className="labels1">
            <label>Your Answer</label>
            <input type="text" />
          </div>
          <div className="labels1">
            <label>Conflict of Interest</label>
            <input type="text" />
          </div>
        </div>
        <div className="check">
          <input type="checkbox" />
          <label >
            ** Click here if you are an independent facilitor and would be
            interested in facilitating this knowledgeStream
          </label>
        </div>

        <div className="buttonsitem">
          <button>SELECT SLOT</button>
          <button>SUBMIT</button>
        </div>

        <div className="socialmediabuttons">
          <div className="googlebutton">
            <GoogleIcon/>
            <p>Continue with Google</p>
          </div>
          <div className="linkedinbutton">
            <LinkedInIcon/>
            <p>Continue with Linkedin</p>
          </div>
        </div>
        <p>
          <b>NOTE:</b>This is like a forun participants can share their openion
          on a burning question shared by the sponsor.They can cost pictures
          graphs, detailer arguments to support them.
          <b>
            No gurantee of payment. Participants will get paid based on their
            contribution. Company will decide how much each contributor earns.
          </b>
        </p>
      </div>
    </div>
  );
};

export default home;
