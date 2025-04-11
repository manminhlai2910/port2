import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-gray-200 pb-20  text-gray-800">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-semibold text-emerald-600"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter text-gray-700">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a
          href="#"
          className="inline-block mt-4 border-b-2 border-emerald-600 text-emerald-600 hover:text-white hover:bg-emerald-600 transition-all duration-300 px-2 py-1 rounded"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
