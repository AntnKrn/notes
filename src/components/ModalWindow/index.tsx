import { Input } from '../Input';
import {
  ModalWindowBottomBtn,
  ModalWindowBottomBtnsWrapper,
  ModalWindowBottomText,
  ModalWindowInputWrapper,
  ModalWindowTitle,
  ModalWindowContainer,
  ModalWindowWrapper,
} from './style';

interface IModalWindowProps {
  type: string;
  onClickCancelHandler: () => void;
  onClickContiniuHandler: () => void;
  title?: string;
}

export const ModaleWindow = ({
  type,
  onClickCancelHandler,
  onClickContiniuHandler,
  title,
}: IModalWindowProps) => {
  return (
    <ModalWindowWrapper>
      <ModalWindowContainer>
        <ModalWindowTitle>
          {type === 'add' ? 'NEW NOTE' : 'EDIT NOTE'}
        </ModalWindowTitle>
        <ModalWindowInputWrapper>
          <Input
            placeholder={
              type === 'add' ? 'Input your note...' : 'Edit your note...'
            }
            title={title}
          />
        </ModalWindowInputWrapper>
        <ModalWindowBottomBtnsWrapper>
          <ModalWindowBottomBtn type="Cancel" onClick={onClickCancelHandler}>
            <ModalWindowBottomText type="Cancel">CANCEL</ModalWindowBottomText>
          </ModalWindowBottomBtn>
          <ModalWindowBottomBtn
            type="Continue"
            onClick={onClickContiniuHandler}
          >
            <ModalWindowBottomText type="Continue">
              {type === 'add' ? 'APPLY' : 'SAVE'}
            </ModalWindowBottomText>
          </ModalWindowBottomBtn>
        </ModalWindowBottomBtnsWrapper>
      </ModalWindowContainer>
    </ModalWindowWrapper>
  );
};
