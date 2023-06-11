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

// change a class status
export const ChangeClassStatus = async (status, id, refetch) => {
    const newStatus = {
        status: status
    };
    fetch(`${import.meta.env.VITE_API_LINK}/singleClass/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStatus)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
            if (data.matchedCount > 0) {
                Swal.fire(
                    `class ${status}`,
                    `this class ${status} successful`,
                    'success'
                )
            }
        })
}


// send feed back
export const SendFeedbackForClass = async (feedback, classId, refetch) => {
    const newFeedback = {
        feedback: feedback
    };
    fetch(`${import.meta.env.VITE_API_LINK}/singleClass/${classId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFeedback)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
            if (data.matchedCount > 0) {
                Swal.fire(
                    'Feedback Sanded',
                    `${feedback} Send Feedback successfully`,
                    'success'
                )
                
            }
        })
}