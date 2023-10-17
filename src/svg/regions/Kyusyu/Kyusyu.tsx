import {
  FukuokaPath,
  KagoshimaPath,
  MiyazakiPath,
  NagasakiPath,
  OitaPath,
  SagaPath,
  KumamotoPath,
} from ".";
import { DefaultSVGProps } from "../../types";

type KyusyuSVGProps = DefaultSVGProps;

export const KyusyuSVG = ({ ...props }: KyusyuSVGProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="1070 2250 590 1500"
    >
      <FukuokaPath />
      <KagoshimaPath />
      <KumamotoPath />
      <MiyazakiPath />
      <NagasakiPath />
      <OitaPath />
      <SagaPath />
    </svg>
  );
};
