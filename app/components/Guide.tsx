"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function Guide({ readmeContent }: { readmeContent: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-black text-white px-6 py-3 rounded-full shadow-2xl hover:bg-gray-800 transition-all active:scale-95 z-50 border border-white font-medium"
      >
        guide
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 bg-black/60 backdrop-blur-md transition-opacity">
          <div className="bg-white text-black w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col border border-gray-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-white">
              <h2 className="text-xl font-bold tracking-tight">Installation Guide</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-black text-2xl"
              >
                &times;
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto bg-gray-50/30 flex-1">
              <div className="prose prose-slate max-w-none 
                prose-headings:font-bold prose-headings:tracking-tight
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-img:rounded-2xl prose-img:shadow-md prose-img:mx-auto prose-img:border prose-img:border-gray-200
                prose-blockquote:border-l-4 prose-blockquote:border-gray-200 prose-blockquote:italic
                prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                  {readmeContent}
                </ReactMarkdown>
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-100 bg-white text-center">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-black text-white px-8 py-2.5 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
