import { BoxWrapper } from "../..";
import { StepItem } from "./StepItem";
import { GrDocumentUser } from "react-icons/gr";
import { LuPencilRuler } from "react-icons/lu";
import { GoProject } from "react-icons/go";
import { IoHammerOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

export const StepsBuilding = () => {
  return (
    <BoxWrapper className="relative bg-[url('/assets/images/kitchen/1/1.jpg')] bg-center">
      <div className="absolute inset-0 w-full h-full bg-white/70 lg:bg-white/85"></div>
      <div className="z-10 relative">
        <div className="bg-yellow-2 p-6 lg:p-8 lg:rounded-2xl -ml-4 w-[calc(100%+32px)] lg:ml-0 lg:w-full">
          <h2 className="text-2xl lg:text-3xl font-semibold text-center">
            <span className="block w-full text-4xl font-bold">5 шагов</span>и
            кухня мечты у вас дома
          </h2>
        </div>

        <div className="flex flex-col items-center lg:flex-row mt-10 gap-3 lg:grid lg:grid-cols-5 lg:items-start">
          <StepItem
            icon={<GrDocumentUser size={30} color="#000" />}
            count={1}
            title={<p>Оставляете заявку</p>}
          />
          <StepItem
            icon={<LuPencilRuler size={30} color="#000" />}
            count={2}
            title={<p>Согласовываем выезд дизайнера и замер</p>}
          />
          <StepItem
            icon={<GoProject size={30} color="#000" />}
            count={3}
            title={<p>Согласовываем проект</p>}
          />
          <StepItem
            icon={<IoHammerOutline size={30} color="#000" />}
            count={4}
            title={<p>Производство вашей кухни</p>}
          />
          <StepItem
            icon={<TbTruckDelivery size={30} color="#000" />}
            count={5}
            title={<p>Доставка и монтаж</p>}
          />
        </div>
      </div>
    </BoxWrapper>
  );
};
