export const light = {
    fontFamily: 'Inter, sans-serif',
    colors: {
        light: [
            '#F0F1F7',
            '#DDE2E7',
            '#8c8fa3',
            '#666980',
            '#4d4f66',
            '#34354a',
            '#2b2c3d',
            '#F3F6F9',
            '#0c0d21',
            '#01010a',
        ],
        brand: [
                "#DEDEDE",
                "#D1D0D2",
                "#C5C3C8",
                "#B8B5C0",
                "#BAA3EB",
                "#A585EC",
                "#845ADF",
                "#6837D1",
                "#5427B6",
                "#7E778D",
                "#78757F",
                "#727075",
                "#6C6B6D"
        ],
        accent: [
                "#BABCBC",
                "#AFB2B3",
                "#A2A9AB",
                "#94A2A7",
                "#6FD1EF",
                "#55C6E9",
                "#23B7E5",
                "#15A9D8",
                "#0F93BC",
                "#637378",
                "#626A6C",
                "#5E6263",
                "#5A5C5C"
        ]
    },
    primaryColor: 'brand',
    colorScheme: 'light',
    black: '#5B6A78',
    headings: {
        fontFamily: 'Inter, sans-serif',
        sizes: {
        }
    },
    components: {
        Paper: {
            styles: {
                root: {backgroundColor: '#FFFFFF'},
            },
        },
        Text: {
            styles: {
                root: {color: '#5B6A78'},
            },
        },
        Button: {
            styles: {
                root: {fontWeight: 500},
            },
        }
    }
}