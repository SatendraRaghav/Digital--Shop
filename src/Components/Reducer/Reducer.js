const initialValue = {
  obj: [],
  virtualObj: {
    name: "",
    userEmail: "",
    mobileNumber: "",
  },
  avatar: {
    email: "",
    avatar: "",
    first_name: "",
    last_name: "",
  },
  virtualAvatar: {
    email: "",
    avatar: "",
    first_name: "",
    last_name: "",
  },
  mainLogic: false,
  updateLogic: false,
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "saveFormData":
      return { ...state, obj: action.payload };
    case "saveVartualFormData":
      return { ...state, virtualObj: action.payload };
    case "saveVirtualAvatar":
      return { ...state, virtualAvatar: action.payload };
    case "saveAvatar":
      return { ...state, avatar: action.payload };
    case "mainPage":
      return { ...state, mainLogic: action.payload };
    case "setData":
      return { ...state, data: action.payload };
    case "updatePage":
      return { ...state, updateLogic: action.payload };
    default:
      return initialValue;
  }
};

export default reducer;
