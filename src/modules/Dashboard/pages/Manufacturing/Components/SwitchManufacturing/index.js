const SwitchManufacturing = ({ adm, setAdm, op, setOp }) => {
 return (
  <div class='flex'>
   {adm ? (
    <div class='w-48 h-9 bg-primar rounded-3xl text-white font-boldc cursor-pointer flex items-center justify-center  duration-1000'>
     <p>Em andamento</p>
    </div>
   ) : (
    <div
     class='w-48 h-9 bg-white rounded-3xl text-primar font-boldc cursor-pointer flex items-center justify-center'
     onClick={() => {
      setAdm(true);
      setOp(false);
     }}
    >
     <p>Em andamento</p>
    </div>
   )}
   {op ? (
    <div class='w-48 h-9 bg-primar rounded-3xl text-white font-boldc cursor-pointer flex items-center justify-center duration-1000'>
     <p>Finalizados</p>
    </div>
   ) : (
    <div
     class='w-48 h-9 bg-white rounded-3xl text-primar font-boldc cursor-pointer flex items-center justify-center'
     onClick={() => {
      setOp(true);
      setAdm(false);
     }}
    >
     <p>Finalizados</p>
    </div>
   )}
  </div>
 );
};
export default SwitchManufacturing;
