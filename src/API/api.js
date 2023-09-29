import axios from 'axios';

const base = 'https://rickandmortyapi.com/api/';

class Request {
  constructor(url) {
    this.url = url;
    this.instance = axios.create({
      baseURL: base,
    });
  }

  async get(params = {}) {
    try {
      const response = await this.instance.get(this.url, {params});
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post(postData) {
    try {
      const response = await this.instance.post(this.url, postData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async update(updateData) {
    try {
      const response = await this.instance.patch(this.url, updateData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async updatePut(updateData) {
    try {
      const response = await this.instance.put(this.url, updateData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async delete() {
    try {
      const response = await this.instance.delete(this.url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default Request;
