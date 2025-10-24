import cover from '../assets/cover.png';
function App() {
  return (
    <div>
      <h3 className='scroll-m-20 text-center text-2xl p-[1rem] font-semibold tracking-tight'>
        Book a reservation at your favorite restaurant today!
      </h3>
      <img alt='people eating at restaurant' src={cover} />
    </div>
  );
}

export default App;
