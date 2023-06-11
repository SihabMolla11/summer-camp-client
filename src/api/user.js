
// opst users
export const AddUsers = (user) => {
    const currentUser = {
        email: user?.email,
        name: user?.displayName,
        image: user?.photoURL,
        role: "guest"
    }

    fetch(`${import.meta.env.VITE_API_LINK}/users`, {
        method: "POSt",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}
