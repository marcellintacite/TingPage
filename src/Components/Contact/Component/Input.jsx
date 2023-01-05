import styled from "styled-components";

export default function Input({ label, nom, ...rest }) {
  return (
    <StyledInput>
      <label htmlFor={nom}>{label}</label>
      <input name={nom} {...rest} />
    </StyledInput>
  );
}
const StyledInput = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 40px;
    outline: none;
    border-radius: 5px;
    font-size: 16px;
    padding-left: 5px;
    margin-bottom: 10px;
    border: 1px solid #333344;

    &:focus {
      border-color: #b781ff;
      border-width: 2px;
    }
  }
`;
