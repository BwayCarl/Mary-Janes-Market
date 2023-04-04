import React from "react";
import "../styles/Education.css";
import ProductSection from "../components/ProductSection";

function Services() {
  return (
    // Header
    <div className="container edu-page edu-page-bg-pic">
      <header className="education edu-header">
        <div className="row">
          <div className="col-md-12 ">
            <h2 className="edu-title">Hay Mumford's Services</h2>
          </div>
        </div>
      </header>
      {/* Subheader */}
      <div className="row">
        <div className="col-md-12 edu-subheader">
          <h4 className="pro-con-subheader">
            What we offer
          </h4>
          <div className="secondary callout">
            <p>
            At Hay Mumford we install vegetable and flower gardens. Starting from scratch or revamping
an existing garden. We also will install raised beds with or with borders.
We also do soil amending by adding organic fertilizer, compost and high quality top soil.
We can design and custom plant your gardens with organically grown plants.
Hay Mumford specialize’s in small jobs that no other company is interested in performing.
Whether it is a garden rebuild, removal of ugly landscaping or just an updated look.
            </p>
          </div>
        </div>
      </div>

      {/* ------ ACCORDION ------ */}
      <div className="accordion edu-accordion" id="accordionExample">
        {/* Card One */}
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn btn-link edu-btn edu-btn-text"
                id="btn-1"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/Image/forkgrass.jpg"
        }
                  alt="leaf-bullet-point"
                  className="leaf-accordion-bullet-point"
                />
                &nbsp;Plants
              </button>
            </h2>
          </div>
          <div
            id="collapseOne"
            className="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body edu-card-body">
            <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/Image/PlantsPic.jpeg"
        }
                  alt="plants picture"
                  className="card-pic mb-3 justify-content-center"
                />
              <p>
We focus on heirloom tomatoes, approximately 65 varieties. Nothing goes better with tomatoes than basil, which we have an extended variety of basil plants in the spring. In the fall, we offer garlic seed and lessons on how to grow it. HAY MUMFORD also has additional plants available: peppers, onions, herbs, lettuce, eggplant, squash, pumpkins, Cutting Flowerss, and fig trees. Heirloom tomato seeds are also available.
              </p>
              <button className="btn btn-outline-primary btn-sm rounded-lg addToCart" ><a href="/products" className="col-7 p-2 text-right">Go to Products</a></button>
            </div>
          </div>
        </div>
        <br />

        {/* Card Two */}
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed edu-btn-text"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/Image/forkgrass.jpg"
                  }
                  alt="leaf-bullet-point"
                  className="leaf-accordion-bullet-point"
                />
                &nbsp;Produce
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="card-body edu-card-body">
            <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/Image/ProducePic.jpeg"
        }
                  alt="leaf-bullet-point"
                  className="card-pic mb-3 mx-auto"
                />
              <p>
              April through June we have lettuce, arugula and cilantro. July through September we offer heirloom tomatoes, summer squash, herbs, and basil. August through October we offer garlic, peppers, eggplant and pumpkins. If you are looking for something specific we might be able to grow it for you! We practice organic methods by not using synthetic fertilizers or pesticides, however we are not currently OMRI certified. We use only organic fertilizers and our own farm-produced compost.
              </p>
              <a
                href="https://norml.org/marijuana/fact-sheets/cannabis-exposure-and-lung-health/"
                rel="noreferrer"
                target="_blank"
                className="edu-readmore"
              >
                Read more...
              </a>
            </div>
          </div>
        </div>
        <br />
        {/* Card Three */}
        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed edu-btn-text"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/Image/forkgrass.jpg"
                  }
                  alt="leaf-bullet-point"
                  className="leaf-accordion-bullet-point"
                />
                &nbsp;Garden Installation
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div className="card-body edu-card-body">
            <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/Image/GardenInstallationPic.jpeg"
        }
                  alt="leaf-bullet-point"
                  className="card-pic mb-3 mx-auto"
                />
              <p>
              At Hay Mumford Farms, we specialize in the installation of vegetable and flower gardens. We can start from scratch or revamp an existing garden. We are also capable of installing raised beds with or without borders.
