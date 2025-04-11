import React from "react";
import check from "../assets/check.png";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-gray-200 pb-4 text-gray-800">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-semibold text-emerald-600"
      >
        Experience
      </motion.h1>
      <div className=" flex justify-center flex-row">
        <div className=" gap-8 mt-8 mb-8 flex flex-row flex-wrap justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            initial={{ opacity: 0, x: -100 }}
            className=" px-6 py-6 flex-1 rounded-2xl  border-4 border-gray-200 p-4 text-center shadow-sm"
          >
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              className="  font-semibold text-2xl mb-8 text-indigo-500"
            >
              Frontend Development
            </motion.h2>
            <div className=" flex text-left flex-wrap gap-10 justify-around">
              <motion.article
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.75 }}
                className="flex w-40 justify-around gap-2"
              >
                <img src={check} alt="" className=" h-6 w-6 cursor-default " />
                <div>
                  <h3 className="font-semibold">HTML</h3>
                  <p className="text-emerald-600">Experienced</p>
                </div>
              </motion.article>
              <motion.article
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                className="flex w-40 justify-around gap-2"
              >
                <img src={check} alt="" className=" h-6 w-6 cursor-default " />
                <div>
                  <h3 className="font-semibold">CSS</h3>
                  <p className="text-emerald-600">Experienced</p>
                </div>
              </motion.article>

              <motion.article
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.25 }}
                className="flex w-40 justify-around gap-2"
              >
                <img src={check} alt="" className=" h-6 w-6 cursor-default " />
                <div>
                  <h3 className="font-semibold">Javascript</h3>
                  <p className="text-emerald-600">Intermediate</p>
                </div>
              </motion.article>
              <motion.article
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                className="flex w-40 justify-around gap-2"
              >
                <img src={check} alt="" className=" h-6 w-6 cursor-default " />
                <div>
                  <h3 className="font-semibold">Typescript</h3>
                  <p className="text-emerald-600">Intermediate</p>
                </div>
              </motion.article>
              <motion.article
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.75 }}
                className="flex w-40 justify-around gap-2"
              >
                <img src={check} alt="" className=" h-6 w-6 cursor-default " />
                <div>
                  <h3 className="font-semibold">Material UI</h3>
                  <p className="text-emerald-600">Experienced</p>
                </div>
              </motion.article>
              <motion.article
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 2 }}
                className="flex w-40 justify-around gap-2"
              >
                <img src={check} alt="" className=" h-6 w-6 cursor-default " />
                <div>
                  <h3 className="font-semibold">React</h3>
                  <p className="text-emerald-600">Experienced</p>
                </div>
              </motion.article>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            initial={{ opacity: 0, x: 100 }}
            className=" px-6 py-6 flex-1 rounded-2xl  border-4 border-gray-200 p-4 text-center shadow-sm"
          >
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              className="  font-semibold text-2xl mb-8 text-indigo-500"
            >
              Backend Development
            </motion.h2>
            <div className=" flex text-left flex-wrap gap-10 justify-around">
              <motion.article
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.75 }}
                className="flex w-40 justify-around gap-2"
              >
                <img src={check} alt="" className=" h-6 w-6 cursor-default " />
                <div>
                  <h3 className="font-semibold">Node Js</h3>
                  <p className="text-emerald-600">Experienced</p>
                </div>
              </motion.article>
              <motion.article
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                className="flex w-40 justify-around gap-2"
              >
                <img src={check} alt="" className=" h-6 w-6 cursor-default " />
                <div>
                  <h3 className="font-semibold">Express Js</h3>
                  <p className="text-emerald-600">Experienced</p>
                </div>
              </motion.article>

              <motion.article
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.25 }}
                className="flex w-40 justify-around gap-2"
              >
                <img src={check} alt="" className=" h-6 w-6 cursor-default " />
                <div>
                  <h3 className="font-semibold">SQL</h3>
                  <p className="text-emerald-600">Intermediate</p>
                </div>
              </motion.article>
              <motion.article
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                className="flex w-40 justify-around gap-2"
              >
                <img src={check} alt="" className=" h-6 w-6 cursor-default " />
                <div>
                  <h3 className="font-semibold">Git</h3>
                  <p className="text-emerald-600">Intermediate</p>
                </div>
              </motion.article>
              <motion.article
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.75 }}
                className="flex w-40 justify-around gap-2"
              >
                <img src={check} alt="" className=" h-6 w-6 cursor-default " />
                <div>
                  <h3 className="font-semibold">Flask API</h3>
                  <p className="text-emerald-600">Experienced</p>
                </div>
              </motion.article>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
