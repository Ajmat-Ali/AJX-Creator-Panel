function Step2Profile() {
  return (
    <div className="space-y-4 mt-4 flex flex-col items-center">
      <h2 className="text-xl font-semibold">Profile Details</h2>
      <form className="w-4/12 border-2 border-black p-4">
        <div className="flex justify-center gap-5 mb-4">
          <div className="flex flex-col gap-1 w-6/12">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              placeholder="User Name"
              id="userName"
              className="border p-2"
            />
          </div>
          <div className="flex flex-col gap-1 w-6/12">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              placeholder="Phone Number"
              id="phone"
              className=" border p-2"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="password">Bio / About You</label>
          <textarea className="border h-32" />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="email">Profile Pic</label>
          <input
            type="file"
            id="imageUpload"
            name="image"
            accept="image/*"
            className="border rounded-4xl w-3/12"
          />
        </div>
        <div className="flex justify-center gap-4 w-10/12  mt-4 m-auto">
          <button className="border">Back</button>
          <button className="border">Next</button>
        </div>
      </form>
    </div>
  );
}

export default Step2Profile;
