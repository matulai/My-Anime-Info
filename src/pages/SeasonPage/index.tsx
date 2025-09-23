import { getSeasons, getActualSeason, getSeasonalAnimes } from '@/utils/api';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { animesToAnimeInfo } from '@/utils/functions';
import { Anime } from '@/utils/globalTypes';
import OptionsVertical from '@/components/OptionsVertical';
import AnimesSection from '@/components/AnimesSection';
import SearchIcon from '@/components/Icons/SearchIcon';
import Button from '@/components/Button';
import Genres from '@/components/Genres';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Modal from '@/components/Modal';
import '@/styles/PagesStyleBase.css';

const SeasonPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [year, setYear] = useState('');
  const [season, setSeason] = useState('');
  const [seasonalAnimes, setSeasonalAnimes] = useState<Anime[]>([]);

  // Para las opciones de años y temporadas
  const [years, setYears] = useState<string[]>([]);
  const seasons = ['winter', 'spring', 'summer', 'fall'];

  const [seasonsInfo, setSeasonsInfo] = useState<
    { year: string; seasons: string[] }[]
  >([]);

  const [seasonalAnimesIsLoading, setSeasonalAnimesIsLoading] = useState(true);
  const [seasonsInfoIsLoading, setSeasonsInfoIsLoading] = useState(true);

  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    getSeasons()
      .then((res) => {
        setYears(
          res.data.map(
            (season: { year: string; seasons: string[] }) => season.year
          )
        );
        setSeasonsInfo(res.data);

        if (Object.keys(params).length === 0) {
          setYear(res.data[0].year);
          setSeason(res.data[0].seasons[0]);
        }
      })
      .catch((err) => {
        setModalMessage(err.message);
      })
      .finally(() => {
        setSeasonsInfoIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (Object.keys(params).length === 0) {
      getActualSeason()
        .then((res) => {
          setSeasonalAnimes(animesToAnimeInfo(res.data));
          if (seasonsInfo.length > 0) {
            setYear(seasonsInfo[0].year);
            setSeason(seasonsInfo[0].seasons[0]);
          }
        })
        .catch((err) => {
          setModalMessage(err.message);
        })
        .finally(() => {
          setSeasonalAnimesIsLoading(false);
        });
    } else {
      getSeasonalAnimes(String(params.year), String(params.season))
        .then((res) => {
          setYear(String(params.year));
          setSeason(String(params.season));
          setSeasonalAnimes(animesToAnimeInfo(res.data));
        })
        .catch((err) => {
          setModalMessage(err.message);
        })
        .finally(() => {
          setSeasonalAnimesIsLoading(false);
        });
    }
  }, [params]);

  const goToSeasonalAnime = () => {
    setSeasonalAnimesIsLoading(true);
    navigate(`/seasons/${year}/${season}`);
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
                <div className="page-container-content-animesection-content-options">
                  <OptionsVertical
                    options={years}
                    onClick={(option) => {
                      setYear(option);
                    }}
                    defaultOption={year}
                  />
                  <OptionsVertical
                    options={seasons}
                    onClick={(option) => {
                      setSeason(option);
                    }}
                    defaultOption={season}
                  />
                  <Button
                    children={<SearchIcon color="#000000" size={20} />}
                    type="iconwithborder"
                    onClick={goToSeasonalAnime}
                  />
                </div>
              }
            />
          </div>
          <Genres />
        </div>
      </div>
      <Footer isLoading={seasonalAnimesIsLoading} />
      {modalMessage && (
        <Modal message={modalMessage} setModalMessage={setModalMessage} />
      )}
    </div>
  );
};

export default SeasonPage;
