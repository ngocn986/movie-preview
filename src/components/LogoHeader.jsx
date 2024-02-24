import Logo from '../assets/logo.png';
export default function LogoHeader() {
  return (
    <>
      <div className='flex justify-center flex-grow-[1]'>
        <img className="h-[80px]" width={200} src={Logo} alt="No picture"></img>
      </div>
    </>
  );
}
