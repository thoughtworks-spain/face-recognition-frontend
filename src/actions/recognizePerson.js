const recognizePersonEnpoint = "http://localhost:8080/recognize";

const recognizePerson = (image) => {
  return fetch(recognizePersonEnpoint, { method: "POST", body: image })
    .then(response => response.json())
    .then(data => data.user);
}

export default recognizePerson;
