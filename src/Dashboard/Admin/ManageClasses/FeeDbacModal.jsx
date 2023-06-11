const FeeDbacModal = ({ classId }) => {
  const handelClassFeedback = (event) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    console.log(feedback);
  };

  return (
    <>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-center font-bold text-2xl">
            Please Give Feedback
          </h3>
          <p className="py-4">
            If you want Denied this class so you have to give your feedback !
          </p>
          <form onSubmit={handelClassFeedback}>
            <input
              className="outline rounded-md p-2 w-full outline-orange-600 outline-1"
              type="text"
              name="feedback"
              id=""
              placeholder="Give your Feedback"
            />
            <input
              className="my-outline-btn mt-5"
              type="submit"
              value="Send Feedback"
            />
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};

export default FeeDbacModal;
