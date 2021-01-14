import banner_img from "./img/banner_img.png"

export default function Banner_part() {
  return (
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-xl-6 col-md-6">
          <div class="banner_text">
            <div class="banner_text_iner text-center">
              <h2>
                Think <span>Creative Turn</span>
              </h2>
              <h3>Ideas Into Life</h3>
              <a href={"#"} class="btn_1">
                learn more <i class="ti-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-6">
          <div class="banner_bg">
            <img src={banner_img} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}
