import Script from "next/script";
import MainPage from "./pages/home/page";

export default function Home() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
      <MainPage />
    </>
  );
}
