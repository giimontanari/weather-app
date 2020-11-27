/* Bookstores */
import styled from "styled-components"
import Card from "@material-ui/core/Card"

/**
 * Documented component Wrapper
 * @component
 * @returns
 *   Wrapper is container of card
 */
export const Wrapper = styled(Card)`
  display: flex;
  border-radius: 5%;
  width: 100%;
  
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
         color: #000;
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
