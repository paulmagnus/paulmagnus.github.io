import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Color, TextColorClass } from './Color';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './IconLink.scss';

interface IIconLinkProps {
    color?: Color;
    icon: IconProp;
    href?: string;
    text: string;
}

export default function IconLink(props: IIconLinkProps): React.ReactElement {
    const colorClass: string = props.color != null ? TextColorClass(props.color) : "";
    const className: string = `linkIcon ${colorClass}`;

    return (
        <span className="iconLink">
            <FontAwesomeIcon icon={props.icon} className={className} />
            <a href={props.href}>{props.text}</a>
        </span>
    )
}