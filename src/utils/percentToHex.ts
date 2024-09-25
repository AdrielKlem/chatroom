interface percentProps {
    percent: number
}

export const percentToHex = ({ percent }: percentProps) => Math.round(percent * 255).toString(16);

/*
    // Example:
    percentToHex(1); // Output: "FF"
    percentToHex(0); // Output: "00"
    percentToHex(0.9); // Output: "E6"

    // Font: https://atmos.style/blog/working-with-colors-in-code
*/
