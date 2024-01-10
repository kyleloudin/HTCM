import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_yp8ppra",
        "template_j0kjobj",
        {
          from_name: form.name,
          to_name: "Kyle",
          from_email: form.email,
          to_email: "kyle.loudin.1987@gmail.com",
          message: form.message,
        },
        "j3HW5AUlpM7_3SFdU"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will respond to your email as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong. Your message has not been sent.')
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden justify-center items-center">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl "
      >
        <p className={styles.sectionSubText}>Stay Threaded</p>
        <h3 className={`${styles.sectionHeadText} text-secondary lighting mt-4`}>Contact Us.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="green-pink-gradient p-[1px] rounded-[20px] shadow-card py-4 px-6 placeholder:text-primary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="green-pink-gradient p-[1px] rounded-[20px] shadow-card py-4 px-6 placeholder:text-primary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="3"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="green-pink-gradient p-[1px] rounded-[20px] shadow-card py-4 px-6 placeholder:text-primary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary green-pink-gradient py-3 px-8 outline=none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "...Sending" : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
