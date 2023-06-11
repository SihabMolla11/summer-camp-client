import axios from "axios"
import Swal from "sweetalert2"

// add classes
export const AddAclass = async Classdata => {
    fetch(`${import.meta.env.VITE_API_LINK}/classes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Classdata)
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire(
                    'Class Added',
                    'Your classes added Successful',
                    'success'
                )
            }
            console.log(data)
        })
}

// get all classes
export const GetAllClasses = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_LINK}/allClasses`)
    return res
}