import React from 'react';
import {withRouter} from 'react-router-dom'

import './collectionItem.styles.scss';

const CollectionItem = ({data:{title,imageUrl, price},history, match}) => {
    return (
        <div className='item'>
            <div className="item__image" onClick={() => history.push(`${match.url}/${title}`)}>
                <img src={imageUrl} alt="item"/>
            </div>
            <div className="item__title" onClick={() => history.push(`${match.url}/${title}`)}>
                {title.split('-').join(' ')}
            </div>
            <div className="item__price">
                <span>{price}</span>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
                    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                    <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M2427.3,4998.4c-617.4-55.2-1085.5-206.5-1420.8-457.9C798,4383.1,767.3,4327.9,567,3786.2l-179.9-494.7l12.3-177.9l14.3-179.9h392.5h394.5l12.3,179.9c77.7,981.3,594.9,1363.5,1801,1326.7c378.2-10.2,560.1-45,780.9-149.2c151.3-71.6,327.1-247.4,402.7-404.8c106.3-220.8,112.4-321,114.5-1631.3V1053h-623.5h-623.5V807.6V562.3l609.2-4.1l607.2-6.1l12.3-1400.3c16.4-1619.1,24.5-1829.6,77.7-2064.7c83.8-370,251.5-738,451.8-989.4c484.5-609.2,1377.9-930.1,2453.1-883.1c554,24.5,940.4,112.4,1318.6,296.4c398.6,196.2,660.3,447.7,838.2,809.5c126.7,255.5,179.9,488.6,179.9,797.3c2,353.7-63.4,562.2-278,879c-114.5,167.6-398.6,443.6-619.4,601c-184,130.8-549.9,327.1-570.4,306.7c-14.3-16.4-237.1-656.2-231-662.4c4.1-4.1,155.4-79.7,337.3-171.7c308.7-153.3,339.3-173.8,425.2-282.1c222.8-284.1,233.1-731.8,28.6-1148.9c-171.7-345.5-496.8-588.7-948.6-701.2c-165.6-40.9-233-47-695-47c-415,0-549.9,8.2-715.5,38.9c-370,69.5-623.5,171.7-819.7,331.1c-77.7,61.3-92,90-188.1,380.3c-57.2,171.7-132.9,431.3-167.6,576.5l-61.3,261.7V-979V562.3h603.1h603.1v241.2v243.3l-372.1,12.3c-202.4,8.2-474.3,14.3-603.1,14.3h-231v956.7c0,525.4-10.2,1065.1-20.4,1200c-75.6,958.8-633.7,1563.9-1606.8,1737.6C3265.4,5006.6,2705.3,5022.9,2427.3,4998.4z"/></g></g>
                </svg>
            </div>
        </div>
    );
};

export default withRouter(CollectionItem);

