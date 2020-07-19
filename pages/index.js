import Head from "next/head";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export default function Home() {
  const [tieBreaker, setTieBreaker] = React.useState(0);
  console.log(tieBreaker);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">Place the Pokémon in the rectangles.</p>
        <div>
          <button
            onClick={() => setTieBreaker(getRandomInt(1, 3))}
            style={{ marginRight: 16 }}
            type="button"
          >
            TIE BREAKER
          </button>
          <button onClick={() => setTieBreaker(0)} type="button">
            DONE
          </button>
        </div>

        <div className="grid">
          <div className={"card" + (tieBreaker === 1 ? " shake" : "")}>
            <h3>Pokémon</h3>
            {tieBreaker === 1 ? <p>Winner!</p> : null}
          </div>

          <div className={"card" + (tieBreaker === 2 ? " shake" : "")}>
            <h3>Pokemon</h3>
            {tieBreaker === 2 ? <p>Winner!</p> : null}
          </div>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        button {
          background-color: #c63610;
          border: none;
          border-radius: 8px;
          color: #ffffff;
          display: inline;
          padding: 8px 16px;
          font-size: 24px;
          font-weight: bold;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;

          width: 700px;
          margin-top: 3rem;
        }

        .card {
          height: 440px;
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          color: #ffe252;
          text-decoration: none;
          background-color: #1a8348;
          border: 18px solid #ffe252;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card.shake {
          animation: shake 0.6s;
          animation-iteration-count: infinite;
        }

        .card:hover,
        .card:focus,
        .card:active {
          background-color: #21456e;
          color: #01336e;
          border-color: #01336e;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
          }
        }

        @keyframes shake {
          0% {
            transform: translate(6px, 6px) rotate(0deg);
          }
          10% {
            transform: translate(-6px, -6px) rotate(-6deg);
          }
          20% {
            transform: translate(-2px, 0px) rotate(6deg);
          }
          30% {
            transform: translate(2px, 2px) rotate(0deg);
          }
          40% {
            transform: translate(6px, -6px) rotate(6deg);
          }
          50% {
            transform: translate(-6px, 2px) rotate(-6deg);
          }
          60% {
            transform: translate(-2px, 6px) rotate(0deg);
          }
          70% {
            transform: translate(2px, 6px) rotate(-6deg);
          }
          80% {
            transform: translate(-6px, -6px) rotate(6deg);
          }
          90% {
            transform: translate(6px, 2px) rotate(0deg);
          }
          100% {
            transform: translate(6px, -2px) rotate(-6deg);
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
