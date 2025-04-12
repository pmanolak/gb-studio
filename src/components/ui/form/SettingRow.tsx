import styled, { css } from "styled-components";
import { CardHeading } from "ui/cards/Card";

export const SettingRow = styled.div`
  display: flex;
  padding-bottom: 3px;
  padding-top: 3px;
  border-bottom: 1px solid ${(props) => props.theme.colors.card.divider};
  align-items: flex-start;
  padding: 3px 5px;
  box-sizing: border-box;
  min-height: 34px;

  ${CardHeading} + & {
    border-top: 1px solid ${(props) => props.theme.colors.card.divider};
  }

  & > :nth-child(2) {
    max-width: 300px;
  }
`;

interface SettingRowLabelProps {
  sectionHeading?: boolean;
  indent?: number;
}

export const SettingRowLabel = styled.label<SettingRowLabelProps>`
  width: 300px;
  min-height: 28px;
  padding: 5px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${(props) => props.theme.typography.fontSize};
  ${(props) =>
    props.sectionHeading
      ? css`
          font-weight: bold;
        `
      : ""}
  ${(props) =>
    props.indent
      ? css`
          padding-left: ${props.indent * 20}px;
        `
      : ""}
`;

export const SettingRowInput = styled.div`
  width: 300px;
  min-height: 28px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const SettingRowUnits = styled.label`
  min-height: 28px;
  min-width: 30px;
  padding: 5px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  font-size: ${(props) => props.theme.typography.fontSize};
`;
