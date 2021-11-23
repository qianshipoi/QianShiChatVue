import instance from ".";

export function login({ username, password }) {
  const formData = new FormData();
  formData.append("LoginName", username);
  formData.append("Password", password);
  return instance.post("/user/login", formData);
}

export function registered({ username, password, avatar }) {
  const formData = new FormData();
  formData.append("UserName", username);
  formData.append("Password", password);
  if (avatar) {
    formData.append("Avatar", avatar);
  }
  return instance.post("/user/Registered", formData);
}
