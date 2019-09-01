//import Router from 'next/router'
//import Link from 'next/link';
import axios from "axios";
//import Head from 'next/head';
//import Nav from '../components/nav';

export default (req, res) => {
  const {
    query: { post },
  } = req;

  res.setHeader("Content-Type", "application/json");
  axios.get('http://localhost:3000/api/discussions/'+post).then(({ data }) => {

  res.send(JSON.stringify(data));

  });
  //${resultado.data.children[0].url}
  //res.send(`Post: ${post}`);
}