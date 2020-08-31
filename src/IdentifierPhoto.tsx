import React, { ReactNode, Component } from 'react';
import Avatar, { AvatarStyle } from 'avataaars';
import './IdentifierPhoto.scss';

type ClothingType = "BlazerShirt" | "CollarSweater" | "GraphicShirt" | "Hoodie" | "Overall" | "ShirtCrewNeck" | "ShirtScoopNeck" | "ShirtVNeck";
type ClothingColor = "Black" | "Blue01" | "Blue02" | "Blue03" | "Gray01" | "Gray02" | "Heather" | "PastelBlue" | "PastelGreen" | "PastelOrange" | "PastelRed" | "PastelYellow" | "Pink" | "Red" | "White";
type EyeType = "Close" | "Cry" | "Default" | "Dizzy" | "EyeRoll" | "Happy" | "Hearts" | "Side" | "Squint" | "Surprised" | "Wink" | "WinkWacky";
type MouthType = "Concerned" | "Default" | "Disbelief" | "Eating" | "Grimace" | "Sad" | "ScreamOpen" | "Serious" | "Smile" | "Tongue" | "Twinkle" | "Vomit";

export interface IIdentifierPhotoProps {
    style?: React.CSSProperties;
    avatarStyle?: AvatarStyle;
    clothingType?: ClothingType;
    clothingColor?: ClothingColor;
    eyeType?: EyeType;
    mouthType?: MouthType;
    center?: boolean;
}

export default class IdentifierPhoto extends Component<IIdentifierPhotoProps> {
    render(): ReactNode {
        const avatarStyle: AvatarStyle = this.props.avatarStyle || AvatarStyle.Circle;
        const clothingType: ClothingType = this.props.clothingType || "ShirtCrewNeck";
        const clothingColor: ClothingColor = this.props.clothingColor || "Red";
        const eyeType: EyeType = this.props.eyeType || "Default";
        const mouthType: MouthType = this.props.mouthType || "Smile";

        const containerClass: string = this.props.center ? "centerPhoto" : "";

        return (
            <div className={containerClass}>
                <Avatar
                    style={this.props.style}
                    avatarStyle={avatarStyle}
                    topType="ShortHairShortRound"
                    accessoriesType="Prescription02"
                    hairColor="Brown"
                    facialHairType="Blank"
                    clotheType={clothingType}
                    clotheColor={clothingColor}
                    eyeType={eyeType}
                    eyebrowType="DefaultNatural"
                    mouthType={mouthType}
                    skinColor="Light"
                />
            </div>
        );
    }
}