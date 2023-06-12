// opst users
export const AddUsers = (user) => {
    const currentUser = {
        email: user?.email,
        name: user?.displayName,
        image: user?.photoURL,
        role: "student"
    }

    fetch(`${import.meta.env.VITE_API_LINK}/users`, {
        method: "POSt",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}



// user student from instructor or admin
export const UpdateUserRole = async (role, email, refetch) => {
    const newRole = {
        role: role
    };
    fetch(`${import.meta.env.VITE_API_LINK}/users/${email}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRole)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
            // if (data.matchedCount > 0) {
            //     Swal.fire(
            //         `class ${status}`,
            //         `this class ${status} successful`,
            //         'success'
            //     )
            // }
        })
}