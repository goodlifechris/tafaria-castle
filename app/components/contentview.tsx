/* eslint-disable @typescript-eslint/no-explicit-any */ 
import React from "react";

// TypeScript Interfaces
interface DocumentChild {
  text?: string;
  bold?: boolean;
  children?: DocumentChild[];
}

interface Document {
  [x: string]: any;
  type: string;
  children: DocumentChild[];
}

interface Content {
  document: Document[];
}

interface ContentViewProps {
  content: Content;
}

// ContentView Component
const ContentView: React.FC<ContentViewProps> = ({ content }) => {
  const renderContent = (content: Content) => {
    return content.document.map((block, index) => {
      switch (block.type) {
        case "paragraph":
          return (
            <p key={index} className="mt-2 text-gray-600">
              {block.children.map((child, i) => {
                // Check if child has 'bold' property and apply 'font-bold' class
                if (child.bold) {
                  return (
                    <span key={i} className="font-bold mt-4 text-[#902729]">
                      {child.text}
                    </span>
                  );
                }
                // Otherwise, render as normal text
                return (
                  <span key={i}>{child.text}</span>
                );
              })}
            </p>
          );
          
          case "heading":
  const HeadingTag = `h${block.level}` as string;  // Cast to string type
  return React.createElement(
    HeadingTag,
    { key: index, className: "mt-4 text-[#902729] font-semibold" },
    block.children.map((child, i) => (
      <span key={i}>{child.text}</span>
    ))
  );

        case "unordered-list":
          return (
            <ul key={index} className="mt-2 list-disc pl-5 text-gray-600">
              {block.children.map((listItem, liIndex) => (
                <li key={liIndex}>
                  {"children" in listItem &&
                    listItem.children?.map((child) =>
                      "children" in child ? (
                        child.children?.map((nestedChild, nestedIndex) =>
                          "text" in nestedChild ? (
                            nestedChild.bold ? (
                              // If it's a bold text, treat it as a title or header
                              <h3 key={nestedIndex} className="font-bold mt-4 text-[#902729]">
                                {nestedChild.text}
                              </h3>
                            ) : (
                              <span key={nestedIndex} className="text-base">
                                {nestedChild.text}
                              </span>
                            )
                          ) : null
                        )
                      ) : null
                    )}
                </li>
              ))}
            </ul>
          );

          case "ordered-list":
            return (
              <ol key={index} className="mt-2 text-gray-600 list-decimal ml-6">
                {block.children.map((listItem, liIndex) => (
                  <li key={liIndex}>
                    {listItem.children?.map((child, childIndex) => {
                      if (child.children) {
                        return (
                          <div key={childIndex}>
                            {child.children.map((nestedChild, nestedIndex) => (
                              <span key={nestedIndex} className={nestedChild.bold ? "font-bold text-[#902729]" : ""}>
                                {nestedChild.text}
                              </span>
                            ))}
                          </div>
                        );
                      } else {
                        return (
                          <span key={childIndex} className={child.bold ? "font-bold text-[#902729]" : ""}>
                            {child.text}
                          </span>
                        );
                      }
                    })}
                  </li>
                ))}
              </ol>
            );
          default:
          return null;
      }
    });
  };

  return <div>{renderContent(content)}</div>;
};

export default ContentView;
