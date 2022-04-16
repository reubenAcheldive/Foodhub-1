import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";
import logo from './homePagePic.png'

function App() {
  return (
    <div className="row">

      <div className="col">
        <Header title={"Foodhub"} color={"text-warning"} size={"fs-1"} margin={"mt-5 text-center"}></Header>

        <div className="container position-absolute top-50 start-50 translate-middle">
          <div className="card shadow" style={{ width: "535px" }}>
            <div className="card-body">
              {/* <Header title={"Login"} color={"text-dark"} size={"fs-2"} margin={"mb-5"}></Header> */}
              <Input type={"email"} placeholder={"Enter your email"} margin={"mb-4"} title={"Email"} width="500px"></Input>
              <Input type={"password"} placeholder={"Enter your password"} margin={"mb-3"} title={"Password"} width="500px"></Input>

            
              <div className="mt-3 d-flex flex-column">
                <Button margin={"mt-3"} buttonType={"btn-warning btn-lg"} width={"500px"} buttonTitle={"Log in"}></Button >
                <span className="form-text text-center mt-2"><a href="#" className="text-decoration-none">Forgot password? </a></span>
                <hr></hr>
                <Button margin={"mt-2"} buttonType={"btn-outline-warning"} buttonTitle={"Register now"}></Button>


              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <img src={logo} className='mt-4' style={{ width: "730x", height: "630px" }}></img>
      </div>
    </div>
  );
}

export default App;
