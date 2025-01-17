// pages/index.js
import Head from "next/head";
import RegisterForm from "../components/RegisterForm";
import "../styles/RegisterForm.css"; // Import CSS file

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>RegisterKaro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <RegisterForm />
      </main>
    </div>
  );
}
