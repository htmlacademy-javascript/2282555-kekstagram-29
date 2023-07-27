const DEFAULT_METHOD = 'POST';

const getData = (url, onSuccess, onError) => {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });
};

const sendData = (url, body, onSuccess, onError, method = DEFAULT_METHOD) => {
  fetch(url, {
    method,
    body,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then(() => {
      onSuccess();
    })
    .catch((err) => {
      onError(err);
    });
};

export { getData, sendData };
