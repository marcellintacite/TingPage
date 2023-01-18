import React, { useRef, useState } from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import "./../../css/contact.css";
import Input from "./Component/Input";
import i from "./../../assets/contact.png";
import emailjs from "emailjs-com";
import { CirclesWithBar } from "react-loader-spinner";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import ani from "./../../assets/98741-success.json";

export default function Contact() {
  const [data, setData] = useState({
    from_name: "",
    user_email: "",
    message: "",
    to_name: "Ting page admin",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useRef();
  const handleChange = (e) => {
    const ndata = { ...data, [e.target.name]: e.target.value };
    setData(ndata);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_bpxmj5d",
        "template_95orwom",
        form.current,
        "3tD-CwbXwoMABcYaB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
          setData({ from_name: "", user_email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          toast.error("Il y a eu une erreur");
        }
      );
    console.log(data);
  };
  return (
    <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
      {success && (
        <div className="success">
          <div className="content_success">
            <Lottie animationData={ani} width={2} height={2} />
            <button onClick={() => setSuccess(false)}>Close</button>
          </div>
        </div>
      )}
      <Navbar />
      <div className="contact">
        <div className="container">
          <div className="left">
            <h3>Contactez-nous : </h3>
            <form onSubmit={(e) => handleSubmit(e)} ref={form}>
              <Input
                nom="from_name"
                label="Votre nom : "
                placeholder="ex : Joelle "
                value={data.from_name}
                onChange={(e) => handleChange(e)}
                required
              />
              <Input
                label="Votre adresse mail : "
                nom="user_email"
                value={data.email}
                placeholder="ex: testmail@gmail.com"
                required
                type="email"
                onChange={(e) => handleChange(e)}
              />
              <div className="input_group">
                <label htmlFor="message">Votre adresse message : </label>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  value={data.message}
                  placeholder="Bonjour "
                  onChange={(e) => handleChange(e)}
                  required
                ></textarea>
              </div>
              <button className="btn">
                {!loading && "Envoyer"}
                {loading && (
                  <CirclesWithBar width={25} height={25} color="#fff" />
                )}
              </button>
            </form>
          </div>
          <div className="right">
            <div className="contai">
              <img src={i} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
