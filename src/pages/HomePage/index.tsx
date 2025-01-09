import { toAnimeInfo, animesToAnimeInfo } from '@/utils/functions';
import { useEffect, useState } from 'react';
import { Anime } from '@/utils/globalTypes';
import OptionsVertical from '@/components/OptionsVertical';
import AnimesSection from '@/components/AnimesSection';
import RefreshIcon from '@/components/Icons/RefreshIcon';
import Genres from '@/components/Genres';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import api from '@/utils/api';
import '@/styles/PagesStyleBase.css';

const HomePage = () => {
  const [randomAnimes, setRandomAnimes] = useState<Anime[]>([]);
  const [scheduleAnimes, setScheduleAnimes] = useState<Anime[]>([]);
  const [wantRefresh, setWantRefresh] = useState(false);
  const [weekDay, setWeekDay] = useState('Monday');

  const [randomIsLoading, setRandomIsLoading] = useState(true);
  const [scheduleIsLoading, setScheduleIsLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      api
        .getRandomAnime()
        .then((res) => {
          setRandomAnimes((prevAnimes) => [
            ...prevAnimes,
            toAnimeInfo(res.data),
          ]);
        })
        .catch((err) => {
          setModalMessage(err.message);
        })
        .finally(() => {
          setRandomIsLoading(false);
        });
    }
  }, [wantRefresh]);

  useEffect(() => {
    api
      .getWeeklySchedule(weekDay)
      .then((res) => {
        setScheduleAnimes(animesToAnimeInfo(res.data));
      })
      .catch((err) => {
        setModalMessage(err.message);
      })
      .finally(() => {
        setScheduleIsLoading(false);
      });
  }, [weekDay]);

  const refresh = () => {
    setRandomAnimes([]);
    setRandomIsLoading(true);
    setWantRefresh(!wantRefresh);
  };

  return (
    <div className="page-container">
      <div className="page-container-content">
        <Header />
        <Navbar />
        <div className="page-container-content-animesection">
          <div className="page-container-content-animesection-content">
            <AnimesSection
              title={'random animes'}
              animes={randomAnimes}
              isLoading={randomIsLoading}
              children={
                <Button
                  children={<RefreshIcon />}
                  type={'onlyicon'}
                  onClick={refresh}
                />
              }
            />
            <AnimesSection
              title={'weekly schedule'}
              animes={scheduleAnimes}
              isLoading={scheduleIsLoading}
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
                  onClick={(option) => setWeekDay(option)}
                />
              }
            />
          </div>
          <Genres />
        </div>
      </div>
      {modalMessage && (
        <Modal message={modalMessage} setModalMessage={setModalMessage} />
      )}
    </div>
  );
};

export default HomePage;
