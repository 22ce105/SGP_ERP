import { React, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

function SignUpPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Please enter same passwords");
    }
  }

  return (
    <div className="allpage flex">
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl max-w-full m-auto py-6 px-6 shadow-sm hover:shadow-xl duration-150"
      >
        <div className="justify-center  m-auto">
          <div>Sign Up</div>
        </div>
        <div className="flex items-center justify-between m-4">
          <div>Enter full name : </div>
          <input
            type="text"
            name="name"
            required
            className="txt-bx"
            placeholder="Enter full name"
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="flex items-center justify-between m-4">
          <div>Enter username : </div>
          <input
            type="text"
            name="name"
            required
            className="txt-bx"
            placeholder="Enter username"
            onChange={(event) => setUsername(event.target.value)}
          ></input>
        </div>
        <div className="flex items-center justify-between m-4">
          <div>Enter password : </div>
          <input
            type="password"
            name="name"
            required
            className="txt-bx"
            placeholder="Enter password"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <div className="flex items-center justify-between m-4 gap-4">
          <div>Re-enter password : </div>
          <input
            type="password"
            name="name"
            required
            className="txt-bx"
            placeholder="Re-enter password"
            onChange={(event) => setConfirmPassword(event.target.value)}
          ></input>
        </div>
        <div className="flex mb-2">
          <div className="flex gap-1 max-w-full m-auto">
            <div className="text-xs">Already Signed ?</div>
            <Link className="text-xs  text-blue-500 underline" to="/login">
              Login
            </Link>
          </div>
        </div>
        <div className="flex mb-4 ml-4 mr-4">
          <button className="submit-btn max-w-full m-auto">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
