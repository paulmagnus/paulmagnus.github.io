export type Color = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "white" | "epic-red" | "linkedIn-blue" | "gitHub-green" | "hamilton-blue" | "ait-green";
export type TextColor = Color | "muted";

export function TextColorClass(color: TextColor): string {
    return `text-${color}`;
}

export function BackgroundColorClass(color: Color): string {
    return `bg-${color}`;
}

export function BorderColorClass(color: Color): string {
    return `border-${color}`;
}