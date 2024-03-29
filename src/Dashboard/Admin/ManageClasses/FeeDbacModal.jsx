import { SendFeedbackForClass } from "../../../api/class";

const FeeDbacModal = ({ classId, refetch }) => {
  const handelClassFeedback = (event) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    SendFeedbackForClass(feedback, classId, refetch);
    event.target.reset();
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
           please give your Feedback why you deny this class! 
          </p>
          <form onSubmit={handelClassFeedback}>
            <input
              className="outline rounded-md p-5  w-full outline-orange-600 outline-1"
              type="text"
              name="feedback"
              id=""
              placeholder="Give your Feedback"
            />
            <input
              className="my-outline-btn  mt-5"
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
