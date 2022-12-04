const colours = {
    DMCB5200: {
        rgb: '#ffffff',
        dmc: 'B5200',
        anchor: '00001',
        ariadna: '1500',
    },
    DMCBLANC: {
        rgb: '#f9f9f5',
        dmc: 'Blanc',
        anchor: '00002',
        ariadna: '',
    },
    DMCECRU: {
        rgb: '#f0e3cd',
        dmc: 'Ecru',
        anchor: '00387',
        ariadna: '1790',
    },
    DMC01: {
        rgb: '#d1d0cd',
        dmc: '01',
        anchor: '00274',
        ariadna: '',
    },
    DMC02: {
        rgb: '#bebebd',
        dmc: '02',
        anchor: '00398',
        ariadna: '',
    },
    DMC03: {
        rgb: '#97989c',
        dmc: '03',
        anchor: '00399',
        ariadna: '',
    },
    DMC04: {
        rgb: '#747275',
        dmc: '04',
        anchor: '00235',
        ariadna: '',
    },
    DMC05: {
        rgb: '#c5b7ad',
        dmc: '05',
        anchor: '00390',
        ariadna: '',
    },
    DMC06: {
        rgb: '#bdaea3',
        dmc: '06',
        anchor: '00390',
        ariadna: '',
    },
    DMC07: {
        rgb: '#8f7d6f',
        dmc: '07',
        anchor: '00233',
        ariadna: '',
    },
    DMC08: {
        rgb: '#584437',
        dmc: '08',
        anchor: '01086',
        ariadna: '',
    },
    DMC09: {
        rgb: '#412e30',
        dmc: '09',
        anchor: '01041',
        ariadna: '',
    },
    DMC10: {
        rgb: '#eae2bd',
        dmc: '10',
        anchor: '00386',
        ariadna: '',
    },
    DMC11: {
        rgb: '#e8d77c',
        dmc: '11',
        anchor: '00288',
        ariadna: '',
    },
    DMC12: {
        rgb: '#d9c854',
        dmc: '12',
        anchor: '00278',
        ariadna: '',
    },
    DMC13: {
        rgb: '#b9d39f',
        dmc: '13',
        anchor: '00203',
        ariadna: '',
    },
    DMC14: {
        rgb: '#dfe2a5',
        dmc: '14',
        anchor: '00300',
        ariadna: '',
    },
    DMC15: {
        rgb: '#d2d48d',
        dmc: '15',
        anchor: '00265',
        ariadna: '',
    },
    DMC16: {
        rgb: '#c2c65b',
        dmc: '16',
        anchor: '00278',
        ariadna: '',
    },
    DMC17: {
        rgb: '#e9c65f',
        dmc: '17',
        anchor: '00278',
        ariadna: '',
    },
    DMC18: {
        rgb: '#e1ba44',
        dmc: '18',
        anchor: '00295',
        ariadna: '',
    },
    DMC19: {
        rgb: '#fbc07c',
        dmc: '19',
        anchor: '00301',
        ariadna: '',
    },
    DMC20: {
        rgb: '#f7c0af',
        dmc: '20',
        anchor: '00006',
        ariadna: '',
    },
    DMC21: {
        rgb: '#b26556',
        dmc: '21',
        anchor: '01013',
        ariadna: '',
    },
    DMC22: {
        rgb: '#832725',
        dmc: '22',
        anchor: '01025',
        ariadna: '',
    },
    DMC23: {
        rgb: '#f9eaea',
        dmc: '23',
        anchor: '00271',
        ariadna: '',
    },
    DMC24: {
        rgb: '#e9dee4',
        dmc: '24',
        anchor: '00342',
        ariadna: '',
    },
    DMC25: {
        rgb: '#dbd5e0',
        dmc: '25',
        anchor: '00342',
        ariadna: '',
    },
    DMC26: {
        rgb: '#c9c8da',
        dmc: '26',
        anchor: '00120',
        ariadna: '',
    },
    DMC27: {
        rgb: '#e2dfe1',
        dmc: '27',
        anchor: '00234',
        ariadna: '',
    },
    DMC28: {
        rgb: '#797284',
        dmc: '28',
        anchor: '00235',
        ariadna: '',
    },
    DMC29: {
        rgb: '#3c2e44',
        dmc: '29',
        anchor: '00872',
        ariadna: '',
    },
    DMC30: {
        rgb: '#7e7d9e',
        dmc: '30',
        anchor: '00109',
        ariadna: '',
    },
    DMC31: {
        rgb: '#5c5b80',
        dmc: '31',
        anchor: '00122',
        ariadna: '',
    },
    DMC32: {
        rgb: '#3e4063',
        dmc: '32',
        anchor: '00139',
        ariadna: '',
    },
    DMC33: {
        rgb: '#814a7e',
        dmc: '33',
        anchor: '00087',
        ariadna: '',
    },
    DMC34: {
        rgb: '#68175c',
        dmc: '34',
        anchor: '00088',
        ariadna: '',
    },
    DMC35: {
        rgb: '#501141',
        dmc: '35',
        anchor: '01028',
        ariadna: '',
    },
    DMC150: {
        rgb: '#751333',
        dmc: '150',
        anchor: '00059',
        ariadna: '',
    },
    DMC151: {
        rgb: '#e8bbc4',
        dmc: '151',
        anchor: '00023',
        ariadna: '1573',
    },
    DMC152: {
        rgb: '#C39594',
        dmc: '152',
        anchor: '00969',
        ariadna: '1761',
    },
    DMC153: {
        rgb: '#d0bbd3',
        dmc: '153',
        anchor: '00103',
        ariadna: '1561',
    },
    DMC154: {
        rgb: '#25031f',
        dmc: '154',
        anchor: '00873',
        ariadna: '1584',
    },
    DMC155: {
        rgb: '#787fb2',
        dmc: '155',
        anchor: '00118',
        ariadna: '',
    },
    DMC156: {
        rgb: '#8197ba',
        dmc: '156',
        anchor: '00130',
        ariadna: '',
    },
    DMC157: {
        rgb: '#a5bbcf',
        dmc: '157',
        anchor: '00144',
        ariadna: '1622',
    },
    DMC158: {
        rgb: '#2b406c',
        dmc: '158',
        anchor: '00139',
        ariadna: '1605',
    },
    DMC159: {
        rgb: '#a6adbe',
        dmc: '159',
        anchor: '00117',
        ariadna: '',
    },
    DMC160: {
        rgb: '#7787a0',
        dmc: '160',
        anchor: '00175',
        ariadna: '',
    },
    DMC161: {
        rgb: '#51607c',
        dmc: '161',
        anchor: '00175',
        ariadna: '',
    },
    DMC162: {
        rgb: '#C8DBDF',
        dmc: '162',
        anchor: '00159',
        ariadna: '1639',
    },
    DMC163: {
        rgb: '#557A60',
        dmc: '163',
        anchor: '00215',
        ariadna: '1671',
    },
    DMC164: {
        rgb: '#A6B784',
        dmc: '164',
        anchor: '00214',
        ariadna: '1679',
    },
    DMC165: {
        rgb: '#DAC774',
        dmc: '165',
        anchor: '00253',
        ariadna: '1708',
    },
};

export default colours;