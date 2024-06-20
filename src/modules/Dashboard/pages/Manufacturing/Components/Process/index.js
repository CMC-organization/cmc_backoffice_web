import RedPoint from '../../../../../../images/svg/RedPoint';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Process = () => {
 return (
  <div class={'flex flex-col gap-4 border border-gray-200 rounded-3xl p-3'}>
   <p class='font-bold text-sm'>Progresso da produção</p>
   <div class={'flex gap-12 items-center'}>
    <div class={'w-32 h-20'}>
     <CircularProgressbar
      value={40}
      text={`${40}%`}
      circleRatio={0.5}
      styles={buildStyles({
       rotation: 3 / 4,
       pathColor: '#C40024',
       textColor: '#000000',
      })}
     />
    </div>
    <div class={'flex flex-col gap-3'}>
     <div class={'w-52 flex items-center justify-between'}>
      <div class={'flex items-center gap-2'}>
       <RedPoint />
       <p class='font-semibold text-xs'>Em fabricação</p>
      </div>
      <p class='text-xs text-font'>40.00%</p>
     </div>
     <div class={'w-52 flex items-center justify-between'}>
      <div class={'flex items-center gap-2'}>
       <RedPoint />
       <p class='font-semibold text-xs'>Fabricação finalizada</p>
      </div>
      <p class='text-xs text-font'>60.00%</p>
     </div>
    </div>
   </div>
  </div>
 );
};
export default Process;
