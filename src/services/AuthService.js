import HttpService from "./HttpService";

class AuthService extends HttpService {
  async login(credentials) {
    try {
      const { data } = await this.client.post("/auth/login", credentials);
      localStorage.setItem("token", data.token);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async register(userData) {
    try {
      const { data } = await this.client.post("/auth/register", userData);
      localStorage.setItem("token", data.token);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getMyProfile() {
    try {
      const { data } = await this.client.get("/auth/me");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async logout() {
    try {
      await this.client.post("/auth/logout");
      localStorage.removeItem("token");
    } catch (error) {
      console.log(error);
    }
  }
}

const authService = new AuthService();

export default authService;
