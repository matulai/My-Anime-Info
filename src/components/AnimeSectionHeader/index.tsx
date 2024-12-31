import './AnimeSectionHeader.css';

interface AnimeSectionHeaderProps {
  title: string;
  children: React.ReactNode;
}

const AnimeSectionHeader = ({ title, children }: AnimeSectionHeaderProps) => {
  return (
    <div className="animeSectionHeader-container">
      <div className="animeSectionHeader-container-title">
        {title.toUpperCase()}
      </div>
      {children}
    </div>
  );
};

export default AnimeSectionHeader;
