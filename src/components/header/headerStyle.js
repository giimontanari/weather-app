/* Bookstores */
import styled from "styled-components"

const Wrapper = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: center;
  background: #d84315;
  color: #fff;
  width: 100%;
  position: absolute;
  top: 0;
  height: 50px;
  z-index: 3;
  justify-content: flex-end;

  .header {
     &-container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &-title {
      font-size: 20px;
      color: #fff;
      margin-right: 30px;
    }
  }
  
`

export default Wrapper