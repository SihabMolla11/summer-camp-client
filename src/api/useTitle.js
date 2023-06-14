import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `PhotoGraph House - ${title}`;
    }, [title])
}
export default useTitle;


