import React from "react";

// TypeScript Interfaces
interface DocumentChild {
  text?: string;
  bold?: boolean;
  children?: DocumentChild[];
}

interface Document {
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
              {block.children.map((child, i) =>
                "text" in child ? <span key={i}>{child.text}</span> : null
              )}
            </p>
          );

        case "unordered-list":
          return (
            <ul key={index} className="mt-2 text-gray-600">
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

        default:
          return null;
      }
    });
  };

  return <div>{renderContent(content)}</div>;
};

export default ContentView;
