// PROBLEM WITH STX, KICK, BMC

const officialTokens = [
  {
    tokenAddress: '0x2b17b8927a8e9844b6ca11c5e0e818bb633c044d',
    symbol: 'OMNIS',
    converterAddress: '0x8e748dC7b9DAb8bf9eF4B84C5f38A6AE954096e0',
    smartTokenAddress: '0xC083cD0e18e024D43258b59eDB6f06aa16E55e3a',
    smartTokenSymbol: 'OMNISBNT',
    owner: '0xa6bc924715a0b63c6e0a7653d3262d26f254ecfd'
  },
  {
    tokenAddress: '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C',
    symbol: 'BNT',
    converterAddress: '0xCBc6a023eb975a1e2630223a7959988948E664f3',
    smartTokenAddress: '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C',
    smartTokenSymbol: 'BNT',
    owner: '0x51A3ac2399c89FFA893B0f627c740C05193875A6'
  },
  {
    tokenAddress: '0x6810e776880C02933D47DB1b9fc05908e5386b96',
    symbol: 'GNO',
    converterAddress: '0x3f7Ba8B8F663fdDB47568CCA30eac7aeD3D2F1A3',
    smartTokenAddress: '0xd7eB9DB184DA9f099B84e2F86b1da1Fe6b305B3d',
    smartTokenSymbol: 'GNOBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0xf8e386EDa857484f5a12e4B5DAa9984E06E73705',
    symbol: 'IND',
    converterAddress: '0xB018AF916Ed0116404537D1238b18988D652733a',
    smartTokenAddress: '0x32423158e8FBD2839E085626F8a98D86b2766De8',
    smartTokenSymbol: 'INDBNT',
    owner: '0xA53a22FCa7ffe3762dCd2A8ABC332ede24B5AA2D'
  },
  {
    tokenAddress: '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c',
    symbol: 'ENJ',
    converterAddress: '0x9e8f95969aB023c36541Bc089e25D50C6fCF0811',
    smartTokenAddress: '0xf3aD2cBc4276eb4B0fb627Af0059CfcE094E20a1',
    smartTokenSymbol: 'ENJBNT',
    owner: '0xdE63aef60307655405835DA74BA02CE4dB1a42Fb'
  },
  {
    tokenAddress: '0x818Fc6C2Ec5986bc6E2CBf00939d90556aB12ce5',
    symbol: 'KIN',
    converterAddress: '0x7599Da2DD9e1341f4fe76133342Ae7C75FA24129',
    smartTokenAddress: '0x26b5748F9253363f95e37767e9ed7986877A4B1b',
    smartTokenSymbol: 'KINBNT',
    owner: '0x7e33009c42399F05fc4B16aeB3ACc6A60dF88058'
  },
  {
    tokenAddress: '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07',
    symbol: 'OMG',
    converterAddress: '0x11614c5F1Eb215Ecffe657Da56d3Dd12df395dc8',
    smartTokenAddress: '0x99eBD396Ce7AA095412a4Cd1A0C959D6Fd67B340',
    smartTokenSymbol: 'OMGBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x1b22C32cD936cB97C28C5690a0695a82Abf688e6',
    symbol: 'WISH',
    converterAddress: '0x38a3Fc625DF834dD34e8EDE60E10Cd3024a6650E',
    smartTokenAddress: '0x1C9Df905571B22214Fa5FB10ad99ebe327f199C5',
    smartTokenSymbol: 'WISHBNT',
    owner: '0x00A0A886D73ce0F830692531f05E95a7e9c4d38a'
  },
  {
    tokenAddress: '0x37E8789bB9996CaC9156cD5F5Fd32599E6b91289',
    symbol: 'AID',
    converterAddress: '0xb85E52268CBF57b97Ae15136Aa65D4F567B8107c',
    smartTokenAddress: '0xe3BF775Ec5f4F4dFCbb21194B22be1217b815b1d',
    smartTokenSymbol: 'AIDBNT',
    owner: '0x8956f1D18670B7f9dE60Bb2CAE71806F0C7e0A01'
  },
  {
    tokenAddress: '0x1063ce524265d5a3A624f4914acd573dD89ce988',
    symbol: 'AIX',
    converterAddress: '0xb8a6920962655c97F0E3Eab40E5706Ed934907Cc',
    smartTokenAddress: '0xA415cD56C694bd7402d14560D18Bb19A28F77617',
    smartTokenSymbol: 'AIXBNT',
    owner: '0x4Cbb51Ee8611d45FedC37D99D0E05c7D1fC2c49D'
  },
  {
    tokenAddress: '0x2dAEE1AA61D60A252DC80564499A69802853583A',
    symbol: 'ATS',
    converterAddress: '0xa00655976c5c9A1eD58b3707b190867069bAbEe5',
    smartTokenAddress: '0x1D75ebc72f4805e9C9918B36A8969b2e3847c9FB',
    smartTokenSymbol: 'ATSBNT',
    owner: '0x600a65F8246FB0237bCf344D33b2c15F8F673941'
  },
  {
    tokenAddress: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
    symbol: 'BAT',
    converterAddress: '0x46ffCDc6D8e6ed69F124D944bbfe0ac74f8FCF7F',
    smartTokenAddress: '0x131da075a2832549128e93AcC2b54174045232Cf',
    smartTokenSymbol: 'BATBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x98Bde3a768401260E7025FaF9947ef1b81295519',
    symbol: 'BCS',
    converterAddress: '0x27f8fd3ac4eAa50068B8F221bFa0b496F180813e',
    smartTokenAddress: '0xD3aD4c39A12B48164068Fef8F86eF5836A9eF303',
    smartTokenSymbol: 'BCSBNT',
    owner: '0xB9C5F14e5E460Ef926e5772783992F686FC2D3c4'
  },
  {
    tokenAddress: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
    symbol: 'BNB',
    converterAddress: '0x751b934E7496E437503D74D0679A45E49C0B7071',
    smartTokenAddress: '0xE6b31fB3f29fbde1b92794B0867A315Ff605A324',
    smartTokenSymbol: 'BNBBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x1d462414fe14cf489c7A21CaC78509f4bF8CD7c0',
    symbol: 'CAN',
    converterAddress: '0x5142127A6703F5Fc80BF11b7b57fF68998F218E4',
    smartTokenAddress: '0x854809B0C072d9C9C09E268cd7836d1b58101B62',
    smartTokenSymbol: 'CANBNT',
    owner: '0x856D41AB6e3128bd9f49E168230CD78cE7C1E045'
  },
  {
    tokenAddress: '0x419c4dB4B9e25d6Db2AD9691ccb832C8D9fDA05E',
    symbol: 'DRGN',
    converterAddress: '0xFA968bc2e4768d431FFEc4ee64307f8152E1c9F1',
    smartTokenAddress: '0xa7774F9386E1653645E1A08fb7Aae525B4DeDb24',
    smartTokenSymbol: 'DRGNBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x1234567461d3f8Db7496581774Bd869C83D51c93',
    symbol: 'CAT',
    converterAddress: '0x73314db8F62312E6a1FB365c3a98599119A91C74',
    smartTokenAddress: '0xB3c55930368D71F643C3775869aFC73f6c5237b2',
    smartTokenSymbol: 'CATBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x9AF4f26941677C706cfEcf6D3379FF01bB85D5Ab',
    symbol: 'DRT',
    converterAddress: '0x9b10206f236669F4f40E8e9806De9ab1813d3f65',
    smartTokenAddress: '0x904c7051D12aCE7d0107ada8702C0C759cad1672',
    smartTokenSymbol: 'DRTBNT',
    owner: '0xE18cf576CDB5fc79F9f47f6d733eFe3EF2fae907'
  },
  {
    tokenAddress: '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
    symbol: 'DAI',
    converterAddress: '0x587044b74004E3D5eF2D453b7F8d198d9e4cB558',
    smartTokenAddress: '0xee01b3AB5F6728adc137Be101d99c678938E6E72',
    smartTokenSymbol: 'DAIBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x08711D3B02C8758F2FB3ab4e80228418a7F8e39c',
    symbol: 'EDG',
    converterAddress: '0x445556B7215349b205997aAAF6C6DfA258Eb029d',
    smartTokenAddress: '0xf95dd0Fc6DF64b2F149aFA9219579e0f850BCD4D',
    smartTokenSymbol: 'EDGBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0xbf2179859fc6D5BEE9Bf9158632Dc51678a4100e',
    symbol: 'ELF',
    converterAddress: '0x645A3f2Fa86bE27A4d9A3Cc93a73F27B33df766f',
    smartTokenAddress: '0x0F2318565f1996CB1eD2F88e172135791BC1FcBf',
    smartTokenSymbol: 'ELFBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x86Fa049857E0209aa7D9e616F7eb3b3B78ECfdb0',
    symbol: 'EOS',
    converterAddress: '0x005f7ED737346941acD68D0292A86f21d173538A',
    smartTokenAddress: '0x507b06c23d7Cb313194dBF6A6D80297137fb5E01',
    smartTokenSymbol: 'EOSBNT',
    owner: null
  },
  {
    tokenAddress: '0xC5bBaE50781Be1669306b9e001EFF57a2957b09d',
    symbol: 'GTO',
    converterAddress: '0xe88d6D63389d5c91e6348e379913F330739ad2c4',
    smartTokenAddress: '0xc4938292EA2d3085fFFc11C46B87CA068a83BE01',
    smartTokenSymbol: 'GTOBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
    symbol: 'MANA',
    converterAddress: '0x967f1c667fC490ddd2fb941e3a461223C03D40e9',
    smartTokenAddress: '0x79d83B390cF0EDF86B9EFbE47B556Cc6e20926aC',
    smartTokenSymbol: 'MANABNT',
    owner: '0xFE95E04A628087FCdD5f278E61F148B47471Af4A'
  },
  {
    tokenAddress: '0x83cee9e086A77e492eE0bB93C2B0437aD6fdECCc',
    symbol: 'MNTP',
    converterAddress: '0x0160AE697A3538668CDb4698d3B89C7F36AD990d',
    smartTokenAddress: '0x8DA321aB610cD24fB2bcCe191F423Dae7c327ca9',
    smartTokenSymbol: 'MNTPBNT',
    owner: '0x76a1E5FcC8176E76b9210B8dBC484258f8745200'
  },
  {
    tokenAddress: '0x8eFFd494eB698cc399AF6231fCcd39E08fd20B15',
    symbol: 'PIX',
    converterAddress: '0xd053d8006aFD41C18b7A949d8105f85fF8f02aD2',
    smartTokenAddress: '0xe9b56e7Ce5F13eC2aaa9746020EC3dB5F3fCF56A',
    smartTokenSymbol: 'PIXBNT',
    owner: '0x005f7ED737346941acD68D0292A86f21d173538A'
  },
  {
    tokenAddress: '0x8f8221aFbB33998d8584A2B05749bA73c37a938a',
    symbol: 'REQ',
    converterAddress: '0x37C88474b5d6c593bBd2E4Ce16635c08f8215B1e',
    smartTokenAddress: '0xccB5E3Ba5356D57001976092795626ac3b87Ad4e',
    smartTokenSymbol: 'REQBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x607F4C5BB672230e8672085532f7e901544a7375',
    symbol: 'RLC',
    converterAddress: '0x8b30e174BdDB3C0376e666aFB8a4196e2F53182d',
    smartTokenAddress: '0x9003411Ac4073C2D9f37af71d00E373B72Cbe9E2',
    smartTokenSymbol: 'RLCBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x6745fAB6801e376cD24F03572B9C9B0D4EdDDCcf',
    symbol: 'SENSE',
    converterAddress: '0xC31db08240A11Df6a4c159FF4E6d69f484Fc3828',
    smartTokenAddress: '0x47244bC49D90F25473eBf8aD0A14Ea6d4232A4c7',
    smartTokenSymbol: 'SENSEBNT',
    owner: '0xfe962C36cAb4802b642cFaEEd9aa6ceC43c0f56E'
  },
  {
    tokenAddress: '0x68d57c9a1C35f63E2c83eE8e49A64e9d70528D25',
    symbol: 'SRN',
    converterAddress: '0xD3A3BAcE3D61f6F5d16A9B415D51813cd2Ea3887',
    smartTokenAddress: '0xd2Deb679ed81238CaeF8E0c32257092cEcc8888b',
    smartTokenSymbol: 'SRNBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0xD0a4b8946Cb52f0661273bfbC6fD0E0C75Fc6433',
    symbol: 'STORM',
    converterAddress: '0xdD7DE51c4F6FAF10Afce495f1Ef02E5Baa91379c',
    smartTokenAddress: '0xCad4da66E00FDeCaBeC137a24E12Af8eDF303a1d',
    smartTokenSymbol: 'STORMBNT',
    owner: '0xb6bf1b11b1D12D75eA1B9848543E22f6a974AcAd'
  },
  {
    tokenAddress: '0x9e88613418cF03dCa54D6a2cf6Ad934A78C7A17A',
    symbol: 'SWM',
    converterAddress: '0xBb9859dCA5B269e787e9DD6042Db46B07515fc4b',
    smartTokenAddress: '0xF251523C1614Ec3F449A93b7bE547882EbC682Ca',
    smartTokenSymbol: 'SWMBNT',
    owner: '0xB599ff1910A23ED2e520259C360A4A6D4986F00c'
  },
  {
    tokenAddress: '0xE7775A6e9Bcf904eb39DA2b68c5efb4F9360e08C',
    symbol: 'TAAS',
    converterAddress: '0xDB9272880400e0AE8e522994f6a959122D94C7B7',
    smartTokenAddress: '0xAE201360282C885bf3F2616A3145D1344a1e43c0',
    smartTokenSymbol: 'TAASBNT',
    owner: '0x17d751d6B8254F02A0d03C5b426F6a4b96C6D801'
  },
  {
    tokenAddress: '0x3A92bD396aEf82af98EbC0Aa9030D25a23B11C6b',
    symbol: 'TBX',
    converterAddress: '0x8a7bDf8388aDD5A24B357D947911bE3a07801C56',
    smartTokenAddress: '0xE844E4EF529CB1A507D47206bEeF65a921B07287',
    smartTokenSymbol: 'TBXBNT',
    owner: '0x9Acf50AB22004cf09b2461C71447f1d776188fa8'
  },
  {
    tokenAddress: '0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a',
    symbol: 'TKN',
    converterAddress: '0xC04B5a4556d00Bca8eac5F5accA31981a6597409',
    smartTokenAddress: '0x497Ec0D6Ba2080f0ed7ecf7a79a2A907401b3239',
    smartTokenSymbol: 'TKNBNT',
    owner: '0x0eb1afd80aEc9e991c5F8D95A421bE187974912F'
  },
  {
    tokenAddress: '0xCb94be6f13A1182E4A4B6140cb7bf2025d28e41B',
    symbol: 'TRST',
    converterAddress: '0xB952ccBc1893C4dd1701bDE249e62fc3eD357967',
    smartTokenAddress: '0x064432E84F05094E3eD746A35ab9B7aB865fDa5C',
    smartTokenSymbol: 'TRSTBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x340D2bdE5Eb28c1eed91B2f790723E3B160613B7',
    symbol: 'VEE',
    converterAddress: '0x3B42239a8bc2f07bb16b17578fE44fF2422C16F6',
    smartTokenAddress: '0xc9c3A465380bFaaC486C89ff7d5F60CC275D4E08',
    smartTokenSymbol: 'VEEBNT',
    owner: '0x0c4F2808D0c65f498ED0D38e46Da1E5dc524c3C3'
  },
  {
    tokenAddress: '0x667088b212ce3d06a1b553a7221E1fD19000d9aF',
    symbol: 'WINGS',
    converterAddress: '0x0cFbED1Bd80Bd8a740F24eC5FCA8e8D1a9f87052',
    smartTokenAddress: '0xA6Ab3c8aE51962f4582db841dE6b0A092041461e',
    smartTokenSymbol: 'WINGSBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x27f610BF36ecA0939093343ac28b1534a721DBB4',
    symbol: 'WAND',
    converterAddress: '0x4F88DFc8e1D7bA696Db158656457797cfBDfB844',
    smartTokenAddress: '0x6a46f6DC570A1304a23f771c26b1802DFfcDAB0D',
    smartTokenSymbol: 'WANDBNT',
    owner: '0x58866ce6A2fB0b52a5b3D18035Bc2fA9E6DDa0e3'
  },
  {
    tokenAddress: '0xF6B55acBBC49f4524Aa48D19281A9A77c54DE10f',
    symbol: 'WLK',
    converterAddress: '0xc11CcE040583640001f5a7E945DFd82f662cC0aE',
    smartTokenAddress: '0xd387CDAF85429b455f0F716D51Be33db2FC00463',
    smartTokenSymbol: 'WLKBNT',
    owner: '0x34c7fC051eAe78F8C37B82387a50a5458b8F7018'
  },
  {
    tokenAddress: '0x9a794Dc1939F1d78fa48613b89B8f9d0A20dA00E',
    symbol: 'ABX',
    converterAddress: '0x5A9f1cD844cE91AAADAA03059677EeBCf3CF00df',
    smartTokenAddress: '0x275a1a2Dad3075bEb96AF4f7fD93ade99bB0151f',
    smartTokenSymbol: 'ABXBNT',
    owner: '0xa281961E6826c8700DC0F90F6c19537e1F107934'
  },
  {
    tokenAddress: '0x4CEdA7906a5Ed2179785Cd3A40A69ee8bc99C466',
    symbol: 'AION',
    converterAddress: '0xdd9B82c59aa260B2A834Ec67C472f43b40a2E6f1',
    smartTokenAddress: '0x73fa2B855be96AB3C73f375B8Ec777226eFA3845',
    smartTokenSymbol: 'AIONBNT',
    owner: '0xF8e44616746AcabD3393346D7A4d09650572F74b'
  },
  {
    tokenAddress: '0x737F98AC8cA59f2C68aD658E3C3d8C8963E40a4c',
    symbol: 'AMN',
    converterAddress: '0xAA8CEc9CbD7D051BA86d9DEFF1EC0775Bd4B13c5',
    smartTokenAddress: '0x0f9Be347378a37CED33A13AE061175AF07CC9868',
    smartTokenSymbol: 'AMNBNT',
    owner: '0xeCBed6407270f18234cd9c6EFF06C5358acE9856'
  },
  {
    tokenAddress: '0x9a0242b7a33DAcbe40eDb927834F96eB39f8fBCB',
    symbol: 'BAX',
    converterAddress: '0xc02D4BD00F642D2821E4279c810dd7B6E49264f8',
    smartTokenAddress: '0xA9DE5935aE3eae8a7F943C9329940EDA160267f4',
    smartTokenSymbol: 'BAXBNT',
    owner: '0x58Aa01AB4acB640Cd44b46460BBe209ce732d911'
  },
  {
    tokenAddress: '0x763186eB8d4856D536eD4478302971214FEbc6A9',
    symbol: 'BETR',
    converterAddress: '0x8bB76C5AE6b7D6bd1678510edD06444AcDf8F72B',
    smartTokenAddress: '0x679F601F0deb53c2dB0C8C26369FDcba5fD753CF',
    smartTokenSymbol: 'BETRBNT',
    owner: '0xf726A6E821BA1cB810b7bFEfc1b818b656509613'
  },
  {
    tokenAddress: '0xe8A1Df958bE379045E2B46a31A98B93A2eCDfDeD',
    symbol: 'ESZ',
    converterAddress: '0x0A9ed23490CF8F89e750bBC3e28f96502bB45491',
    smartTokenAddress: '0xA2020e324C365D05e87cf25552E6e6734260b089',
    smartTokenSymbol: 'ESZBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x4AaC461C86aBfA71e9d00d9a2cde8d74E4E1aeEa',
    symbol: 'ZINC',
    converterAddress: '0x593A70C88a14188f05636f9173a63128540A5890',
    smartTokenAddress: '0x737Ac585809C0F64Ee09d7B8050d195d14f14c55',
    smartTokenSymbol: 'CVTBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x2023DCf7c438c8C8C0B0F28dBaE15520B4f3Ee20',
    symbol: 'FTR',
    converterAddress: '0xC44330A585C3408392afB85B7018178bd4BAE219',
    smartTokenAddress: '0x2DA44dA464d6b1F4957A221007F9F0A0759Cbb3a',
    smartTokenSymbol: 'FTRBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0xaFd8F91c4d7c2E3240F4154A1c596048035Eb63C',
    symbol: 'IGNX',
    converterAddress: '0x005f7ED737346941acD68D0292A86f21d173538A',
    smartTokenAddress: '0xD9e350b2D61509e3ac1E55B9453E5AE55Bf15147',
    smartTokenSymbol: 'IGNXBNT',
    owner: null
  },
  {
    tokenAddress: '0xc72fe8e3Dd5BeF0F9f31f259399F301272eF2a2D',
    symbol: 'INSTAR',
    converterAddress: '0x7E4b0AbAd3407b87a381c1C05aF78d7ad42975E7',
    smartTokenAddress: '0xC803B2B2c3BA24C0C934AEB3Ba508A4dD6853F1b',
    smartTokenSymbol: 'INSTAR',
    owner: '0xae632bA07319378514BB15BdFCdc8Fa0c47e9f49'
  },
  {
    tokenAddress: '0x0D262e5dC4A06a0F1c90cE79C7a60C09DfC884E4',
    symbol: 'J8T',
    converterAddress: '0xc7151af2e9D1A702a61fcb655E2334BfEE5B5FaF',
    smartTokenAddress: '0x8E00BacD7d8265d8F3f9d5B4fbd7F6B0B0c46f36',
    smartTokenSymbol: 'J8TBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0xdd974D5C2e2928deA5F71b9825b8b646686BD200',
    symbol: 'KNC',
    converterAddress: '0xcDe79F10b689A716029D0Edb54de78b1bbC14957',
    smartTokenAddress: '0x248AFFf1aa83cF860198ddeE14b5b3E8eDb46d47',
    smartTokenSymbol: 'KNCBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x5102791cA02FC3595398400BFE0e33d7B6C82267',
    symbol: 'LDC',
    converterAddress: '0x6411A822850dcFe2fAE215248E47DE77b1738BEA',
    smartTokenAddress: '0xB79C3a1a2d50CC99459F3a21D709bCEC86656e97',
    smartTokenSymbol: 'LDCBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x814e0908b12A99FeCf5BC101bB5d0b8B5cDf7d26',
    symbol: 'MDT',
    converterAddress: '0x72844AB8b5F59c0251bCcE6ef5f2be92D7528c1a',
    smartTokenAddress: '0xbAb15d72731Ea7031B10324806E7AaD8448896D5',
    smartTokenSymbol: 'MDTBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x6710c63432A2De02954fc0f851db07146a6c0312',
    symbol: 'MFG',
    converterAddress: '0x0Fec04a7526F601a1019eDcD5d5B003101c46A0c',
    smartTokenAddress: '0xb3b2861a093B7FB19352bD62CD8EFC314e0641a7',
    smartTokenSymbol: 'MFGBNT',
    owner: '0xc958B2C0b1219b79322c726CEd6Df753581bc9E5'
  },
  {
    tokenAddress: '0x358D12436080a01A16f711014610F8a4c2C2d233',
    symbol: 'PXS',
    converterAddress: '0x2d56D1904bb750675c0A55Ca7339f971F48d9DdA',
    smartTokenAddress: '0x5a4deB5704C1891dF3575d3EecF9471DA7F61Fa4',
    smartTokenSymbol: 'NPXSBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0xd341d1680Eeee3255b8C4c75bCCE7EB57f144dAe',
    symbol: 'ONG',
    converterAddress: '0xFE62e9d7C7781936499eAAe20fBf3671B641516D',
    smartTokenAddress: '0x8104E7ce81FaB39c42e34Cd9d8B654135261Fae8',
    smartTokenSymbol: 'ONGBNT',
    owner: '0xe727B18E8d4EC97C508e46baA5b0d59d80A3429f'
  },
  {
    tokenAddress: '0xe3818504c1B32bF1557b16C238B2E01Fd3149C17',
    symbol: 'PLR',
    converterAddress: '0x2AC0E433c3C9Ad816DB79852d6f933B0B117aEFe',
    smartTokenAddress: '0x2843F6c3b14e698e3D7562584959C61274F93328',
    smartTokenSymbol: 'PLRBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x595832F8FC6BF59c85C527fEC3740A1b7a361269',
    symbol: 'POWR',
    converterAddress: '0x8Fd5BFBc2f61a450400Ae275E64D1E171c05b639',
    smartTokenAddress: '0x168D7Bbf38E17941173a352f1352DF91a7771dF3',
    smartTokenSymbol: 'POWRBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0xF970b8E36e23F7fC3FD752EeA86f8Be8D83375A6',
    symbol: 'RCN',
    converterAddress: '0x8e7fc617e87B39bd5Fe1767a95AFa53D2C79F147',
    smartTokenAddress: '0xf7b9fa01098f22527Db205Ff9BB6FdF7C7D9F1C5',
    smartTokenSymbol: 'RCNBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x3d1BA9be9f66B8ee101911bC36D3fB562eaC2244',
    symbol: 'RVT',
    converterAddress: '0x635C9C9940D512bF5CB455706a28F9C7174d307f',
    smartTokenAddress: '0x5039f60594Ffa3f1a5ACbe85E1eBe12Dc8Da7c5c',
    smartTokenSymbol: 'RVTBNT',
    owner: '0xD75BE1a4dE57B54DABC17EEEf2c3c87BB3ed14AD'
  },
  {
    tokenAddress: '0x9a005c9a89BD72a4Bd27721E7a09A3c11D2b03C4',
    symbol: 'STAC',
    converterAddress: '0x73f73391e5F56Ce371A61fC3e18200A73d44Cf6f',
    smartTokenAddress: '0x258D1210e9E242FDc0Ecfa3b039A51a945CD0D0a',
    smartTokenSymbol: 'STACBNT',
    owner: '0x0952cFad850C3500C131C92dda5F63c25ad7B995'
  },
  {
    tokenAddress: '0x6Ba460AB75Cd2c56343b3517ffeBA60748654D26',
    symbol: 'UP',
    converterAddress: '0xA7A402266Ceea0652eA8eAFD919d619d16bEe134',
    smartTokenAddress: '0xd4c810fdcA379831078267f3402845E5205Aa0e1',
    smartTokenSymbol: 'UPBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x2C974B2d0BA1716E644c1FC59982a89DDD2fF724',
    symbol: 'VIB',
    converterAddress: '0xbE1DAF05Bf9e054b3e28b7E9C318819eF5dAcb58',
    smartTokenAddress: '0x2948BD241243Bb6924A0b2f368233DDa525AAB05',
    smartTokenSymbol: 'VIBBNT',
    owner: '0x4679e51eDC6998ccFf619874f5B0a8B522fF4220'
  },
  {
    tokenAddress: '0x41AB1b6fcbB2fA9DCEd81aCbdeC13Ea6315F2Bf2',
    symbol: 'XDCE',
    converterAddress: '0x2dAD2c84f6c3957Ef4B83a5DF6F1339Dfd9E6080',
    smartTokenAddress: '0xd1BB51fECC950c7b1e4197D8d13A1d2A60795D2C',
    smartTokenSymbol: 'XDCEBNT',
    owner: '0x9f016621D0eFF0777E77919342441C9734Fa3cB2'
  },
  {
    tokenAddress: '0xc12d099be31567add4e4e4d0D45691C3F58f5663',
    symbol: 'AUC',
    converterAddress: '0x3B0116363e435D9E4EF24ecA6282a21b7CC662df',
    smartTokenAddress: '0x164A1229F4826C9dd70Ee3D9f4f3d7B68a172153',
    smartTokenSymbol: 'AUCBNT',
    owner: '0x530dDbc6C29C87Bee72c1aB79867ac162e130bcB'
  },
  {
    tokenAddress: '0x780116D91E5592E58a3b3c76A351571b39abCEc6',
    symbol: 'BOXX',
    converterAddress: '0x3167cc146d228C6977dCbadA380dF926b39865b1',
    smartTokenAddress: '0x849D49911cEF804bdB1FEC58150B8EabAB119796',
    smartTokenSymbol: 'BOXXBNT',
    owner: '0x61cf78Ba23ED3D7e48D7aC4Fd87Fe0809F56b718'
  },
  {
    tokenAddress: '0xb056c38f6b7Dc4064367403E26424CD2c60655e1',
    symbol: 'CEEK',
    converterAddress: '0xC18166e01970bE040D8c7761Cdd1c3372aE1EDF0',
    smartTokenAddress: '0x2F2ad6954d99Ea14fA145B9AB0fb6BA5Ac32c0Ee',
    smartTokenSymbol: 'CEEKBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x1460a58096d80a50a2F1f956DDA497611Fa4f165',
    symbol: 'CHX',
    converterAddress: '0x69e37aBA9B520a204Bb0BAEBD76B0ac1a2390B37',
    smartTokenAddress: '0x5a9790C2D029e4406f3D820d51774E4E3eFaC8cD',
    smartTokenSymbol: 'CHXBNT',
    owner: '0x0d5844CE39fE8A2EFDAda0b37808CE8BD5fAD020'
  },
  {
    tokenAddress: '0x3abdfF32F76b42E7635bdb7e425f0231A5F3aB17',
    symbol: 'CJT',
    converterAddress: '0x2596AadA3c9290293433AdCB3359C9A04112Eb16',
    smartTokenAddress: '0x43419570444B365F6f18fDEc7fe844798F120706',
    smartTokenSymbol: 'CJTBNT',
    owner: '0x50249160741773B1FED5Aca6C7608D8ef6B50c64'
  },
  {
    tokenAddress: '0x4162178B78D6985480A308B2190EE5517460406D',
    symbol: 'CLN',
    converterAddress: '0x7eD9959754c26BdB5f101BDeA6Db32800965d0d2',
    smartTokenAddress: '0xEB027349398De19D925DefC15c4302fE92FC69f9',
    smartTokenSymbol: 'CLNBNT',
    owner: '0xdfeE8DC240c6CadC2c7f7f9c257c259914dEa84E'
  },
  {
    tokenAddress: '0x9B70740e708a083C6fF38Df52297020f5DfAa5EE',
    symbol: 'DAN',
    converterAddress: '0x20d23C7A4b2Ea38f9Dc885bd25b1BC8c2601D44d',
    smartTokenAddress: '0xa06cFAB8B584c91Df1aBee6e8503486AB4e23F40',
    smartTokenSymbol: 'DANBNT',
    owner: '0xAD55357e4f7acFF3f274399Dd27d8D9cf1Bb19aB'
  },
  {
    tokenAddress: '0x0Cf0Ee63788A0849fE5297F3407f701E122cC023',
    symbol: 'DATA',
    converterAddress: '0x8658863984d116d4B3A0A5af45979eceAC8a62f1',
    smartTokenAddress: '0xdD8a17169aa94E548602096EB9C9d44216cE8a37',
    smartTokenSymbol: 'DATABNT',
    owner: '0x42355e7dc0A872C465bE9DE4AcAAAcB5709Ce813'
  },
  {
    tokenAddress: '0x9b68bFaE21DF5A510931A262CECf63f41338F264',
    symbol: 'DBET',
    converterAddress: '0xF4327c919854CB099ac574A22f5fba901e2025c4',
    smartTokenAddress: '0xfE9E6111E45A6066374bF33E831E80B1949a9faA',
    smartTokenSymbol: 'DBETBNT',
    owner: '0xE74ec575308b44a8E6CFfa793B9141377239D1B9'
  },
  {
    tokenAddress: '0xc20464e0C373486d2B3335576e83a218b1618A5E',
    symbol: 'DTRC',
    converterAddress: '0x71168843b49E305E4d53dE158683903eF261B37f',
    smartTokenAddress: '0x1F593cDC35D7f0B0495dA16B631d28DE5AE25a07',
    smartTokenSymbol: 'DTRCBNT',
    owner: '0x0E278A8E3742A224177714fc9be001bdb7d7D2E6'
  },
  {
    tokenAddress: '0xc7C03B8a3FC5719066E185ea616e87B88eba44a3',
    symbol: 'ELI',
    converterAddress: '0xB5a5a031d8b8577871384Be6055B2eA29FAc064C',
    smartTokenAddress: '0x9ad9bA0bb0001e9571073b595562af9645273Ab1',
    smartTokenSymbol: 'ELIBNT',
    owner: '0x1a5406A6412008bFf26616AEFde93715B5F22dDD'
  },
  {
    tokenAddress: '0x009e864923b49263c7F10D19B7f8Ab7a9A5AAd33',
    symbol: 'FKX',
    converterAddress: '0x9F547E89078B24d0e2269Ba08EB411102E98CA14',
    smartTokenAddress: '0x80c222E38fb57F0710aF21128535096D90503285',
    smartTokenSymbol: 'FKXBNT',
    owner: '0x7E90401BbcB43DC459eF1e35f43d1F12a1d8404D'
  },
  {
    tokenAddress: '0x48DF4E0296f908CEAb0428A5182D19B31fC037d6',
    symbol: 'FRV',
    converterAddress: '0x2723a5AF933fF0a3522A301015544be366E6Ee31',
    smartTokenAddress: '0xb2b788530B383Be0933B0d3275CEAD29B332522e',
    smartTokenSymbol: 'FRVBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0xd559f20296FF4895da39b5bd9ADd54b442596a61',
    symbol: 'FTX',
    converterAddress: '0x810C99C5De0A673E4bc86090f9bFE96a6D1B49a7',
    smartTokenAddress: '0x4d849DaD08A4061bE102DBCA2CE2718A9a0b635a',
    smartTokenSymbol: 'FTXBNT',
    owner: '0x22791E66b6Cc85C2eD6709e9c8B05bF08a7139b7'
  },
  {
    tokenAddress: '0xFB1e5F5e984C28Ad7E228CDaA1F8A0919BB6a09B',
    symbol: 'GES',
    converterAddress: '0x32d4fb837f41955b81556F74DAdB2C5b8a0D0989',
    smartTokenAddress: '0x5972CED550248B17c9F674639D33E5446b6ad95A',
    smartTokenSymbol: 'GESBNT',
    owner: '0x637cb461eD6dE06C0273cad30Cb646d5186a87e7'
  },
  {
    tokenAddress: '0xbF5496122CF1bB778E0cBE5eaB936f2BE5fC0940',
    symbol: 'FUNDZ',
    converterAddress: '0x38EF8fd7cFD46d615ebF7788Bc7225906B58406f',
    smartTokenAddress: '0xC47657b54E945E1d8b8b550749732a057C0DdeB4',
    smartTokenSymbol: 'FUNDZBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x9AF839687F6C94542ac5ece2e317dAAE355493A1',
    symbol: 'HOT',
    converterAddress: '0xc6AaCDF2Cb021515009098025a0ECE472608918e',
    smartTokenAddress: '0x0Ac0e122D09cC4DA4A96Cc2731D2b7cc1f8b025a',
    smartTokenSymbol: 'HOTBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0xfb725BaB323927cFB20FB82BA9A1975F7D24705b',
    symbol: 'JOY',
    converterAddress: '0x14609CCa8A69c734f7bA6DCA3F723c4FBBeB6B43',
    smartTokenAddress: '0xEF449de92EE1D812607d5b42c71C02a9E508cA10',
    smartTokenSymbol: 'JOYBNT',
    owner: '0x8CaE32C636385A14b4E0A0e68a760FaCfabBCd9c'
  },
  {
    tokenAddress: '0xEcE83617Db208Ad255Ad4f45Daf81E25137535bb',
    symbol: 'INV',
    converterAddress: '0xb19710f3BDb4dF4c781B9dC3Cd62979921878280',
    smartTokenAddress: '0x9da52B3b37bdBe8b851d882DC55bd823B4B66Bf4',
    smartTokenSymbol: 'INVBNT',
    owner: '0xD5483f02d8bEd6A1D9deAb9B425aDa80cd1ed645'
  },
  {
    tokenAddress: '0x5B09A0371C1DA44A8E24D36Bf5DEb1141a84d875',
    symbol: 'MAD',
    converterAddress: '0xBafC0Bf857aE9B8FEAeD937AC90E44D90a487c72',
    smartTokenAddress: '0x014186b1a2d675fc1e303A3d62B574C3270A38e0',
    smartTokenSymbol: 'MADBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x2Ef27BF41236bD859a95209e17a43Fbd26851f92',
    symbol: 'MORPH',
    converterAddress: '0x952EB7dC904F6f8b6b0Bc6c5c99d45143E743Cd7',
    smartTokenAddress: '0xB2Ea67533290fAd84e3fe2E1Fb68D21Ca062d7fc',
    smartTokenSymbol: 'MORPHBNT',
    owner: '0x26E62FfD197328679f13257965A134ef7778480B'
  },
  {
    tokenAddress: '0xcbee6459728019CB1f2bB971dDe2eE3271BC7617',
    symbol: 'MRG',
    converterAddress: '0xE65c7e27C1c086f26CE0Daa986C3d9c24Ef3c2D8',
    smartTokenAddress: '0x25Bf8913D6296a69C7B43BC781614992cb218935',
    smartTokenSymbol: 'MRGBNT',
    owner: '0xFb016E01421e26C643c4Ca5e8A6dCC3030597761'
  },
  {
    tokenAddress: '0x5d60d8d7eF6d37E16EBABc324de3bE57f135e0BC',
    symbol: 'MYB',
    converterAddress: '0x9dB89726aE2683d21A71fF1417638E72e6D8C0d9',
    smartTokenAddress: '0xf22FB05aC032fcAf3273f50aF8db2753888Bdd48',
    smartTokenSymbol: 'MYBBNT',
    owner: '0x915F4F6FeA3a9b68cAe159017eB594Cb53aF99B4'
  },
  {
    tokenAddress: '0x6758B7d441a9739b98552B373703d8d3d14f9e62',
    symbol: 'POA20',
    converterAddress: '0x2769Eb86E3aCDDA921c4F36Cfe6CaD035D95D31b',
    smartTokenAddress: '0x564c07255AFe5050D82c8816F78dA13f2B17ac6D',
    smartTokenSymbol: 'POABNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x0e0989b1f9B8A38983c2BA8053269Ca62Ec9B195',
    symbol: 'POE',
    converterAddress: '0x8C2036ce61648FcdDffB06d6D11fE0b479eD63FE',
    smartTokenAddress: '0xA5F2A49aAfA052E28A50A575cd9E7488FA598E78',
    smartTokenSymbol: 'POEBNT',
    owner: '0x4adC207E73Ff2f8738c7a9E3dbAce389B45D92d2'
  },
  {
    tokenAddress: '0xFc2C4D8f95002C14eD0a7aA65102Cac9e5953b5E',
    symbol: 'RBLX',
    converterAddress: '0x32131848eDc60E032aBf0369241D34ec969EBf90',
    smartTokenAddress: '0x78AcF38ec85A9E4B2B88961b9D4BffbA04FdbA59',
    smartTokenSymbol: 'RBLXBNT',
    owner: '0xc6B55EDB22BDBb2D0eE1690B4A186F0cdf45EB0B'
  },
  {
    tokenAddress: '0x4D305c2334c02E44aC592BbEA681bA4cC1576DE3',
    symbol: 'REPUX',
    converterAddress: '0xe27cf7324E6377bdDc48DB6BAC642839ffa9Bb36',
    smartTokenAddress: '0x28291d74Bca9dE7cb6948A8E699651ed93832c50',
    smartTokenSymbol: 'REPUXBNT',
    owner: '0x8CaE32C636385A14b4E0A0e68a760FaCfabBCd9c'
  },
  {
    tokenAddress: '0xd7631787B4dCc87b1254cfd1e5cE48e96823dEe8',
    symbol: 'SCL',
    converterAddress: '0xd361339550CD8B3e9446Bbb12AEA337785A7aea4',
    smartTokenAddress: '0xFcEb45cF070B277fedE520c5539ae204Bc1D493E',
    smartTokenSymbol: 'SCLBNT',
    owner: '0x4712Ac736C91890D237Eacd1B2Ad51ebD7cd87A5'
  },
  {
    tokenAddress: '0x6888a16eA9792c15A4DCF2f6C623D055c8eDe792',
    symbol: 'SIG',
    converterAddress: '0xFE75413e059EeCF6eb2b92F06456276E8596862B',
    smartTokenAddress: '0x09953e3e5C6Be303D8D83Ccb672d241abc9BEe29',
    smartTokenSymbol: 'SIGBNT',
    owner: '0xbb640f38Ed9FbA04815DFABEFDD6f3eeBbBf38D0'
  },
  {
    tokenAddress: '0x744d70FDBE2Ba4CF95131626614a1763DF805B9E',
    symbol: 'SNT',
    converterAddress: '0x9dCe7C9767863110E4fA01410A35b5471AecE64e',
    smartTokenAddress: '0xa3b3c5a8b22C044D5f2d372f628245E2106D310D',
    smartTokenSymbol: 'SNTBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0xb0280743b44bF7db4B6bE482b2Ba7b75E5dA096C',
    symbol: 'TNS',
    converterAddress: '0xce1e2b5FFE4d441AbAFD136768f24867101dfa50',
    smartTokenAddress: '0x5cf2f6387c4F551316e1E422aCf1025a539825c3',
    smartTokenSymbol: 'TNSBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0xf230b790E05390FC8295F4d3F60332c93BEd42e2',
    symbol: 'TRX',
    converterAddress: '0x009BB5e9fCF28E5E601B7D0e9e821da6365d0a9c',
    smartTokenAddress: '0xe5180d7f5e99932c8CC99482A39318A781eDdB4C',
    smartTokenSymbol: 'TRXBNT',
    owner: null
  },
  {
    tokenAddress: '0x910Dfc18D6EA3D6a7124A6F8B5458F281060fa4c',
    symbol: 'X8X',
    converterAddress: '0x8C73126b85f59d85Aa61391579B4C2710DD70f96',
    smartTokenAddress: '0xAe0ceCc84bC1DDefe13C6e5B2E9D311927e45eD8',
    smartTokenSymbol: 'X8XBNT',
    owner: '0x982627eBDdfF7332aa17ECB34DD959A5D5b298F3'
  },
  {
    tokenAddress: '0x28dee01D53FED0Edf5f6E310BF8Ef9311513Ae40',
    symbol: 'XBP',
    converterAddress: '0xBA2BE1Cd1F00470c21385B7cbED6211aeFAc0172',
    smartTokenAddress: '0xbb83a9Fe991BAA72F412F39af254EEbbfdc910BA',
    smartTokenSymbol: 'XBPBNT',
    owner: '0x9cE04b2e6d9d7c4BA1f4053a9888D660D83e4b7D'
  },
  {
    tokenAddress: '0xBC86727E770de68B1060C91f6BB6945c73e10388',
    symbol: 'XNK',
    converterAddress: '0x4f138e1CEeC7b33dfA4f3051594Ec016a08c7513',
    smartTokenAddress: '0x1B4D8c62DdF6947616a5FCda4Ca40A8715d2a4cb',
    smartTokenSymbol: 'XNKBNT',
    owner: '0xc5bA7157b5B69B0fAe9332F30719Eecd79649486'
  },
  {
    tokenAddress: '0xEDD7c94FD7B4971b916d15067Bc454b9E1bAD980',
    symbol: 'ZIPT',
    converterAddress: '0x83E240d1CBc6Ec7f394CD6ba5ed01B7fcDf44ed5',
    smartTokenAddress: '0xC4a01182ab1e502a1C1d17024e4924573CE001CC',
    smartTokenSymbol: 'ZIPTBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0xBB1fA4FdEB3459733bF67EbC6f893003fA976a82',
    symbol: 'PAT',
    converterAddress: '0x7172C5b24BdCE3B93A78c53eF1ece011B0472c1b',
    smartTokenAddress: '0xEe769CE6B4E2C2A079c5f67081225Af7C89F874C',
    smartTokenSymbol: 'XPATBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x84F7c44B6Fed1080f647E354D552595be2Cc602F',
    symbol: 'BBO',
    converterAddress: '0x99F357f722EC3e456Af0eB530c1C14a3251305Ad',
    smartTokenAddress: '0x980B4118dAb781829DF80D7912d70B059a280DAd',
    smartTokenSymbol: 'BBOBNT',
    owner: '0x1Cb417D7D5dB5EC3D3A597C1EBeE8087C2a34903'
  },
  {
    tokenAddress: '0xEF2463099360a085f1f10b076Ed72Ef625497a06',
    symbol: 'SHP',
    converterAddress: '0x0f1C029C5D7f626f6820bfe0F6a7B2Ac48746dDF',
    smartTokenAddress: '0x6e0E0B9aB5f8e5F5F2DE4D34FfE46668FFB37476',
    smartTokenSymbol: 'SHPBNT',
    owner: '0xf21c7e5D4abf66Ecca96401288b71fA3e2eF9223'
  },
  {
    tokenAddress: '0x80BC5512561c7f85A3A9508c7df7901b370Fa1DF',
    symbol: 'TIO',
    converterAddress: '0xE93B1e94d6e10694cBa07563d4f6Ff829F7eC733',
    smartTokenAddress: '0x1B30042b537B30B1254ce84b27B332BE523e974a',
    smartTokenSymbol: 'TIOBNT',
    owner: '0x58f75dDACFFB183a30F69fE58a67a0d0985fce0F'
  },
  {
    tokenAddress: '0x39Bb259F66E1C59d5ABEF88375979b4D20D98022',
    symbol: 'WAX',
    converterAddress: '0x7BAc8115f3789F4d7a3BFE241EB1bCb4D7F71665',
    smartTokenAddress: '0x67563E7A0F13642068F6F999e48c690107A4571F',
    smartTokenSymbol: 'WAXBNT',
    owner: '0xE53F54aeF69Ca4A1BE22ae53977F0Bf7ED10F967'
  },
  {
    tokenAddress: '0x61d40B844ea5B68c9C504FCcdB05B68c2D7aE965',
    symbol: 'GOLD',
    converterAddress: '0x74393Aa85c03aA18E488F34414DD9406E1Bdd3B2',
    smartTokenAddress: '0xb4961fa7358eFA9b3a9F8e03C82c596b429cF453',
    smartTokenSymbol: 'GOLDBNT',
    owner: '0x76a1E5FcC8176E76b9210B8dBC484258f8745200'
  },
  {
    tokenAddress: '0xf04a8ac553FceDB5BA99A64799155826C136b0Be',
    symbol: 'FLIXX',
    converterAddress: '0x2cE573C05c9b8F6ef1a476cc40250972F1f3D63C',
    smartTokenAddress: '0x2d5aDD875442023eC83718Bb03D866c9F4C6E8cE',
    smartTokenSymbol: 'FLIXXBNT',
    owner: '0x0040C769b501805c6Ebd77E3e2c64073Fe4EbD69'
  },
  {
    tokenAddress: '0xF433089366899D83a9f26A773D59ec7eCF30355e',
    symbol: 'MTL',
    converterAddress: '0xE0569fd1C3f0affD7E08131A16C06f3381C9355a',
    smartTokenAddress: '0x60Be88DD72f03C91FB22EEF7Af24C2e99Db58530',
    smartTokenSymbol: 'MTLBNT',
    owner: '0x0040C769b501805c6Ebd77E3e2c64073Fe4EbD69'
  },
  {
    tokenAddress: '0x47bc01597798DCD7506DCCA36ac4302fc93a8cFb',
    symbol: 'CMCT',
    converterAddress: '0x10806d5d46E2fB1021fF65301a4375bd89e01577',
    smartTokenAddress: '0xb5b0E0642d35D7Cab64CDa6EcF87Fd842cB5c58d',
    smartTokenSymbol: 'CMCTBNT',
    owner: '0xf2ad4572CE38408AC846852a8a2b361eCb76E4Fb'
  },
  {
    tokenAddress: '0xa704fCe7b309Ec09DF16e2F5Ab8cAf6Fe8A4BAA9',
    symbol: 'AGRI',
    converterAddress: '0x7B00EFba58CC6fdaB1c162a9C9528B935F5F1af7',
    smartTokenAddress: '0xEab935f35693c3218b927436E63564018E92034f',
    smartTokenSymbol: 'AGRIBNT',
    owner: '0x7075F8aeeD09c7E8E47647209B103D4ab0D763cc'
  },
  {
    tokenAddress: '0x4f3AfEC4E5a3F2A6a1A411DEF7D7dFe50eE057bF',
    symbol: 'DGX',
    converterAddress: '0xF5afeb3BD6f162BfC3B305eDCf08f02B4415D41A',
    smartTokenAddress: '0xCaea8f7774F8BF7093E1133fDb3791EDb7D6D822',
    smartTokenSymbol: 'DGXBNT',
    owner: '0xE693cD414421237E3a6C613a0C75d41dD1921b61'
  },
  {
    tokenAddress: '0xdB25f211AB05b1c97D595516F45794528a807ad8',
    symbol: 'EURS',
    converterAddress: '0x0D86A7A059f316F81FcEF32495aAe41Cd0C80511',
    smartTokenAddress: '0xFC0e04Eae452c163883AAAd4Ac1AE091Cc87FEf3',
    smartTokenSymbol: 'EURSBNT',
    owner: '0x2EbBbc541E8f8F24386FA319c79CedA0579f1Efb'
  },
  {
    tokenAddress: '0xefBd6D7deF37ffae990503EcdB1291B2f7E38788',
    symbol: 'EVO',
    converterAddress: '0x8aD99BAc8cEEb7ab51837909cE0Fd243F15F75AD',
    smartTokenAddress: '0xBB8436eaf49888641Df27e4E1DfFbd4851788209',
    smartTokenSymbol: 'EVOBNT',
    owner: '0x50249160741773B1FED5Aca6C7608D8ef6B50c64'
  },
  {
    tokenAddress: '0x5e3346444010135322268a4630d2ED5F8D09446c',
    symbol: 'LOC',
    converterAddress: '0x0D1Fa37b1Dfd006e8f6FAB6FA0d2351856030Ef5',
    smartTokenAddress: '0x38838B895cbf02048455Fb7f649D97C564fC18a8',
    smartTokenSymbol: 'LOCBNT',
    owner: '0x5f319faA141863033b38647C88C266b86f7DbF32'
  },
  {
    tokenAddress: '0x9c23D67AEA7B95D80942e3836BCDF7E708A747C2',
    symbol: 'LOCI',
    converterAddress: '0xdc59242010E2d29617Bfeec57E62c7C00a5ACb52',
    smartTokenAddress: '0x6feb9Be6c40A12276cFa6DAFbD119ea62532daaB',
    smartTokenSymbol: 'LOCIBNT',
    owner: '0xf41030c5ACaE65C7d8f53F8134c466F6E8851492'
  },
  {
    tokenAddress: '0xDF2C7238198Ad8B389666574f2d8bc411A4b7428',
    symbol: 'MFT',
    converterAddress: '0x9A3487c0d300C4D3a7B3ff38d7A18c53C66f1c49',
    smartTokenAddress: '0x4319f9130848544afB97e92cb3Ea9fdb4b0A0B2a',
    smartTokenSymbol: 'MFTBNT',
    owner: '0xC7A965dCec421B8423De2d7b26EB83AAC8070aCC'
  },
  {
    tokenAddress: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
    symbol: 'MKR',
    converterAddress: '0xfdbb3b3Cfd6fcc0DD5C1B5bff05bFfAC1DB42258',
    smartTokenAddress: '0xf553E6eA4CE2F7dEEcbe7837E27931850eC15faB',
    smartTokenSymbol: 'MKRBNT',
    owner: '0xE693cD414421237E3a6C613a0C75d41dD1921b61'
  },
  {
    tokenAddress: '0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206',
    symbol: 'NEXO',
    converterAddress: '0xa2630FC0233940779F25DFDCff3aBbDc85682a4c',
    smartTokenAddress: '0x7081bCa18fA05e8c9AA25320e3B7493d92B4e73C',
    smartTokenSymbol: 'NEXOBNT',
    owner: '0x48BdF6D07896026dF2A6F5b0F0BF6c74B77D9bcE'
  },
  {
    tokenAddress: '0xa485bD50228440797Abb4d4595161d7546811160',
    symbol: 'PEG:USD',
    converterAddress: '0xDdA1BFaF552b0F303d27853a4a13Dd440C7E849f',
    smartTokenAddress: '0x607108c46bCE4cF6f86698E9B46E3270A734FeFe',
    smartTokenSymbol: 'BNT-USD',
    owner: '0x734C2afF51c4589E6310E0c0ac7D84D244c6Ce1A'
  },
  {
    tokenAddress: '0x9214eC02CB71CbA0ADA6896b8dA260736a67ab10',
    symbol: 'REAL',
    converterAddress: '0x1229e2a0711660BE162521f5626C68E85Ec99c7f',
    smartTokenAddress: '0xE9ADced9da076D9dADA35F5b99970fDd58B1440D',
    smartTokenSymbol: 'REALBNT',
    owner: '0x8E47702323fe2BC848481333253616DA2d8E743f'
  },
  {
    tokenAddress: '0x1dEa979ae76f26071870F824088dA78979eb91C8',
    symbol: 'SPD',
    converterAddress: '0x5039D9B575bD5722d310AF6D2fC11e053c6D03DA',
    smartTokenAddress: '0xb2F40825d32b658d39e4F73bB34D33BA628e8B76',
    smartTokenSymbol: 'SPDBNT',
    owner: '0xa0c25589bE45283d66911dBC60C1686041C2235D'
  },
  {
    tokenAddress: '0xEa1f346faF023F974Eb5adaf088BbCdf02d761F4',
    symbol: 'TIX',
    converterAddress: '0xf9Ae1a94e3a6a3C24377f5A81FC1cfce78BCBd6C',
    smartTokenAddress: '0x324c703DD2F03960600F3036955488A55885B527',
    smartTokenSymbol: 'TIXBNT',
    owner: '0x50249160741773B1FED5Aca6C7608D8ef6B50c64'
  },
  {
    tokenAddress: '0x09617F6fD6cF8A71278ec86e23bBab29C04353a7',
    symbol: 'ULT',
    converterAddress: '0x9571C052c01FA73e58334c02a57E421045F7Ab9A',
    smartTokenAddress: '0x668841f8262dbd3A6F5EDB0Cf47d7799e7822433',
    smartTokenSymbol: 'ULTBNT',
    owner: '0x977747548511a6350797fae0C294A62A66d4e6fA'
  },
  {
    tokenAddress: '0x960b236A07cf122663c4303350609A66A7B288C0',
    symbol: 'ANT',
    converterAddress: '0xA0dc0Aa8Ff89A74C9E5EDCB008788B201405683c',
    smartTokenAddress: '0x0c485BffD5df019F66927B2C32360159884D4409',
    smartTokenSymbol: 'ANTBNT',
    owner: '0xb6e9A5aEDEe5DDB5407DF1c550466d18ba3b08E1'
  },
  {
    tokenAddress: '0x4983F767b1Bc44328E434729dDabea0a064cA1aC',
    symbol: 'CONST',
    converterAddress: '0x0776358b1d2dEc652681E60d1DdB6DD84ac27372',
    smartTokenAddress: '0x3B479E51F0e43b77c6e761f7aeA7aEda274EC6DF',
    smartTokenSymbol: 'CONSTBNT',
    owner: '0xA8a6d153C3c3F5098eEc885E6c39437dE5cA74Fd'
  },
  {
    tokenAddress: '0x5c872500c00565505F3624AB435c222E558E9ff8',
    symbol: 'COT',
    converterAddress: '0x24090349a627B3529F883A09A049F9bC3aD19479',
    smartTokenAddress: '0x19dB077A54dEa3fD4CBCd9d31D4dB297562CbD94',
    smartTokenSymbol: 'COTBNT',
    owner: '0x7035FB83a7C18289B94E443170BeE56b92DF8E46'
  },
  {
    tokenAddress: '0x47Ec6AF8E27C98e41d1Df7fb8219408541463022',
    symbol: 'EFOOD',
    converterAddress: '0x2A432989CFbAE00e807Bd8Cb414B657F1B74E5c7',
    smartTokenAddress: '0xf34484286be88613ad8399fe40f93506125be139',
    smartTokenSymbol: 'EFOODBNT',
    owner: '0x1Ce8d11d788aE92cc1E457d5e8e87472B54CD6db'
  },
  {
    tokenAddress: '0x9A07fD8a116b7E3Be9e6185861496AF7a2041460',
    symbol: 'EMCO',
    converterAddress: '0xB117b0216e247AF88e13b0D6a0c2a08463f01FC7',
    smartTokenAddress: '0x9FD952F675F14157b988590516c67045FaF20743',
    smartTokenSymbol: 'EMCOBNT',
    owner: '0x9Bd0699fAcac3D7Ca884A4eb58B796E1361Ab111'
  },
  {
    tokenAddress: '0xF1290473E210b2108A85237fbCd7b6eb42Cc654F',
    symbol: 'HEDG',
    converterAddress: '0x1c29f12d94AD2e6b5321Ce226b4550f83ce88fCA',
    smartTokenAddress: '0x654Ee2EAf2082c5483f2212ba7b6701F334a159f',
    smartTokenSymbol: 'HEDGBNT',
    owner: '0x3bd10fb3Cc28C9da48Fdc86F7B715F52A892e127'
  },
  {
    tokenAddress: '0xdf1338FbAfe7aF1789151627B886781ba556eF9a',
    symbol: 'KUE',
    converterAddress: '0x867558349Ad467E5c8A883Cb331d53793166160d',
    smartTokenAddress: '0xFd1be1419FF218C06B90F237A5b66DE43c62010f',
    smartTokenSymbol: 'KUEBNT',
    owner: '0x083A43f3c6F02820a6fdfC6FB5870c4004C444Aa'
  },
  {
    tokenAddress: '0x7B0C06043468469967DBA22d1AF33d77d44056c8',
    symbol: 'MRPH',
    converterAddress: '0x6Ea98A7e211b584d59E0d3AbA12891877b55AB17',
    smartTokenAddress: '0x4B51AcC819591c885DbA0F06d98A07b432E6D6B4',
    smartTokenSymbol: 'MRPHBNT',
    owner: '0x50249160741773B1FED5Aca6C7608D8ef6B50c64'
  },
  {
    tokenAddress: '0x3363D570f6DF3c74d486BB8785d3EbFB9E2347D3',
    symbol: 'HEDG',
    converterAddress: '0x729a4E8626c8300Fe5a7D1824373C32B54ECE814',
    smartTokenAddress: '0x91Ee9A99e4c93a7E50C8f7c359885fdF340e9515',
    smartTokenSymbol: 'HEDGBNT',
    owner: '0x9254F1f3441ebDf8e5667b2C766EA88C7D34f3BD'
  },
  {
    tokenAddress: '0x0719046cF7F82f9322479538b69a89C26A70a5bC',
    symbol: 'RB',
    converterAddress: '0x26d77A6366c0192d90C482237FEc3042c4E46c80',
    smartTokenAddress: '0x610C79736c170E7CADDa081A337B16eDe82b6aEC',
    smartTokenSymbol: 'RBBNT',
    owner: '0x4045bED6BAe9dCc69Ce9e6b24FC2C5665457C70d'
  },
  {
    tokenAddress: '0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6',
    symbol: 'RDN',
    converterAddress: '0xB7246144F53Ec44E0f845Fd0DEea85208acFC2C9',
    smartTokenAddress: '0x11223Ed5D5846603C4EfC7c451FD8EB596d592cF',
    smartTokenSymbol: 'RDNBNT',
    owner: '0xE761aA1e8aBffcE23236D13D8F0a532E57bc1457'
  },
  {
    tokenAddress: '0x89303500a7Abfb178B274FD89F2469C264951e1f',
    symbol: 'REF',
    converterAddress: '0x4E2C46b4E86A17aD942B2Cd6F84302AeE4196A60',
    smartTokenAddress: '0xB67FA7330154878cF1Fd8F4b20bf1C19F68a3926',
    smartTokenSymbol: 'REFBNT',
    owner: '0x3e5E7e3F87C8055f4abB3D27dFB06853356a8F91'
  },
  {
    tokenAddress: '0x83984d6142934bb535793A82ADB0a46EF0F66B6d',
    symbol: 'REM',
    converterAddress: '0x9898BB78288fE81943b806eE5DEACCF44fadB3Ff',
    smartTokenAddress: '0xaB5ae72d95d3A02796c87F8079b1E180507dF54f',
    smartTokenSymbol: 'REMBNT',
    owner: '0x69424Dc77bC69C13d5d1F3229871e2F38dB51f52'
  },
  {
    tokenAddress: '0x7C5A0CE9267ED19B22F8cae653F198e3E8daf098',
    symbol: 'SAN',
    converterAddress: '0xBAC94DC2411F494c438cA667A4836e3DCCAA4920',
    smartTokenAddress: '0xd6A6c879Ad8c01D0C8d5bF1C85829814b954DBBF',
    smartTokenSymbol: 'SANBNT',
    owner: '0x1F3dF0b8390BB8e9e322972C5e75583E87608Ec2'
  },
  {
    tokenAddress: '0x222eFe83d8cC48e422419d65Cf82D410A276499B',
    symbol: 'SXL',
    converterAddress: '0x5C03354cbaB446CA3Cb426513f11f684724636f7',
    smartTokenAddress: '0x3364ccAedE016F4C433B326d96bE1A2eafA60bdD',
    smartTokenSymbol: 'SXLBNT',
    owner: '0x6bA2aef9481AdCb8b4101e54F30E2ebbF63C00f8'
  },
  {
    tokenAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    symbol: 'WBTC',
    converterAddress: '0x2801cd0e845874085597865f5B5773f3e44dcDF0',
    smartTokenAddress: '0xFEE7EeaA0c2f3F7C7e6301751a8dE55cE4D059Ec',
    smartTokenSymbol: 'WBTC',
    owner: '0x24eeb25be492d161bB2e78773463a1C2645d3E1D'
  },
  {
    tokenAddress: '0x86D17e2eF332293391303F188F6a467dc0D1fd0d',
    symbol: 'RST100',
    converterAddress: '0xb61b3FE730Fb58936f06239feA2FEEd5B3256F50',
    smartTokenAddress: '0x43d3a0712eD544b26d85c9eaf841008369bAB5d1',
    smartTokenSymbol: 'RSTBNT',
    owner: '0x9254F1f3441ebDf8e5667b2C766EA88C7D34f3BD'
  },
  {
    tokenAddress: '0x4a57E687b9126435a9B19E4A802113e266AdeBde',
    symbol: 'FXC',
    converterAddress: '0x6b2c2db78Fc5F1f0A7a7a6d91d26922850A9C693',
    smartTokenAddress: '0xb93Cc8642f5e8644423Aa7305da96FFF75708228',
    smartTokenSymbol: 'FXCBNT',
    owner: '0x9254F1f3441ebDf8e5667b2C766EA88C7D34f3BD'
  },
  {
    tokenAddress: '0xF01d7939441a3b1B108C70A28DcD99c6A98aD4b4',
    symbol: 'PRTL',
    converterAddress: '0x8bd7448162C296A5bB3F0B9cCDEe383f5b899C93',
    smartTokenAddress: '0x2788C2dB0fBdbaee39Fa010D325d55e7e4527e0d',
    smartTokenSymbol: 'PRTLBNT',
    owner: '0x9254F1f3441ebDf8e5667b2C766EA88C7D34f3BD'
  },
  {
    tokenAddress: '0x3166C570935a7D8554c8f4eA792ff965D2EFe1f2',
    symbol: 'QDAO',
    converterAddress: '0xbDC7310289dCd30D16E284d6F207a8E2F76A37aD',
    smartTokenAddress: '0x19683E94943E6b348D8AFB98C128B9b549B400DF',
    smartTokenSymbol: 'QDAOBNT',
    owner: '0x9254F1f3441ebDf8e5667b2C766EA88C7D34f3BD'
  },
  {
    tokenAddress: '0x6c37Bf4f042712C978A73e3fd56D1F5738dD7C43',
    symbol: 'ELET',
    converterAddress: '0x6909F6aE629e4500742221E86bF1ECac5d71d68d',
    smartTokenAddress: '0x334C36Be5b1EaF0C4b61dDEa202c9f6Dc2640FE5',
    smartTokenSymbol: 'ELETBNT',
    owner: '0x4045bED6BAe9dCc69Ce9e6b24FC2C5665457C70d'
  }
];
export default officialTokens;
