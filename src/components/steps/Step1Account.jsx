export default function Step1Account({ dispatch, formData }) {
  const {
    account: { firstName, lastName, email, password, confirmPassword, privacy },
  } = formData;
  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    const x = type === "checkbox" ? checked : value;
    dispatch({
      type: "ACCOUNT",
      data: { ...formData.account, [id]: x },
    });
  };
  return (
    <div className=" mt-4">
      <h2 className="text-xl text-center font-semibold mb-4">
        Account Details
      </h2>
      <form className="p-4">
        <div className="flex justify-center gap-5 mb-4">
          <div className="flex flex-col gap-1 w-6/12">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              className="border p-2"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 w-6/12">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              className=" border p-2"
              name="lastName"
              value={lastName}
              onChange={handleChange}
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
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className=" border p-2"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="confirm Password"
            className=" border p-2"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 mb-4 border-2 border-green-700">
          <label htmlFor="privacy">T&C</label>
          <input
            type="checkbox"
            id="privacy"
            className="p-2 h-4"
            checked={privacy}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}
