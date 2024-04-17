import Footer from "./components/Footer"
import Header from "./components/Header"
import Router from './routes';

function App() {
  return (
    <>
      <Header />
      <main className="container-app">
        <Router />
      </main>
      <Footer />
    </>
  )
}

export default App
