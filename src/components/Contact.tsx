import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import RotatingBall from "./RotatingBall";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>{t("contactTitle")}</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>{t("emailLabel")}</h4>
            <p>
              <a href="mailto:jayrampriyansh@gmail.com" data-cursor="disable">
                jayrampriyansh@gmail.com
              </a>
            </p>
            <h4>{t("educationLabel")}</h4>
            <p>{t("educationVal")}</p>
          </div>
          <div className="contact-box">
            <h4>{t("socialLabel")}</h4>
            <a
              href="https://github.com/ram200313"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/jay-ram-"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              {t("footerCredit")} <br /> {t("footerBy")} <span>Jayaram V</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>

        {/* Rotating profile photo ball */}
        <RotatingBall />
      </div>
    </div>
  );
};

export default Contact;
