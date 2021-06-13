import AsyncStorage from "@react-native-async-storage/async-storage";

class StorageService {
  async storeStringData({ key, string }) {
    const storePromise = new Promise((resolve, reject) => {
      try {
        AsyncStorage.setItem(key, string).then((data) => {
          resolve({ status: "SUCCESS", data: data });
        });
      } catch (e) {
        reject({ status: "FAILED", data: e });
      }
    });
    return storePromise;
  }

  async storeObjectData({ key, object }) {
    const storePromise = new Promise((resolve, reject) => {
      try {
        const jsonValue = JSON.stringify(object);
        AsyncStorage.setItem(key, jsonValue).then((data) => {
          resolve({ status: "SUCCESS", data: data });
        });
      } catch (e) {
        reject({ status: "FAILED", data: e });
      }
    });
    return storePromise;
  }

  async getStringData({ key }) {
    const storePromise = new Promise((resolve, reject) => {
      try {
        AsyncStorage.getItem(key).then((data) => {
          resolve({ status: "SUCCESS", data: data });
        });
      } catch (e) {
        reject({ status: "FAILED", data: e });
      }
    });
    return storePromise;
  }

  async getObjectData({ key }) {
    const storePromise = new Promise((resolve, reject) => {
      try {
        AsyncStorage.getItem(key).then((data) => {
          resolve({
            status: "SUCCESS",
            data: data !== null ? JSON.parse(data) : null,
          });
        });
      } catch (e) {
        reject({ status: "FAILED", data: e });
      }
    });
    return storePromise;
  }
}

const instancedStorageService = new StorageService();
export default instancedStorageService;
