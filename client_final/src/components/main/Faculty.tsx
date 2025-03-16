import { Quote } from "lucide-react";
import React from "react";

const Faculty = () => {
  return (
    <div className="w-[80%] mx-auto mt-20">
      <div>
        <h1 className="text-4xl">HOD's Message</h1>
      </div>
      <div className="flex flex-row justify-center items-center gap-10 my-10">
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-28 h-28 bg-white rounded-full"></div>
            <div className="text-center">
                <h1>Dr. Milind Sarode Sir</h1>
                <p>HOD, Department of Computer Engineering</p>
            </div>
        </div>
        <div className="w-[75%] flex flex-col gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-quote mt-10 mb-3"
          >
            <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
          </svg>
          <p>
            Welcome to the Department of Computer Engineering at Government
            Polytechnic, Nagpur! Our department is dedicated to fostering
            innovation, technical excellence, and problem-solving skills among
            students. Through a blend of theoretical knowledge and practical
            exposure, we strive to equip our students with the skills needed to
            excel in the ever-evolving tech industry.
          </p>
          <p>
            We take pride in our state-of-the-art facilities, experienced
            faculty, and an industry-relevant curriculum designed to prepare
            students for real-world challenges. Whether you are a prospective
            student, a researcher, or an industry professional, we invite you to
            collaborate with us in shaping the future of technology.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-4xl mb-12">Our Faculty</h1>
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white rounded-full mb-3"></div>
            <h2 className="text-xl font-semibold">Prof. Anita Patil</h2>
            <p className="text-gray-500">Associate Professor</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white rounded-full mb-3"></div>
            <h2 className="text-xl font-semibold">Prof. Rajesh Kumar</h2>
            <p className="text-gray-500">Assistant Professor</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white rounded-full mb-3"></div>
            <h2 className="text-xl font-semibold">Prof. Sunita Sharma</h2>
            <p className="text-gray-500">Assistant Professor</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white rounded-full mb-3"></div>
            <h2 className="text-xl font-semibold">Prof. Deepak Verma</h2>
            <p className="text-gray-500">Assistant Professor</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white rounded-full mb-3"></div>
            <h2 className="text-xl font-semibold">Prof. Priya Deshmukh</h2>
            <p className="text-gray-500">Assistant Professor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
