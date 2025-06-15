import { useEffect, useState } from "react";

interface DomReadyProviderProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
  delay?: number;
}

const OnDomLoaded = ({
  children,
  fallback,
  delay = 2000,
}: DomReadyProviderProps) => {
  const [domReady, setDomReady] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setDomReady(true);
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    } else {
      setDomReady(true); // DOM قبلاً لود شده
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, []);

  useEffect(() => {
    if (domReady) {
      const timeout = setTimeout(() => {
        setShowContent(true);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [domReady, delay]);

  return <>{showContent ? children : fallback}</>;
};

export default OnDomLoaded;
