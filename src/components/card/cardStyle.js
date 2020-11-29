/* Bookstores */
import styled from "styled-components"
import Card from "@material-ui/core/Card"

const Wrapper = styled(Card)`
  display: flex;
  border-radius: 5%;
  width: 100%;
  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.2);
  min-width: 200px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .card {
    &-container {
      display: flex;
      flex-direction: column;
      width: 60%;

      @media (max-width: 768px) {
        width: 100%;
      }

      &-title {
         font-size: 16px;
         color: #000;
         font-weight: 500;
         margin-left: 30px;
         text-align: left;

          @media (max-width: 768px) {
            margin-left: 10px;
          }
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

       @media (max-width: 768px) {
        width: 100%;
      }

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
