import React from "react";
import "../styles/Education.css";

function Education() {
  return (
    // Header
    <div className="container edu-page edu-page-bg-pic">
      <header className="education edu-header">
        <div className="row">
          <div className="col-md-12 ">
            <h2 className="edu-title">Education</h2>
          </div>
        </div>
      </header>
      {/* Subheader */}
      <div className="row">
        <div className="col-md-12 edu-subheader">
          <h4 className="pro-con-subheader">The pros and cons of smoking weed</h4>
          <div className="secondary callout">
            <p>To smoke or not to smoke? If you want to reap the potential therapeutic benefits of cannabis
            while protecting your health, you've probably pondered the safety of smoking. Although a joint has long
            been the quickest and most convenient method of ingesting cannabis, mounting evidence
               suggests that regularly smoking weed is linked to many undesirable effects on the respiratory system.</p>

            <p> When it comes to health, knowledge is power. Becoming informed about the pros and cons of
                smoking cannabis empowers you to determine whether smoking is the right choice for your body or not. </p>
            <p><a href="https://weedmaps.com/learn/cannabis-and-your-body/pros-cons-smoking-weed" className="pro-con-readmore" rel="noreferrer" target="_blank">Read more...&nbsp;<img src={process.env.PUBLIC_URL + "/assets/Image/cannabis-1731337_640.png"} alt="leaf-bullet-point" className="leaf-accordion-bullet-point" /></a></p>
          </div>
        </div>
      </div>

      {/* ------ ACCORDION ------ */}
      <div className="accordion edu-accordion" id="accordionExample">

        {/* Card One */}
        <div class="card bg-dark">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button className="btn btn-link edu-btn edu-btn-text" id="btn-1" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <img src={process.env.PUBLIC_URL + "/assets/Image/cannabis-1731337_640.png"} alt="leaf-bullet-point" className="leaf-accordion-bullet-point" />
                &nbsp;Marijuana Regulation: Impact on Health, Safety, Economy
              </button>
            </h2>
          </div>
          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body edu-card-body">
              <p>The enactment of adult use cannabis regulation is not associated with significant upticks in marijuana use by adolescents.
              The establishment of cannabis retailers is not associated with upticks in criminal activity.</p>
              <a href="https://norml.org/marijuana/fact-sheets/marijuana-regulation-impact-on-health-safety-economy/" rel="noreferrer" target="_blank">Read more...</a>
            </div>
          </div>
        </div>
        <br />

        {/* Card Two */}
        <div class="card bg-dark">
          <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed edu-btn-text" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <img src={process.env.PUBLIC_URL + "/assets/Image/cannabis-1731337_640.png"} alt="leaf-bullet-point" className="leaf-accordion-bullet-point" />
                &nbsp;Cannabis Exposure and Lung Health
              </button>
            </h2>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body edu-card-body">
              <p>Cannabis smoke and tobacco smoke are not equally carcinogenic. Unlike tobacco smoke exposure,
              cannabis smoke exposure – even long-term – is not positively associated with cancers of the lung
              or upper aerodigestive tract.</p>
              <a href="https://norml.org/marijuana/fact-sheets/cannabis-exposure-and-lung-health/" rel="noreferrer" target="_blank">Read more...</a>
            </div>
          </div>
        </div>
        <br />
        {/* Card Three */}
        <div class="card bg-dark">
          <div class="card-header" id="headingThree">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed edu-btn-text" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <img src={process.env.PUBLIC_URL + "/assets/Image/cannabis-1731337_640.png"} alt="leaf-bullet-point" className="leaf-accordion-bullet-point" />
                &nbsp;Key cannabis chemical may help prevent colon cancer, per top USC researchers
              </button>
            </h2>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body edu-card-body">
              <p>A chemical in marijuana may be able to help prevent colon cancer,according to a new study from top
              University of South Carolina researchers. The study, published in iScience, found that mice injected
                with THC and a cancer-causing chemical did not develop cancer.</p>
              <a href="https://www.thestate.com/news/local/education/article245772375.html" rel="noreferrer" target="_blank">Read more...</a>
            </div>
          </div>
        </div>
        <br />
        {/* Card Four */}
        <div class="card bg-dark">
          <div class="card-header" id="headingFour">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed edu-btn-text" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <img src={process.env.PUBLIC_URL + "/assets/Image/cannabis-1731337_640.png"} alt="leaf-bullet-point" className="leaf-accordion-bullet-point" />
                &nbsp;Marijuana Legalization Is a Racial Justice Issue</button></h2>
          </div>
          <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
            <div class="card-body edu-card-body">
              <p>Marijuana has been a key driver of mass criminalization in this country
              and hundreds of thousands of people, the majority of whom are Black or Latinx,
              have their lives impacted by a marijuana arrest each year. But the tide is turning
              against the remnants of a drug war targeted at Black and Brown people that was
              never meant to increase public safety in the first place. Legalization is an important step
              towards ending the war on drugs, and it cannot come soon enough.</p>
              <a href="https://www.aclu.org/blog/criminal-law-reform/drug-law-reform/marijuana-legalization-racial-justice-issue" rel="noreferrer" target="_blank">Read more...</a>
            </div>
          </div>
        </div>
        <br />
        {/* Card Five */}
        <div class="card bg-dark">
          <div class="card-header" id="headingFive">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed edu-btn-text" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                <img src={process.env.PUBLIC_URL + "/assets/Image/cannabis-1731337_640.png"} alt="leaf-bullet-point" className="leaf-accordion-bullet-point" />
                &nbsp;New Jersey Voters Approve Marijuana Legalization Referendum
              </button>
            </h2>
          </div>
          <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
            <div class="card-body edu-card-body">
              <p>New Jersey voters have approved a referendum to legalize marijuana, according to a projection from the Associated Press.
              Lawmakers will still have to pass enabling legislation to implement the legal cannabis system now that voters have signed off
              on the constitutional amendment, but a key senator who previously introduced a legalization bill said recently that he’s been
              working with the governor’s office and legislative leaders in recent weeks to finalize it...</p>
              <p>...Under the resolution, the constitutional amendment will go into effect on January 1, 2021, though the legislature
              “may take such anticipatory legislative action as may be necessary to effectuate the provisions of the amendment,”
              text of the measure states.</p>
              <a href="https://www.marijuanamoment.net/new-jersey-voters-approve-marijuana-legalization-referendum/" rel="noreferrer" target="_blank">Read more...</a>
            </div>
          </div>
        </div>
        <br />
        {/* Card Six */}
        <div class="card bg-dark">
          <div class="card-header" id="headingSix">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed edu-btn-text" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                <img src={process.env.PUBLIC_URL + "/assets/Image/cannabis-1731337_640.png"} alt="leaf-bullet-point" className="leaf-accordion-bullet-point" />
                &nbsp;From Chemistry To Culinary: 10 Educational Programs For Students Eager To Learn About Cannabis
              </button>
            </h2>
          </div>
          <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
            <div class="card-body edu-card-body">
              <p>...Fun and casual reading aside, learning about cannabis keeps getting easier, and easier
              for those seeking a deeper understanding of the properties, policies, politics, and profits of the plant.
              From chemistry to culinary, these are some schools, programs, and resources offering education, research,
              and experience to eager students.</p>
              <a href="https://www.forbes.com/sites/andrebourque/2018/07/24/from-chemistry-to-culinary-10-educational-programs-for-students-eager-to-learn-about-cannabis/?sh=4c1b15e04aeb" rel="noreferrer" target="_blank">Read more...</a>
            </div>
          </div>
        </div>
        <br />
        {/* Card Seven */}
        <div class="card bg-dark">
          <div class="card-header" id="headingSeven">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed edu-btn-text" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                <img src={process.env.PUBLIC_URL + "/assets/Image/cannabis-1731337_640.png"} alt="leaf-bullet-point" className="leaf-accordion-bullet-point" />
                &nbsp;As 'green wave' spreads, marijuana funds create new dilemmas for education leaders
              </button>
            </h2>
          </div>
          <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
            <div class="card-body edu-card-body">
              <p>...In a so-called "green wave," 11 states and the District of Columbia have legalized recreational use, and more states —
              including Arizona, Florida, New Mexico and those in the Northeast — are poised to move that way, either through a ballot or
              legislative initiative.</p>
              <p>Based on how other states have directed tax revenue from the cannabis industry, education or other programs serving children
              and youth are likely to be considered as potential recipients of those funds.</p>
              <a href="https://www.k12dive.com/news/as-green-wave-spreads-cannabis-funds-create-new-dilemmas-for-education-l/564977/" rel="noreferrer" target="_blank">Read more...</a>
            </div>
          </div>
        </div>
        <br />
        {/* Card Eight */}
        <div class="card bg-dark">
          <div class="card-header" id="headingEight">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed edu-btn-text" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                <img src={process.env.PUBLIC_URL + "/assets/Image/cannabis-1731337_640.png"} alt="leaf-bullet-point" className="leaf-accordion-bullet-point" />
                &nbsp;NJ marijuana legalization: Phil Murphy, legislators reach deal on legal weed industry bill
              </button>
            </h2>
          </div>
          <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
            <div class="card-body edu-card-body">
              <p>Gov. Phil Murphy and legislative leaders have reached a deal on bills that would establish a framework for a legal weed industry, setting up a key vote in the coming weeks. </p>
              <a href="https://www.app.com/story/news/local/new-jersey/marijuana/2020/12/04/nj-marijuana-legalization-legal-weed-vote-results/3833002001/" rel="noreferrer" target="_blank">Read more...</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Education;