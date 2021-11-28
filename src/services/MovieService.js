import HttpService from "./HttpService";

class MovieService extends HttpService {
  async getAll() {
    try {
      const { data } = await this.client.get("movies");

      return data;
    } catch (error) {
      console.log(error);
    }

    return [];
  }

  async get(id) {
    try {
      const { data } = await this.client.get(`movies/${id}`);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  async add(newMovie) {
    try {
      const { data } = await this.client.post("movies", newMovie);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  async edit(id, movie) {
    try {
      const { data } = await this.client.put(`movies/${id}`, movie);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  async delete(id) {
    try {
      const { data } = await this.client.delete(`movies/${id}`);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }
}

const movieService = new MovieService();
export default movieService;
