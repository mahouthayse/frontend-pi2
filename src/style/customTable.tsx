const customTable = {
    rows: {
        style: {
            paddingTop:'10px',
            paddingBottom:'10px',
            minHeight: '50px', // override the row height
            fontFamily:'Inter',
            fontSize:14,
        },
    },
    headCells: {
        style: {
            backgroundColor:`rgba(215, 227, 238, 0.2)`,
            fontFamily:'Inter',
            fontSize:14,
            fontWeight:600,
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    }
};

export default customTable;