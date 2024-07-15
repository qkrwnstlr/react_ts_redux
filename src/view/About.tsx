import { useLocation, useParams } from "react-router-dom";
import qs from "qs";

type AboutParams = {
  value: string;
};


const About = () => {
  const value = useParams<AboutParams>().value;
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  return (
    <div>
      {value} {`${query}`}
    </div>
  );
};

export default About;
