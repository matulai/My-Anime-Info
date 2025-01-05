import { Anime } from '@/utils/globalTypes.ts';
import AnimeSectionHeader from '@/components/AnimesSectionHeader';
import AnimesBox from '@/components/AnimesBox';
import './AnimesSection.css';

interface AnimesSectionProps {
  title?: string;
  animes?: Anime[];
  isLoading: boolean;
  children?: React.ReactNode;
}

const AnimesSection = ({
  title = '',
  animes = [],
  isLoading,
  children,
}: AnimesSectionProps) => {
  return (
    <div className="randomanimes-container">
      <AnimeSectionHeader title={title} children={children} />
      <AnimesBox animeArr={animes} isLoading={isLoading} />
    </div>
  );
};

export default AnimesSection;
