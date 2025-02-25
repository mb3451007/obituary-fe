'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Layout from '../../../components/appcomponents/Layout';
import ObituaryPublished from '../../../components/appcomponents/ObituaryPublished';
import FlowerShops from '../../../components/appcomponents/FlowerShops';
import ShippingNotifications from '../../../components/appcomponents/ShippingNotifications';
import MemorialPageTopComp from '../../../components/appcomponents/MemorialPageTopComp';
import Condolences from '../../../components/appcomponents/Condolences';
import ImageWall from '../../../components/appcomponents/ImageWall';
import SanctifiedComp from '../../../components/appcomponents/SanctifiedComp';
import ModalLibrary from '../../../components/appcomponents/ModalLibrary';
import ImageFullView from '../../../components/appcomponents/ImageFullView';
import imgUp from '@/public/ico_up.png';
import Image from 'next/image';
import obituaryService from '@/services/obituary-service';
import { toast } from 'react-hot-toast';

const MemoryPage = ({ params }) => {
  const { id, user } = params;

  const [isShowModal, setIsShowModal] = useState(false);
  const [select_id, setSelect_Id] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const [showImageView, setShowImageView] = useState(false);
  const [imageId, setImageId] = useState('1');

  const [obituary, setObituary] = useState([]);

  useEffect(() => {
    const fetchObituary = async () => {
      try {
        const response = await obituaryService.getObituary({ id });

        if (response.error) {
          toast.error(
            response.error || 'Something went wrong. Please try again!'
          );
          return;
        }

        setObituary(response.obituaries[0]);

        if (id) {
          const visitRespone = await obituaryService.updateObituaryVisits(id);

          if (visitRespone.error) {
            toast.error(
              visitRespone.error || 'Something went wrong. Please try again!'
            );
            return;
          }

          setObituary(visitRespone);
        }
      } catch (err) {
        console.error('Error fetching obituary:', err);
        toast.error(err.message || 'Failed to fetch obituary.');
      }
    };

    fetchObituary();
  }, []);

  return (
    <Layout from={'3'} forFooter={'memorypage'}>
      <div className='flex flex-1 flex-col mx-auto bg-[#ecf0f3]'>
        <ModalLibrary
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          select_id={select_id}
          set_Id={setSelect_Id}
          selectedImage={selectedImage}
        />
        <ImageFullView
          showImageView={showImageView}
          imageId={imageId}
          setShowImageView={setShowImageView}
        />
        <MemorialPageTopComp
          set_Id={setSelect_Id}
          setModal={setIsShowModal}
          data={obituary}
        />
        {false && (
          <SanctifiedComp set_Id={setSelect_Id} setModal={setIsShowModal} />
        )}
        {false && (
          <ImageWall
            set_Id={setSelect_Id}
            setModal={setIsShowModal}
            setShowImageView={setShowImageView}
            setImageId={setImageId}
          />
        )}
        <Condolences
          set_Id={setSelect_Id}
          setModal={setIsShowModal}
          data={obituary}
        />
        <ShippingNotifications
          set_Id={setSelect_Id}
          setModal={setIsShowModal}
        />
        <FlowerShops set_Id={setSelect_Id} setModal={setIsShowModal} />
        <ObituaryPublished
          set_Id={setSelect_Id}
          setModal={setIsShowModal}
          data={obituary}
        />
        <div
          className='z-50 bottom-10 right-10 fixed w-[48px] h-[48px] mt-[26px] 
                shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]
                flex justify-center items-center rounded-lg'
        >
          <Image src={imgUp} alt='imgPrevious' className=' w-[24px] h-[24px]' />
        </div>
      </div>
    </Layout>
  );
};

export default MemoryPage;
