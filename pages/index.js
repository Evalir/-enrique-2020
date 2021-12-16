import Head from "next/head";
import Image from "next/image";
import memoji from "../public/memoji.png"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Enrique Ortiz</title>
        <meta name="description" content="Enrique Ortiz&apos;s personal site" />
        <link rel="icon" href="/memoji.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.memoji}>
          <Image
            src={memoji}
            alt="Memoji"
            width={128}
            height={128}
            layout="fixed"
            className={styles.memoji}
          />
        </div>
        <p className={styles.description}>
          My name is Enrique Ortiz. I&apos;m a software developer from the Dominican
          Republic, an island in the middle of the Caribbean Sea.
        </p>
        <p className={styles.description}>
          I currently work as a Full-Stack Software Engineer at{" "}
          <ExternalLink href="https://pokt.network">
            Pocket Network
          </ExternalLink>
          , in which I maintain, help set technical direction and develop our
          user-facing products as part of the Ecosystem Development Team.
        </p>
        <p className={styles.description}>
          Before that I was working at{" "}
          <ExternalLink href="https://aragon.one">Aragon One</ExternalLink>,
          where I maintained various Javascript libraries and applications, and
          spearheaded product initiatives.
        </p>
        <p className={styles.description}>
          Check out my&nbsp;
          <ExternalLink href="https://github.com/Evalir">Github</ExternalLink>.
          &nbsp; :)
        </p>
      </main>
    </div>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
}
