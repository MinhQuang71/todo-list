import { CusButton } from '../../components';
import './home-screen.css';

function HomeScreen() {
  return (
    <div>
      <form className="Home-form">
        <div>
          <p id="Title">Awesome Todo List</p>
        </div>
        <div className="In-one-line">
          <input className="Input" placeHolder="What do you need to do to day ?" />
          <CusButton />
        </div>
        <div>
          <ul>
            {[1, 2, 3, 4, 5].map((i) => {
              return <div className="In-one-line">
                <input type="checkbox" defaultChecked={false} onChange={undefined} />
                <li>{i}</li>
                <button className="Button-close" onclick="activateLasers()">
                  X
                </button>
              </div>
            })}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default HomeScreen;
