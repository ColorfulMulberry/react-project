import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";

// LOGIN NOT WORKING

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const localData = localStorage.getItem("currentUser");
    if (localData) {
      const userData = JSON.parse(localData);
      if (
        userData.password === data.password &&
        userData.email === data.email
      ) {
        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            email: "apple@sixmail.com",
            password: "checkmate",
            loggedIn: true,
          })
        );
        console.log("You are now logged in.");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      <div
        className="container d-flex 
         align-items-center 
         justify-content-center"
      >
        <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              {...(register("email"), { required: true })}
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pwdInput" className="form-label">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="form-control"
              id="pwdInput"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function handleSubmit() {}

export default LoginPage;
