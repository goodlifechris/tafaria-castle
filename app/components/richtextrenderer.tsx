"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DocumentNode {
  type: string;
  children: { text?: string; underline?: boolean }[];
}

const RichTextRenderer = ({ document }: { document: DocumentNode[] }) => {
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 200;

  // Extract paragraphs as an array of strings
  const paragraphs = document
    .filter((node) => node.type === "paragraph")
    .map((node) =>
      node.children.map((child) => child.text || "").join("")
    );

  // Join paragraphs for length calculation
  const fullText = paragraphs.join("\n\n");
  const shouldTruncate = fullText.length > MAX_LENGTH;

  // Determine displayed content
  let displayedParagraphs = paragraphs;
  if (shouldTruncate && !expanded) {
    let charCount = 0;
    displayedParagraphs = [];

    for (const paragraph of paragraphs) {
      if (charCount + paragraph.length > MAX_LENGTH) {
        displayedParagraphs.push(paragraph.slice(0, MAX_LENGTH - charCount) + "...");
        break;
      }
      displayedParagraphs.push(paragraph);
      charCount += paragraph.length;
    }
  }

  return (
    <div className="relative text-gray-700">
      <AnimatePresence mode="wait">
        <motion.div
          key={expanded ? "expanded" : "collapsed"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {displayedParagraphs.map((paragraph, index) => (
            <p key={index} className="mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </AnimatePresence>

      {shouldTruncate && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-[#902729] text-xs hover:text-[#b33235]  items-center cursor-pointer hover:underline transition duration-300"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default RichTextRenderer;
