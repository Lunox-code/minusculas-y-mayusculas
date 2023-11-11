import React, { useCallback, useState } from "react";

const CopyBtn = ({ textCopied }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyText = useCallback(() => {
    navigator.clipboard.writeText(textCopied)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch(error => {
        console.error("Error al copiar", error);
      });
  }, [textCopied]);

  return (
    <>
      <button
        onClick={handleCopyText}
        type="button"
        className="inline-flex justify-center items-center p-2 text-white rounded cursor-pointer hover:bg-gray-600"
      >
        {copied && <span className="absolute mr-36 text-xs whitespace-nowrap hover:text-n">¡Texto copiado!</span>}
        <svg
          width="16"
          height="16"
          viewBox="0 0 256 256"
        >
          <g fill="#ffffff">
            <path d="M216 40v128h-48V88H88V40Z" opacity=".2"></path>
            <path
              d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z"
            ></path>
          </g>
        </svg>
      </button>
    </>
  );
}

export default CopyBtn;
