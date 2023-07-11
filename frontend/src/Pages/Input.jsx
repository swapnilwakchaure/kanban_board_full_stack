import { FiUser } from "react-icons/fi";
import styled from "styled-components";

const Input = () => {
    return (
        <Main>
            <InputBox
             type="text"
             placeholder="First & Last name"
            />
            <FiUser style={{
                position: "absolute",
                fontSize: "25px"
            }} />
        </Main>
    )
}


export default Input;

const Main = styled.div`
  border: 1px solid;
  width: 80%;
  max-width: 376px;
  margin: 20px auto;
  padding: 6px 20px;
  display: flex;
  align-items: center;
  border-radius: 5px;
`

const InputBox = styled.input`
  width: 100%;
  padding: 10px 45px;
  border: 0;
  outline: 0;
  font-size: 17px;
`