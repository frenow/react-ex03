import React, { useState, useEffect } from "react";
import axios from 'axios';
import Link from 'next/link';
import { useRouter  } from 'next/router';

export default () => {
    const router = useRouter();
    const { busca } = router.query;

    const [repositories, setRepositories] = useState([]);

      useEffect(() => {
        axios
          .get("http://localhost:3000/api/discussions/"+busca)
          .then(response => setRepositories(response.data.data.children.map(obj => obj.data)));
      }, [busca]);      

    return (
           <>
           <h1>{busca}</h1>
            {repositories.map(repo =>
           <div className='row'>
           <Link href={repo.url}>
                <a className='card'>
                <h3>{repo.title}</h3>
                <h4>by: {repo.author}</h4>
                <p>{repo.selftext}</p>
              </a>
           </Link>
           </div>
            )}


    <style jsx>{`
      h1 { text-align: center; }
      .row {
        max-width: 880px;
        margin: 40px auto 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 640px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card h4 {
        font-style: oblique;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>

    </>
    )
}