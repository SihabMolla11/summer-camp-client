// opst users
export const AddUsers = (user) => {


    fetch(`${import.meta.env.VITE_API_LINK}/users`, {
        method: "POSt",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}