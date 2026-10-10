import React from "react";

export function TechIcon({
  name,
  className = "w-5 h-5",
  monochrome = false,
}: {
  name: string;
  className?: string;
  monochrome?: boolean;
}) {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Authentic Colorful SVGs
  if (!monochrome) {
    switch (norm) {
      case "python":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.91 2C6.44 2 6.78 4.38 6.78 4.38l.01 2.47h5.21v.74H4.55S2 7.3 2 12.82c0 5.51 2.22 5.33 2.22 5.33h1.33v-1.87s-.07-2.22 2.18-2.22h5.18v-.74H7.72s-1.89.04-1.89-1.85c0-1.89 1.94-1.85 1.94-1.85h7.32s1.86-.07 1.86-1.85V4.22S17.48 2 11.91 2z"
              fill="#387EB8"
            />
            <path
              d="M12.09 22c5.47 0 5.13-2.38 5.13-2.38l-.01-2.47h-5.21v-.74h7.45s2.55.29 2.55-5.23c0-5.51-2.22-5.33-2.22-5.33h-1.33v1.87s.07 2.22-2.18 2.22h-5.18v.74h5.21s1.89-.04 1.89 1.85c0 1.89-1.94 1.85-1.94 1.85h-7.32s-1.86.07-1.86 1.85v3.63S6.52 22 12.09 22z"
              fill="#FFE052"
            />
            <circle cx="9.04" cy="4.08" r=".8" fill="#fff" />
            <circle cx="14.96" cy="19.92" r=".8" fill="#fff" />
          </svg>
        );

      case "react":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
          </svg>
        );

      case "javascript":
      case "js":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#F7DF1E" />
            <path
              d="M6.8 18.2l2.3-1.4c.5.9 1 1.5 1.9 1.5.9 0 1.5-.4 1.5-1.5v-6.9h2.8v7c0 2.6-1.5 3.8-4.1 3.8-2.2 0-3.6-1.1-4.4-2.5zm9 2.4l2.2-1.3c.6 1 1.4 1.7 2.6 1.7 1.1 0 1.8-.6 1.8-1.4 0-1-.8-1.4-2.2-2l-.8-.3c-2.3-.9-3.8-2.1-3.8-4.6 0-2.3 1.8-4.1 4.5-4.1 2 0 3.4.7 4.3 2.3l-2.1 1.4c-.5-.8-1.1-1.2-2.2-1.2-1 0-1.6.6-1.6 1.3 0 .8.6 1.2 1.8 1.7l.8.3c2.7 1.1 4.2 2.3 4.2 4.9 0 2.8-2.2 4.4-5 4.4-2.7 0-4.6-1.3-5.5-3.2z"
              fill="#000"
            />
          </svg>
        );

      case "typescript":
      case "ts":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#3178C6" />
            <path d="M12.5 10.5h-4v2h2.8v8h2.4v-8h2.8v-2h-4z" fill="#fff" />
            <path
              d="M17.2 16.8c.8.6 1.8 1 2.8 1 1 0 1.6-.4 1.6-1.1 0-.7-.5-1-1.8-1.5l-.8-.3c-1.8-.7-3-1.7-3-3.6 0-2 1.6-3.5 3.9-3.5 1.5 0 2.7.5 3.5 1.3l-1.4 1.6c-.6-.5-1.4-.9-2.1-.9-.9 0-1.4.4-1.4 1 0 .6.4.9 1.6 1.3l.8.3c2.1.8 3.2 1.8 3.2 3.8 0 2.2-1.7 3.7-4.2 3.7-1.8 0-3.3-.6-4.3-1.7l1.5-1.6z"
              fill="#fff"
            />
          </svg>
        );

      case "nodejs":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"
              fill="#339933"
              opacity="0.2"
              stroke="#339933"
              strokeWidth="1.5"
            />
            <path d="M12 5.5l5.5 3.2v6.4L12 18.3l-5.5-3.2V8.7L12 5.5z" fill="#68A063" />
          </svg>
        );

      case "fastapi":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#059669" />
            <path d="M13 3L6 14h6l-1 7 8-11h-6l1-7z" fill="#fff" />
          </svg>
        );

      case "huggingface":
      case "nlp":
      case "sentiment":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#FFD21E" />
            <circle cx="8" cy="10" r="1.6" fill="#1F2937" />
            <circle cx="16" cy="10" r="1.6" fill="#1F2937" />
            <path d="M7.5 14.5c1.2 2 3 3 4.5 3s3.3-1 4.5-3" stroke="#1F2937" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M4 11c1-1 2.5-.5 3 0" stroke="#FF9D00" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20 11c-1-1-2.5-.5-3 0" stroke="#FF9D00" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );

      case "mongodb":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2.5c-.3 0-.6.2-.8.5C9.4 6 7 10.3 7 14c0 3.4 2.1 6.5 5 7.5.3.1.6.1.9 0 2.9-1 5-4.1 5-7.5 0-3.7-2.4-8-4.2-11-.2-.3-.5-.5-.7-.5zm0 17.5v-16c1.6 2.7 3.5 6.4 3.5 10 0 2.5-1.5 5.2-3.5 6z"
              fill="#47A248"
            />
          </svg>
        );

      case "mysql":
      case "sql":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 16.5c-1.3 0-2.4-.7-3.1-1.7-.8.5-1.8.8-2.9.8-1.5 0-2.8-.6-3.8-1.6-.9 1-2.2 1.6-3.7 1.6-1.1 0-2.1-.3-2.9-.8-.7 1-1.8 1.7-3.1 1.7-2 0-3.6-1.6-3.6-3.6 0-1.8 1.3-3.2 3-3.5C2.6 6.3 6.8 4 12 4s9.4 2.3 10.1 5.4c1.7.3 3 1.7 3 3.5 0 2-1.6 3.6-3.6 3.6z"
              fill="#00758F"
            />
            <path d="M12 7c-4 0-7.3 1.8-7.9 4.2 1.3-.7 3.4-1.2 5.9-1.2 3.2 0 5.8.8 6.9 1.9C16.4 8.6 14.4 7 12 7z" fill="#F29111" />
          </svg>
        );

      case "sqlite":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5c0-1.7 4-3 9-3s9 1.3 9 3v14c0 1.7-4 3-9 3s-9-1.3-9-3V5z" fill="#003B57" />
            <ellipse cx="12" cy="5" rx="7" ry="2" fill="#007ACC" />
            <path d="M5 10c1.5.8 4 1.3 7 1.3s5.5-.5 7-1.3M5 15c1.5.8 4 1.3 7 1.3s5.5-.5 7-1.3" stroke="#87CEEB" strokeWidth="1" />
          </svg>
        );

      case "java":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.2 18.8c3.2.3 6.4-.3 8-.9-1.2.6-4.5 1.4-8 .9zm.8-2.5c2.6.3 5.4-.1 6.8-.7-.9.5-3.8 1.1-6.8.7zm-.6-5.8c.4 1.5 2 2.3 3.6 2.2-1.2-.5-2.2-1.3-2.6-2.2zm4.1-8.5c-.8 1.6-1.5 3.3-1.6 5.1 1.2-1.5 2.1-3.2 2.5-5.1-.3 0-.6 0-.9 0zm-2.4 2.8c-.5 1.5-1 3.1-.9 4.8 1.1-1.4 1.9-3 2.1-4.8-.4 0-.8 0-1.2 0zm-5 13.9c4.2.4 9.1-.1 12.3-1.3-3.1.9-8.1 1.5-12.3 1.3z"
              fill="#E76F00"
            />
            <path
              d="M17.8 14.8c1.3-.9 1.8-2.2 1.3-3-.4-.7-1.7-.8-3-.2l-.6.3c1.1-.3 2.2-.3 2.4.2.3.6-.3 1.6-1.5 2.4l1.4.3z"
              fill="#5382A1"
            />
          </svg>
        );

      case "git":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.7 10.7L13.3 2.3c-.4-.4-1.1-.4-1.5 0L10.3 3.8l2.7 2.7c.4-.1.9 0 1.2.3.4.4.5 1 .3 1.5l2.6 2.6c.5-.2 1.1-.1 1.5.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1-.3-1.5l-2.4-2.4v5.3c.2.1.4.3.5.5.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.2-.2.4-.4.6-.5V8.5c-.2-.1-.4-.3-.6-.5-.4-.4-.5-1-.3-1.5L7.4 3.9 2.3 9c-.4.4-.4 1.1 0 1.5l8.4 8.4c.4.4 1.1.4 1.5 0l9.5-9.5c.4-.4.4-1.1 0-1.5v2.8z"
              fill="#F05032"
            />
          </svg>
        );

      case "tailwind":
      case "tailwindcss":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.6 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C16.3 7.4 14.9 6 12 6zM6 13.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.6 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C10.3 14.6 8.9 13.2 6 13.2z"
              fill="#06B6D4"
            />
          </svg>
        );

      case "html5":
      case "html":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3l1.6 18 7.4 2 7.4-2L21 3H3z" fill="#E34F26" />
            <path d="M12 4.6v16.7l5.8-1.6 1.4-15.1H12z" fill="#EF652A" />
            <path d="M6.5 7.5h11l-.3 3H9.8l.2 2.5h6.6l-.6 6-4 1.1-4-1.1-.3-3.2h2.2l.1 1.7 2 .5 2-.5.2-2.3H6.8l-.3-8z" fill="#fff" />
          </svg>
        );

      case "numpy":
      case "pandas":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#4DABCF" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#E70488" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#130754" stroke="#4DABCF" strokeWidth="1" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#FFBC00" />
          </svg>
        );

      default:
        break;
    }
  }

  // Monochrome fallback
  switch (norm) {
    case "python":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2c-3.3 0-5 1.5-5 3.5v2.5h6v1H5c-2 0-3.5 1.5-3.5 4.5S3 18 5 18h1.5v-1.5c0-1.7 1.3-3 3-3h5v-1h-6c-1.7 0-3-1.3-3-3V5.5C6.5 3.5 8.7 2 12 2z" />
          <path d="M12 22c3.3 0 5-1.5 5-3.5V16h-6v-1h8c2 0 3.5-1.5 3.5-4.5S21 6 19 6h-1.5v1.5c0 1.7-1.3 3-3 3h-5v1h6c1.7 0 3 1.3 3 3v4c0 2-2.2 3.5-5.5 3.5z" />
          <circle cx="9" cy="4.5" r=".75" fill="currentColor" />
          <circle cx="15" cy="19.5" r=".75" fill="currentColor" />
        </svg>
      );
    case "java":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 19c3 .3 7-.3 10-1-1.5.8-5.5 1.5-10 1zM8 16c2.5.3 6-.2 8-.7-1 .6-4.5 1.2-8 .7z" />
          <path d="M14 2c-1 1.5-1.5 3-1.5 4.5 1.2-1.5 2-3 2.5-4.5z" />
          <path d="M11 5c-.7 1.5-1.2 3-1 4.5 1-1.3 1.8-2.8 2-4.5z" />
          <path d="M5 21c4.5.4 10-.1 14-1.2-3.5.9-9 1.4-14 1.2z" />
        </svg>
      );
    case "javascript":
    case "js":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M8 15c.5 1.2 1.2 2 2.5 2 1.5 0 2.5-.8 2.5-2.2v-6.8" />
          <path d="M15 17c1.2.7 2.2 1 3.2.7 1-.3 1.8-1 1.8-2 0-2.5-4-1.8-4-4.5 0-1.5 1-2.2 2.5-2.2 1 0 2 .5 2.5 1" />
        </svg>
      );
    case "react":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12h6M12 9v6" />
        </svg>
      );
  }
}
