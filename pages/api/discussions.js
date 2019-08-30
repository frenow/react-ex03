import axios from "axios";

export default (_, res) => {
  res.setHeader("Content-Type", "application/json");
  axios.get("https://www.reddit.com/r/javascript.json").then(({ data }) => {
    res.send(JSON.stringify(data));
  });
};