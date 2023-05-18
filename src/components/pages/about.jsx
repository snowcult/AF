import { useNavigate } from 'react-router-dom';
import Header from '../Header.jsx';

const About = () => {
  const navigate = useNavigate();
  const gotoHome = () => navigate('/');
  return (
    <div className="tc">
      <Header />
      <h2 className="f-2 white">Contact me</h2>
      <button className="hover-blue" onClick={gotoHome}>
        Home
      </button>
    </div>
  );
};

export default About;
