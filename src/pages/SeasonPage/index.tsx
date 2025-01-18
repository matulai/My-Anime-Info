import { animesToAnimeInfo } from '@/utils/functions';
import { useEffect, useState } from 'react';
import { Anime } from '@/utils/globalTypes';
import OptionsVertical from '@/components/OptionsVertical';
import AnimesSection from '@/components/AnimesSection';
import Genres from '@/components/Genres';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Modal from '@/components/Modal';
import api from '@/utils/api';
import '@/styles/PagesStyleBase.css';

const SeasonPage = () => {
  const [seasonalAnimes, setSeasonalAnimes] = useState<Anime[]>([]);
  const [season, setSeason] = useState('spring');
  const [year, setYear] = useState('2024');

  const [seasonsInfo, setSeasonsInfo] = useState<
    { year: string; seasons: string[] }[]
  >([]);
  const [years, setYears] = useState<string[]>([]);
  const [seasons, setSeasons] = useState([
    'winter',
    'spring',
    'summer',
    'fall',
  ]);

  const [seasonalAnimesIsLoading, setSeasonalAnimesIsLoading] = useState(true);
  const [seasonsInfoIsLoading, setSeasonsInfoIsLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    api
      .getSeasons()
      .then((res) => {
        setSeasonsInfo(res.data);
        setYears(
          res.data.map(
            (season: { year: string; seasons: string[] }) => season.year
          )
        );
      })
      .catch((err) => {
        setModalMessage(err.message);
      })
      .finally(() => {
        setSeasonsInfoIsLoading(false);
      });
  }, []);

  useEffect(() => {
    api
      .getSeasonalAnimes(year, season)
      .then((res) => {
        setSeasonalAnimes(animesToAnimeInfo(res.data));
      })
      .catch((err) => {
        setModalMessage(err.message);
      })
      .finally(() => {
        setSeasonalAnimesIsLoading(false);
      });
  }, [season, year]);

  const yearChange = (option: string) => {
    if (option == seasonsInfo[0].year) {
      setYear(option);
      setSeasons(seasonsInfo[0].seasons);
    } else {
      setSeasons(['winter', 'spring', 'summer', 'fall']);
      setYear(option);
    }
    setSeasonalAnimesIsLoading(true);
  };

  return (
    <div className="page-container">
      <div className="page-container-content">
        <Header />
        <Navbar />
        <div className="page-container-content-animesection">
          <div className="page-container-content-animesection-content">
            <AnimesSection
              title={'Season animes'}
              animes={seasonalAnimes}
              isLoading={
                seasonalAnimesIsLoading ||
                (seasonalAnimesIsLoading && seasonsInfoIsLoading)
              }
              children={
                <div>
                  <OptionsVertical options={years} onClick={yearChange} />
                  <OptionsVertical
                    options={seasons}
                    onClick={(option) => {
                      setSeason(option);
                      setSeasonalAnimesIsLoading(true);
                    }}
                  />
                </div>
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

export default SeasonPage;
