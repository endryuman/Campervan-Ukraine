import styled from 'styled-components';

export const Form = styled.form`
  width: 448px;
  padding: 24px;
`;

export const FormTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 8px;
`;

export const FormText = styled.p`
  color: #475467;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  margin-bottom: 24px;
  padding: 18px;
  border: none;
  border-radius: 10px;
  background-color: var(--light-color);
  line-height: 1.25;
`;

export const Textarea = styled.textarea`
  padding: 18px;
  width: 100%;
  min-height: 114px;
  border: none;
  border-radius: 10px;
  background-color: var(--light-color);
  resize: none;
  outline: transparent;
  margin-bottom: 24px;

  &:placeholder {
    color: rgba(16, 24, 40, 0.6);
    line-height: 1.25;
  }
`;

export const SendButton = styled.button`
  border-radius: 200px;
  background: #e44848;
  padding: 16px 60px;
  color: #fff;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;
  transition: background-color var(--transition-effect);
  &:hover,
  &:focus {
    background-color: #d84343;
  }
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 430px;
`;

export const RatingContainer = styled.div`
  font-size: 24px;
`;

export const TopPartRev = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`;

export const PreName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f2f4f7;
  color: #e44848;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;

export const ReviewName = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
`;

export const Star = styled.span`
  color: ${({ filled }) => (filled ? 'gold' : '#ccc')};
`;

export const ReviewText = styled.p`
  color: var(--gray-color);
  line-height: 1.5;
`;
