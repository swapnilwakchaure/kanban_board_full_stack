import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { GoUnlock } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import styled from "styled-components";

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [passType, setPassType] = useState("password");

  const handleRegister = () => {
    navigate("/register");
  }

  const handleLogin = () => {
    navigate("/login");
  }

  const handleLock = () => {
    setShowPassword(!showPassword);
    setPassType("text");
  }

  const handleUnLock = () => {
    setShowPassword(!showPassword);
    setPassType("password");
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && password && image) {
      const payload = { name, email, password, image };
      console.log('payload: ', payload);
    } else {
      alert('All fields are required');
    }
  }

  return (
    <Main>
      <AuthDiv>
        <RegisterBtn onClick={handleRegister} color="white">Register</RegisterBtn>
        <LoginBtn onClick={handleLogin}>Log in</LoginBtn>
      </AuthDiv>

      <Form onSubmit={handleSubmit}>
        <UserImg>
          {image ? <Img src={image} alt="" style={{
            borderRadius: "50%"
          }} /> : <Img src="https://cdn-icons-png.flaticon.com/128/848/848043.png" alt="" />}
        </UserImg>
        <File type="file" onChange={handleImage} />
        <InputBox>
          <Input
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First & Last name"
          />
          <FiUser style={{
            position: "absolute",
            fontSize: "25px"
          }} />
        </InputBox>
        <InputBox>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
          <MdOutlineMail style={{
            position: "absolute",
            fontSize: "25px"
          }} />
        </InputBox>
        <InputBox>
          <Input
            type={passType}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password"
          />
          {!showPassword ? <GoLock onClick={handleLock} style={{
            position: "absolute",
            fontSize: "25px"
          }} /> : <GoUnlock onClick={handleUnLock} style={{
            position: "absolute",
            fontSize: "25px"
          }} />}
        </InputBox>
        <Submit>Create An Account</Submit>
      </Form>

      <Connect>
        <Line></Line>
        <div>or connect with</div>
        <Line></Line>
      </Connect>

      <Oauth>
        <Platform><FcGoogle /></Platform>
        <Platform><BsGithub /></Platform>
      </Oauth>

    </Main>
  )
}

export default Register;


const Main = styled.div`
  width: 90%;
  max-width: 450px;
  margin: 50px auto;
  padding-bottom: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const AuthDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RegisterBtn = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: black;
  background: ${Props => Props.color};
  box-shadow: ${Props => Props.shadow};
  border-top-left-radius: 10px;
`
const LoginBtn = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: black;
  background: ${Props => Props.color};
  box-shadow: ${Props => Props.shadow};
  border-top-right-radius: 10px;
`

const Form = styled.form`
  margin-top: 30px;
`

const UserImg = styled.div`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50%;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const File = styled.input`
  display: block;
  margin: 10px auto;
`

const InputBox = styled.div`
  border: 1px solid;
  width: 80%;
  max-width: 376px;
  margin: 20px auto;
  padding: 6px 20px;
  display: flex;
  align-items: center;
  border-radius: 5px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px 45px;
  border: 0;
  outline: 0;
  font-size: 17px;
`

const Submit = styled.button`
  width: fit-content;
  padding: 15px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  background: #3F51B5;
  font-size: 18px;
  font-weight: bold;

  &: hover {
    background: #303F9F;
  }

  &: active {
    background: #7986CB;
  }
`



const Connect = styled.div`
  display: flex;
  margin: 30px auto;
  justify-content: space-evenly;
  align-items: center;
`

const Line = styled.div`
  border-top: 1px solid;
  width: 120px;
`



const Oauth = styled.div`
  width: 70%;
  max-width: 400px;
  margin: auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Platform = styled.div`
  font-size: 40px;
`