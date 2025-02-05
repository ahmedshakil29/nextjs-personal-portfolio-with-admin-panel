// "use client";

// import { useMemo, useRef } from "react";
// import AnimationWrapper from "../animation-wrapper";
// import { motion } from "framer-motion";
// import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
// import Image from "next/image";
// import myImage from "../../../assets/ShakilAhmed.webp";

// // Variants for motion animation
// function variants() {
//   return {
//     offscreen: {
//       y: 150,
//       opacity: 0,
//     },
//     onscreen: ({ duration = 2 } = {}) => ({
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         duration,
//       },
//     }),
//   };
// }

// // Social media icons and their respective URLs
// const socialIcons = [
//   {
//     id: "linkedin",
//     icon: (
//       <FaLinkedinIn
//         color="rgba(13, 183, 96, 1)"
//         className="w-[40px] h-[40px]"
//       />
//     ),
//     link: "https://www.linkedin.com/in/ahmedshakil29",
//   },
//   {
//     id: "github",
//     icon: (
//       <FaGithub color="rgba(13, 183, 96, 1)" className="w-[40px] h-[40px]" />
//     ),
//     link: "https://github.com/ahmedshakil29",
//   },
//   {
//     id: "whatsapp",
//     icon: (
//       <FaWhatsapp color="rgba(13, 183, 96, 1)" className="w-[40px] h-[40px]" />
//     ),
//     link: "https://wa.me/+8801784285243",
//   },
// ];

// export default function ClientHomeView({ data }) {
//  // console.log(data, "ClientHomeView");

//   const setVariants = useMemo(() => variants(), []);
//   const containerRef = useRef(null);

//   return (
//     <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
//       <AnimationWrapper>
//         <motion.div
//           className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
//           variants={setVariants}
//         >
//           <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
//             <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
//               {data && data.length
//                 ? data[0]?.heading
//                     .split(" ")
//                     .map((item, index) => (
//                       <span
//                         className={`${
//                           index === 2 || index === 3
//                             ? "text-green-main"
//                             : "text-[#000]"
//                         }`}
//                       >
//                         {item}{" "}
//                       </span>
//                     ))
//                 : null}
//             </h1>
//             <p className="text-[#000] mt-4 mb-8 font-bold text-justify">
//               {data && data.length ? data[0]?.summary : null}
//             </p>

//             <motion.div className="flex gap-3 cursor-pointer">
//               {/* {socialIcons.map((item) => (
//                 <motion.div
//                   key={item.id}
//                   initial={{ scale: 0 }}
//                   animate={{ rotate: 360, scale: 1 }}
//                   transition={{
//                     type: "spring",
//                     damping: 20,
//                     stiffness: 80,
//                     duration: 4,
//                   }}
//                   whileHover={{ scale: 1.2, rotate: 360 }}
//                   whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
//                 >
//                   <a
//                     href={item.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex justify-center items-center"
//                   >
//                     {item.icon}
//                   </a>
//                 </motion.div>
//               ))} */}
//             </motion.div>
//             <a
//               style={{
//                 textDecoration: "none",
//                 color: "#01d293",
//                 fontSize: "25px",
//                 fontWeight: "500",
//               }}
//               href="/Shakil_Ahmed_Resume.pdf"
//               download
//             >
//               Resume 📃
//             </a>
//           </div>

//           {/* For Profile picture */}
//           <motion.div ref={containerRef} className="flex w-full justify-end">
//             <motion.div
//               drag
//               dragConstraints={containerRef}
//               className="w-[400px] h-[400px] relative"
//             >
//               <div className="w-[400px] h-[380px] top-[40px] left-[-30px] rounded-lg border-[6px] border-[#000000] absolute"></div>
//               <Image
//                 src={myImage}
//                 alt="Profile Picture"
//                 layout="responsive"
//                 quality={100}
//                 height={300}
//                 width={300}
//                 className="absolute top-[-15px]"
//               />
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </AnimationWrapper>
//     </div>
//   );
// }

//2nd part
"use client";

import { useMemo, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import myImage from "../../../assets/ShakilAhmed.webp";

// Variants for motion animation
function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

// Social media icons and their respective URLs
const socialIcons = [
  {
    id: "linkedin",
    icon: (
      <FaLinkedinIn
        color="rgba(13, 183, 96, 1)"
        className="w-[40px] h-[40px]"
      />
    ),
    link: "https://www.linkedin.com/in/ahmedshakil29",
  },
  {
    id: "github",
    icon: (
      <FaGithub color="rgba(13, 183, 96, 1)" className="w-[40px] h-[40px]" />
    ),
    link: "https://github.com/ahmedshakil29",
  },
  {
    id: "whatsapp",
    icon: (
      <FaWhatsapp color="rgba(13, 183, 96, 1)" className="w-[40px] h-[40px]" />
    ),
    link: "https://wa.me/+8801784285243",
  },
];

export default function ClientHomeView({ data }) {
  const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
      <AnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={setVariants}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
              {data && data.length
                ? data[0]?.heading.split(" ").map((item, index) => (
                    <span
                      key={index} // Unique key to fix React warning
                      className={`${
                        index === 2 || index === 3
                          ? "text-green-main"
                          : "text-[#000]"
                      }`}
                    >
                      {item}{" "}
                    </span>
                  ))
                : null}
            </h1>
            <p className="text-[#000] mt-4 mb-8 font-bold text-justify">
              {data && data.length ? data[0]?.summary : null}
            </p>

            {/* Social Media Icons */}
            <motion.div className="flex gap-3 cursor-pointer">
              {socialIcons.map((item) => (
                <motion.div
                  key={item.id} // Unique key for each icon
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 80,
                    duration: 4,
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                  >
                    {item.icon}
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Resume Download Button */}
            <a
              style={{
                textDecoration: "none",
                color: "#01d293",
                fontSize: "25px",
                fontWeight: "500",
              }}
              href="/Shakil_Ahmed_Resume.pdf"
              download
            >
              Resume 📃
            </a>
          </div>

          {/* Profile Picture with Drag Effect */}
          <motion.div ref={containerRef} className="flex w-full justify-end">
            <motion.div
              drag
              dragConstraints={containerRef}
              className="w-[400px] h-[400px] relative"
            >
              <div className="w-[400px] h-[380px] top-[40px] left-[-30px] rounded-lg border-[6px] border-[#000000] absolute"></div>
              <Image
                src={myImage}
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute top-[-15px] rounded-lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
