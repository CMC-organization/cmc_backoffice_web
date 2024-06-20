const Goals = () => {
 return (
  <div class={'w-full flex flex-col gap-4 border border-gray-200 rounded-3xl p-3'}>
   <p class='font-bold text-sm'>Metas de fabricação</p>
   <div class={'w-full flex justify-between'}>
    <div class={'w-44 flex flex-col gap-2 border border-gray-200 rounded-3xl p-3'}>
     <p class='font-semibold text-xs'>Meta diária %</p>
     <p class='font-semibold text-xs'>95%</p>
    </div>
    <div class={'w-44 flex flex-col gap-2 border border-gray-200 rounded-3xl p-3'}>
     <p class='font-semibold text-xs'>QTD à fabricar</p>
     <p class='font-semibold text-xl'>10.000</p>
    </div>
    <div class={'w-44 flex flex-col gap-2 border border-gray-200 rounded-3xl p-3'}>
     <p class='font-semibold text-xs'>QTD fabricada</p>
     <p class='font-semibold text-xl'>2.400</p>
    </div>
    <div class={'w-44 flex flex-col gap-2 border border-gray-200 rounded-3xl p-3'}>
     <p class='font-semibold text-xs'>% Realizada</p>
     <p class='font-semibold text-xl'>24%</p>
    </div>
   </div>
  </div>
 );
};
export default Goals;
