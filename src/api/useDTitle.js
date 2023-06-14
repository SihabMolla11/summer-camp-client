import { useEffect } from "react";

const useDTitle = (title) => {
    useEffect(() => {
        document.title = `Dashboard - ${title}`;
    }, [title])
}
export default useDTitle;