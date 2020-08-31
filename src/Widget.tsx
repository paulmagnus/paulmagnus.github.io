import React from 'react';
import {
    Card
} from 'react-bootstrap';
import './Widget.scss';
import { Color, BorderColorClass, TextColorClass } from './Color';

interface IWidgetProps {
    children?: React.ReactNode;
    title: string;
    color?: Color;
    id?: string;
    date?: string;
}

export default function Widget(props: IWidgetProps): React.ReactElement {
    const color: Color = props.color || "primary";
    const className: string = `widget ${BorderColorClass(color)}`;
    const titleClassName: string = TextColorClass(color);
    const date: string = props.date || "";

    return (
        <Card id={props.id} className={className}>
            <div className="widget-header">
            <Card.Title className={titleClassName}>{props.title}</Card.Title>
            <span className={TextColorClass("muted")}>{date}</span>
            </div>
            {props.children}
        </Card>
    );
}