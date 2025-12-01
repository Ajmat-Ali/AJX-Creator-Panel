const initialValue = {
  step: 0,
  account: {
    firstName: "Ajmat",
    lastName: "Ali",
    email: "ajmat@gmail.com",
    password: "abcdf",
    confirmPassword: "abcdf",
    privacy: false,
  },
  profile: {
    userName: "AjX",
    phone: "1234567890",
    bio: "Something about yourself",
    avatar: "Image",
  },
  preference: {
    contentGoal: "Making Brand",
    experience: "beginner",
    weeklyPostingGoal: "1",
  },
};

const reducer = (state, { type, data }) => {
  switch (type) {
    case "BACK": {
      return { ...state, step: data - 1 };
    }
    case "NEXT": {
      return { ...state, step: data + 1 };
    }
    case "ACCOUNT": {
      return { ...state, account: { ...state.account, ...data } };
    }
    case "PROFILE": {
      return { ...state, profile: { ...state.profile, ...data } };
    }
    case "PREFERENCE": {
      return { ...state, preference: { ...state.preference, ...data } };
    }
    default: {
      throw Error("Unknown action: " + type);
    }
  }
};

export { reducer, initialValue };
