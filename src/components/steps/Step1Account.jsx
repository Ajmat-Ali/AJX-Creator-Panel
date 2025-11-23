export default function Step1Account() {
  return (
    <div className="space-y-4 mt-4 flex flex-col items-center">
      <h2 className="text-xl font-semibold">Account Details</h2>
      <form className="w-4/12 border-2 border-black p-4">
        <div className="flex justify-center gap-5 mb-4">
          <div className="flex flex-col gap-1 w-6/12">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              id="fistName"
              className="border p-2"
            />
          </div>
          <div className="flex flex-col gap-1 w-6/12">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              className=" border p-2"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className=" border p-2"
          />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className=" border p-2"
          />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="confirm Password"
            className=" border p-2"
          />
        </div>
        <div className="flex justify-center w-10/12  mt-4 m-auto">
          <button className="border">Next</button>
        </div>
      </form>
    </div>
  );
}
