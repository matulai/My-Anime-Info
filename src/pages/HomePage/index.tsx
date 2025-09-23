import { useEffect, useState } from 'react';
import { getWeeklySchedule } from '@/utils/api';
import { animesToAnimeInfo } from '@/utils/functions';
import { Anime } from '@/utils/globalTypes';
import OptionsVertical from '@/components/OptionsVertical';
import AnimesSection from '@/components/AnimesSection';
import Footer from '@/components/Footer';
import Genres from '@/components/Genres';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Modal from '@/components/Modal';
import '@/styles/PagesStyleBase.css';

const HomePage = () => {
  const [scheduleAnimes, setScheduleAnimes] = useState<Anime[]>([]);
  const [weekDay, setWeekDay] = useState('Monday');

  const [isLoading, setIsLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getWeeklySchedule(weekDay)
      .then((res) => {
        setScheduleAnimes(animesToAnimeInfo(res.data));
      })
      .catch((err) => {
        setModalMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [weekDay]);

  return (
    <div className="page-container">
      <div className="page-container-content">
        <Header />
        <Navbar />
        <div className="page-container-content-animesection">
          <AnimesSection
            title={'weekly schedule'}
            animes={scheduleAnimes}
            isLoading={isLoading}
            children={
              <OptionsVertical
                options={[
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ]}
                defaultOption={weekDay}
                onClick={(option) => setWeekDay(option)}
              />
            }
          />
          <Genres />
        </div>
      </div>
      <Footer isLoading={isLoading} />
      {modalMessage && (
        <Modal message={modalMessage} setModalMessage={setModalMessage} />
      )}
    </div>
  );
};

export default HomePage;
