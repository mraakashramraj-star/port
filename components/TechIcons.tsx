import React from "react";

export function TechIcon({ name, className = "w-5 h-5", monochrome = true }: { name: string; className?: string; monochrome?: boolean }) {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  // If monochrome, render clean crisp white and silver vector strokes
  if (monochrome) {
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
            <path d="M17 14c1.5-1 2-2.2 1.5-3-.5-.7-1.7-.8-3-.2" />
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

      case "typescript":
      case "ts":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <path d="M7 8h6M10 8v9M14 15c.8.6 1.8 1 2.8 1 1 0 1.6-.4 1.6-1.1 0-.7-.5-1-1.8-1.5l-.8-.3c-1.8-.7-3-1.7-3-3.6 0-2 1.6-3.5 3.9-3.5 1.5 0 2.7.5 3.5 1.3" />
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

      case "nodejs":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l8 4.6v9.2L12 20.4l-8-4.6V6.6L12 2z" />
            <path d="M12 7v5l4 2.3M12 12l-4 2.3" />
          </svg>
        );

      case "fastapi":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M13 5L7 13h5l-1 6 7-8h-5l1-6z" fill="currentColor" stroke="none" />
          </svg>
        );

      case "huggingface":
      case "nlp":
      case "sentiment":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <circle cx="9" cy="10" r="1" fill="currentColor" />
            <circle cx="15" cy="10" r="1" fill="currentColor" />
            <path d="M8 14c1.2 1.5 2.5 2 4 2s2.8-.5 4-2" />
          </svg>
        );

      case "mongodb":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2.5c-.3 0-.6.2-.8.5C9.4 6 7 10.3 7 14c0 3.4 2.1 6.5 5 7.5.3.1.6.1.9 0 2.9-1 5-4.1 5-7.5 0-3.7-2.4-8-4.2-11-.2-.3-.5-.5-.7-.5z" />
            <path d="M12 4v16.5" />
          </svg>
        );

      case "mysql":
      case "sql":
      case "sqlite":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="8" ry="3" />
            <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
            <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
          </svg>
        );

      case "html5":
      case "html":
      case "css3":
      case "css":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 3l1.5 16 6.5 2 6.5-2L20 3H4z" />
            <path d="M8 8h8M8 12h7l-.5 4-3.5 1-3.5-1-.2-2" />
          </svg>
        );

      case "git":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11L13 3a1.5 1.5 0 00-2.1 0L3 11a1.5 1.5 0 000 2.1l8 8a1.5 1.5 0 002.1 0l7.9-8a1.5 1.5 0 000-2.1z" />
            <circle cx="12" cy="8" r="1.5" fill="currentColor" />
            <circle cx="12" cy="16" r="1.5" fill="currentColor" />
            <path d="M12 9.5v5" />
          </svg>
        );

      case "github":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        );

      case "tailwind":
      case "tailwindcss":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.6 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C16.3 7.4 14.9 6 12 6zM6 13.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.6 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C10.3 14.6 8.9 13.2 6 13.2z" />
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

  // Fallback
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}
