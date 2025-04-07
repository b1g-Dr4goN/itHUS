import { useEffect, useState } from "react";
import { PiCaretDoubleUpBold } from "react-icons/pi";

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            className={`fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg cursor-pointer transition-all duration-300 ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            }`}
            onClick={handleScrollToTop}
        >
            <PiCaretDoubleUpBold />
        </div>
    );
};

export default ScrollTop;
