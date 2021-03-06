import demo_1 from "./img/demo/demo_1.png";
import demo_2 from "./img/demo/demo_2.png";
import demo_3 from "./img/demo/demo_3.png";

export default function Our_latest_work() {
  return (
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="section_tittle text-center">
            <p>recent work</p>
            <h2>Creative work for client</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="single_work">
            <div class="row align-items-center">
              <div class="offset-lg-1 col-lg-4 col-md-6">
                <div class="single_work_demo">
                  <h5>Mockup design</h5>
                  <h3>
                    It under itself day whales waters our divide third brought
                  </h3>
                  <p>
                    Place isn't heaven firmament divided shall fruitful bring
                    bring may midst every a night dry herb. Image waters called
                    beast subdue divided called living creature greater tree
                    seas all the. Hath multiply female you're male likeness his
                    made open beast seas living moved, form. Void stars you our
                    dominion{" "}
                  </p>
                  <a href="project_details.html" class="btn_3">
                    learn more <span class="flaticon-slim-right"></span>{" "}
                  </a>
                </div>
              </div>
              <div class="offset-lg-1 col-lg-6 col-md-6">
                <div class="demo_img">
                  <img src={demo_1} alt="demo" />
                </div>
              </div>
            </div>
          </div>
          <div class="single_work">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6">
                <div class="demo_img">
                  <img src={demo_2} alt="demo" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_work_demo">
                  <h5>Mockup design</h5>
                  <h3>
                    Saw i very dominion whose female was light divided multiply
                  </h3>
                  <p>
                    Place isn't heaven firmament divided shall fruitful bring
                    bring may midst every a night dry herb. Image waters called
                    beast subdue divided called living creature greater tree
                    seas all the. Hath multiply female you're male likeness his
                    made open beast seas living moved, form. Void stars you our
                    dominion{" "}
                  </p>
                  <a href="project_details.html" class="btn_3">
                    learn more <span class="flaticon-slim-right"></span>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="single_work">
            <div class="row align-items-center">
              <div class="offset-lg-1 col-lg-4 col-md-6">
                <div class="single_work_demo">
                  <h5>Mockup design</h5>
                  <h3>
                    It under itself day whales waters our divide third brought
                  </h3>
                  <p>
                    Place isn't heaven firmament divided shall fruitful bring
                    bring may midst every a night dry herb. Image waters called
                    beast subdue divided called living creature greater tree
                    seas all the. Hath multiply female you're male likeness his
                    made open beast seas living moved, form. Void stars you our
                    dominion{" "}
                  </p>
                  <a href="project_details.html" class="btn_3">
                    learn more <span class="flaticon-slim-right"></span>{" "}
                  </a>
                </div>
              </div>
              <div class="offset-lg-1 col-lg-6 col-md-6">
                <div class="demo_img">
                  <img src={demo_3} alt="demo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
