import { FaArrowRight } from "react-icons/fa6";
import { Tooltip } from "antd";
import * as S from "./ReadMoreButton.styled";

const ReadMoreButton = () => {
  return (
    <S.ButtonWrapper>
      <S.ButtonLabel>Read More</S.ButtonLabel>
      <Tooltip title="Read More">
        <S.ReadMore type="primary" shape="circle" icon={<FaArrowRight />} />
      </Tooltip>
    </S.ButtonWrapper>
  );
};

export default ReadMoreButton;
