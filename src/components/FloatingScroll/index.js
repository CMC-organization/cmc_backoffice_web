const FloatingScroll = ({ width }) => {
 /* STYLES */
 const scrollContainerStyle = {
  position: 'fixed',
  width: '80%',
  padding: '10px',
  paddingLeft: '10px',
  backgroundColor: '#fff',
  bottom: '30px',
  zIndex: 1,
  border: '1px solid #d7d7d7',
  borderBottom: '1px solid transparent',
  borderRadius: '10px',
  overflowX: 'scroll',
 };

 const fillerTextStyle = {
  width: width,
 };

 const bottomContainerStyle = {
  position: 'fixed',
  width: '80%',
  padding: '20px',
  backgroundColor: '#fff',
  bottom: '15px',
  border: '1px solid #d7d7d7',
  borderRadius: '10px',
  boxShadow: '0px 2px 24px -9px',
 };

 /* RENDER */
 return (
  <>
   <div id='test' className='scrollLowerUp' style={scrollContainerStyle}>
    <p style={fillerTextStyle}></p>
   </div>
   <div style={bottomContainerStyle}></div>
  </>
 );
};

export default FloatingScroll;
