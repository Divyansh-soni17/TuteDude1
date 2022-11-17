import React from "react";
import "./home.css";
import GroupsIcon from "@mui/icons-material/Groups";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const home = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbarheading">
          <AutoStoriesOutlinedIcon />
          <h3>TuteDude</h3>
        </div>

        <div className="rightnavbar">
          <h3>My Assignment</h3>
          <h3>Chat with Mentor</h3>
          <div className="profile">
            <AccountCircleIcon />
            <h3>ProfileName</h3>
          </div>
        </div>
      </div>
      <div className="mainbody">
        <p>UI/UX > Refer & Earn</p>
        <div className="mainbodyitem1">
          <div className="Earning">
            <div className="earningitem1">
              <div className="earningitem2">
                <p>Referrel Earning</p>
                <h1>₹ 2,500</h1>
              </div>
              <div className="earningitem2">
                <p>Total Referrals</p>
                <h1>7</h1>
              </div>
              <div className="earningitem2">
                <p>Wallet Balance</p>
                <h1>₹ 500</h1>
              </div>
            </div>
            <button>Withdraw Balance</button>
          </div>

          <div className="referrelcode">
            <h3>Your Referrel Code</h3>
            <div className="referrelitem">
              <div className="referrelcodeitem">
                <p>E</p>
                <p>D</p>
                <p>C</p>
                <p>H</p>
                <p>5</p>
                <p>4</p>
              </div>
            </div>
          </div>
        </div>
        <h2>How does it work ?</h2>
        <div className="bottombody">
          <div className="bottonbodyitem">
            <div className="bottonbodyitemsvg">
              <GroupsIcon />
            </div>
            <div className="bottonbodyitemdata">
              <h3>Invite your friends</h3>
              <p>Share the link tutedude.com with your friends</p>
            </div>
          </div>
          <div className="bottonbodyitem">
            <div className="bottonbodyitemsvg">
              <LocalOfferIcon />
            </div>

            <div className="bottonbodyitemdata">
              <h3>Friend purchase any course</h3>
              <p>Using your referrelcode in the payment page</p>
            </div>
          </div>
          <div className="bottonbodyitem">
            <div className="bottonbodyitemsvg">
              <CurrencyRupeeIcon />
            </div>

            <div className="bottonbodyitemdata">
              <h3>You get 200 as referal money</h3>
              <p>On total purchase the friend makes, into your wallet</p>
            </div>
          </div>
          <div className="bottonbodyitem">
            <div className="bottonbodyitemsvg">
              <AccountBalanceWalletIcon />
            </div>

            <div className="bottonbodyitemdata">
              <h3>Transfer money from wallet</h3>
              <p>
                When the wallet balance reaches 200 or more,you can withdraw it
              </p>
            </div>
          </div>
          <div className="bottonbodyitem">
            <div className="bottonbodyitemsvg">
              <GroupsIcon />
            </div>

            <div className="bottonbodyitemdata">
              <h3>Your friend get 200 off</h3>
              <p>
                On his overall fee on successfull purchase using your referrel
                code
              </p>
            </div>
          </div>
        </div>
        <h4>Friend who Enrolled</h4>
        <h4>Terms & conditions</h4>
      </div>
    </div>
  );
};

export default home;
