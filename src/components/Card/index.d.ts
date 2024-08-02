import React from 'react';
import { IStatus } from '../../types';
interface IProps {
    cover: string;
    name: string;
    last_editied: string;
    status: IStatus;
    languages: string[];
}
declare const StatusCard: React.FC<IProps>;
export default StatusCard;
