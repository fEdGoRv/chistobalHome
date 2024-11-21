import ShowMaps from './showMaps';
import loc from '../util/icons/location.svg';
import insta from '../util/icons/instagram.png';


const Contact = () => {
  return (
    <div className="mt-4">
      <div
        className='h-48 my-4 bg-cover bg-center items-center font-josefin font-semibold'
        style={{ backgroundImage: 'url(/pinchos/DSC_2862.jpg)' }}
      >
        <p className='text-6xl text-white '>Contactenos</p>
      </div>
      <div className='flex justify-center'>
        <div className='w-72 mt-16'>
          <div>
            <img className="w-24 m-auto" src={loc} alt="location" />
            <p className='text-2xl text-morao font-josefin font-semibold mt-4'>Colon 1004</p>
            <p className='text-2xl text-morao font-josefin font-semibold '>Azul, Bs As.</p>
          </div>
          <div className='mt-8'>
            <img className='w-16 m-auto' src={insta} alt="instagram" />
            <p className='text-2xl text-morao font-josefin font-semibold p-4'>
              @cristobalhomegarden
            </p>
          </div>
        </div>
        <div className='w-[600px] h-[600px] m-4'>
          <ShowMaps />
        </div>
      </div>
    </div>
  );
};

export default Contact;
