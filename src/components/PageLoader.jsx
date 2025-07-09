import React, { useEffect, useRef, useState } from "react";
import DocumentPage from "./DocumentPage";

const PageLoader = ({  pdf, annotationMode, strokeColor, strokeWidth }) => {
  const [visiblePages, setVisiblePages] = useState([]);
  const containerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const pageIndex = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting && !visiblePages.includes(pageIndex)) {
            setVisiblePages((prev) => [...prev, pageIndex]);
          }
        });
      },
      { threshold: 0.25 }
    );

    containerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visiblePages]);

  return (
    <div>
      {Array.from({ length: pdf.numPages }, (_, index) => (
        <div
          key={index}
          data-index={index + 1}
          ref={(el) => (containerRefs.current[index] = el)}
        >
          {visiblePages.includes(index + 1) ? (
            <DocumentPage
              pdf={pdf}
              pageNumber={index + 1}
              annotationMode={annotationMode}
              strokeColor={strokeColor}
              strokeWidth={strokeWidth}
            />
          ) : (
            <div className="h-[600px] bg-gray-200 mb-6 rounded animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );
};

export default PageLoader;
