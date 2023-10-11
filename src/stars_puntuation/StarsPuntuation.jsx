import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './StarsPuntuation.css';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

export default function StarsPuntuation({ puntuation }) {

    const stars = Array.from({ length: 5 }, (_, index) => (
        <FontAwesomeIcon className={`icon_stars_puntuation ${index < puntuation ? 'solid' : 'regular'}`}
          icon={index < puntuation ? solidStar : regularStar}
          key={index}
        />
      ));
    return (
        <div>
            {stars}
        </div>
    )
}