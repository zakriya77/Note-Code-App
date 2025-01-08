import React from "react";
import { FaCode } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"; // Changed import to CJS version

const Card = ({ data, reference }) => {
  const { title, cat } = data;

  return (
    <motion.div
      drag
      dragConstraints={reference}
      className="card w-[300px] h-[140px] bg-[#1D1E22] text-white rounded-md overflow-hidden px-4"
    >
      {/* Card Header */}
      <header className="flex justify-between items-center">
        <div className="flex items-center">
          <FaCode className="text-lg" />
          <div className="ml-2 text-sm font-bold text-[#c5c8d4]">{title}</div>
        </div>
        <RiArrowDropDownLine color="#4C4F5A" size={30} />
      </header>

      {/* Colorful Code Snippet */}
      <div className=" text-xs rounded-md overflow-hidden">
        <SyntaxHighlighter customStyle={{ backgroundColor: '#1D1E22', overflow: 'hidden' }}
         language={title.toLowerCase()} style={atomDark}>
          {cat}
        </SyntaxHighlighter>
      </div>


    </motion.div>
  );
};

export default Card;
