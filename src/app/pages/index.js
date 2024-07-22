// pages/index.js
import Head from "next/head";
import RegisterForm from "../components/RegisterForm";
import "../styles/RegisterForm.css"; // Import CSS file

export default function Home() {
  return (
    <div className="container">
      <main>
        <RegisterForm />
      </main>
    </div>
  );
}
