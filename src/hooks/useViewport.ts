import React from "react";
/** useViewport hook
 *  returns the resolution
 *  of the client's monitor
 * 
 * @example
 *  // calling the hook
 *  const viewport = useViewport();
 *  // getting the browser's resolution
 *  console.log(viewport.width);
*/
const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return { width };
};

export default useViewport;
