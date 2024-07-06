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
    shapeColor: string;
}
export type Basic = {
    fileURL: string;
    position: Position;
    text1: string;
    text2: string;
}

export type Fade = {
    color1: string;
    color2: string;
    fadeColor: string;
    fileURL: string;
    position: Position;
    text1: string;
    text2: string;
} & Basic;

export type Curbe = {
    shapeColor: string;
} & Fade

type NestedKeyValue<T> = {
    [K in keyof T]: { key: K; value: T[K] }
}[keyof T];

// Define the specific setting types using the generic type
type BasicSetting = NestedKeyValue<Basic>;
type FadeSetting2 = NestedKeyValue<Fade>;
type CurbeSetting = NestedKeyValue<Curbe>;

// Define a more specific mapping type for each key
type SpecificSetting<T extends 'basic' | 'fade' | 'curbe'> =
    T extends 'basic' ? { key: 'basic'; setting: BasicSetting } :
    T extends 'fade' ? { key: 'fade'; setting: FadeSetting2 } :
    T extends 'curbe' ? { key: 'curbe'; setting: CurbeSetting } :
    never;
 
// TODO : make this more generic
/**
 * currentyl only used for updating the curbe setting
 * and it worked well
 */
const updateSetting: SpecificSetting<'curbe'> = {
    key: 'curbe',
    setting: {
        key: 'shapeColor',
        value: 'top-left'
    }
}

export type FadeSettingProp = {
    [k in keyof FadeSetting]: { key: k, value: FadeSetting[k] }
}[keyof FadeSetting]

export const defaultFadeSetting: FadeSetting = {
    fileURL: "https://plus.unsplash.com/premium_photo-1689974465650-b223928cdc9e?q=80&w=3884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text1: "",
    text2: "",
    color1: "#000000",
    color2: "#000000",
    position: "top-left",
    fadeColor: "#000000",
    shapeColor: '#000000'
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
export const currentChanged = writable<FadeSettingProp>({ key: "fileURL", value: "https://plus.unsplash.com/premium_photo-1689974465650-b223928cdc9e?q=80&w=3884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" })

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
