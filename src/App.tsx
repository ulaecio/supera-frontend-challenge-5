import Header from './components/Header'
import TranferCard from './components/TransferCard'

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="tranferencias">
          <div className='supera-container'>
            <TranferCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