We work to amend your soil by introducing compost, organic fertilizer and high-quality top soil. We can custom design and plant your gardens with organically-grown plants as well.
At HAY MUMFORD FARMS no job is too small for us to tackle, in fact we specialize in small spaces that most other companies are not interested in taking on! Whether it is a garden rebuild, removal of ugly landscaping or just an updated look, we can help!
              </p>
              <a
                href="https://www.thestate.com/news/local/education/article245772375.html"
                rel="noreferrer"
                target="_blank"
                className="edu-readmore"
              >
                Read more...
              </a>
            </div>
          </div>
        </div>
        <br />
        {/* Card Four */}
        <div className="card">
          <div className="card-header" id="headingFour">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed edu-btn-text"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/Image/forkgrass.jpg"
                  }
                  alt="leaf-bullet-point"
                  className="leaf-accordion-bullet-point"
                />
                &nbsp;Pantry Items
              </button>
            </h2>
          </div>
          <div
            id="collapseFour"
            className="collapse"
            aria-labelledby="headingFour"
            data-parent="#accordionExample"
          >
            <div className="card-body edu-card-body">
            <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/Image/PantryItemsPic.jpeg"
        }
                  alt="leaf-bullet-point"
                  className="card-pic mb-3 mx-auto"
                />
              <p>
              One of our main pantry items is our organic heirloom tomato coulis. This is an all-natural tomato sauce made from our own organically-grown garlic, onions, heirloom tomatoes and herbs. We offer seasonal spice blends sourced from well-know spice companies and blended with years of culinary experience. We offer chicken, vegetable, turkey, and beef stocks made with lots of love. We also carry our own honey, direct from our own bee hive. This is a seasonal product! We also carry Vermont maple syrup, sourced from our neighbors at Twin Book Farms in Barnard, Vermont.
              </p>
              <a
                href="https://www.aclu.org/blog/criminal-law-reform/drug-law-reform/marijuana-legalization-racial-justice-issue"
                rel="noreferrer"
                target="_blank"
                className="edu-readmore"
              >
                Read more...
              </a>
            </div>
          </div>
        </div>
        <br />
        {/* Card Five */}
        <div className="card">
          <div className="card-header" id="headingFive">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed edu-btn-text"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/Image/forkgrass.jpg"
                  }
                  alt="leaf-bullet-point"
                  className="leaf-accordion-bullet-point"
                />
                &nbsp;Seasonal Baked Goods
              </button>
            </h2>
          </div>
          <div
            id="collapseFive"
            className="collapse"
            aria-labelledby="headingFive"
            data-parent="#accordionExample"
          >
            <div className="card-body edu-card-body">
            <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/Image/BakedGoodsPic.jpeg"
        }
                  alt="leaf-bullet-point"
                  className="card-pic mb-3 mx-auto"
                />
              <p>
              Baked goods are available intermittently. This is because we travel back and forth from our farms both in New Jersey and Vermont. Of course, during the holidays we will have a baked goods menu available. If you are interested in inquiring about baked good please contact us!
              </p>
              
              <a
                href="https://www.marijuanamoment.net/new-jersey-voters-approve-marijuana-legalization-referendum/"
                rel="noreferrer"
                target="_blank"
                className="edu-readmore"
              >
                Read more...
              </a>
            </div>
          </div>
        </div>
        <br />
        {/* Card Six */}
        <div className="card">
          <div className="card-header" id="headingSix">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed edu-btn-text"
                type="button"
                data-toggle="collapse"
                data-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/Image/forkgrass.jpg"
                  }
                  alt="leaf-bullet-point"
                  className="leaf-accordion-bullet-point"
                />
                &nbsp;Catering
              </button>
            </h2>
          </div>
          <div
            id="collapseSix"
            className="collapse"
            aria-labelledby="headingSix"
            data-parent="#accordionExample"
          >
            <div className="card-body edu-card-body">
            <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/Image/Catering.jpg"
                  }
                  alt="leaf-bullet-point"
                  className="card-pic mb-3 mx-auto"
                />
              <p>
              We focus on catering mostly in the fall, winter, summer and during larger holidays. During the holidays, we offer hors d'oeuvres, turkey gravy, assorted stocks, sauces and cookies. We occasionally offer a pop up menu. If you are interested in catering, please fill out the form below. We will need your name, address, phone number, date of event, estimated head count, full service or drop off, and the type of food in which you are interested. We will be in touch ASAP.
              </p>
              <a
                href="https://www.forbes.com/sites/andrebourque/2018/07/24/from-chemistry-to-culinary-10-educational-programs-for-students-eager-to-learn-about-cannabis/?sh=4c1b15e04aeb"
                rel="noreferrer"
                target="_blank"
                className="edu-readmore"
              >
                Read more...
              </a>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Services;
