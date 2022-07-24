import React from "react";
import pokeLoading from "../../assets/img/loadingPokebola.gif";
import styled from "styled-components";

function Loading() {
  return (
    <div>
      <LoadingImg src={pokeLoading} alt={"loading"} />
    </div>
  );
}
export default Loading;

const LoadingImg = styled.img`
  width: 200px;
  text-align: center;
`;
