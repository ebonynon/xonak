import about_img_1 from "./img/about_img_1.png";
import about_img_2 from "./img/about_img_2.png";

export default function About_part() {
  let Link = "#";

  return (
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-5">
          <div class="about_img">
            <img src={about_img_1} class="img_1" alt="" />
            <img src={about_img_2} class="img_2" alt="" />
            <h2>
              25 Years Working <br />
              Experience
            </h2>
          </div>
        </div>
        <div class="offset-lg-1 col-lg-4">
          <div class="about_text">
            <h5>About our company</h5>
            <h2>Make the customer the hero of your story</h2>
            <h4>
              He hath his earth firmament air very itself light day moring
              morning you living saying good above fourth
            </h4>
            <p>
              Meat abundantly life made fly years there whose beginning crea
              unto beast sixth herb their bring. Evening fruitful god you spir
              evning itself land you of of own brought
            </p>
            <a href={Link} class="btn_1">
              learn more <i class="ti-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
