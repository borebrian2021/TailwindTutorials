import logo from './logo.svg';
import './App.css';

function App() {
  return (

  <div className='text-gray-600'>
    <div>
      <nav>
        <div>
          <h1 className='uppercase p-4 border-b border-gray-100'>
            <a href="/">Food Ninja</a>
          </h1>
        </div>
        <ul >
          <li className='text-gray-900 font-bold'>
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  
    <main className='px-16 py-6'>
      <div >
        <a href="#">Log in</a>
        <a href="#">Sign up</a>
      </div>

      <header>
        <h2 className="text-6xl font-semibold">Recipes</h2>
        <h3 className="font-semibold uppercase">For Ninjas</h3>
      </header>

      <div>
        <h4 className='mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>
  
        <div className='mt-8'>
          <div> 
            <img src="https://www.thespruceeats.com/thmb/OnwvqaCO9b1qp1u322XW4TZAIkE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/instant-pot-beef-stew-5218740-hero-05-ee714d6ec6ca45c2aef9a83181944c3d.jpg" alt="stew"/>
            <div>
              <span>5 Bean Chili Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>
        </div>

        <h4 className='mt-12 pt-2 border-b border-gray-200'>Most Popular</h4>

        <div className='mt-8'>
        </div>
      </div>

      <div>
        <div>Load more</div>
      </div>    
    </main>
  </div>



  
    );
}

export default App;
