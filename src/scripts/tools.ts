import { writable } from 'svelte/store';

/**
 * The settings for the fade cover.
 * @typedef {Object} FadeSetting
 * @property {File | null} file - The file to be used for the fade cover.
 * @property {string} text1 - The first text to be displayed.
 * @property {string} text2 - The second text to be displayed.
 * @property {string} color1 - The color of the first text.
 * @property {string} color2 - The color of the second text.
 * @property {(typeof positions)[number]} position - The position of the texts.
 * @property {string} fadeColor - The color of the fade effect.
 */
export type FadeSetting = {
    fileURL: string;
    text1: string;
    text2: string;
    color1: string;
    color2: string;
    position: Position;
    fadeColor: string;
}
export type FadeSettingProp = {
    [k in keyof FadeSetting]: { key: k, value: FadeSetting[k] }
}[keyof FadeSetting]

export const defaultFadeSetting: FadeSetting = {
    fileURL: "",
    text1: "",
    text2: "",
    color1: "#000000",
    color2: "#000000",
    position: "top-left",
    fadeColor: "#000000",
}

export type XPosition = 'left' | 'center' | 'right';
export type YPosition = 'top' | 'center' | 'bottom'
export type Position = `${YPosition}-${XPosition}`;

const textPositions: Position[] = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
] as const;

export type TextPosition = (typeof textPositions)[number]

export const editMode = writable<boolean>(false);
export const positions = writable<typeof textPositions>(textPositions)
export const fadeSetting = writable<FadeSetting>(defaultFadeSetting)
export const currentChanged = writable<FadeSettingProp>({ key: "position", value: "top-left" })

/**
 * A function that updates the fade cover settings.
 *
 * @param {FadeSetting} settings - The settings to update the fade cover.
 * @return {void} 
 */
export const updateFadeSetting = (settings: Partial<FadeSetting>) => {
    fadeSetting.update((tool) => {
        return {
            ...tool,
            ...settings
        }
    })
}

