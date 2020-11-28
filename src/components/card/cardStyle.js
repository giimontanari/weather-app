/* Bookstores */
import styled from "styled-components"
import Card from "@material-ui/core/Card"

const Wrapper = styled(Card)`
  display: flex;
  border-radius: 5%;
  width: 100%;
  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.2);

  .card {
    &-container {
      display: flex;
      flex-direction: column;
      width: 60%;
      
       &-title {
         font-size: 14px;
         color: #000;
         font-weight: 500;
         margin-left: 10px;
        }

       &-temp {
         font-size: 60px;
         color: #1a237e;
         font-weight: 500;
         margin: 0 30px 20px 45px;
        }
    }

    &-others {
      display: flex;
      flex-direction: column;
      width: 40%;
      
      &-detail {
        font-size: 14px;
        color: #000;
        font-weight: 300;
        padding: 10px 0 10px 20px;
        text-align: initial;
      }

       &-divider {
         padding-left: 5px;
      }
    }
}
`

export default Wrapper
