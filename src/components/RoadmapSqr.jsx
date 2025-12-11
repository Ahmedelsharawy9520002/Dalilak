import { Link } from "react-router-dom";
import { RxLightningBolt } from "react-icons/rx";
import { useTranslation } from 'react-i18next';

function Roadmapsqr(props){
    const { t } = useTranslation();
    return(
        <Link to={`/tracks/${props.title}`} style={{textDecoration: 'none', color: 'inherit'}}>
        <div className="roadmapsqrcont">
            <div className="iconcont d-flex justify-content-center align-items-center">
                <RxLightningBolt className="lightning"/>
            </div>
            <h5 className="mytitle fw-bold">{props.title}</h5>
            <p className="roadmapsqrdesc">{props.desc}</p>
            <div className="d-flex gap-2">
                <p className="levelsqr" level={props.level}>{props.level}</p>
                <p className="duration">{props.duration}</p>
            </div>
            <p className="fs-small steps">{props.steps}</p>
            <p className="view">{t('roadmapsPage.view')} &gt;</p>
        </div>
        </Link>
    )
}
export default Roadmapsqr;