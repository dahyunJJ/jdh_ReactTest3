import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="ft mw">
        <div className="linkCon">
          <div>
            <Link to="/">CONTACT</Link>
            <Link to="/">TERMS OF SERVICES</Link>
            <Link to="/">SHIPPING AND RETURNS</Link>
          </div>
          <input
            type="email"
            placeholder="Give an email, get the newsletter."
          />
        </div>
        <div className="socialCon">
          <span>© 2021 Shelly. Terms of use and privacy policy.</span>
          <div>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
