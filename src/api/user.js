// import axios from "axios"

// opst users
export const AddUsers = (user) => {
    const currentUser = {
        email: user?.email,
        name: user?.displayName,
        image: user?.photoURL
    }

    fetch(`${import.meta.env.VITE_API_LINK}/users`, {
        method: "POSt",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}


// get current user
// export const getCurrentUser = async (email) =>{
//     const data = (await axios.get(`${import.meta.env.VITE_API_LINK}/users/${email}`))
//     return data
// }
